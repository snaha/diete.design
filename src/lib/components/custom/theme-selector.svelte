<script lang="ts">
	import Input from '../ui/input.svelte'
	import Radio from '../ui/radio-button/radio.svelte'
	import { ColorPalette } from 'carbon-icons-svelte'
	import { theme } from '$lib/stores/theme.svelte'
	import RadioGroup from '../ui/radio-button/radio-group.svelte'
	import Button from '../ui/button.svelte'

	// without this line the dropdown does not appear...
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const mode = $derived(theme.mode)
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

	<Input
		bind:value={theme.baseColor}
		type="text"
		placeholder="Accent color (hex)"
		label="Accent color (hex)"
		controls={true}
	>
		{#snippet buttons()}
			<Button variant="secondary" style="padding: 0;">
				<label>
					<div class="palette-icon">
						<ColorPalette size={24} />
					</div>
					<input type="color" bind:value={theme.baseColor} id="color" />
				</label>
			</Button>
		{/snippet}
	</Input>
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
	label {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		width: 3rem;
		height: 3rem;
		overflow: hidden;
		line-height: 0;
	}
	input[type='color'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		visibility: hidden;
		cursor: pointer;
		border: none;
		background-color: var(--colors-top);
		padding: 0;
		width: 100%;
		height: 100%;
	}
	input[type='color']::-webkit-color-swatch-wrapper {
		box-sizing: border-box;
		margin: 0;
		border: 0;
		padding: 0;
	}
	input[type='color']::-webkit-color-swatch {
		margin: 0;
		outline: 0;
		border: none;
		border-radius: 0 var(--border-radius) var(--border-radius) 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	input[type='color']::-moz-color-swatch {
		display: flex;
		margin: 0;
		outline: 0;
		border: none;
		border-radius: 0 var(--border-radius) var(--border-radius) 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	.palette-icon {
		position: absolute;
		transform: translate(-50%, -50%);
		inset: 50% auto auto 50%;
		line-height: 0;
		fill: var(--colors-top);
	}
</style>
