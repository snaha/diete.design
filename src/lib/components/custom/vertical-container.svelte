<script lang="ts">
	import type { Snippet } from "svelte"

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
        flex-direction: row;
        gap: 16px;
        flex: 1;
        margin-top: 16px;
        margin-bottom: 16px;
    }
</style>