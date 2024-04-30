<script lang="ts">
	import type { SelectStore } from './select-store.svelte'
	import { getContext } from 'svelte'
	import type { HTMLButtonAttributes } from 'svelte/elements'

	interface Props extends HTMLButtonAttributes {
		value: string
	}
	let { value, children, ...restProps }: Props = $props()

	const store = getContext<SelectStore>('select-store')

	let button = $state<HTMLButtonElement | undefined>()

	$effect(() => {
		store.registerValue(value, button?.innerText)
	})
	let marked = $derived(store.marked === value)
	let selected = $derived(store.value === value)
</script>

<button
	class="ghost {store.size}"
	bind:this={button}
	onclick={() => {
		if (!store.open) return
		store.marked = value
		store.value = value
	}}
	onmouseenter={() => {
		store.marked = value
	}}
	onmouseleave={() => {
		if (store.value) {
			store.marked = store.value
		} else {
			store.marked = undefined
		}
	}}
	class:selected
	class:marked
	tabindex="-1"
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else}
		{value}
	{/if}
</button>

<style lang="postcss">
	button {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		font-family: var(--font-family-sans-serif);
		font-style: normal;
		font-weight: 400;
		&:disabled {
			cursor: not-allowed;
			opacity: 0.25;
		}
	}
	.ghost {
		border: 1px solid transparent;
		background: transparent;
		color: var(--colors-ultra-high);

		&.marked:not(:disabled),
		&.marked:not(:disabled).selected:not(:disabled) {
			border: 1px solid var(--colors-ultra-high);
		}
		&:active:not(:disabled),
		&.selected:not(:disabled) {
			border: 1px solid var(--colors-low);
			background: var(--colors-low);
			color: var(--colors-high);
		}
	}
	.default {
		min-width: 3rem;
		padding: 0.75rem;
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}
	.large {
		min-width: 3.5rem;
		padding: 0.75rem;
		font-size: var(--font-size-large);
		line-height: var(--line-height-large);
		letter-spacing: var(--letter-spacing-large);
	}
	.compact {
		min-width: 2.5rem;
		padding: 0.5rem;
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}
	.small {
		gap: 0.25rem;
		min-width: 2rem;
		padding: 0.5rem;
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
