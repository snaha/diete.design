<script lang="ts">
	import Input from '../ui/input.svelte'
	import Radio from '../ui/radio.svelte'
	import { ColorPalette } from 'carbon-icons-svelte'
	import { withThemeStore } from '$lib/stores/theme.svelte'
	import { calculateLuminance } from '@waku-objects/luminance'
	import Typography from '../ui/typography.svelte'
	import { getEffectiveColorMode } from '$lib/utils/colors'

	let theme = withThemeStore()
	let baseColor = $state(theme.baseColor)
	let mode = $state(theme.mode)
	let effectiveMode = $derived(getEffectiveColorMode(mode))

	let fill = $derived(
		calculateLuminance(baseColor) > 0.5
			? effectiveMode === 'dark'
				? 'fill: var(--colors-base)'
				: 'fill: var(--colors-top)'
			: effectiveMode === 'dark'
				? 'fill: var(--colors-top)'
				: 'fill: var(--colors-base)',
	)

	$effect(() => {
		theme.baseColor = baseColor
		theme.mode = mode
	})
</script>

<div class="theme-selector">
	<Typography>Appearance</Typography>
	<div class="container">
		<Radio label="Light" name="light" checked={mode === 'light'} onclick={() => (mode = 'light')} />
		<Radio label="Dark" name="dark" checked={mode === 'dark'} onclick={() => (mode = 'dark')} />
		<Radio
			label="Auto"
			name="system"
			checked={mode === 'system'}
			onclick={() => (mode = 'system')}
		/>
	</div>

	<div class="container">
		<div class="grow">
			<Input bind:value={baseColor} type="text" placeholder="Accent color (hex)" />
		</div>
		<label>
			<div class="palette-overlay" />
			<div class="palette-icon" style={fill}>
				<ColorPalette size={24} />
			</div>
			<input type="color" bind:value={baseColor} id="color" pattern="#(\d{3}|\d{6})" />
		</label>
	</div>
</div>

<style>
	.theme-selector {
		display: flex;
		flex-direction: column;
		min-height: fit-content;
		gap: var(--padding);
		padding: var(--padding);
		border-radius: 0.25rem;
		border: 1px solid var(--colors-low);
		background-color: var(--colors-base);
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		align-items: center;
		gap: var(--padding);
	}
	label {
		position: relative;
		line-height: 0;
		cursor: pointer;
		border-radius: var(--border-radius);
		overflow: hidden;
		width: 3rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	input[type='color'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 3rem;
		height: 3rem;
		background-color: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
	}
	input[type='color']::-webkit-color-swatch {
		border-radius: var(--border-radius);
		border: none;
	}
	input[type='color']::-moz-color-swatch {
		border-radius: var(--border-radius);
		border: none;
	}
	.palette-icon {
		position: absolute;
		inset: 50% auto auto 50%;
		transform: translate(-50%, -50%);
		line-height: 0;
		fill: var(--colors-top);
	}
	.palette-icon :global(svg) {
		fill: inherit;
	}
	.palette-overlay {
		position: absolute;
		inset: 50% auto auto 50%;
		transform: translate(-50%, -50%);
		z-index: 5;
		border-radius: var(--border-radius);
		height: 3rem;
		width: 3rem;
	}
</style>
