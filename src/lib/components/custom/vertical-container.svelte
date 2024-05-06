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
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}
</style>
