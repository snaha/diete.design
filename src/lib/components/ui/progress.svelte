<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLAttributes<HTMLDivElement> {
		value?: number
		dimension?: Dimension
		class?: string
		min?: number
		max?: number
		unit?: string
		showValue?: boolean
	}
	let {
		min = 0,
		max = 100,
		unit = '%',
		value = 0,
		dimension = 'default',
		class: className = '',
		showValue = true,
		children,
		...restProps
	}: Props = $props()
	let percent = $derived(((value - min) / Math.abs(max - min)) * 100)
</script>

<div class="root {dimension} {className}" {...restProps}>
	{#if children}
		{@render children()}
	{/if}
	<span class="progress-container">
		<span class="progress-bar" style={`width: ${percent}%`}></span>
	</span>
	{#if showValue}
		<div class="value" style={`--unit: "${unit}"`}>
			{value}
		</div>
	{/if}
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex: 1;
		align-items: center;
		align-self: stretch;
		gap: var(--half-padding);
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		&.default,
		&.compact {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		&.large {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		&.small {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
	}
	.progress-container {
		position: relative;
		flex: 1;
		background: var(--colors-low);
		height: 1px;
	}
	.progress-bar {
		position: absolute;
		top: 50%;
		flex: 1;
		transform: translateY(-50%);
		border-radius: 0.125rem;
		background: var(--colors-high);
		height: 4px;
	}
	.value::after {
		content: var(--unit);
	}
</style>
