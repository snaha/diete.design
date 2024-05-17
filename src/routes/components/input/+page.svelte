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

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import Button from '$lib/components/ui/button.svelte'
</script` +
			`>

<Input dimension="${dimension}" label="Input label" placeholder="Placeholder">This is an optional helper text</Input>
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

{#snippet controls()}
	<Select bind:value={dimension} label="Size">
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				<Input {dimension} label="Input label" placeholder="Placeholder"
					>This is an optional helper text</Input
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
