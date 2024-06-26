<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements'
	let { children, ...restProps }: HTMLTdAttributes = $props()
</script>

<td {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</td>

<style lang="postcss">
	td {
		appearance: none;
		padding: var(--three-quarters-padding);
		color: var(--colors-ultra-high);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family-sans-serif);
		letter-spacing: var(--letter-spacing);
		text-align: left;
	}
</style>
