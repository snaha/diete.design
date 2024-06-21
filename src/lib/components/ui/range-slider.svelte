<script lang="ts">
	import { Information } from 'carbon-icons-svelte'
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Layout = 'horizontal' | 'vertical'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		dimension?: Dimension
		layout?: Layout
		min?: number
		max?: number
		step?: number
		hover?: boolean
		leftActive?: boolean
		rightActive?: boolean
		leftFocus?: boolean
		rightFocus?: boolean
		showSteps?: boolean
		helperText?: Snippet
		valueMin?: number
		valueMax?: number
	}
	let {
		labelFor = Math.random().toString(16),
		dimension = 'default',
		layout = 'vertical',
		min = 0,
		max = 100,
		step,
		hover,
		leftActive,
		rightActive,
		leftFocus,
		rightFocus,
		showSteps = false,
		valueMin = $bindable(min),
		valueMax = $bindable(max),
		helperText,
		children,
		...restProps
	}: Props = $props()

	let percentMin = $derived(((valueMin - min) / Math.abs(max - min)) * 100)
	let percentMax = $derived(((valueMax - min) / Math.abs(max - min)) * 100)

	function changeValueMin(newValue: number) {
		if (newValue >= valueMax) {
			valueMax = newValue
		}
		valueMin = newValue
	}
	function changeValueMax(newValue: number) {
		if (newValue <= valueMin) {
			valueMin = newValue
		}
		valueMax = newValue
	}
</script>

<div
	class="root {dimension} {layout}"
	style={`--valuePercentMin: ${percentMin}%;--valuePercentMax: ${percentMax}%`}
