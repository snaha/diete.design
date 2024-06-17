<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLTextareaAttributes } from 'svelte/elements'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLTextareaAttributes {
		label?: string
		labelFor?: string
		dimension?: Dimension
		class?: string
		hover?: boolean
		active?: boolean
		focus?: boolean
		helperText?: Snippet
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
			class="textarea"
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
		border-radius: 0.25rem;
		background: var(--colors-base);
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		&:hover:not(:disabled),
		&.hover:not(:disabled),
		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-top);
			background: var(--colors-base);
			color: var(--colors-top);
		}
		&:focus:not(:disabled),
		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			background: var(--colors-base);
			color: var(--colors-top);
		}
		&::placeholder {
			opacity: 0.5;
			color: var(--colors-ultra-high);
		}
		&:disabled {
			opacity: 0.25;
			cursor: not-allowed;
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
			padding: 0.75rem;
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
			padding: 0.75rem;
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
			padding: 0.5rem;
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
			padding: 0.5rem;
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
