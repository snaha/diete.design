<script lang="ts">
	import loader from '$lib/components/ui/loader.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Loader from '$lib/components/ui/loader.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import Loader from '$lib/components/ui/loader.svelte'
</script` +
			`>

<Loader dimension="${dimension}"/>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/loader.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Each loader is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size loader</Typography>
		<Loader dimension="default" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large loader</Typography>
		<Loader dimension="large" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Compact loader</Typography>
		<Loader dimension="compact" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small loader</Typography>
		<Loader dimension="small" />
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Loader size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
{/snippet}

{#snippet preview()}
	<Loader {dimension} />
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={loader} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Loader"
	tagline=""
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
