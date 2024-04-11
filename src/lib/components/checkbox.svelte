<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface Props extends HTMLInputAttributes {
		label: string
		labelFor?: string
	}
	let { label, labelFor = Math.random().toString(16), ...restProps }: Props = $props()
</script>

<div class="root">
	<input type="checkbox" {...restProps} id={labelFor} class="checkmark" />
	<label class="label" for={labelFor}>{label}</label>
</div>

<style lang="postcss">
	.root {
		display: inline-flex;
		padding: 0.75rem;
		align-items: center;
		gap: 0.5rem;
		position: relative;
	}
	input[type='checkbox'] {
		appearance: none;
		margin: 0;
	}
	.checkmark::before {
		content: '';
		display: flex;
		align-items: flex-start;
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 0.25rem;
		cursor: pointer;
	}
	.checkmark:checked::before {
		border: 1px solid var(--colors-high);
		background: var(--colors-high);
	}
	.checkmark:checked::after {
		content: '';
		position: absolute;
		top: 13px;
		left: 20px;
		border-bottom: 2px solid var(--colors-ultra-low);
		border-right: 2px solid var(--colors-ultra-low);
		transform: rotate(45deg);
		width: 0.5rem;
		height: 1rem;
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
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
		cursor: pointer;
	}
</style>
