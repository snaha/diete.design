<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { CaretDown, CaretUp } from 'carbon-icons-svelte'
	import { setContext } from 'svelte'
	import { withSelectStore } from './select-store.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		helperText?: string
		labelFor?: string
		dimension?: Dimension
		value?: string
	}
	let {
		helperText,
		labelFor = Math.random().toString(16),
		dimension = 'default',
		placeholder,
		value = $bindable(),
		children,
		...restProps
	}: Props = $props()

	const store = withSelectStore(dimension, value)
	setContext('select-store', store)

	let select: HTMLInputElement | undefined = $state(undefined)
	let options: HTMLDivElement | undefined = $state(undefined)
	let selectHeight: number = $state(0)
	let windowHeight: number = $state(0)
	let optionsHeight: number = $state(0)
	let expandedTop: boolean = $state(false)
	$effect(() => {
		options?.style.setProperty('--select-height', `${selectHeight.toString()}px`)
	})
	$effect(() => {
		function canExpandBottom() {
			if (select) {
				const selectBottom = select.getBoundingClientRect().bottom
				if (windowHeight - selectBottom > optionsHeight) {
					expandedTop = false
				} else {
					expandedTop = true
				}
			}
		}

		select?.addEventListener('click', canExpandBottom)
		window.addEventListener('scroll', canExpandBottom)

		return () => {
			window.removeEventListener('scroll', canExpandBottom)
			select?.removeEventListener('click', canExpandBottom)
		}
	})

	// Close the select when user clicks outside
	$effect(() => {
		function closeMenu() {
			if (store.open) store.open = false
		}
		
		window.addEventListener('click', closeMenu)

		return () => {
			window.removeEventListener('click', closeMenu)
		}
	})

	// Update store dimension if the dimension dynamically changes
	$effect(() => {
		store.size = dimension
	})

	// Bind store value to the value prop
	$effect(() => {
		value = store.value
	})
	$effect(() => {
		if (!store.open && store.value === undefined) {
			store.marked = undefined
		} else {
			store.marked = store.value
		}
	})
</script>

<svelte:window bind:innerHeight={windowHeight} />
<div class="root {dimension}">
	<input
		bind:offsetHeight={selectHeight}
		bind:this={select}
		value={store.value ? store.labels[store.value] ?? store.value : value}
		class="select"
		onclick={() => {
			if (!store.open) setTimeout(() => (store.open = true))
		}}
		onkeydown={(e) => {
			switch (e.key) {
				case 'ArrowDown': {
					e.preventDefault()
					if (!store.open) {
						store.open = true
					} else {
						const values = Object.keys(store.labels)
						const index = store.marked ? values.indexOf(store.marked) : -1
						store.marked = values[(index + 1) % values.length]
					}
					break
				}
				case 'ArrowUp': {
					e.preventDefault()
					if (!store.open) {
						store.open = true
					} else {
						const values = Object.keys(store.labels)
						const index = store.marked ? values.indexOf(store.marked) : 0
						if (index - 1 >= 0) store.marked = values[index - 1]
						else store.marked = values[values.length - 1]
					}
					break
				}
				case 'Enter': {
					e.preventDefault()
					if (!store.open) {
						store.open = true
					} else {
						store.value = store.marked
						store.open = false
					}
					break
				}
				case 'Escape': {
					if (store.open) {
						e.preventDefault()
						store.open = false
					}
				}
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
	<label for={labelFor} class="icon">
		{#if store.open}
			<CaretUp size={dimension === 'small' ? 16 : 24} />
		{:else}
			<CaretDown size={dimension === 'small' ? 16 : 24} />
		{/if}
	</label>
	<div class="wrapper">
		{#if children}
			<div class="options height" bind:offsetHeight={optionsHeight}>
				<div>
					{@render children()}
				</div>
			</div>
		{/if}
		{#if children}
			<div class="options" class:hidden={!store.open} class:expandedTop bind:this={options}>
				<div>
					{@render children()}
				</div>
			</div>
		{/if}
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
			border: 1px solid var(--colors-low);
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
		&:disabled {
			cursor: not-allowed;
			opacity: 0.25;
			& + .label {
				cursor: not-allowed;
				opacity: 0.25;
				background: transparent;
			}
			& ~ .icon {
				cursor: not-allowed;
				opacity: 0.25;
			}
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
		cursor: pointer;
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
	.wrapper {
		position: relative;
	}
	.options {
		position: absolute;
		top: 100%;
		left: 0;
		background: var(--colors-base);
		z-index: 1;
		width: 100%;
		margin-top: 0.25rem;
		&.expandedTop {
			bottom: 100%;
			top: auto;
			margin-top: 0;
			margin-bottom: calc(var(--select-height) + 0.25rem);
		}

		div {
			border: 1px solid var(--colors-low);
			border-radius: 0.25rem;
			padding: 0.5rem;
			display: flex;
			flex-direction: column;
			justify-content: stretch;
			align-items: stretch;
		}
	}
	.height {
		opacity: 0;
		z-index: -1;
	}
	.hidden {
		display: none;
	}
</style>
