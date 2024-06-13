<script lang="ts">
	import select from '$lib/components/ui/select/select.svelte?raw'
	import selectStore from '$lib/components/ui/select/select-store.svelte.ts?raw'
	import option from '$lib/components/ui/select/option.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Switch from '$lib/components/ui/switch.svelte'

	type Layout = 'vertical' | 'horizontal'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Variant = 'outline' | 'solid'

	let selectCss: string = $state('Loading...')
	let optionCss: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let withLabel: boolean = $state(false)
	let label: string = $state('Select label')
	let withHelperText: boolean = $state(false)
	let optionalHelperText: string = $state('Helper text')
	let withPlaceholder: boolean = $state(false)
	let placeholder: string = $state('Placeholder')
	let layout: Layout = $state('vertical')
	let variant: Variant = $state('outline')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
	import Select from '$lib/components/ui/select/select.svelte'
</script` +
			`>
${
	withHelperText
		? `
{#snippet helperText()}
	${optionalHelperText}
{/snippet}`
		: ''
}
<Select dimension="${dimension}" layout="${layout}" variant="${variant}"${withLabel ? ` label="${label}"` : ''}${withHelperText ? ` {helperText}` : ''}${withPlaceholder ? ` placeholder="${placeholder}"` : ''}>${
				withPlaceholder
					? `
	<Option class="placeholder" value="">${placeholder}</Option>`
					: ''
			}
	<Option value='1'>Option 1</Option>
	<Option value='2'>Option 2</Option>
	<Option value='3'>Option 3</Option>
	<Option value='4'>Option 4</Option>
</Select>
`,
	)

	onMount(async () => {
		const selectResponse = await fetch('/generated/css/ui/select/select.css')
		const optionResponse = await fetch('/generated/css/ui/select/option.css')
		selectCss = await selectResponse.text()
		optionCss = await optionResponse.text()
	})
</script>

{#snippet description()}
	<Typography>
		Each select is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size select</Typography>
		<Select dimension="default" label="Select label" placeholder="Placeholder">
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. large size select</Typography>
		<Select dimension="large" label="Select label" placeholder="Placeholder">
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. compact size select</Typography>
		<Select dimension="compact" label="Select label" placeholder="Placeholder">
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. small size select</Typography>
		<Select dimension="small" label="Select label" placeholder="Placeholder">
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Select size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Select bind:value={layout} label="Layout">
		<Option value="vertical">Vertical</Option>
		<Option value="horizontal">Horizontal</Option>
	</Select>
	<Select bind:value={variant} label="Variant">
		<Option value="outline">Outline</Option>
		<Option value="solid">Solid</Option>
	</Select>
	<Switch bind:checked={withLabel} label="With label" />
	{#if withLabel}
		<Input bind:value={label} label="Add label" />
	{/if}
	<Switch bind:checked={withHelperText} label="With helper text" />
	{#if withHelperText}
		<Input bind:value={optionalHelperText} label="Add helper text" />
	{/if}
	<Switch bind:checked={withPlaceholder} label="With placeholder" />
	{#if withPlaceholder}
		<Input bind:value={placeholder} label="Add placeholder" />
	{/if}
{/snippet}
{#snippet helperText()}
	{optionalHelperText}
{/snippet}
{#snippet preview()}
	<Select
		{dimension}
		{layout}
		{variant}
		label={withLabel ? label : undefined}
		helperText={withHelperText ? helperText : undefined}
		placeholder={withPlaceholder ? placeholder : undefined}
	>
		<Option value="1">Option 1</Option>
		<Option value="2">Option 2</Option>
		<Option value="3">Option 3</Option>
		<Option value="4">Option 4</Option>
	</Select>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte">
			<TabBar dimension="small">
				<TabContent value="select"><Code language="svelte" code={select} /></TabContent>
				<TabContent value="option"><Code language="svelte" code={option} /></TabContent>
				<TabContent value="select-store"><Code language="svelte" code={selectStore} /></TabContent>
			</TabBar>
		</TabContent>
		<TabContent value="CSS">
			<TabBar dimension="small">
				<TabContent value="select"><Code language="css" code={selectCss} /></TabContent>
				<TabContent value="option"><Code language="css" code={optionCss} /></TabContent>
			</TabBar>
		</TabContent>
	</TabBar>
{/snippet}

{#snippet sizes()}
	<Typography></Typography>
{/snippet}

<ComponentTemplate
	name="Select"
	tagline="Select components allow people to choose one option from a dropdown list."
	{description}
	{examples}
	{controls}
	{preview}
	{useCode}
	{implement}
	{sizes}
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
