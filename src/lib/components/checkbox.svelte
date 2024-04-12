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
	<input type="checkbox" {...restProps} id={labelFor} />
	<label for={labelFor}>{label}</label>
</div>

<style lang="postcss">
	.root {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
	input[type='checkbox'] {
		appearance: none;
		margin: 0;
		position: relative;
	}
	input[type='checkbox']::before {
		content: '';
		display: flex;
		align-items: flex-start;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 0.25rem;
		cursor: pointer;
	}
	input[type='checkbox']:checked::before {
		border: 1px solid var(--colors-high);
		background: var(--colors-high);
	}
	input[type='checkbox']:checked::before ~ label {
		color: var(--colors-high);
	}
	input[type='checkbox']:checked::after {
		content: '';
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		border-bottom: 2px solid var(--colors-ultra-low);
		border-right: 2px solid var(--colors-ultra-low);
	}

	input[type='checkbox']:checked:disabled::before,
	input[type='checkbox']:disabled::before,
	input[type='checkbox']:disabled ~ label {
		cursor: not-allowed;
		opacity: 0.25;
	}
	input[type='checkbox']:checked:disabled::after {
		cursor: not-allowed;
	}
	label {
		font-family: var(--font-family-sans-serif);
		cursor: pointer;
		color: var(--colors-ultra-high);
	}
	.default {
		&.root {
			padding: 0.75rem;
		}
		label {
			font-size: 1rem;
			line-height: 1.5rem;
			letter-spacing: 0.02rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.5rem;
			height: 1rem;
		}
		input[type='checkbox']::before {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.large {
		&.root {
			padding: 0.75rem;
		}
		label {
			font-size: 1.5rem;
			line-height: 1rem;
			letter-spacing: 0.03rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.75rem;
			height: 1.25rem;
			border-bottom-width: 3px;
			border-right-width: 3px;
		}
		input[type='checkbox']::before {
			width: 2rem;
			height: 2rem;
		}
	}
	.compact {
		&.root {
			padding: 0.5rem;
		}
		label {
			font-size: 1rem;
			line-height: 1.5rem;
			letter-spacing: 0.02rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.5rem;
			height: 1rem;
		}
		input[type='checkbox']::before {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.small {
		&.root {
			gap: 0.25rem;
			padding: 0.5rem;
		}
		label {
			font-size: 0.75rem;
			line-height: 1rem;
			letter-spacing: 0.0375rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.25rem;
			height: 0.5rem;
			border-bottom-width: 1.5px;
			border-right-width: 1.5px;
		}
		input[type='checkbox']::before {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
