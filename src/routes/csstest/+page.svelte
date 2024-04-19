<script lang="ts">
	import button from '$lib/components/ui/button.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'

	let css: string = 'Loading...'

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

<TabBar>
	<TabContent value="Svelte"><Code language="svelte" code={button} /></TabContent>
	<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
</TabBar>
