<script lang="ts">
	import { getContext, onMount, type Snippet } from 'svelte'
	import type { TabStore } from './tab-store.svelte'

	type Props = {
		value: string
		children: Snippet
	}

	let { value, children }: Props = $props()

	const store = getContext<TabStore>('tab-store')
	let selected = $derived(store.items[store.selected] === value)

	onMount(() => {
		store.addItem(value)
	})
</script>

{#if selected}
	<div id="tab">
		{#if children}
			{@render children()}
		{/if}
	</div>
{/if}

<style>
</style>
