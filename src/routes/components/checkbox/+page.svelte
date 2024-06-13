<script lang="ts">
	import checkbox from '$lib/components/ui/checkbox.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Checkbox from '$lib/components/ui/checkbox.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import CodeComponentTemplate from '$lib/components/custom/code-component-template.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let label = $state('Check me!')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import Checkbox from '$lib/components/ui/checkbox.svelte'
</script` +
			`>

<Checkbox dimension="${dimension}" label="${label}"/>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/checkbox.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Each checkbox is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size checkbox</Typography>
		<Checkbox dimension="default" label="checked" checked={true} />
		<Checkbox dimension="default" label="unchecked" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large checkbox</Typography>
		<Checkbox dimension="large" label="checked" checked={true} />
		<Checkbox dimension="large" label="unchecked" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Compact checkbox</Typography>
		<Checkbox dimension="compact" label="checked" checked={true} />
		<Checkbox dimension="compact" label="unchecked" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small checkbox</Typography>
		<Checkbox dimension="small" label="checked" checked={true} />
		<Checkbox dimension="small" label="unchecked" />
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Button size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>

	<Input bind:value={label} label="Checkbox label" />
{/snippet}

{#snippet preview()}
	<Checkbox {dimension} {label} />
{/snippet}

{#snippet extraSvelte()}
	<TabContent value="checkbox"><Code language="svelte" code={checkbox} /></TabContent>
{/snippet}

{#snippet extraCss()}
	<TabContent value="checkbox"><Code language="css" code={css} /></TabContent>
{/snippet}

{#snippet implement()}
	<CodeComponentTemplate {extraSvelte} {extraCss} />
{/snippet}

<ComponentTemplate
	name="Checkbox"
	tagline="Choose one from two possible states"
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
