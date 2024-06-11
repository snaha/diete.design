<script lang="ts">
	import tooltip from '$lib/components/ui/tooltip.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Tooltip from '$lib/components/ui/tooltip.svelte'
	import { Information } from 'carbon-icons-svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Input from '$lib/components/ui/input.svelte'

	let css: string = $state('Loading...')
	type Position = 'top' | 'bottom' | 'left' | 'right'
	let position: Position = $state('top')
	let show: boolean = $state(true)
	let large: boolean = $state(false)
	let tooltipText: string = $state('This is some tooltip text')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
	import Tooltip from '$lib/components/ui/tooltip.svelte'
</script` +
			`>
{#snippet helperText()}
	${tooltipText}
{/snippet}	
<Tooltip position=${position} {helperText}${large ? ` large` : ''}${show ? ' show' : ''}><Information size={24} /></Tooltip>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/tooltip.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Tooltip is available in default and large version.
		<br />
		<br />
		The tooltip can be displayed at the top, bottom, left or right.
		<br />
		<br />
		The tooltip will move when there is no space.
		<br />
		<br />
	</Typography>
{/snippet}

{#snippet helperText()}
	{tooltipText}
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Tooltip on top</Typography>
		<Tooltip position="top" tooltipName="tooltip-1" {helperText}><Information size={24} /></Tooltip>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Tooltip on bottom</Typography>
		<Tooltip position="bottom" tooltipName="tooltip-2" {helperText}
			><Information size={24} /></Tooltip
		>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Tooltip on left</Typography>
		<Tooltip position="left" tooltipName="tooltip-3" {helperText}><Information size={24} /></Tooltip
		>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Tooltip on right</Typography>
		<Tooltip position="right" tooltipName="tooltip-4" {helperText}
			><Information size={24} /></Tooltip
		>
	</div>
{/snippet}

{#snippet controls()}
	<Switch label="Always show" bind:checked={show} />
	<Select bind:value={position} label="Tooltip position">
		<Option value="top">Top</Option>
		<Option value="bottom">Bottom</Option>
		<Option value="left">Left</Option>
		<Option value="right">Right</Option>
	</Select>
	<Input label="Tooltip text" bind:value={tooltipText} />
	<Switch label="Large tooltip" bind:checked={large} />
{/snippet}

{#snippet preview()}
	<Tooltip {position} {helperText} {large} {show} tooltipName="tooltip-5">
		<Information size={24} />
	</Tooltip>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={tooltip} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Tooltip"
	tagline="Hover or click on the trigger and display the tooltip"
	{description}
	{examples}
	{controls}
	{preview}
	{useCode}
	{implement}
/>

<style lang="postcss">
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
