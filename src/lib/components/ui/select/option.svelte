<script lang="ts">
	import type { SelectStore } from './selectStore.svelte'
	import { getContext } from 'svelte'
	import type { HTMLButtonAttributes } from 'svelte/elements'

	interface Props extends HTMLButtonAttributes {
		value: string
	}
	let { value, ...restProps }: Props = $props()

	const store = getContext<SelectStore>('select-store')

	let button = $state<HTMLButtonElement | undefined>()

	const updateLabel = () => {
		console.log(button)
		if (button && button.childNodes.length > 0) {
			const filteredNodes = Array.from(button.childNodes).filter(
				(node) => node.nodeType !== Node.COMMENT_NODE,
			)
			const content = filteredNodes.map((node) => node.nodeValue).join('')
			store.registerValue(value, content)
		}
	}
	$effect(() => {
		updateLabel()
	})
	let selected = $derived(store.value === value)
</script>

<button
	class="ghost {store.size}"
	bind:this={button}
	onclick={(e: MouseEvent) => {
		if (!store.open) return
		e.preventDefault()
		e.stopPropagation()
		store.open = false
		store.value = value
	}}
	class:selected
	{...restProps}
>
	<slot />
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

		&:active:not(:disabled),
		&.selected:not(:disabled),
		&:hover {
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
