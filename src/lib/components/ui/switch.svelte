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
		checked = $bindable(),
		...restProps
	}: Props = $props()
</script>

<div class="root {dimension} {classProp}">
	<input type="checkbox" {...restProps} id={labelFor} bind:checked />
	<label for={labelFor}>{label}</label>
</div>

<style lang="postcss">
	.root {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	input[type='checkbox'] {
		appearance: none;
		display: flex;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 1rem;
		background: transparent;
		transition: all 0.35s ease;
		cursor: pointer;
		position: relative;
		margin: 0;
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 0.2rem;
			transform: translateY(-50%);
			border-radius: 50%;
			background: var(--colors-ultra-high);
			transition: all 0.35s cubic-bezier(0.5, 0.1, 0.75, 1.35);
		}
		&:checked {
			background: var(--colors-high);
			border: 1px solid var(--colors-high);
		}
		&:checked::after {
			background: var(--colors-ultra-low);
		}
		&:checked + label {
			color: var(--colors-high);
		}
		&:disabled,
		&:disabled + label {
			opacity: 0.25;
			cursor: not-allowed;
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
		input[type='checkbox'] {
			width: 2.5rem;
			height: 1.5rem;
		}
		input[type='checkbox']::after {
			width: 1rem;
			height: 1rem;
		}
		input[type='checkbox']:checked::after {
			transform: translateY(-50%) translateX(1rem);
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
		input[type='checkbox'] {
			width: 3.5rem;
			height: 2rem;
		}
		input[type='checkbox']::after {
			width: 1.5rem;
			height: 1.5rem;
		}
		input[type='checkbox']:checked::after {
			transform: translateY(-50%) translateX(1.5rem);
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
		input[type='checkbox'] {
			width: 2.5rem;
			height: 1.5rem;
		}
		input[type='checkbox']::after {
			width: 1rem;
			height: 1rem;
		}
		input[type='checkbox']:checked::after {
			transform: translateY(-50%) translateX(1rem);
		}
	}

	.small {
		&.root {
			gap: 0.25rem;
			padding: 0.5rem;
		}
		label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		input[type='checkbox'] {
			width: 1.625rem;
			height: 1rem;
		}
		input[type='checkbox']::after {
			width: 0.625rem;
			height: 0.625rem;
			left: 2px;
		}
		input[type='checkbox']:checked::after {
			transform: translateY(-50%) translateX(10px);
		}
	}
</style>
