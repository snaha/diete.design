<script lang="ts">
	import textarea from '$lib/components/ui/textarea.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input/input.svelte'
	import Textarea from '$lib/components/ui/textarea.svelte'
	import Switch from '$lib/components/ui/switch.svelte'

	type Variant = 'outline' | 'solid'
	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let label = $state('Textarea label')
	let placeholder = $state('Placeholder')
	let withHelperText = $state(false)
	let optionalHelperText = $state('Helper text')
	let variant: Variant = $state('outline')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import Textarea from '$lib/components/ui/textarea.svelte'
</script` +
			`>${
				withHelperText
					? `
{#snippet helperText()}
    ${optionalHelperText}
{/snippet}`
					: ''
			}

<Textarea dimension="${dimension}" label="${label}" placeholder="${placeholder}"${withHelperText ? ' {helperText}' : ''} variant="${variant}" />
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/textarea.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Each textarea is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size textarea</Typography>
		<Textarea dimension="default" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large textarea</Typography>
		<Textarea dimension="large" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Compact textarea</Typography>
		<Textarea dimension="compact" />
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small textarea</Typography>
		<Textarea dimension="small" />
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Textarea size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Select bind:value={variant} label="Variant">
		<Option value="outline">Outline</Option>
		<Option value="solid">Solid</Option>
	</Select>
	<Input bind:value={label} label="Textarea label" />
	<Input bind:value={placeholder} label="Placeholder" />
	<Switch bind:checked={withHelperText} label="With helper text" />
	{#if withHelperText}
		<Input label="Add helper text" bind:value={optionalHelperText} />
	{/if}
{/snippet}

{#snippet helperText()}
	{optionalHelperText}
{/snippet}

{#snippet preview()}
	<Textarea
		{dimension}
		{label}
		{placeholder}
		helperText={withHelperText ? helperText : undefined}
		{variant}
	></Textarea>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={textarea} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Textarea"
	tagline="Textarea allow people to enter and edit larger blocks of text within a form"
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
