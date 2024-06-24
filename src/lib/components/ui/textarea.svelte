<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLTextareaAttributes } from 'svelte/elements'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Variant = 'outline' | 'solid'

	interface Props extends HTMLTextareaAttributes {
		label?: string
		labelFor?: string
		dimension?: Dimension
		class?: string
		hover?: boolean
		active?: boolean
		focus?: boolean
		helperText?: Snippet
		variant?: Variant
	}
	let {
		label,
		labelFor = Math.random().toString(16),
		placeholder,
		value,
		dimension = 'default',
		hover,
		active,
		focus,
		helperText,
		variant = 'outline',
		class: classProps,
		...restProps
	}: Props = $props()
</script>

<div class="root {dimension} {classProps}">
	<label class="label" for={labelFor}>
		{label}
	</label>
	<div class="relative">
		<textarea
			class={variant}
			id={labelFor}
			class:hover
			class:active
			class:focus
			bind:value
			{placeholder}
			{...restProps}
		></textarea>
	</div>
	{#if helperText}
		<div class="helper-text">
			{@render helperText()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.root {
		display: flex;
		position: relative;
		flex-grow: 1;
		flex-direction: column;
		gap: 0.5rem;
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		.relative {
			display: flex;
			position: relative;
			flex-grow: 1;
		}
	}
	label {
		cursor: pointer;
		width: fit-content;
	}
	textarea {
		position: relative;
		flex-grow: 1;
		border: 1px solid var(--colors-ultra-high);
		border-radius: var(--border-radius);
		background: var(--colors-base);
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		&::placeholder {
			opacity: 0.5;
			color: var(--colors-ultra-high);
		}
		&:disabled {
			opacity: 0.25;
			cursor: not-allowed;
		}
		&.outline {
			border: 1px solid var(--colors-ultra-high);
			background: transparent;
		}
		&.solid {
			border: 1px solid var(--colors-low);
			background: var(--colors-base);
		}
		&:focus:not(:disabled),
		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: var(--focus-outline);
			outline-offset: var(--focus-outline-offset);
			background: var(--colors-base);
			color: var(--colors-top);
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
			color: var(--colors-top);
		}
	}
	.icon {
		display: flex;
		position: absolute;
		right: 0;
		bottom: 0.5rem;
		cursor: e-resize;
		resize: both;
	}
	.default {
		label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		textarea {
			padding: var(--three-quarters-padding);
			min-height: calc(var(--three-quarters-padding) * 2 + var(--line-height));
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
	}
	.large {
		label {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		textarea {
			padding: var(--three-quarters-padding);
			min-height: calc(var(--three-quarters-padding) * 2 + var(--line-height-large));
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
	}
	.compact {
		label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		textarea {
			padding: var(--half-padding);
			min-height: calc(var(--half-padding) * 2 + var(--line-height));
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
	}
	.small {
		label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		textarea {
			padding: var(--half-padding);
			min-height: calc(var(--half-padding) * 2 + var(--line-height-small));
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
