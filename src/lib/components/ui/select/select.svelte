<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { CaretDown, CaretUp } from 'carbon-icons-svelte'
	import { setContext } from 'svelte'
	import { withSelectStore } from './selectStore.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		helperText?: string
		labelFor?: string
		dimension?: Dimension
	}
	let {
		helperText,
		labelFor = Math.random().toString(16),
		dimension = 'default',
		placeholder,
		value,
		...restProps
	}: Props = $props()

	const store = withSelectStore(dimension, value)
	setContext('select-store', store)
	$effect(() => {
		function closeMenu() {
			if (store.open) store.open = false
		}

		window.addEventListener('click', closeMenu)

		return () => {
			window.removeEventListener('click', closeMenu)
		}
	})
	$effect(() => {
		value = store.value
		store.size = dimension
	})
</script>

<div class="root {dimension}">
	<input
		value={store.value ? store.labels[store.value] ?? store.value : value}
		class="select"
		onclick={(e) => {
			e.preventDefault()
			e.stopPropagation()
			store.open = !store.open
		}}
		onkeydown={(e) => {
			if (e.key === 'ArrowDown') {
				e.preventDefault()
				e.stopPropagation()
				if (!store.open) {
					store.open = true
				} else {
					const values = Object.keys(store.labels)
					const index = store.value ? values.indexOf(store.value) : 0
					store.value = values[(index + 1) % values.length]
				}
			} else if (e.key === 'ArrowUp' && store.open) {
				e.preventDefault()
				e.stopPropagation()
				const values = Object.keys(store.labels)
				const index = store.value ? values.indexOf(store.value) : 0
				store.value = values[index - 1 < 0 ? values.length - 1 : index - 1]
			} else if ((e.key === 'Enter' || e.key === 'Escape') && store.open) {
				e.preventDefault()
				e.stopPropagation()
				store.open = false
			}
		}}
		id={labelFor}
		{placeholder}
		readonly
		{...restProps}
	/>
	<label class="label" for={labelFor}>
		{placeholder}
	</label>
	<div class="icon">
		{#if store.open}
			<CaretUp size={dimension === 'small' ? 16 : 24} />
		{:else}
			<CaretDown size={dimension === 'small' ? 16 : 24} />
		{/if}
	</div>
	<div class="options" class:hidden={!store.open}>
		<slot />
	</div>
	{#if helperText}
		<div class="helper-text">
			{helperText}
		</div>
	{/if}
</div>

<style lang="postcss">
	.root {
		font-family: var(--font-family-sans-serif);
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
		color: var(--colors-ultra-high);
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		position: relative;
	}
	.select {
		appearance: none;
		border: 1px solid var(--colors-low);
		background: var(--colors-low);
		border-radius: 0.25rem;
		flex-grow: 1;
		cursor: pointer;
		&::placeholder {
			color: transparent;
			user-select: none;
		}
		&:focus {
			outline: none;
			border: 1px solid var(--colors-high);
			background: var(--colors-base);
			& + .label {
				background: var(--colors-base);
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
				letter-spacing: var(--letter-spacing-small);
			}
		}
		&:not(:placeholder-shown) + .label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
	}
	.label {
		position: absolute;
		transform-origin: left center;
		transition: transform 0.25s;
		border-radius: 0.25rem;
		background: var(--colors-low);
		color: var(--colors-high);
		cursor: pointer;
	}
	.icon {
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
	}
	.default {
		.select {
			padding: 1.5rem 0.75rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			&:focus,
			&:not(:placeholder-shown) {
				padding: 2.25rem 0.75rem 0.75rem;
				& + .label {
					transform: translateY(-0.75rem);
				}
			}
		}
		.label {
			top: 1.5rem;
			left: 0.75rem;
		}
		.icon {
			top: 1.5rem;
			right: 0.75rem;
		}
	}
	.large {
		.select {
			padding: 1.5rem 0.75rem;
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
			&:focus,
			&:not(:placeholder-shown) {
				padding: 2.25rem 0.75rem 0.75rem;
				& + .label {
					transform: translateY(-0.75rem);
				}
			}
		}
		.label {
			top: 1.5rem;
			left: 0.75rem;
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		.icon {
			top: 1.75rem;
			right: 0.75rem;
		}
	}
	.compact {
		.select {
			padding: 1rem 0.5rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			&:focus,
			&:not(:placeholder-shown) {
				padding: 1.5rem 0.5rem 0.5rem;
				& + .label {
					transform: translateY(-0.5rem);
				}
			}
		}
		.label {
			top: 1rem;
			left: 0.5rem;
		}
		.icon {
			top: 1rem;
			right: 0.5rem;
		}
	}
	.small {
		.select {
			padding: 1rem 0.5rem;
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			&:focus,
			&:not(:placeholder-shown) {
				padding: 1.5rem 0.5rem 0.5rem;
				& + .label {
					transform: translateY(-0.5rem);
				}
			}
		}
		.label {
			top: 1rem;
			left: 0.5rem;
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		.icon {
			top: 1rem;
			right: 0.5rem;
			width: 1rem;
			height: 1rem;
		}
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
		padding: 0.5rem 0.75rem 0;
	}
	.options {
		position: absolute;
		top: calc(100% - 1.25rem);
		left: 0;
		/* FIXME: remove the calc and solve this with nesting */
		width: calc(100% - 18px);
		border-radius: 0.25rem;
		border: 1px solid var(--colors-low);
		background: var(--colors-base);
		z-index: 1;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
	}
	.hidden {
		display: none;
	}
</style>
