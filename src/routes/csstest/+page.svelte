<script lang="ts">
	import { onMount } from 'svelte'
	import button from '$lib/components/ui/button.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'

	let css: string | undefined

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

<Code language="svelte" code={button} />
