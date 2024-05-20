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
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 16px;
		max-width: inherit;
	}
</style>
