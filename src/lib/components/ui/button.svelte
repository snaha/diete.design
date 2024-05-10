<script lang="ts" context="module">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
	type Variant = 'strong' | 'secondary' | 'ghost' | 'solid' | 'darkoverlay'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type ButtonProps = {
		variant?: Variant
		active?: boolean
		hover?: boolean
		focus?: boolean
		dimension?: Dimension
	}
	interface AnchorElement extends HTMLAnchorAttributes, ButtonProps {
		href?: HTMLAnchorAttributes['href']
		type?: never
		disabled?: boolean
	}

	interface ButtonElement extends HTMLButtonAttributes, ButtonProps {
		type?: HTMLButtonAttributes['type']
		href?: never
		disabled?: boolean
	}
	export type Props = AnchorElement | ButtonElement
</script>

<script lang="ts">
	let {
		dimension = 'default',
		variant = 'strong',
		active,
		hover,
		focus,
		disabled,
		href,
		class: className = '',
		...restProps
	}: Props = $props()
</script>

<span class={`root ${className}`} class:disabled>
	<svelte:element
		this={href ? 'a' : 'button'}
		class={`${dimension} ${variant}`}
		class:active
		class:hover
		class:focus
		{href}
		{disabled}
		{...restProps}
	>
		<slot />
	</svelte:element>
</span>

<style lang="postcss">
	.root {
		display: inline-flex;
		flex-direction: row;
		flex-grow: 0;
		justify-content: stretch;
		align-items: stretch;

		&.disabled {
			cursor: not-allowed;
			opacity: 0.25;

			a,
			button {
				pointer-events: none;
			}
		}
	}
	button,
	a {
		display: inline-flex;
		justify-content: left;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--colors-ultra-high);
		cursor: pointer;
		text-decoration: none;
		font-family: var(--font-family-sans-serif);
		font-style: normal;
		font-weight: 400;
		white-space: nowrap;
		flex-shrink: 0;
		flex-grow: 1;
	}
	.default {
		min-width: 3rem;
		padding: 0.75rem;
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	.large {
		min-width: 3.5rem;
		padding: 0.75rem;
		font-size: 1.5rem;
		line-height: 2rem;
		letter-spacing: 0.03rem;
	}
	.compact {
		min-width: 2.5rem;
		padding: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	.small {
		gap: 0.25rem;
		min-width: 2rem;
		padding: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}

	.strong {
		border: 1px solid var(--colors-ultra-high);
		background: var(--colors-ultra-high);
		color: var(--colors-ultra-low);

		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			border: 1px solid transparent;
			background: var(--colors-base);
			color: var(--colors-top);
		}

		&:hover:not(:disabled),
		&.hover:not(:disabled) {
			border: 1px solid var(--colors-top);
			background: var(--colors-top);
			color: var(--colors-base);
		}

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

		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			border: 1px solid transparent;
			background: var(--colors-base);
			color: var(--colors-top);
		}

		&:hover:not(:disabled),
		&.hover:not(:disabled) {
			border: 1px solid var(--colors-top);
			background: var(--colors-low);
			color: var(--colors-top);
		}

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-high);
			background: var(--colors-low);
			color: var(--colors-high);
		}
	}
	.ghost {
		border: 1px solid transparent;
		background: transparent;
		color: var(--colors-ultra-high);

		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			background: var(--colors-base);
			color: var(--colors-top);
		}

		&:hover:not(:disabled),
		&.hover:not(:disabled) {
			border: 1px solid var(--colors-low);
			background: var(--colors-low);
			color: var(--colors-top);
		}

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-low);
			background: var(--colors-low);
			color: var(--colors-high);
		}
	}
	.solid {
		border: 1px solid var(--colors-base);
		background: var(--colors-base);
		color: var(--colors-ultra-high);

		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			border: 1px solid transparent;
			background: var(--colors-base);
			color: var(--colors-top);
		}

		&:hover:not(:disabled),
		&.hover:not(:disabled) {
			border: 1px solid var(--colors-low);
			background: var(--colors-low);
			color: var(--colors-top);
		}

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
		color: var(--colors-dark-top);

		&:focus-visible:not(:disabled),
		&.focus:not(:disabled) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			border: 1px solid transparent;
			background: var(--colors-base);
			color: var(--colors-top);
		}

		&:hover:not(:disabled),
		&.hover:not(:disabled) {
			border: 1px solid var(--colors-dark-base);
			background: var(--colors-dark-base);
			color: var(--colors-dark-top);
		}

		&:active:not(:disabled),
		&.active:not(:disabled) {
			border: 1px solid var(--colors-dark-base);
			background: var(--colors-dark-base);
			color: var(--colors-dark-top);
		}
	}
</style>
