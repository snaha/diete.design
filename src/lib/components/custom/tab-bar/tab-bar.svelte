<script lang="ts">
	import { setContext } from 'svelte'
	import { withTabStore, type TabStore } from './tab-store.svelte'
	import { Button } from '$lib/components'

	const store = withTabStore()
	setContext<TabStore>('tab-store', store)

	function selectTab(i: number) {
		store.selected = i
	}
</script>

<ul>
	{#each store.items as item, i}
		<li>
			<Button
				variant="ghost"
				active={store.selected === i}
				dimension="compact"
				onclick={() => selectTab(i)}>{item}</Button
			>
		</li>
	{/each}
</ul>

<div id="tab">
	<slot />
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 16px;
		list-style: none;
		gap: 16px;
	}
</style>
