<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
	type Variant = 'strong' | 'secondary' | 'ghost' | 'overlay' | 'darkoverlay'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Props = {
		variant?: Variant
		active?: boolean
		class?: string | null
		dimension?: Dimension
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
		dimension = 'default',
		variant = 'strong',
		active,
		disabled,
		href,
		class: className = '',
		...restProps
	}: AnchorElement | ButtonElement = $props()
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={`${dimension} ${variant} ${className}`}
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
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--colors-ultra-high);
		cursor: pointer;
		text-decoration: none;
		font-family: var(--font-family-sans-serif);
		font-style: normal;
		font-weight: 400;
		&:disabled {
			cursor: not-allowed;
			opacity: 0.25;
		}
	}
	.default {
		min-width: 3rem;
		padding: 0.75rem;
		font-dimension: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	.large {
		min-width: 3.5rem;
		padding: 0.75rem;
		font-dimension: 1.5rem;
		line-height: 2rem;
		letter-spacing: 0.03rem;
	}
	.compact {
		min-width: 2.5rem;
		padding: 0.5rem;
		font-dimension: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	.small {
		gap: 0.25rem;
		min-width: 2rem;
		padding: 0.5rem;
		font-dimension: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}

	.strong {
		background: var(--colors-ultra-high);
		color: var(--colors-ultra-low);

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-high);
			background: var(--colors-high);
			color: var(--colors-base);
		}
	}
	.secondary {
		border: 1px solid var(--colors-ultra-high);
		background: none;
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
	.darkoverlay {
		border: 1px solid var(--colors-dark-overlay);
		background: var(--colors-dark-overlay);
		color: var(--colors-base);
		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-top);
			background: var(--colors-top);
		}
	}
</style>