>
	<label for={labelFor}>
		{#if children}
			{@render children()}
		{/if}
	</label>
	{#if helperText && layout === 'horizontal'}
		<div class="helper-button">
			<div class="helper-text-horizontal">
				{@render helperText()}
			</div>
			<Information size={dimension === 'small' ? 16 : 24} />
		</div>
	{/if}
	<div class="wrapper">
		<span>{min}</span>
		<div class="slider-container">
			<input
				type="range"
				class="min-range"
				class:hover
				class:leftActive
				class:leftFocus
				oninput={() => changeValueMin(valueMin)}
				id={labelFor}
				{min}
				{max}
				bind:value={valueMin}
				{step}
				{...restProps}
			/>
			<input
				type="range"
				class:hover
				class:rightActive
				class:rightFocus
				oninput={() => changeValueMax(valueMax)}
				{step}
				bind:value={valueMax}
				class="max-range"
				{...restProps}
			/>
			<div class="value-min-container">
				<span class="value">
					{valueMin}
				</span>
			</div>
			<div class="value-max-container">
				<span class="value">
					{valueMax}
				</span>
			</div>
			<div class="slider-background"></div>
			<div class="slider-progress"></div>
			<div class="slider-progress-centered"></div>
			{#if showSteps && step}
				{@const stepCount = (max - min) / step}
				<div class="slider-tick-container">
					<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
					{#each Array.from({ length: stepCount + 1 }) as _, i}
						<span class="tick" style={`left: ${i * step}%`}></span>
					{/each}
				</div>
			{/if}
		</div>
		<span>{max}</span>
	</div>
	{#if helperText && layout === 'vertical'}
		<div class="helper-text">
			{@render helperText()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.root {
		display: flex;
		gap: 0.5rem;
		width: 100%;
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		&.vertical {
			flex-direction: column;
		}
		&.horizontal {
			flex-direction: row;
			align-items: center;
		}
	}
	label {
		cursor: pointer;
		width: fit-content;
		white-space: nowrap;
	}
	.helper-button {
		position: relative;
		cursor: help;
		&:hover {
			.helper-text-horizontal {
				display: block;
			}
		}
		.helper-text-horizontal {
			display: none;
			position: absolute;
			top: calc(var(--half-padding) * -1);
			left: 50%;
			transform: translateX(-50%) translateY(-100%);
			border-radius: 0.25rem;
			background-color: var(--colors-top);
			padding: var(--quarter-padding) var(--half-padding);
			color: var(--colors-base);
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			white-space: nowrap;
		}
	}
	.wrapper {
		display: flex;
		position: relative;
		flex-grow: 1;
		align-items: center;
		gap: 0.5rem;
		z-index: 0;
		padding: var(--three-quarters-padding);
		&:has(input:not(:disabled):active),
		&:has(input:not(:disabled).leftActive),
		&:has(input:not(:disabled).rightActive) {
			color: var(--colors-high);
		}
		&:has(input:not(:disabled):hover),
		&:has(input:not(:disabled).hover) {
			color: var(--colors-high);
		}
		&:has(input:not(:disabled):focus-visible),
		&:has(input:not(:disabled).leftFocus),
		&:has(input:not(:disabled).rightFocus) {
			outline: var(--focus-outline) solid var(--colors-top);
			outline-offset: calc(-1 * var(--focus-outline));
			border-radius: 0.25rem;
			background-color: var(--colors-base);
			color: var(--colors-top);
		}
		&:has(input:disabled) {
			opacity: 0.25;
			cursor: not-allowed;
		}
	}
	.slider-container {
		display: flex;
		position: relative;
		flex-grow: 1;
		align-items: center;
		&:has(input:hover:not(:disabled)),
		&:has(input.hover:not(:disabled)),
		&:has(input:active:not(:disabled)),
		&:has(input.leftActive:not(:disabled)),
		&:has(input.rightActive:not(:disabled)) {
			input[type='range']::-webkit-slider-thumb {
				background: var(--colors-high);
			}
			input[type='range']::-moz-range-thumb {
				background: var(--colors-high);
			}
			& > .slider-background {
				background: var(--colors-high);
			}
			& > .slider-progress {
				background: var(--colors-high);
			}
			& > .slider-tick-container > .tick {
				background: var(--colors-high);
			}
		}
		&:has(input:hover:not(:disabled)),
		&:has(input.hover:not(:disabled)) {
			& > .value-min-container > .value {
				opacity: 1;
			}
			& > .value-max-container > .value {
				opacity: 1;
			}
		}
		&:has(.min-range:active:not(:disabled)),
		&:has(.min-range:focus-visible:not(:disabled)),
		&:has(.leftActive:not(:disabled)),
		&:has(.leftFocus:not(:disabled)) {
			& > .value-min-container > .value {
				opacity: 1;
			}
			& > .value-max-container > .value {
				opacity: 0;
			}
		}
		&:has(.max-range:active:not(:disabled)),
		&:has(.max-range:focus-visible:not(:disabled)),
		&:has(.rightActive:not(:disabled)),
		&:has(.rightFocus:not(:disabled)) {
			& > .value-min-container > .value {
				opacity: 0;
			}
			& > .value-max-container > .value {
				opacity: 1;
			}
		}
		&:has(.min-range:focus-visible:not(:disabled)),
		&:has(.leftFocus:not(:disabled)) {
			.min-range::-webkit-slider-thumb {
				outline: var(--focus-outline) solid var(--colors-top);
				outline-offset: calc(-1 * var(--focus-outline));
				background: var(--colors-base);
			}
			.min-range::-moz-range-thumb {
				outline: var(--focus-outline) solid var(--colors-top);
				outline-offset: calc(-1 * var(--focus-outline));
				background: var(--colors-base);
			}
			.max-range::-webkit-slider-thumb {
				border: 1px solid var(--colors-top);
				background: var(--colors-top);
			}
			.max-range::-moz-range-thumb {
				border: 1px solid var(--colors-top);
				background: var(--colors-top);
			}
		}
		&:has(.min-range:focus-visible:active:not(:disabled)),
		&:has(.leftFocus.leftActive:not(:disabled)) {
			.min-range::-webkit-slider-thumb {
				background: var(--colors-top);
			}
			.min-range::-moz-range-thumb {
				background: var(--colors-top);
			}
		}
		&:has(.max-range:focus-visible:not(:disabled)),
		&:has(.rightFocus:not(:disabled)) {
			.max-range::-webkit-slider-thumb {
				outline: var(--focus-outline) solid var(--colors-top);
				outline-offset: calc(-1 * var(--focus-outline));
				background: var(--colors-base);
			}
			.max-range::-moz-range-thumb {
				outline: var(--focus-outline) solid var(--colors-top);
				outline-offset: calc(-1 * var(--focus-outline));
				background: var(--colors-base);
			}
			.min-range::-webkit-slider-thumb {
				border: 1px solid var(--colors-top);
				background: var(--colors-top);
			}
			.min-range::-moz-range-thumb {
				border: 1px solid var(--colors-top);
				background: var(--colors-top);
			}
		}
		&:has(.max-range:focus-visible:active:not(:disabled)),
		&:has(.rightFocus.rightActive:not(:disabled)) {
			.max-range::-webkit-slider-thumb {
				background: var(--colors-top);
			}
			.max-range::-moz-range-thumb {
				background: var(--colors-top);
			}
		}
		&:has(input:not(:disabled):focus-visible),
		&:has(input:not(:disabled).leftFocus),
		&:has(input:not(:disabled).rightFocus) {
			input {
				outline: none;
			}
			& > .slider-background {
				background: var(--colors-top);
			}
			& > .slider-progress {
				background: var(--colors-top);
			}
			& > .slider-tick-container > .tick {
				background: var(--colors-top);
			}
		}
	}

	input[type='range'] {
		appearance: none;
		cursor: pointer;
		margin: 0;
		background: transparent;
		width: 100%;
		&::-webkit-slider-thumb {
			position: relative;
			appearance: none;
			z-index: 1;
			cursor: grab;
			margin-bottom: 0;
			outline: none;
			border: none;
			border-radius: 50%;
			background: var(--colors-ultra-high);
		}
		&::-moz-range-thumb {
			position: relative;
			appearance: none;
			z-index: 1;
			cursor: grab;
			margin-bottom: 0;
			outline: none;
			border: none;
			border-radius: 50%;
			background: var(--colors-ultra-high);
		}
		&::-webkit-slider-runnable-track {
			appearance: none;
			width: 100%;
		}
		&::-moz-range-track {
			appearance: none;
			width: 100%;
		}
		&:disabled::-webkit-slider-thumb {
			cursor: not-allowed;
		}
		&:disabled::-moz-range-thumb {
			cursor: not-allowed;
		}
		&:disabled::-webkit-slider-runnable-track {
			cursor: not-allowed;
		}
		&:disabled::-moz-range-track {
			cursor: not-allowed;
		}
	}
	.max-range {
		position: absolute;
	}
	.value-min-container {
		position: absolute;
		left: var(--valuePercentMin);
		transform: translateX(calc(var(--valuePercentMin) * -1));
		z-index: 10;
		padding: 0 0.75rem;
	}
	.value-max-container {
		position: absolute;
		left: var(--valuePercentMax);
		transform: translateX(calc(var(--valuePercentMax) * -1));
		padding: 0 0.75rem;
	}
	.value {
		display: flex;
		position: absolute;
		top: calc(var(--padding) * -1);
		align-items: center;
		transform: translate(-50%, -100%);
		opacity: 0;
		z-index: 1;
		border-radius: var(--three-quarters-padding);
		background: var(--colors-top);
		padding: var(--quarter-padding) var(--half-padding);
		color: var(--colors-base);
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
	.slider-background {
		position: absolute;
		transform: translateY(-50%);
		z-index: 0;
		border-radius: 0.25rem;
		background: var(--colors-ultra-high);
		height: 1px;
	}
	.slider-progress {
		position: absolute;
		transform: translateY(-50%);
		border-radius: 0.25rem;
		background-color: var(--colors-ultra-high);
		width: calc(var(--valuePercentMax) - var(--valuePercentMin));
		height: 4px;
	}
	.slider-tick-container {
		position: absolute;
		left: 0.75rem;
		width: calc(100% - 1.5rem);
	}
	.tick {
		position: absolute;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background-color: var(--colors-ultra-high);
		width: 4px;
		height: 4px;
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}

	.default,
	.compact {
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);

		input[type='range'] {
			height: 1.5rem;
			&::-webkit-slider-thumb {
				width: 1.5rem;
				height: 1.5rem;
			}
			&::-moz-range-thumb {
				width: 1.5rem;
				height: 1.5rem;
			}
		}
		.slider-background {
			top: 0.75rem;
			left: 0.75rem;
			width: calc(100% - 1.5rem);
		}
		.slider-progress {
			top: 0.75rem;
			left: var(--valuePercentMin);
		}
	}
	.large {
		font-size: var(--font-size-large);
		line-height: var(--line-height-large);
		letter-spacing: var(--letter-spacing-large);

		input[type='range'] {
			height: 2rem;
			&::-webkit-slider-thumb {
				width: 2rem;
				height: 2rem;
			}
			&::-moz-range-thumb {
				width: 2rem;
				height: 2rem;
			}
		}
		.value-min-container,
		.value-max-container {
			padding: 0 1rem;
		}
		.value {
			top: -1.25rem;
			border-radius: 1.25rem;
			padding: var(--half-padding) var(--three-quarters-padding);
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		.slider-background {
			top: 1rem;
			left: 1rem;
			width: calc(100% - 2rem);
		}
		.slider-progress {
			top: 1rem;
			left: var(--valuePercentMin);
		}
		.slider-tick-container {
			left: 1rem;
			width: calc(100% - 2rem);
		}
	}
	.small {
		gap: 0.25rem;
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);

		input[type='range'] {
			height: 1rem;
			&::-webkit-slider-thumb {
				width: 1rem;
				height: 1rem;
			}
			&::-moz-range-thumb {
				width: 1rem;
				height: 1rem;
			}
		}

		.value-min-container,
		.value-max-container {
			padding: 0 0.5rem;
		}
		.value {
			top: -0.75rem;
		}
		.slider-background {
			top: 0.5rem;
			left: 0.5rem;
			width: calc(100% - 1rem);
		}
		.slider-progress {
			top: 0.5rem;
			left: var(--valuePercentMin);
		}
		.slider-tick-container {
			left: 0.5rem;
			width: calc(100% - 1rem);
		}
	}
</style>
