<script lang="ts">
	import toggle from '$lib/components/ui/switch.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let dimension: Dimension = $state('default')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import Switch from '$lib/components/ui/switch.svelte'
</script` +
			`>

<Switch dimension="${dimension}" label="Switch label" />
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/switch.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cum corrupti, explicabo distinctio
		accusamus, qui ab laborum placeat aliquid ipsam nulla iure rerum temporibus odit vero
		praesentium quis dolorum iste beatae cumque quod! Quidem sint laudantium itaque optio voluptas
		vero alias temporibus ipsa tempora, obcaecati neque quia quas doloremque placeat.
	</Typography>
{/snippet}

{#snippet examples()}{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Switch size">
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
				<Switch {dimension} label="Switch label" />
			</div>
		</TabContent>
		<TabContent value="Svelte"
			><Code language="svelte" code={useCode} class="preview-tab" /></TabContent
		>
	</TabBar>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={toggle} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Switch"
	tagline="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, esse."
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
