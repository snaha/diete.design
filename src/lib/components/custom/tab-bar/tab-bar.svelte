<script lang="ts">
	import { setContext, type Snippet } from 'svelte'
	import { withTabStore, type TabStore } from './tab-store.svelte'
	import { Button } from '$lib/components'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Props = {
		dimension?: Dimension
		children: Snippet
	}

	const { dimension = 'default', children }: Props = $props()

	const store = withTabStore()
	setContext<TabStore>('tab-store', store)

	function selectTab(i: number) {
		store.selected = i
	}
</script>

<ul>
	{#each store.items as item, i}
		<li>
			<Button variant="ghost" active={store.selected === i} {dimension} onclick={() => selectTab(i)}
				>{item}</Button
			>
		</li>
	{/each}
</ul>

<div id="tab">
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-top: 0px;
		margin-bottom: 16px;
		list-style: none;
		gap: 16px;
	}
</style>
