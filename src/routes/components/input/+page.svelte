<script lang="ts">
	import input from '$lib/components/ui/input.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Checkbox from '$lib/components/ui/checkbox.svelte'
	import { ColorPalette, ArrowLeft } from 'carbon-icons-svelte'
	import { error } from '@sveltejs/kit'
	import { Button } from '$lib/components'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Layout = 'vertical' | 'horizontal'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let layout: Layout = $state('vertical')
	let label = $state('Input label')
	let placeholder = $state('Placeholder')
	let unit = $state(false)
	let stringUnit = $state('Kg')
	let errorMessage = $state(false)
	let stringErrorMessage = $state('Error')
	let controlButton = $state(false)
	let colorButton = $state(false)
	let arrowButton = $state(false)

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
	import Input from '$lib/components/ui/input.svelte'${
		colorButton
			? `
	import Button from '$lib/components/ui/button.svelte'
	import { ColorPalette${arrowButton ? `, ArrowLeft` : ''} } from 'carbon-icons-svelte' `
			: ''
	}
</script\>${
			errorMessage
				? `
{#snippet error()}
	${stringErrorMessage}
{/snippet}`
				: ''
		}${
			controlButton
				? `
{#snippet buttons()}${
						colorButton
							? `
	<Button dimension="${dimension}" variant="secondary">
		<ColorPalette size=${dimension === `small` ? '{16}' : '{24}'} />
	</Button>`
							: ''
					}${
						arrowButton
							? `
	<Button dimension="${dimension}" variant="secondary">
		<ArrowLeft size=${dimension === `small` ? '{16}' : '{24}'} />
	</Button>`
							: ''
					}
{/snippet}`
				: ''
		}
<Input 
	dimension="${dimension}" 
	layout="${layout}" 
	label="${label}" 
	placeholder="${placeholder}"${
		unit
			? `
	unit="${stringUnit}"`
			: ''
	}${errorMessage ? '{error}' : ''}${
		controlButton
			? `
	controls
	{buttons} `
			: ''
	}>
	This is an optional helper text
</Input>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/input.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem numquam aliquid fuga aperiam iure
	quae neque a omnis delectus explicabo modi nam optio placeat eveniet dolores debitis accusantium
	commodi asperiores voluptatem, adipisci alias ipsa inventore quos harum? Eaque eligendi, velit
	atque porro accusantium, eveniet temporibus culpa exercitationem quas nobis iure?
{/snippet}
{#snippet examples()}{/snippet}

{#snippet helperTextInputSize()}
	Learn more about button size: <a href="#about-sizes">About sizes</a>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Size" helperText={helperTextInputSize}>
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
	<Select bind:value={layout} label="Layout">
		<Option value="vertical">Vertical</Option>
		<Option value="horizontal">Horizontal</Option>
	</Select>
	<Input bind:value={label} {label} />
	<Input bind:value={placeholder} label="Placeholder" />
	<Switch bind:checked={unit} label="With unit" />
	{#if unit}
		<Input label="Add unit" bind:value={stringUnit} />
	{/if}
	<Switch bind:checked={errorMessage} label="With error" />
	{#if errorMessage}
		<Input label="Add error" bind:value={stringErrorMessage} />
	{/if}
	<Switch bind:checked={controlButton} label="With controls" />
	{#if controlButton}
		<Checkbox bind:checked={colorButton} label="Color palete button" />
		<Checkbox bind:checked={arrowButton} label="Arrow left button" />
	{/if}
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				{#snippet error()}
					{stringErrorMessage}
				{/snippet}
				{#snippet buttons()}
					{#if colorButton}
						<Button {dimension} variant="secondary">
							<ColorPalette size={dimension === 'small' ? 16 : 24} />
						</Button>
					{/if}
					{#if arrowButton}
						<Button {dimension} variant="secondary">
							<ArrowLeft size={dimension === 'small' ? 16 : 24} />
						</Button>
					{/if}
				{/snippet}
				<Input
					{dimension}
					{layout}
					{label}
					{placeholder}
					unit={unit ? stringUnit : ''}
					error={errorMessage ? error : undefined}
					controls={controlButton}
					buttons={controlButton ? buttons : undefined}>This is an optional helper text</Input
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
		<TabContent value="Svelte"><Code language="svelte" code={input} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Input"
	tagline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae?"
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
	}
	:global(.preview-tab) {
		height: 288px;
	}
	/* .example-row {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		margin-top: 0px;
		margin-bottom: 0px;
	} */
</style>
