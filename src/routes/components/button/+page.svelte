<script lang="ts">
	import button from '$lib/components/ui/button.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Button from '$lib/components/ui/button.svelte'
	import VerticalContainer from '$lib/components/custom/vertical-container.svelte'
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

<Button variant="${variant}" dimension="${dimension}">${leftIcon ? `<Close/>` : ''}Close${rightIcon ? `<Close/>` : ''}</Button>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/button.css')
		css = await response.text()
	})
</script>

<section>
	<Typography variant="h2" bold>Button</Typography>
	<Typography variant="large">
		Buttons allow people to perform an instantaneous action, with a single tap/click.
	</Typography>
</section>

<VerticalContainer>
	<section>
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
	</section>
	<section class="examples">
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
	</section>
</VerticalContainer>

<hr />

<section id="use">
	<Typography class="title" variant="h4" bold>Use</Typography>
	<div class="title" />

	<VerticalContainer>
		<section class="controls">
			<Select value={variant} placeholder="Button type">
				<Option value="strong">Strong button</Option>
				<Option value="secondary">Outline button</Option>
				<Option value="ghost">Ghost button</Option>
			</Select>

			<Select value={dimension} placeholder="Button size">
				<Option value="default">Default</Option>
				<Option value="large">Large</Option>
				<Option value="compact">Compact</Option>
				<Option value="small">Small</Option>
			</Select>

			<Switch
				checked={leftIcon}
				label="Left icon"
				onchange={(e) => leftIcon = (e?.target as HTMLInputElement).checked}
			></Switch>
			<Switch
				checked={rightIcon}
				label="Right icon"
				onchange={(e) => rightIcon = (e?.target as HTMLInputElement).checked}
			></Switch>
		</section>

		<section class="preview">
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
		</section>
	</VerticalContainer>
</section>

<hr />

<section id="implement">
	<Typography class="title" variant="h4" bold>Implement</Typography>
	<div class="title" />

	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={button} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
</section>

<hr />

<section id="choose-a-button-type">
	<Typography class="title" variant="h4" bold>Choose a button type</Typography>
	<div class="title" />
</section>

<hr />

<section id="about-sizes">
	<Typography class="title" variant="h4" bold>About sizes</Typography>
	<div class="title" />
</section>

<hr />

<section id="footer">
	<Typography>
		Made by diete. Source code is available on <a
			href="https://github.com/diete-design/diete.design">Github</a
		>.
	</Typography>
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		font-family: var(--font-family-sans-serif);
		margin-bottom: 32px;
	}
	:global(.title) {
		margin-bottom: 32px;
	}
	hr {
		color: var(--colors-low);
		border-style: solid;
		border-width: 1px;
		appearance: none;
		margin-bottom: 32px;
	}
	.examples {
		background: var(--colors-low);
		padding: 16px;
		gap: 16px;
	}
	.examples > p {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 0px;
		margin-top: 0px;
		flex: 1;
	}
	.preview {
		flex: 1;
	}
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
	.controls {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.example-row {
		display: flex;
		flex-wrap: wrap;
	}
</style>
