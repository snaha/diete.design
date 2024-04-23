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
	}
	let {
		helperText,
		labelFor = Math.random().toString(16),
		dimension = 'default',
		placeholder,
		value,
		children,
		...restProps
	}: Props = $props()

	const store = withSelectStore(dimension, value)
	setContext('select-store', store)

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
</script>

<div class="root {dimension}">
	<input
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
						const index = store.value ? values.indexOf(store.value) : -1
						store.value = values[(index + 1) % values.length]
					}
					break
				}
				case 'ArrowUp': {
					e.preventDefault()
					if (!store.open) {
						store.open = true
					} else {
						const values = Object.keys(store.labels)
						const index = store.value ? values.indexOf(store.value) : 0
						if (index - 1 >= 0) store.value = values[index - 1]
						else store.value = values[values.length - 1]
					}
					break
				}
				case 'Enter':
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
			<div class="options" class:hidden={!store.open}>
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
