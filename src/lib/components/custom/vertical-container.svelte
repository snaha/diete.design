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
		grid-template-columns: 1fr;
	}
	@media only screen and (min-device-width: 961px) {
		.vertical-container {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
