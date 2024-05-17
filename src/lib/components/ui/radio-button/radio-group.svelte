<script lang="ts">
	import { setContext, type Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	import Typography from '../typography.svelte'
	import { withRadioStore, type Dimension } from './radio-store.svelte'

	type Layout = 'vertical' | 'horizontal'
	interface Props extends HTMLAttributes<HTMLElement> {
		element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
		bold?: boolean
		dimension?: Dimension
		layout?: Layout
		value?: string
		name?: string
		label?: Snippet
		helperText?: Snippet
	}
	let {
		element = 'span',
		bold = false,
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
	let variant: 'h4' | 'h6' | 'h5' | 'large' | 'default' | 'small' = $derived.by(() => {
		if (bold) {
			switch (dimension) {
				case 'large':
					return 'h4'
				case 'small':
					return 'h6'
			}
			return 'h5'
		} else {
			switch (dimension) {
				case 'large':
					return 'large'
				case 'small':
					return 'small'
			}
			return 'default'
		}
	})
	$effect(()=>{
		store.dimension = dimension
	})
</script>

<div class="root {dimension}">
	{#if label}
		<Typography {variant} {element}>
			{@render label()}
		</Typography>
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
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
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
