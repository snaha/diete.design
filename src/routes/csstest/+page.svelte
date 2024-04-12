<script lang="ts">
	import { onMount } from 'svelte'
	let css: string | undefined

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

<code>
	{css ? css : 'Loading...'}
</code>
