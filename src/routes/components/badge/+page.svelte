<script lang="ts">
	import badge from '$lib/components/ui/badge.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input/input.svelte'
	import Badge from '$lib/components/ui/badge.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import { CheckmarkFilled } from 'carbon-icons-svelte'
	import CodeComponentTemplate from '$lib/components/custom/code-component-template.svelte'

	type Dimension = 'small' | 'large'
	type Variant = 'default' | 'strong' | 'dark-overlay' | 'light-overlay'
	let css: string = $state('Loading...')

	let dimension: Dimension = $state('small')
	let variant: Variant = $state('default')
	let badgeText = $state('Badge text')
	let withIcon = $state(false)
	let size: 16 | 24 = $derived(dimension === 'small' ? 16 : 24)

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
	import Badge from '$lib/components/ui/badge.svelte'
</script` +
			`>
<Badge dimension="${dimension}" variant="${variant}">
	${withIcon ? `<CheckmarkFilled size={${size}}/>` : ''}${badgeText}
</Badge>

`,
	)

	onMount(async () => {
		const response = await fetch('/generated/css/ui/badge.css')
		css = await response.text()
	})
</script>

{#snippet description()}
	<Typography>
		Badge is available in 4 variants: default,strong,dark-overlay and light-overlay
		<br />
		<br />
		Each badge is also available in small and large sizes.
		<br />
		<br />
	</Typography>
{/snippet}

{#snippet examples()}
	<div class="example-row">
		<Typography variant="small" bold>1. Default badge</Typography>
		<Badge variant="default">{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Strong badge</Typography>
		<Badge variant="strong">{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Dark-overlay badge</Typography>
		<Badge variant="dark-overlay">{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Light-overlay badge</Typography>
		<Badge variant="light-overlay">{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>1. Small badge</Typography>
		<Badge dimension="small">{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Large badge</Typography>
		<Badge dimension="large">{badgeText}</Badge>
	</div>
{/snippet}

{#snippet controls()}
	<Select bind:value={dimension} label="Badge size">
		<Option value="small">Small</Option>
		<Option value="large">Large</Option>
	</Select>
	<Select bind:value={variant} label="Badge variant">
		<Option value="default">Default</Option>
		<Option value="strong">Strong</Option>
		<Option value="dark-overlay">Dark overlay</Option>
		<Option value="light-overlay">Light overlay</Option>
	</Select>
	<Input bind:value={badgeText} label="Badge text" />
	<Switch label="With icon" bind:checked={withIcon} />
{/snippet}

{#snippet preview()}
	<Badge {dimension} {variant}>
		{#if withIcon}
			<CheckmarkFilled {size} />
		{/if}
		{badgeText}
	</Badge>
{/snippet}

{#snippet extraSvelte()}
	<TabContent value="badge"><Code language="svelte" code={badge} /></TabContent>
{/snippet}

{#snippet extraCss()}
	<TabContent value="badge"><Code language="css" code={css} /></TabContent>
{/snippet}

{#snippet implement()}
	<CodeComponentTemplate {extraSvelte} {extraCss} />
{/snippet}

<ComponentTemplate
	name="Badge"
	tagline="Badges serve as visual indicators, offering users quick insights or recognition within a compact space."
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
