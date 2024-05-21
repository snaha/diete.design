<script lang="ts">
	import slider from '$lib/components/ui/slider.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Slider from '$lib/components/ui/slider.svelte'
	import Switch from '$lib/components/ui/switch.svelte'

	type Layout = 'vertical' | 'horizontal'
	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let label = $state('Slider label')
	let withStep: boolean = $state(false)
	let withSnap: boolean = $state(false)
	let step: number = $state(0)
	let centered: boolean = $state(false)
	let withHelperText: boolean = $state(false)
	let optionalHelperText: string = $state('Helper text')
	let layout: Layout = $state('vertical')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import Slider from '$lib/components/ui/slider.svelte'
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
<Slider dimension="${dimension}" layout="${layout}"${withHelperText ? ` {helperText}` : ''}${withStep ? ` step={${step}}` : ''}${withSnap ? ` snap` : ''}${centered ? ` centered` : ''}>${label}</Slider>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/slider.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Slider is available in 4 sizes: Default, Large, Compact and Small.
		<br />
		<br />
		Slider is also available in vertical and horizontal layout.
		<br />
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size slider</Typography>
		<Slider dimension="default">Slider label</Slider>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Large size slider</Typography>
		<Slider dimension="large">Slider label</Slider>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Compact size slider</Typography>
		<Slider dimension="compact">Slider label</Slider>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small size slider</Typography>
		<Slider dimension="small">Slider label</Slider>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Vertical layout</Typography>
		<Slider layout="vertical">Slider label</Slider>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Horizontal layout</Typography>
		<Slider layout="horizontal">Slider label</Slider>
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Slider size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Select bind:value={layout} label="Slider layout">
		<Option value="vertical">Vertical</Option>
		<Option value="horizontal">Horizontal</Option>
	</Select>
	<Input bind:value={label} label="Slider label" />
	<Switch bind:checked={withHelperText} label="With helper text" />
	{#if withHelperText}
		<Input bind:value={optionalHelperText} label="Helper text" />
	{/if}
	<Switch bind:checked={withStep} label="With step" />
	{#if withStep}
		<Switch bind:checked={withSnap} label="With snapping" />
		<Input bind:value={step} label="Number of step" />
	{/if}
	<Switch bind:checked={centered} label="Centered" />
{/snippet}

{#snippet helperText()}
	{optionalHelperText}
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				<Slider
					{dimension}
					{layout}
					helperText={withHelperText ? helperText : undefined}
					step={withStep ? step : undefined}
					snap={withSnap ? true : undefined}
					{centered}>{label}</Slider
				>
			</div>
		</TabContent>
		<TabContent value="Svelte"
			><Code language="svelte" code={useCode} class="preview-tab" /></TabContent
		>
	</TabBar>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={slider} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Slider"
	tagline="Slide into seamless transitions with our innovative slider."
	{description}
	{examples}
	{controls}
	{preview}
	{implement}
/>

<style lang="postcss">
	.preview-tabs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: var(--colors-ultra-low);
		padding: 0 5rem;
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
