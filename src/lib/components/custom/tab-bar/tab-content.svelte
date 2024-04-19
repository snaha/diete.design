<script lang="ts">
	import { getContext, onMount } from 'svelte'
	import type { TabStore } from './tab-store.svelte'

	type Props = {
		value: string
	}

	let { value }: Props = $props()

	const store = getContext<TabStore>('tab-store')
	let selected = $derived(store.items[store.selected] === value)

	onMount(() => {
		store.addItem(value)
	})
</script>

{#if selected}
	<div id="tab">
		<slot />
	</div>
{/if}

<style>
</style>
