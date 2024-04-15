<script lang="ts">
	import { onMount } from 'svelte'
	import Highlight from 'svelte-highlight'
	import cssLanguage from 'svelte-highlight/languages/css'
	import ascetic from 'svelte-highlight/styles/ascetic'

	let css: string | undefined

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

<svelte:head>
	{@html ascetic}
</svelte:head>

<Highlight language={cssLanguage} code={css ? css : 'Loading...'} />
