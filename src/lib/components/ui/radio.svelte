<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		label: string
		labelFor?: string
		dimension?: Dimension
		class?: string
	}
	let {
		label,
		labelFor = Math.random().toString(16),
		dimension = 'default',
		class: classProp = '',
		...restProps
	}: Props = $props()
</script>

<div class="root {dimension} {classProp}">
	<input type="radio" {...restProps} id={labelFor} />
	<label for={labelFor}>{label}</label>
</div>

<style lang="postcss">
	.root {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	input[type='radio'] {
		position: relative;
		appearance: none;
		margin: 0;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 50%;
		cursor: pointer;
		&:checked {
			border-color: var(--colors-high);
		}
		&:checked::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			background-color: var(--colors-high);
		}
		&:checked + label {
			color: var(--colors-high);
		}
		&:disabled,
		&:disabled + label {
			cursor: not-allowed;
			opacity: 0.25;
		}
	}
	label {
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		cursor: pointer;
	}
	.default {
		&.root {
			padding: 0.75rem;
		}
		label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		input[type='radio'] {
			width: 1.5rem;
			height: 1.5rem;
		}
		input[type='radio']:checked::after {
			width: 1rem;
			height: 1rem;
		}
	}
	.large {
		&.root {
			padding: 0.75rem;
		}
		label {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		input[type='radio'] {
			width: 2rem;
			height: 2rem;
		}
		input[type='radio']:checked::after {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.compact {
		&.root {
			padding: 0.5rem;
		}
		label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		input[type='radio'] {
			width: 1.5rem;
			height: 1.5rem;
		}
		input[type='radio']:checked::after {
			width: 1rem;
			height: 1rem;
		}
	}
	.small {
		&.root {
			padding: 0.5rem;
			gap: 0.25rem;
		}
		label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		input[type='radio'] {
			width: 1rem;
			height: 1rem;
		}
		input[type='radio']:checked::after {
			width: 0.625rem;
			height: 0.625rem;
		}
	}
</style>
