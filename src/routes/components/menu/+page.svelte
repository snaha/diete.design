<script lang="ts">
	import menuTitle from '$lib/components/ui/menu/menu-title.svelte?raw'
	import menuItem from '$lib/components/ui/menu/menu-item.svelte?raw'
	import menuStore from '$lib/components/ui/menu/menu-store.svelte.ts?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import MenuTitle from '$lib/components/ui/menu/menu-title.svelte'
	import MenuItem from '$lib/components/ui/menu/menu-item.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let menuTitleCss: string = $state('Loading...')

	let dimension: Dimension = $state('default')
	let content = $state('Menu-title')

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
    import menuTitle from '$lib/components/ui/menu/menu-title.svelte'
    import menuItem from '$lib/components/ui/menu/menu-item.svelte'
    import menuStore from '$lib/components/ui/menu/menu-store.svelte.ts'
</script` +
			`>

<MenuTitle content="${content}" dimension="${dimension}">
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
    <MenuItem>Item 3</MenuItem>
    <MenuItem>Item 4</MenuItem>
</MenuTitle> 
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/checkbox.css')
		menuTitleCss = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Menu is available in 4 sizes: Default, Large, Compact and Small.
		<br />
	</Typography>
{/snippet}

{#snippet options()}
	<MenuItem>Item 1</MenuItem>
	<MenuItem>Item 2</MenuItem>
	<MenuItem>Item 3</MenuItem>
	<MenuItem>Item 4</MenuItem>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default size menu</Typography>
		<MenuTitle content="Menu-title" dimension="default">
			{@render options()}
		</MenuTitle>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large size menu</Typography>
		<MenuTitle content="Menu-title" dimension="large">
			{@render options()}
		</MenuTitle>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Compact size menu</Typography>
		<MenuTitle content="Menu-title" dimension="compact">
			{@render options()}
		</MenuTitle>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Small size menu</Typography>
		<MenuTitle content="Menu-title" dimension="small">
			{@render options()}
		</MenuTitle>
	</div>
{/snippet}

{#snippet helperTextMenuSizes()}
	Learn more about menu size: <a href="#about-sizes">About sizes</a>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Menu size" helperText={helperTextMenuSizes}>
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>

	<Input bind:value={content} label="Menu content" />
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				<MenuTitle {content} {dimension}>
					{@render options()}
				</MenuTitle>
			</div>
		</TabContent>
		<TabContent value="Svelte"
			><Code language="svelte" code={useCode} class="preview-tab" /></TabContent
		>
	</TabBar>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte">
			<TabBar dimension="small">
				<TabContent value="menu-title"><Code language="svelte" code={menuTitle} /></TabContent>
				<TabContent value="menu-item"><Code language="svelte" code={menuItem} /></TabContent>
				<TabContent value="menu-store"><Code language="svelte" code={menuStore} /></TabContent>
			</TabBar>
		</TabContent>
		<TabContent value="CSS">
			<TabBar dimension="small">
				<TabContent value="menu-title"><Code language="css" code={menuTitleCss} /></TabContent>
			</TabBar>
		</TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Menu"
	tagline="Menus allow people to reveal and access additional options or actions."
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
