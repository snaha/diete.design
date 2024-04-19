<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLAnchorAttributes {
		content: string
		dimension?: Dimension
		children?: Snippet
	}
	let { content, dimension = 'default', children, ...restProps }: Props = $props()
</script>

<div class="root {dimension}">
	<a {...restProps}>
		{content}
		{#if children}
			{@render children()}
		{/if}
	</a>
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex-direction: column;
		font-family: var(--font-family-sans-serif);
		width: 100%;
		a {
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: var(--colors-ultra-high);
			text-decoration: none;
			border-radius: 0.25rem;
			&:active,
			&:hover {
				background: var(--colors-low);
			}
		}
	}
	.default {
		a {
			padding: 0.75rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
	}
	.large {
		a {
			padding: 0.75rem;
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
	}
	.compact {
		a {
			padding: 0.5rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
	}
	.small {
		a {
			padding: 0.5rem;
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
	}
</style>
