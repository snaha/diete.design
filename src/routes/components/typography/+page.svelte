<script lang="ts">
	import typography from '$lib/components/ui/typography.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input/input.svelte'
	import Switch from '$lib/components/ui/switch.svelte'

	type Font = 'sans' | 'serif' | 'mono'
	type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'large' | 'default' | 'small'
	type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

	let css: string = $state('Loading...')

	let element: Element = $state('span')
	let variant: Variant = $state('default')
	let font: Font = $state('sans')
	let text = $state('Typography text')
	let italic = $state(false)
	let bold = $state(false)

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
import Typography from '$lib/components/ui/typography.svelte'
</script` +
			`>

<Typography element="${element}" variant="${variant}" font="${font}"${bold ? ` bold` : ''}${italic ? ` italic` : ''}>${text}</Typography>
`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/typography.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		<br />
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<Typography variant="h1">H1 title</Typography>
	<Typography variant="h2">H2 title</Typography>
	<Typography variant="h3">H3 title</Typography>
	<Typography variant="h4">H4 title</Typography>
	<Typography variant="large" element="p">Large paragraph</Typography>
	<Typography variant="h5">H5 title</Typography>
	<Typography element="p">Paragraph</Typography>
	<Typography variant="h6">H6 title</Typography>
	<Typography variant="small" element="p">Small paragraph</Typography>
{/snippet}

{#snippet controls()}
	<Select bind:value={element} label="Element">
		<Option value="h1">Heading 1</Option>
		<Option value="h2">Heading 2</Option>
		<Option value="h3">Heading 3</Option>
		<Option value="h4">Heading 4</Option>
		<Option value="h5">Heading 5</Option>
		<Option value="h6">Heading 6</Option>
		<Option value="p">Paragraph</Option>
		<Option value="span">Span</Option>
	</Select>
	<Select bind:value={variant} label="Variant">
		<Option value="h1">Heading 1</Option>
		<Option value="h2">Heading 2</Option>
		<Option value="h3">Heading 3</Option>
		<Option value="h4">Heading 4</Option>
		<Option value="h5">Heading 5</Option>
		<Option value="h6">Heading 6</Option>
		<Option value="large">Large</Option>
		<Option value="default">Default</Option>
		<Option value="small">Small</Option>
	</Select>
	<Select bind:value={font} label="Font">
		<Option value="sans">Sans</Option>
		<Option value="serif">Serif</Option>
		<Option value="mono">Mono</Option>
	</Select>
	<Input bind:value={text} label="Text" />
	<Switch label="Italic" bind:checked={italic} />
	<Switch label="Bold" bind:checked={bold} />
{/snippet}

{#snippet preview()}
	<Typography
		{element}
		{variant}
		{font}
		bold={bold ? bold : undefined}
		italic={italic ? italic : undefined}>{text}</Typography
	>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={typography} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
{/snippet}

<ComponentTemplate
	name="Typography"
	tagline=""
	{description}
	{examples}
	{controls}
	{preview}
	{useCode}
	{implement}
/>
