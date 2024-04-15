<script lang="ts">
	import { onMount } from 'svelte'
	import Highlight from 'svelte-highlight'
	import cssLanguage from 'svelte-highlight/languages/css'
	import 'svelte-highlight/styles/ascetic.css'

	let css: string | undefined

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

<Highlight language={cssLanguage} code={css ? css : 'Loading...'} />
