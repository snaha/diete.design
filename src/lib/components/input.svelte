<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'

	type Layout = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		layout?: Layout
		active?: boolean
	}
	let {
		labelFor = Math.random().toString(16),
		placeholder,
		value,
		layout = 'default',
		class: classProps,
		...restProps
	}: Props = $props()
</script>

<div class="root {classProps}">
	<input class="input {layout}" id={labelFor} bind:value {placeholder} {...restProps} />
	<label class="label {layout}" for={labelFor}>
		{placeholder}
	</label>
	<div class="helper-text {layout}">
		<slot />
	</div>
</div>

<style>
	.root {
		position: relative;
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
	}
	.input.default {
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
		padding: 1.5rem 0.75rem;
	}
	.input.large {
		font-size: var(--font-size-large);
		line-height: var(--line-height-large);
		letter-spacing: var(--letter-spacing-large);
		padding: 1.5rem 0.75rem;
	}
	.input.compact {
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
		padding: 1rem 0.75rem;
	}
	.input.small {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
		padding: 1rem 0.75rem;
	}
	.input {
		background: var(--colors-low);
		border: 1px solid var(--colors-low);
		border-radius: 0.25rem;
		max-width: 35rem;
	}
	.input.default:focus,
	.input.large:focus {
		padding: 2.25rem 0.75rem 0.75rem;
	}
	.input.compact:focus,
	.input.small:focus {
		padding: 1.5rem 0.75rem 0.5rem;
	}
	.input:focus {
		border: 1px solid var(--colors-high);
		background: var(--colors-base);
		outline: none;
	}
	.input::placeholder {
		text-align: center;
		color: transparent;
	}
	.label.default {
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
		top: 1.5rem;
	}
	.label.large {
		font-size: var(--font-size-large);
		line-height: var(--line-height-large);
		letter-spacing: var(--letter-spacing-large);
		top: 1.5rem;
	}
	.label.compact {
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
		top: 1rem;
	}
	.label.small {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
		top: 1rem;
	}
	.label {
		left: 0.75rem;
		position: absolute;
		pointer-events: none;
		transform-origin: left center;
		transition: transform 0.25s;
		border: none;
		color: var(--colors-high);
		background: var(--colors-low);
	}
	.input:focus + .label {
		background: var(--colors-base);
	}
	.input.default:focus + .label,
	.input.default:not(:placeholder-shown) + .label {
		transform: translateY(-0.75rem);
	}
	.input.large:focus + .label,
	.input.large:not(:placeholder-shown) + .label {
		transform: translateY(-0.75rem);
	}
	.input.compact:focus + .label,
	.input.compact:not(:placeholder-shown) + .label {
		transform: translateY(-0.5rem);
	}
	.input.small:focus + .label,
	.input.small:not(:placeholder-shown) + .label {
		transform: translateY(-0.25rem);
	}
	.input:focus + .label,
	.input:not(:placeholder-shown) + .label {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
	}
	.input.default:not(:placeholder-shown),
	.input.large:not(:placeholder-shown) {
		padding: 2.25rem 0.75rem 0.75rem;
	}
	.input.compact:not(:placeholder-shown),
	.input.small:not(:placeholder-shown) {
		padding: 1.5rem 0.75rem 0.5rem;
	}
	.input:not(:placeholder-shown) {
		color: var(--colors-ultra-high);
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
		padding: 0.5rem 0.75rem;
	}
</style>
