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
		display: flex;
		flex-wrap: wrap;
		gap: 16px;

		:global(section) {
			flex: 1;
			box-sizing: border-box;
			min-width: 320px;
		}
	}
</style>
