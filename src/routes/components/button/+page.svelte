<script lang="ts">
	import button from '$lib/components/ui/button.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Button from '$lib/components/ui/button.svelte'
	import {
		Checkmark,
		ArrowRight,
		Close,
		Information,
		ChevronRight,
		Save,
		OverflowMenuVertical,
		Launch,
		CaretRight,
		TrashCan,
		SidePanelOpen,
	} from 'carbon-icons-svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'

	type Variant = 'strong' | 'secondary' | 'ghost' | 'overlay' | 'darkoverlay'
	type Dimension = 'default' | 'large' | 'compact' | 'small'

	let css: string = $state('Loading...')

	let variant: Variant = $state('strong')
	let dimension: Dimension = $state('default')
	let leftIcon: boolean = $state(true)
	let rightIcon: boolean = $state(false)

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import Button from '$lib/components/ui/button.svelte'
${leftIcon || rightIcon ? `import { Close } from 'carbon-icons-svelte'` : ''}
</script` +
			`>

<Button variant="${variant}" dimension="${dimension}">
	${leftIcon ? `<Close/>` : ''}Close${rightIcon ? `<Close/>` : ''}
</Button>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		There are 9 types of buttons available.
		<br />
		→<a href="#choose-a-button-type">Choose a button type</a>

		<br />
		<br />

		Each button is available in 4 sizes: Default, Large, Compact and Small.
		<br />
		→<a href="#about-sizes">About sizes</a>

		<br />
		<br />

		Different button types and sizes can be combined on the same screen to create hierarchy and
		direct attention to the most important actions.

		<br />
		<br />

		Overlay buttons should be used to display a button floating over content (image or text for
		example).
	</Typography>
{/snippet}

{#snippet examples()}
	<p class="example-row">
		<Typography variant="small" bold>1. Strong button</Typography>
		<Button variant="strong">Strong button</Button>
		<Button variant="strong"><Checkmark size={24} />Confirm</Button>
		<Button variant="strong">Proceed<ArrowRight size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>2. Outline button</Typography>
		<Button variant="secondary">Button</Button>
		<Button variant="secondary"><Close size={24} />Cancel</Button>
		<Button variant="secondary">Next<ArrowRight size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>3. Ghost button</Typography>
		<Button variant="ghost">Ghost button</Button>
		<Button variant="ghost"><Information size={24} />Info</Button>
		<Button variant="ghost">More<ChevronRight size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>4. Strong icon button</Typography>
		<Button variant="strong"><Save size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>5. Icon button</Typography>
		<Button variant="ghost"><OverflowMenuVertical size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>6. Dark overlay button</Typography>
		<Button variant="darkoverlay">Overlay</Button>
		<Button variant="darkoverlay"><Checkmark size={24} />Done</Button>
		<Button variant="darkoverlay">Next<ArrowRight size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>7. Light overlay button</Typography>
		<Button variant="overlay">Overlay</Button>
		<Button variant="overlay"><Launch size={24} />Open</Button>
		<Button variant="overlay">See all<CaretRight size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>8. Dark overlay icon button</Typography>
		<Button variant="darkoverlay"><TrashCan size={24} /></Button>
	</p>

	<p class="example-row">
		<Typography variant="small" bold>8. Light overlay icon button</Typography>
		<Button variant="overlay"><SidePanelOpen size={24} /></Button>
	</p>
{/snippet}

{#snippet helperTextButtonType()}
	More info on button types: <a href="#choose-a-button-type">Choose a button type</a>
{/snippet}

{#snippet helperTextButtonSizes()}
	Learn more about button size: <a href="#button-sizes">About sizes</a>
{/snippet}

{#snippet controls()}
	<Select bind:value={variant} placeholder="Button type" helperText={helperTextButtonType}>
		<Option value="strong">Strong button</Option>
		<Option value="secondary">Outline button</Option>
		<Option value="ghost">Ghost button</Option>
		<Option value="overlay">Overlay button</Option>
		<Option value="darkoverlay">Dark overlay button</Option>
	</Select>

	<Select bind:value={dimension} placeholder="Button size" helperText={helperTextButtonSizes}>
		<Option value="default">Default</Option>
		<Option value="large">Large</Option>
		<Option value="compact">Compact</Option>
		<Option value="small">Small</Option>
	</Select>

	<Switch label="Left icon" bind:checked={leftIcon}></Switch>
	<Switch label="Right icon" bind:checked={rightIcon}></Switch>
{/snippet}

{#snippet preview()}
	<TabBar dimension="small">
		<TabContent value="Preview">
			<div class="preview-tabs preview-tab">
				<Button {variant} {dimension}>
					{#if leftIcon}
						<Close size={24} />
					{/if}
					Close
					{#if rightIcon}
						<Close size={24} />
					{/if}
				</Button>
			</div>
		</TabContent>
		<TabContent value="Svelte"
			><Code language="svelte" code={useCode} class="preview-tab" /></TabContent
		>
	</TabBar>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={button} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

{#snippet choose()}
	<Typography></Typography>
{/snippet}

{#snippet sizes()}
	<Typography></Typography>
{/snippet}

<ComponentTemplate
	name="Button"
	tagline="Buttons allow people to perform an instantaneous action, with a single tap/click."
	{description}
	{examples}
	{controls}
	{preview}
	{implement}
	{choose}
	{sizes}
/>

<style lang="postcss">
	.preview-tabs {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-color: var(--colors-low);
	}
	:global(.preview-tab) {
		height: 288px;
	}
	.example-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px;
		margin-bottom: 0px;
		margin-top: 0px;
		flex: 1;
	}
</style>
