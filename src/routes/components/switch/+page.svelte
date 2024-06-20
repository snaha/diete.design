<script lang="ts">
	import toggle from '$lib/components/ui/switch.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input/input.svelte'
	import CodeComponentTemplate from '$lib/components/custom/code-component-template.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let label: string = $state('Switch label')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import Switch from '$lib/components/ui/switch.svelte'
</script` +
			`>

<Switch dimension="${dimension}" label="${label}" />
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/switch.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Each switch is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size checkbox</Typography>
		<Switch dimension="default" label="Switch label" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large size checkbox</Typography>
		<Switch dimension="large" label="Switch label" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Compact size checkbox</Typography>
		<Switch dimension="compact" label="Switch label" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small size checkbox</Typography>
		<Switch dimension="small" label="Switch label" />
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Switch size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Input bind:value={label} label="Add switch label" />
{/snippet}

{#snippet preview()}
	<Switch {dimension} {label} />
{/snippet}

{#snippet extraSvelte()}
	<TabContent value="switch"><Code language="svelte" code={toggle} /></TabContent>
{/snippet}

{#snippet extraCss()}
	<TabContent value="switch"><Code language="css" code={css} /></TabContent>
{/snippet}

{#snippet implement()}
	<CodeComponentTemplate {extraSvelte} {extraCss} />
{/snippet}

<ComponentTemplate
	name="Switch"
	tagline="Turn on or off"
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
