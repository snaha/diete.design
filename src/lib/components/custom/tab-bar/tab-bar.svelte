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

<div class="tab-container">
	<ul>
		{#each store.items as item, i}
			<li>
				<Button
					variant="ghost"
					active={store.selected === i}
					{dimension}
					onclick={() => selectTab(i)}>{item}</Button
				>
			</li>
		{/each}
	</ul>

	<div class="tab-content">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		margin-top: 0px;
		margin-bottom: 16px;
		padding-left: 0;
		list-style: none;
	}
	.tab-container {
		display: flex;
		flex-direction: column;
	}
</style>
