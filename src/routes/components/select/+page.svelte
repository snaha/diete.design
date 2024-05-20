<script lang="ts">
	import select from '$lib/components/ui/select/select.svelte?raw'
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

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let selectCss: string = $state('Loading...')
	let optionCss: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let label: string = $state('Select label')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
	import Select from '$lib/components/ui/select/select.svelte'
</script` +
			`>

<Select dimension="${dimension}" label="${label}">
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
		<Select dimension="default" label="Select label" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. large size select</Typography>
		<Select dimension="large" label="Select label" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. compact size select</Typography>
		<Select dimension="compact" label="Select label" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. small size select</Typography>
		<Select dimension="small" label="Select label" />
	</div>
{/snippet}

{#snippet helperTextSelectSizes()}
	Learn more about size: <a href="#about-sizes">About sizes</a>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Size" helperText={helperTextSelectSizes}>
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Input bind:value={label} label="Add label" />
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				<Select {dimension} {label}>
					<Option value="1">Option 1</Option>
					<Option value="2">Option 2</Option>
					<Option value="3">Option 3</Option>
					<Option value="4">Option 4</Option>
				</Select>
			</div>
		</TabContent>
		<TabContent value="Svelte"
			><Code language="svelte" code={useCode} class="preview-tab" /></TabContent
		>
	</TabBar>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={select} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={selectCss} /></TabContent>
	</TabBar>
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={option} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={optionCss} /></TabContent>
	</TabBar>
{/snippet}

{#snippet sizes()}
	<Typography></Typography>
{/snippet}

<ComponentTemplate
	name="Select"
	tagline="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, eveniet."
	{description}
	{examples}
	{controls}
	{preview}
	{implement}
	{sizes}
/>

<style lang="postcss">
	.preview-tabs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: var(--colors-ultra-low);
	}
	:global(.preview-tab) {
		height: 288px;
	}
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
