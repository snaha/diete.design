<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
	}
	let { labelFor = Math.random().toString(16), checked, ...restProps }: Props = $props()
</script>

<div class="root">
	<input type="checkbox" class="switch" id={labelFor} {...restProps} bind:checked />
	<label for={labelFor} class="label"><slot /></label>
</div>

<style lang="postcss">
	.root {
		width: 100%;
		padding: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		.label {
			color: var(--colors-ultra-high);
			font-family: Arial;
			font-size: 0.75rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.5rem;
			letter-spacing: 0.02rem;
			cursor: pointer;
		}
		input[type='checkbox'] {
			appearance: none;
			cursor: pointer;
			&:disabled,
			&:disabled + .label {
				opacity: 0.25;
				cursor: not-allowed;
			}
		}
		.switch {
			width: 2.5rem;
			height: 1.5rem;
			border-radius: 1rem;
			display: inline-block;
			position: relative;
			border: 1px solid var(--colors-ultra-high);
			background: transparent;
			transition: all 0.35s ease;
			&:checked {
				background: var(--colors-high);
				border: 1px solid var(--colors-high);
			}
			&:checked + .label {
				color: var(--colors-high);
			}
		}
		.switch::after {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0.2rem;
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			background: var(--colors-ultra-high);
			transition: all 0.35s cubic-bezier(0.5, 0.1, 0.75, 1.35);
		}
		.switch:checked::after {
			transform: translateY(-50%) translateX(1rem);
			background: var(--colors-ultra-low);
		}
	}
</style>
