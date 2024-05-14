<script lang="ts">
	import Input from '../ui/input.svelte'
	import Radio from '../ui/radio-button/radio.svelte'
	import { ColorPalette } from 'carbon-icons-svelte'
	import { theme } from '$lib/stores/theme.svelte'
	import { calculateLuminance } from '@waku-objects/luminance'
	import { getEffectiveColorMode } from '$lib/utils/colors'
	import RadioGroup from '../ui/radio-button/radio-group.svelte'

	let effectiveMode = $derived(getEffectiveColorMode(theme.mode))

	let fill = $derived(
		calculateLuminance(theme.baseColor) > 0.5
			? effectiveMode === 'dark'
				? 'fill: var(--colors-base)'
				: 'fill: var(--colors-top)'
			: effectiveMode === 'dark'
				? 'fill: var(--colors-top)'
				: 'fill: var(--colors-base)',
	)
</script>

<div class="theme-selector">
	<RadioGroup bind:value={theme.mode} name="mode" layout="horizontal">
		{#snippet label()}
			Appearance
		{/snippet}
		<Radio value={'light'}>Light</Radio>
		<Radio value={'dark'}>Dark</Radio>
		<Radio value={'system'}>Auto</Radio>
	</RadioGroup>

	<div class="container">
		<div class="grow">
			<Input bind:value={theme.baseColor} type="text" placeholder="Accent color (hex)" />
		</div>
		<label>
			<div class="palette-overlay" />
			<div class="palette-icon" style={fill}>
				<ColorPalette size={24} />
			</div>
			<input type="color" bind:value={theme.baseColor} id="color" pattern="#(\d{3}|\d{6})" />
		</label>
	</div>
</div>

<style>
	.theme-selector {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		border: 1px solid var(--colors-low);
		border-radius: 0.25rem;
		background-color: var(--colors-base);
		padding: var(--padding);
		min-height: fit-content;
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		align-items: center;
		gap: var(--padding);
	}
	label {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		border-radius: var(--border-radius);
		width: 3rem;
		height: 3rem;
		overflow: hidden;
		line-height: 0;
	}
	input[type='color'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		cursor: pointer;
		border: none;
		background-color: transparent;
		padding: 0;
		width: 3rem;
		height: 3rem;
	}
	input[type='color']::-webkit-color-swatch {
		border: none;
		border-radius: var(--border-radius);
	}
	input[type='color']::-moz-color-swatch {
		border: none;
		border-radius: var(--border-radius);
	}
	.palette-icon {
		position: absolute;
		transform: translate(-50%, -50%);
		inset: 50% auto auto 50%;
		line-height: 0;
		fill: var(--colors-top);
	}
	.palette-icon :global(svg) {
		fill: inherit;
	}
	.palette-overlay {
		position: absolute;
		transform: translate(-50%, -50%);
		z-index: 5;
		inset: 50% auto auto 50%;
		border-radius: var(--border-radius);
		width: 3rem;
		height: 3rem;
	}
</style>
