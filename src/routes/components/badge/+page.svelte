<script lang="ts">
	import badge from '$lib/components/ui/badge.svelte?raw'
	import Code from '$lib/components/custom/code.svelte'
	import TabBar from '$lib/components/custom/tab-bar/tab-bar.svelte'
	import TabContent from '$lib/components/custom/tab-bar/tab-content.svelte'
	import { onMount } from 'svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import ComponentTemplate from '$lib/components/custom/component-template.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Badge from '$lib/components/ui/badge.svelte'
	import RadioGroup from '$lib/components/ui/radio-button/radio-group.svelte'
	import Radio from '$lib/components/ui/radio-button/radio.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import {
		CheckmarkFilled,
		NotificationNew,
		ThumbsUpFilled,
		ThumbsDown,
		ErrorOutline,
	} from 'carbon-icons-svelte'

	type Dimension = 'small' | 'large'
	type Variant = 'default' | 'strong' | 'dark-overlay' | 'light-overlay'
	let css: string = $state('Loading...')

	let dimension: Dimension = $state('small')
	let variant: Variant = $state('default')
	let withText = $state(true)
	let badgeText = $state('Badge text')
	let withIcon = $state(false)
	let badgeIcon = $state('')
	let size: 16 | 24 = $derived(dimension === 'small' ? 16 : 24)

	// Svelte compiler breaks when it finds closing script tag, hence the need to make the template literal to have two parts
	let useCode = $derived(
		`<script lang="ts">
	import Badge from '$lib/components/ui/badge.svelte'
</script` +
			`>${
				withIcon
					? `
{#snippet icon()}${
							badgeIcon === '1'
								? `
	<CheckmarkFilled size={${size}} />`
								: ''
						}${
							badgeIcon === '2'
								? `
	<NotificationNew size={${size}} />`
								: ''
						}${
							badgeIcon === '3'
								? `
	<ThumbsUpFilled size={${size}} />`
								: ''
						}${
							badgeIcon === '4'
								? `
	<ThumbsDown size={${size}} />`
								: ''
						}${
							badgeIcon === '5'
								? `
	<ErrorOutline size={${size}} />`
								: ''
						}
{/snippet}`
					: ''
			}
<Badge dimension=${dimension} variant=${variant} ${withIcon ? `{icon}` : ''}>${withText ? badgeText : ''}</Badge>

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
		<Badge variant="default" icon={withIcon ? icon : undefined}>{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>2. Strong badge</Typography>
		<Badge variant="strong" icon={withIcon ? icon : undefined}>{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>3. Dark-overlay badge</Typography>
		<Badge variant="dark-overlay" icon={withIcon ? icon : undefined}>{badgeText}</Badge>
	</div>
	<div class="example-row">
		<Typography variant="small" bold>4. Light-overlay badge</Typography>
		<Badge variant="light-overlay" icon={withIcon ? icon : undefined}>{badgeText}</Badge>
	</div>
{/snippet}

{#snippet label()}
	Badge Icon
{/snippet}

{#snippet radioGroupHelperText()}
	Choose from one possible icon
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
	<Switch label="With text" bind:checked={withText} />
	{#if withText}
		<Input bind:value={badgeText} label="Badge text" />
	{/if}
	<Switch label="With icon" bind:checked={withIcon} />
	{#if withIcon}
		<RadioGroup bind:value={badgeIcon} {label} helperText={radioGroupHelperText} name="badege">
			<Radio value="1"><CheckmarkFilled /></Radio>
			<Radio value="2"><NotificationNew /></Radio>
			<Radio value="3"><ThumbsUpFilled /></Radio>
			<Radio value="4"><ThumbsDown /></Radio>
			<Radio value="5"><ErrorOutline /></Radio>
		</RadioGroup>
	{/if}
{/snippet}

{#snippet icon()}
	{#if badgeIcon === '1'}
		<CheckmarkFilled {size} />
	{:else if badgeIcon === '2'}
		<NotificationNew {size} />
	{:else if badgeIcon === '3'}
		<ThumbsUpFilled {size} />
	{:else if badgeIcon === '4'}
		<ThumbsDown {size} />
	{:else if badgeIcon === '5'}
		<ErrorOutline {size} />
	{/if}
{/snippet}
{#snippet preview()}
	<Badge {dimension} {variant} icon={withIcon ? icon : undefined}>{withText ? badgeText : ''}</Badge
	>
{/snippet}

{#snippet implement()}
	<TabBar dimension="small">
		<TabContent value="Svelte"><Code language="svelte" code={badge} /></TabContent>
		<TabContent value="CSS"><Code language="css" code={css} /></TabContent>
	</TabBar>
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
