<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children: Snippet
	}

	const { children }: Props = $props()
</script>

<div class="vertical-container">
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="postcss">
	.vertical-container {
		--grid-layout-gap: 16px;
		--grid-column-count: 2; /* This gets overridden by an inline style. */
  		--grid-item--min-width: 320px; /* This gets overridden by an inline style. */

		/**
		* Calculated values.
		*/
		--gap-count: calc(var(--grid-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
		grid-gap: var(--grid-layout-gap);

		/* display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 16px;
		max-width: inherit; */
	}
</style>
