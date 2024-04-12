<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Layout = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		label: string
		labelFor?: string
		layout?: Layout
	}
	let {
		label,
		labelFor = Math.random().toString(16),
		layout = 'default',
		...restProps
	}: Props = $props()
</script>

<div class="root {layout}">
	<input type="checkbox" {...restProps} id={labelFor} class="checkmark {layout}" />
	<label class="label {layout}" for={labelFor}>{label}</label>
</div>

<style lang="postcss">
	.root {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
	.root.default,
	.root.large {
		padding: 0.75rem;
	}
	.root.compact,
	.root.small {
		padding: 0.5rem;
	}
	.root.small {
		gap: 0.25rem;
	}
	input[type='checkbox'] {
		appearance: none;
		margin: 0;
		position: relative;
	}
	.checkmark.default::before {
		width: 1.5rem;
		height: 1.5rem;
	}
	.checkmark.large::before {
		width: 2rem;
		height: 2rem;
	}
	.checkmark.compact::before {
		width: 1.5rem;
		height: 1.5rem;
	}
	.checkmark.small::before {
		width: 1rem;
		height: 1rem;
	}
	.checkmark::before {
		content: '';
		display: flex;
		align-items: flex-start;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.checkmark:checked::before {
		border: 1px solid var(--colors-high);
		background: var(--colors-high);
	}
	.checkmark:checked::before ~ label {
		color: var(--colors-high);
	}
	.checkmark.default:checked::after {
		width: 0.5rem;
		height: 1rem;
	}
	.checkmark.large:checked::after {
		width: 0.75rem;
		height: 1.25rem;
		border-bottom-width: 3px;
		border-right-width: 3px;
	}
	.checkmark.compact:checked::after {
		width: 0.5rem;
		height: 1rem;
	}
	.checkmark.small:checked::after {
		width: 0.25rem;
		height: 0.5rem;
		border-bottom-width: 1.5px;
		border-right-width: 1.5px;
	}
	.checkmark:checked::after {
		content: '';
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		border-bottom: 2px solid var(--colors-ultra-low);
		border-right: 2px solid var(--colors-ultra-low);
	}

	.checkmark:checked:disabled::before,
	.checkmark:disabled::before,
	.checkmark:disabled ~ label {
		cursor: not-allowed;
		opacity: 0.25;
	}
	.checkmark:checked:disabled::after {
		cursor: not-allowed;
	}
	.label {
		font-family: sans-serif;
		cursor: pointer;
		color: var(--colors-ultra-high);
	}
	label.default {
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	label.large {
		font-size: 1.5rem;
		line-height: 1rem;
		letter-spacing: 0.03rem;
	}
	label.compact {
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	label.small {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}
</style>
