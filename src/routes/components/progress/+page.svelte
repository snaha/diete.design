<script lang="ts">
	import progress from '$lib/components/ui/progress.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input/input.svelte'
	import ProgressBar from '$lib/components/ui/progress.svelte'
	import Slider from '$lib/components/ui/slider.svelte'
	import CodeComponentTemplate from '$lib/components/custom/code-component-template.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let label = $state('Loading...')
	let value = $state(50)
	let min = $state(0)
	let max = $state(100)
	let unit = $state('%')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import ProgressBar from '$lib/components/ui/progress.svelte'
</script` +
			`>

<ProgressBar value={${value}} dimension="${dimension}" min={${min}} max={${max}} unit="${unit}">${label}</ProgressBar>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/progress.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Each progress is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<Typography variant="small" bold>1. Default size progress</Typography>
	<ProgressBar {value}>Progress</ProgressBar>

	<Typography variant="small" bold>2. Large progress</Typography>
	<ProgressBar dimension="large" {value}>Progress</ProgressBar>

	<Typography variant="small" bold>3. Compact progress</Typography>
	<ProgressBar dimension="compact" {value}>Progress</ProgressBar>

	<Typography variant="small" bold>4. small progress</Typography>
	<ProgressBar dimension="small" {value}>Progress</ProgressBar>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Button size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>

	<Input bind:value={label} label="Progress label" />
	<Input type="number" bind:value={min} label="Min" />
	<Input type="number" bind:value={max} label="Max" />
	<Slider bind:value {min} {max}>Progress value</Slider>
	<Input bind:value={unit} label="Unit" />
{/snippet}

{#snippet preview()}
	<ProgressBar {value} {dimension} {min} {max} {unit}>{label}</ProgressBar>
{/snippet}

{#snippet extraSvelte()}
	<TabContent value="progress-bar"><Code language="svelte" code={progress} /></TabContent>
{/snippet}

{#snippet extraCss()}
	<TabContent value="progress-bar"><Code language="css" code={css} /></TabContent>
{/snippet}

{#snippet implement()}
	<CodeComponentTemplate {extraSvelte} {extraCss} />
{/snippet}

<ComponentTemplate
	name="Progress bar"
	tagline="Choose one from two possible states"
	{description}
	{examples}
	{controls}
	{preview}
	{useCode}
	{implement}
/>
