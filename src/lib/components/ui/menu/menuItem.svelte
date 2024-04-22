<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLAnchorAttributes {
		dimension?: Dimension
		children?: Snippet
	}
	let { dimension = 'default', children, ...restProps }: Props = $props()
</script>

<a {...restProps} class={dimension}>
	{#if children}
		{@render children()}
	{/if}
</a>

<style lang="postcss">
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		font-family: var(--font-family-sans-serif);
		color: var(--colors-ultra-high);
		border-radius: 0.25rem;

		&:active {
			background: var(--colors-low);
		}
	}
	.default {
		padding: 0.75rem;
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}
	.large {
		padding: 0.5rem 0.75rem;
		font-size: var(--font-size-large);
		line-height: var(--line-height-large);
		letter-spacing: var(--letter-spacing-large);
	}
	.compact {
		padding: 0.5rem;
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}
	.small {
		padding: 0.25rem 0.5rem;
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
