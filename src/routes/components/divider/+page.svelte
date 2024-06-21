<script lang="ts">
	import divider from '$lib/components/ui/divider.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Divider from '$lib/components/ui/divider.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import Typography from '$lib/components/ui/typography.svelte'

	type Orientation = 'vertical' | 'horizontal'
	let css: string = $state('Loading...')
	let orientation: Orientation = $state('horizontal')
	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import Divider from '$lib/components/ui/divider.svelte'
</script` +
			`>

<Divider orientation="${orientation}"/>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/divider.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Divider is available in two orientations: horizontal and vertical.
		<br />
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. horizontal orientation</Typography>
		<Divider orientation="horizontal" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. vertical orientation</Typography>
		<Divider orientation="vertical" />
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={orientation} label="Orientation">
		<Option value="vertical">Vertical</Option>
		<Option value="horizontal">Horizontal</Option>
	</Select>
{/snippet}

{#snippet preview()}
	<Divider {orientation} />
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={divider} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Divider"
	tagline="Divider allow separating content into distinct sections across the page."
	{description}
	{examples}
	{controls}
	{preview}
	{useCode}
	{implement}
/>

<style lang="postcss">
	.example-row {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
</style>
