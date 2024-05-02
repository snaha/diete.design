<script lang="ts">
	import Select from '../ui/select/select.svelte'
	import Option from '../ui/select/option.svelte'
	import Input from '../ui/input.svelte'
	import { ColorPalette } from 'carbon-icons-svelte'
	import { theme } from '$lib/stores/theme'
	import { calculateLuminance } from '@waku-objects/luminance'

	type Mode = 'light' | 'dark'

	let baseColor = $state($theme.baseColor)
	let mode: Mode = $state($theme.isDarkMode ? 'dark' : 'light')
	let fill = $derived(
		calculateLuminance(baseColor) > 0.5
			? mode === 'dark'
				? 'fill: var(--colors-base)'
				: 'fill: var(--colors-top)'
			: mode === 'dark'
				? 'fill: var(--colors-top)'
				: 'fill: var(--colors-base)',
	)

	$effect(() => {
		const isDarkMode = mode === 'dark' ? true : false
		theme.setColor(baseColor, isDarkMode)
	})
</script>

<div class="theme-selector">
	<Select bind:value={mode} placeholder="Appearance">
		<Option value="light">Light</Option>
		<Option value="dark">Dark</Option>
	</Select>
	<div class="container">
		<div class="grow">
			<Input bind:value={baseColor} type="text" placeholder="RGB color code" />
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
		justify-content: center;
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

		:global(svg) {
			fill: inherit;
		}
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
