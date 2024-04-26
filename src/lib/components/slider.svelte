<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Layout = 'horizontal' | 'vertical'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		dimension?: Dimension
		layout?: Layout
	}
	let {
		labelFor = Math.random().toString(16),
		children,
		dimension = 'default',
		layout = 'vertical',
		value = 0,
		...restProps
	}: Props = $props()

	let slider: HTMLInputElement | undefined = $state(undefined)
	$effect(() => {
		slider?.style.setProperty('--valuePercent', `${value}%`)
	})
	$effect(() => {
		function updateValue() {
			slider?.style.setProperty('--valuePercent', `${value}%`)
		}
		slider?.addEventListener('input', updateValue)
		return () => {
			slider?.removeEventListener('input', updateValue)
		}
	})
</script>

<div class="root {dimension} {layout}">
	<div class="wrapper">
		<input type="range" id={labelFor} bind:value bind:this={slider} {...restProps} />
		<span>{value}</span>
		<div class="border"></div>
	</div>
	<label for={labelFor}>
		{#if children}
			{@render children()}
		{/if}
	</label>
</div>

<style lang="postcss">
	.root {
		font-family: var(--font-family-sans-serif);
	}
	.vertical {
		&.root {
			display: flex;
			flex-direction: column-reverse;
			gap: 0.5rem;
		}
	}
	.horizontal {
		&.root {
			display: flex;
			flex-direction: row-reverse;
			gap: 0.5rem;
		}
	}
	label {
		color: var(--colors-ultra-high);
	}
	.wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		.range {
			display: flex;
			align-items: center;
			overflow: hidden;
		}
		span {
			min-width: 3rem;
			color: var(--colors-high);
		}
	}
	input[type='range'] {
		appearance: none;
		margin: 0;
		cursor: pointer;
		&:disabled {
			cursor: not-allowed;
			opacity: 0.25;
			& + span {
				cursor: not-allowed;
				opacity: 0.25;
			}
		}
		&:focus {
			outline: none;
		}
	}
	input[type='range']::-webkit-slider-runnable-track {
		border-radius: 0.125rem;
		min-height: 1px;
		max-height: 4px;
		background-image: linear-gradient(var(--colors-high), var(--colors-high)),
			linear-gradient(var(--colors-ultra-high), var(--colors-ultra-high));
		background-repeat: no-repeat no-repeat;
		background-size:
			var(--valuePercent) 4px,
			100% 1px;
		background-position: left;
	}
	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		border-radius: 50%;
		background-color: var(--colors-high);
	}
	.default,
	.compact {
		label,
		span {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		input[type='range'] {
			height: 1.5rem;
			padding: 0 0.75rem;
		}
		input[type='range']::-webkit-slider-thumb {
			width: 1.5rem;
			height: 1.5rem;
			margin-top: -10px;
		}
	}
	.large {
		label,
		span {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}

		input[type='range'] {
			height: 2rem;
			padding: 0 1rem;
		}
		input[type='range']::-webkit-slider-thumb {
			width: 2rem;
			height: 2rem;
			margin-top: -14px;
		}
	}
	.small {
		&.root {
			gap: 0.25rem;
		}
		label,
		span {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		input[type='range'] {
			height: 1rem;
			padding: 0 0.5rem;
		}
		input[type='range']::-webkit-slider-thumb {
			width: 1rem;
			height: 1rem;
			margin-top: -6px;
		}
	}
</style>
