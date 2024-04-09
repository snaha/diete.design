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
	<svg width="24" height="24" viewBox="0 0 24 24">
		<rect width="24" height="24" fill="black" fill-opacity="0.7" style="mix-blend-mode:multiply" />
		<path
			d="M9.75 18L3 11.25L4.0605 10.1895L9.75 15.8782L19.9395 5.68945L21 6.74995L9.75 18Z"
			fill="#F9F9F9"
		/>
	</svg>
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
		&:checked {
			appearance: none;
		}
		&:checked.checkmark {
			border: none;
		}
		&:checked + svg {
			display: block;
		}
		&:disabled.checkmark,
		&:disabled ~ svg,
		&:disabled ~ .label {
			opacity: 0.25;
			cursor: not-allowed;
		}
	}
	.checkmark {
		display: flex;
		align-items: flex-start;
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 0.25rem;
		cursor: pointer;
		z-index: 1;
	}
	svg {
		position: absolute;
		top: 0, 75rem;
		left: 0.75rem;
		border-radius: 0.25rem;
		display: none;
	}

	.label {
		cursor: pointer;
	}
</style>
