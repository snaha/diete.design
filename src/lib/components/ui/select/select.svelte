<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { CaretDown, CaretUp } from 'carbon-icons-svelte'
	import { setContext, type Snippet } from 'svelte'
	import { withSelectStore } from './select-store.svelte'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		helperText?: Snippet
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
		class: className = '',
		children,
		...restProps
	}: Props = $props()

	let input: HTMLInputElement | undefined = $state(undefined)

	const store = withSelectStore(dimension, value)
	setContext('select-store', store)

	// Close the select when user clicks outside, when user clicks on the tab button
	$effect(() => {
		function closeMenu() {
			if (store.open) store.open = false
		}

		function closeMenuKeyboard(e: KeyboardEvent) {
			if (e.key === 'Tab') closeMenu()
		}

		window.addEventListener('click', closeMenu)
		window.addEventListener('keydown', closeMenuKeyboard)

		return () => {
			window.removeEventListener('click', closeMenu)
			window.removeEventListener('keydown', closeMenuKeyboard)
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

<div class="root {dimension} {className}">
	<input
		bind:this={input}
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
	<button
		class="icon"
		onclick={() => {
			input?.focus()
			if (!store.open) setTimeout(() => (store.open = true))
		}}
		tabindex="-1"
	>
		{#if store.open}
			<CaretUp size={dimension === 'small' ? 16 : 24} />
		{:else}
			<CaretDown size={dimension === 'small' ? 16 : 24} />
		{/if}
	</button>
	<div class="wrapper">
		{#if children}
			<div class="options" class:hidden={!store.open}>
				<div>
					{@render children()}
				</div>
			</div>
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
		--transition-delay: 125ms;
		--transition: 250ms;

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
		color: var(--colors-ultra-high);
		transition: background var(--transition);
		transition-delay: var(--transition-delay);
		border-radius: 0.25rem;
		flex-grow: 1;
		cursor: pointer;
		&::placeholder {
			color: var(--colors-high);
			user-select: none;
		}
		&:focus {
			outline: none;
			border: 1px solid var(--colors-low);
			background: var(--colors-base);
			& + .label {
				transition: all var(--transition);
				transition-delay: var(--transition-delay);
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
		transition: transform var(--transition);
		border-radius: 0.25rem;
		background: var(--colors-low);
		color: var(--colors-high);
		cursor: pointer;
	}
	.icon {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		background-color: transparent;
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
			transition: all var(--transition);
			transition-delay: var(--transition-delay);
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
			transition: all var(--transition);
			transition-delay: var(--transition-delay);
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
			transition: all var(--transition);
			transition-delay: var(--transition-delay);
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
			transition: all var(--transition);
			transition-delay: var(--transition-delay);
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
	.hidden {
		display: none;
	}
</style>
