<script lang="ts">
	import radio from '$lib/components/ui/radio-button/radio.svelte?raw'
	import radioGroup from '$lib/components/ui/radio-button/radio-group.svelte?raw'
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

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Layout = 'vertical' | 'horizontal'

	let radioCss: string = $state('Loading...')
	let radioGroupCss: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let layout: Layout = $state('vertical')
	let withHelperText: boolean = $state(false)
	let optionalHelperText: string = $state('This is an optional helper text')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import RadioGroup from '$lib/components/ui/radio-button/radio-group.svelte'
    import Radio from '$lib/components/ui/radio-button/radio.svelte'
</script` +
			`>

<RadioGroup dimesion="${dimension}" layout="${layout}" name="rb">
    {#snippet helperText()}
        This is an optional helper text
    {/snippet}
    {#snippet label()}
        Radio group label
    {/snippet}
    <Radio>Radio label</Radio>
    <Radio>Radio label</Radio>
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
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi vitae explicabo, distinctio velit
	nesciunt possimus dolorem exercitationem nobis aspernatur beatae animi culpa odit sequi eligendi
	voluptate vel dolores, sint quos assumenda facilis? Nostrum, ipsum laudantium minus optio tempora
	magnam dolorem suscipit vero explicabo, perferendis a voluptate aspernatur nesciunt. Sequi,
	cumque!
{/snippet}

{#snippet examples()}{/snippet}

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
{/snippet}

{#snippet helperText()}
	{optionalHelperText}
{/snippet}
{#snippet label()}
	Radio group label
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				<RadioGroup
					{dimension}
					{layout}
					name="rb"
					helperText={withHelperText ? helperText : undefined}
					{label}
				>
					<Radio>Radio label</Radio>
					<Radio>Radio label</Radio>
				</RadioGroup>
			</div>
		</TabContent>
		<TabContent value="Svelte">
			<Code language="svelte" code={useCode} class="preview-tab" />
		</TabContent>
	</TabBar>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={radioGroup} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={radioGroupCss} /></TabContent>
	</TabBar>
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={radio} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={radioCss} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Radio"
	tagline="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, sunt."
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
</style>
