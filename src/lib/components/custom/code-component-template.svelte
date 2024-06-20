<script lang="ts">
	import { onMount, type Snippet } from 'svelte'
	import Code from './code.svelte'
	import TabBar from './tab-bar/tab-bar.svelte'
	import TabContent from './tab-bar/tab-content.svelte'

	type Props = {
		extraSvelte?: Snippet
		extraCss?: Snippet
	}
	let { extraSvelte, extraCss }: Props = $props()
	let css: string = $state('Loading...')
	onMount(async () => {
		const response = await fetch('/generated/css/diete.css')
		css = await response.text()
	})
</script>

<TabBar dimension="small">
	<TabContent value="Svelte">
		<TabBar dimension="small">
			{#if extraSvelte}
				{@render extraSvelte()}
			{/if}
			<TabContent value="diete"><Code language="css" code={css} /></TabContent>
		</TabBar>
	</TabContent>
	<TabContent value="CSS">
		<TabBar dimension="small">
			{#if extraCss}
				{@render extraCss()}
			{/if}
			<TabContent value="diete"><Code language="css" code={css} /></TabContent>
		</TabBar>
	</TabContent>
</TabBar>
