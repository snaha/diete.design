<script lang="ts">
	import { setContext, type Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	import Typography from '../typography.svelte'
	import { withRadioStore, type Dimension } from './radio-store.svelte'

	type Layout = 'vertical' | 'horizontal'
	interface Props extends HTMLAttributes<HTMLElement> {
		dimension?: Dimension
		layout?: Layout
		value?: string
		name?: string
		label?: string
		helperText?: Snippet
	}
	let {
		dimension = 'default',
		layout = 'vertical',
		value = $bindable(),
		name,
		label,
		helperText,
		children,
	}: Props = $props()

	const store = withRadioStore(dimension, value, name)
	setContext('radio-store', store)

	$effect(() => {
		value = store.value
	})
</script>

<div class="root {dimension}">
	{#if label}
		<Typography>{label}</Typography>
	{/if}
	<div class="radio-group {layout}" role="radiogroup">
		{#if children}
			{@render children()}
		{/if}
	</div>
	{#if helperText}
		<div class="helper-text">
			{@render helperText()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.radio-group {
		display: flex;
		&:global(:has(input[type='radio']:focus-visible)) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			border-radius: 0.25rem;
		}
	}
	.vertical {
		flex-direction: column;
	}
	.horizontal {
		flex-direction: row;
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
