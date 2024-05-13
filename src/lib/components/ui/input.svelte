<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { WarningAltFilled, Information, Subtract, Add } from 'carbon-icons-svelte'
	import Button from './button.svelte'
	type Layout = 'vertical' | 'horizontal'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		label?: string
		labelFor?: string
		dimension?: Dimension
		layout?: Layout
		unit?: string
		error?: Snippet
		hover?: boolean
		active?: boolean
		focus?: boolean
		controls?: boolean
		disabled?: boolean
	}
	let {
		label,
		labelFor = Math.random().toString(16),
		placeholder,
		value = $bindable(),
		dimension = 'default',
		layout = 'vertical',
		unit,
		error,
		hover,
		active,
		focus,
		controls,
		type,
		disabled,
		class: className = '',
		children,
		...restProps
	}: Props = $props()
	let inputValue: number = $state(value)
</script>

<div class="root {layout} {dimension} {className}" class:controls>
	<label class="label" for={labelFor}>
		{label}
	</label>
	{#if children && layout === 'horizontal' && type !== 'number'}
		<div class="helper-button">
			<Information size={dimension === 'small' ? 16 : 24} />
		</div>
	{/if}
	<div class="wrapper">
		<input
			id={labelFor}
			class:active
			class:hover
			class:focus
			class:error
			bind:value={inputValue}
			{placeholder}
			{type}
			{disabled}
			{...restProps}
		/>
		{#if unit && !error}
			<label class="unit" for={labelFor}>{unit}</label>
		{/if}
		{#if error}
			<label class="error-icon" for={labelFor}>
				<WarningAltFilled size={dimension === 'small' ? 16 : 24} />
			</label>
		{/if}
		{#if controls && type === 'number'}
			<div class="control-buttons">
				<Button
					{dimension}
					{disabled}
					tabindex={-1}
					variant="secondary"
					class="substract"
					onclick={() => (inputValue -= 1)}
					><Subtract size={dimension === 'small' ? 16 : 24} /></Button
				>
				<Button
					{dimension}
					{disabled}
					tabindex={-1}
					variant="secondary"
					class="add"
					onclick={() => (inputValue += 1)}><Add size={dimension === 'small' ? 16 : 24} /></Button
				>
			</div>
		{/if}
		{#if error}
			<div class="error-message">
				{@render error()}
			</div>
		{/if}
	</div>
	{#if children && layout === 'vertical'}
		<div class="helper-text">
			{@render children()}
		</div>
	{/if}
</div>

<style lang="postcss">
	input[type='number']::-webkit-inner-spin-button {
		appearance: none;
	}
	.vertical {
		&.root {
			display: flex;
			flex-direction: column;
		}
	}
	.horizontal {
		&.root {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
	.controls {
		.wrapper {
			gap: 0;
			flex-direction: row;
			input[type='number'] {
				border-radius: 0.25rem 0 0 0.25rem;
			}
		}
	}

	.root {
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		gap: 0.5rem;
	}
	.label {
		display: flex;
		flex-direction: column;
		color: var(--colors-ultra-high);
		cursor: pointer;
		width: fit-content;
	}
	.helper-button {
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		.control-buttons {
			display: flex;
			flex-direction: row;
		}

		:global(.substract) {
			:global(button) {
				border-radius: 0;
				border-left: none;

				&:hover,
				&:active,
				&:focus {
					border-left: none;
				}
			}
		}
		:global(.add) {
			:global(button) {
				border-radius: 0 0.25rem 0.25rem 0;
				border-left: none;

				&:hover,
				&:active,
				&:focus {
					border-left: none;
				}
			}
		}
		input {
			position: relative;
			border: 1px solid var(--colors-ultra-high);
			border-radius: 0.25rem;
			background: transparent;
			color: var(--colors-ultra-high);
			&::placeholder {
				color: var(--colors-ultra-high);
				opacity: 0.5;
			}
			&:disabled {
				opacity: 0.25;
				cursor: not-allowed;
				& ~ .unit,
				& ~ .error-icon {
					opacity: 0.25;
					cursor: not-allowed;
				}
			}
			&:focus:not(:disabled),
			&:focus-visible:not(:disabled),
			&.focus:not(:disabled) {
				outline: 4px solid var(--colors-top);
				outline-offset: -4px;
				background: var(--colors-base);
				color: var(--colors-top);
				& ~ .unit {
					color: var(--colors-top);
					opacity: 1;
				}
			}
			&:active:not(:disabled),
			&.active:not(:disabled) {
				outline: none;
			}
			&:hover:not(:disabled),
			&.hover:not(:disabled),
			&:active:not(:disabled),
			&.active:not(:disabled) {
				border: 1px solid var(--colors-top);
				background: var(--colors-base);
				color: var(--colors-top);
			}
			&.error:not(:disabled) {
				outline: 2px solid var(--colors-top);
				outline-offset: -2px;
			}
		}
	}
	.unit {
		opacity: 0.5;
		position: absolute;
		cursor: text;
	}
	.error-icon {
		position: absolute;
		color: var(--colors-top);
		cursor: text;
	}
	.default {
		.label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		.helper-button {
			padding: 0.75rem;
		}
		input {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			padding: 0.75rem;
		}
		.unit {
			top: 0.75rem;
			right: 0.75rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		&.controls {
			.unit {
				right: 6.875rem;
			}
		}
		.error-icon {
			top: 0.75rem;
			right: 0.75rem;
		}
	}
	.large {
		.label {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		.helper-button {
			padding: 0.75rem;
		}
		input {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
			padding: 0.75rem;
		}
		.unit {
			top: 0.75rem;
			right: 0.75rem;
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		&.controls {
			.unit {
				right: 6.875rem;
			}
		}
		.error-icon {
			top: 1rem;
			right: 0.75rem;
		}
		.error-message {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
	}
	.compact {
		.label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		.helper-button {
			padding: 0.5rem;
		}
		input {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			padding: 0.5rem;
		}
		.unit {
			top: 0.5rem;
			right: 0.5rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		&.controls {
			.unit {
				right: 5.625rem;
			}
		}
		.error-icon {
			top: 0.5rem;
			right: 0.5rem;
		}
	}
	.small {
		.label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		.helper-button {
			padding: 0.5rem;
		}
		input {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			padding: 0.5rem;
		}
		.unit {
			top: 0.5rem;
			right: 0.5rem;
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		&.controls {
			.unit {
				right: 4.625rem;
			}
		}
		.error-icon {
			top: 0.5rem;
			right: 0.5rem;
		}
		.error-message {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
	}
	.error-message {
		border: 1px solid var(--colors-top);
		border-radius: 0.25rem;
		background: var(--colors-top);
		color: var(--colors-base);
		padding: 0.25rem 0.5rem;
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
