<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
	}
	let { labelFor = Math.random().toString(16), ...restProps }: Props = $props()
</script>

<div class="root">
	<input type="radio" class="radio" {...restProps} id={labelFor} />
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="12" r="8" fill="#555555" />
		<circle cx="12" cy="12" r="11.5" stroke="#555555" />
	</svg>
	<label for={labelFor}><slot /></label>
</div>

<style lang="postcss">
	.root {
		display: inline-flex;
		padding: 0.75rem;
		align-items: center;
		gap: 0.5rem;
		position: relative;
	}
	input[type='radio'] {
		appearance: none;
		margin: 0;
		&:checked + svg {
			display: block;
		}
		&:checked.radio {
			opacity: 0;
		}
		&:disabled + svg,
		&:disabled.radio,
		&:disabled ~ label {
			opacity: 0.25;
			cursor: not-allowed;
		}
	}
	.radio {
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 50%;
		z-index: 1;
		cursor: pointer;
	}
	svg {
		display: none;
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
	}
	label {
		cursor: pointer;
	}
</style>
