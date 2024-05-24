<script lang="ts">
	import radio from '$lib/components/ui/radio-button/radio.svelte?raw'
	import radioGroup from '$lib/components/ui/radio-button/radio-group.svelte?raw'
	import radioStore from '$lib/components/ui/radio-button/radio-store.svelte.ts?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Radio from '$lib/components/ui/radio-button/radio.svelte'
	import RadioGroup from '$lib/components/ui/radio-button/radio-group.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Typography from '$lib/components/ui/typography.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Layout = 'vertical' | 'horizontal'

	let radioCss: string = $state('Loading...')
	let radioGroupCss: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let layout: Layout = $state('vertical')
	let withHelperText: boolean = $state(false)
	let withLabel: boolean = $state(false)
	let optionalHelperText: string = $state('This is an optional helper text')
	let optionalLabel: string = $state('Radio group label')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import RadioGroup from '$lib/components/ui/radio-button/radio-group.svelte'
    import Radio from '$lib/components/ui/radio-button/radio.svelte'
</script` +
			`>

<RadioGroup dimesion="${dimension}" layout="${layout}" name="rb">${
				withHelperText
					? `
    {#snippet helperText()}
        ${optionalHelperText}
    {/snippet}`
					: ''
			}${
				withLabel
					? `
    {#snippet label()}
        ${optionalLabel}
    {/snippet}`
					: ''
			}
    <Radio>Choice 1</Radio>
    <Radio>Choice 2</Radio>
</RadioGroup>
`,
	)

	onMount(async () => {
		const radio = await fetch('/generated/css/ui/radio-button/radio.css')
		const radioGroup = await fetch('/generated/css/ui/radio-button/radio-group.css')
		radioCss = await radio.text()
		radioGroupCss = await radioGroup.text()
	})
</script>

{#snippet description()}
	<Typography
		>Each radio group is available in 4 sizes: Default, Large, Compact and Small.</Typography
	>
	<br />
	<br />
	<Typography>Radio group is available in vertical and horizontal layout.</Typography>
	<br />
	<br />
	<Typography>Radio group can have a label and helper text</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size radio group</Typography>
		<RadioGroup dimension="default" name="default">
			<Radio>Choice 1</Radio>
			<Radio>Choice 2</Radio>
		</RadioGroup>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large size radio group</Typography>
		<RadioGroup dimension="large" name="large">
			<Radio>Choice 1</Radio>
			<Radio>Choice 2</Radio>
		</RadioGroup>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Compact size radio group</Typography>
		<RadioGroup dimension="compact" name="compact">
			<Radio>Choice 1</Radio>
			<Radio>Choice 2</Radio>
		</RadioGroup>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small size radio group</Typography>
		<RadioGroup dimension="small" name="small">
			<Radio>Choice 1</Radio>
			<Radio>Choice 2</Radio>
		</RadioGroup>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Vertical layout</Typography>
		<RadioGroup layout="vertical" name="vertical">
			<Radio>Choice 1</Radio>
			<Radio>Choice 2</Radio>
		</RadioGroup>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Horizontal layout</Typography>
		<RadioGroup layout="horizontal" name="horizontal">
			<Radio>Choice 1</Radio>
			<Radio>Choice 2</Radio>
		</RadioGroup>
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Select bind:value={layout} label="Layout">
		<Option value="vertical">Vertical</Option>
		<Option value="horizontal">Horizontal</Option>
	</Select>
	<Switch bind:checked={withHelperText} label="With helper text" />
	{#if withHelperText}
		<Input bind:value={optionalHelperText} label="Helper text" />
	{/if}
	<Switch bind:checked={withLabel} label="With label" />
	{#if withHelperText}
		<Input bind:value={optionalLabel} label="Radio group label" />
	{/if}
{/snippet}

{#snippet helperText()}
	{optionalHelperText}
{/snippet}
{#snippet label()}
	{optionalLabel}
{/snippet}

{#snippet preview()}
	<RadioGroup
		{dimension}
		{layout}
		name="rb"
		helperText={withHelperText ? helperText : undefined}
		label={withLabel ? label : undefined}
	>
		<Radio>Choice 1</Radio>
		<Radio>Choice 2</Radio>
	</RadioGroup>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte">
			<TabBar dimension="small">
				<TabContent value="radio-group"><Code language="svelte" code={radioGroup} /></TabContent>
				<TabContent value="radio"><Code language="svelte" code={radio} /></TabContent>
				<TabContent value="radio-store"><Code language="svelte" code={radioStore} /></TabContent>
			</TabBar>
		</TabContent>
		<TabContent value="css">
			<TabBar dimension="small">
				<TabContent value="radio-group"><Code language="css" code={radioGroupCss} /></TabContent>
				<TabContent value="radio"><Code language="css" code={radioCss} /></TabContent>
			</TabBar>
		</TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Radio"
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
