<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
	type Variant = 'strong' | 'secondary' | 'ghost' | 'overlay'
	type Props = {
		variant?: Variant
		active?: boolean
		class?: string | null
	}
	interface AnchorElement extends HTMLAnchorAttributes, Props {
		href?: HTMLAnchorAttributes['href']
		type?: never
		disabled?: never
	}

	interface ButtonElement extends HTMLButtonAttributes, Props {
		type?: HTMLButtonAttributes['type']
		href?: never
		disabled?: boolean
	}
	let {
		variant = 'strong',
		active,
		disabled,
		href,
		class: className,
		...restProps
	}: AnchorElement | ButtonElement = $props()
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={`${variant} ${className}`}
	{href}
	class:active
	{disabled}
	{...restProps}
>
	<slot />
</svelte:element>

<style lang="postcss">
	button,
	a {
		display: inline-flex;
		padding: 12px;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.25rem;
		font-family: Arial;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
		border: 1px solid var(--colors-ultra-high);
		cursor: pointer;
		text-decoration: none;

		&:disabled {
			cursor: not-allowed;
			opacity: 0.25;
		}
	}

	.strong {
		background: var(--colors-ultra-high);
		color: var(--colors-ultra-low);

		&:active:not(:disabled),
		&.active:not(:disabled) {
			background: var(--colors-high);
			border: 1px solid var(--colors-high);
		}
	}
	.secondary {
		background: none;
		border: 1px solid var(--colors-ultra-high);
		color: var(--colors-ultra-high);

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-high);
			color: var(--colors-high);
		}
	}
	.ghost {
		border: 1px solid transparent;
		background: transparent;
		color: var(--colors-ultra-high);

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-low);
			background: var(--colors-low);
			color: var(--colors-high);
		}
	}
	.overlay {
		border: 1px solid var(--colors-base);
		background: var(--colors-base);
		color: var(--colors-ultra-high);

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-low);
			background: var(--colors-low);
			color: var(--colors-high);
		}
	}
</style>
