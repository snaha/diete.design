<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Layout = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		layout?: Layout
		class?: string
	}
	let {
		labelFor = Math.random().toString(16),
		layout = 'default',
		checked,
		class: classProp = '',
		...restProps
	}: Props = $props()
</script>

<div class="root {layout} {classProp}">
	<input type="checkbox" class="switch {layout}" id={labelFor} {...restProps} bind:checked />
	<label for={labelFor} class={layout}><slot /></label>
</div>

<style lang="postcss">
	.root {
		display: flex;
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
		cursor: pointer;
		position: relative;
		margin: 0;
		&:disabled,
		&:disabled + label {
			opacity: 0.25;
			cursor: not-allowed;
		}
	}
	.switch.default,
	.switch.compact {
		width: 2.5rem;
		height: 1.5rem;
	}
	.switch.large {
		width: 3.5rem;
		height: 2rem;
	}
	.switch.small {
		width: 1.625rem;
		height: 1rem;
	}
	.switch {
		display: inline-block;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 1rem;
		background: transparent;
		transition: all 0.35s ease;
		&:checked {
			background: var(--colors-high);
			border: 1px solid var(--colors-high);
		}
		&:checked + label {
			color: var(--colors-high);
		}
	}
	.switch.default::after,
	.switch.compact::after {
		width: 1rem;
		height: 1rem;
	}
	.switch.large::after {
		width: 1.5rem;
		height: 1.5rem;
	}
	.switch.small::after {
		width: 0.625rem;
		height: 0.625rem;
		left: 2px;
	}
	.switch::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 0.2rem;
		transform: translateY(-50%);
		border-radius: 50%;
		background: var(--colors-ultra-high);
		transition: all 0.35s cubic-bezier(0.5, 0.1, 0.75, 1.35);
	}
	.switch.default:checked::after,
	.switch.compact:checked::after {
		transform: translateY(-50%) translateX(1rem);
	}
	.switch.large:checked::after {
		transform: translateY(-50%) translateX(1.5rem);
	}
	.switch.small:checked::after {
		transform: translateY(-50%) translateX(10px);
	}
	.switch:checked::after {
		background: var(--colors-ultra-low);
	}
	label {
		color: var(--colors-ultra-high);
		font-family: sans-serif;
		font-style: normal;
		font-weight: 400;
		cursor: pointer;
	}
	label.default,
	label.compact {
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	label.large {
		font-size: 1.5rem;
		line-height: 2rem;
		letter-spacing: 0.03rem;
	}
	label.small {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}
</style>
