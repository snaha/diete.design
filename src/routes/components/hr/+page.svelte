<script lang="ts">
	import hr from '$lib/components/ui/hr.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Hr from '$lib/components/ui/hr.svelte'

	let css: string = $state('Loading...')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import Hr from '$lib/components/ui/hr.svelte'
</script` +
			`>

<Hr />
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/hr.css')
		css = await response.text()
	})
</script>

{#snippet description()}{/snippet}

{#snippet examples()}{/snippet}

{#snippet controls()}{/snippet}

{#snippet preview()}
	<Hr />
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={hr} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Horizontal rule"
	tagline=""
	{description}
	{examples}
	{controls}
	{preview}
	{useCode}
	{implement}
/>
