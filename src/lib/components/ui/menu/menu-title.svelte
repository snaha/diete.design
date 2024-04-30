<script lang="ts">
	import { setContext } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	import { ChevronDown } from 'carbon-icons-svelte'
	import Typography from '../typography.svelte'
	import { withMenuStore, type Dimension } from './menu-store.svelte'

	interface Props extends HTMLAttributes<HTMLElement> {
		open?: boolean
		bold?: boolean
		dimension?: Dimension
		element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
		disabled?: boolean
		content: string
	}
	let {
		open = $bindable(false),
		bold = false,
		dimension = 'default',
		element = 'span',
		disabled,
		content,
		children,
		class: className = '',
		...restProps
	}: Props = $props()
	let labelFor = Math.random().toString(16)
	const store = withMenuStore(dimension, disabled)
	setContext('menu-store', store)

	$effect(() => {
		store.size = dimension
		store.disabled = disabled
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
</script>

<div class="root {dimension} {className}" {...restProps}>
	<input type="checkbox" id={labelFor} checked={open} {disabled} />
	<div class="wrapper">
		<label class="title" for={labelFor}>
			<Typography {element} {variant}>{content}</Typography>
		</label>
		<label class="icon" for={labelFor}>
			<ChevronDown size={dimension === 'small' ? 16 : 24} />
		</label>
	</div>
	<div class="panel">
		<div>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex-direction: column;
		position: relative;
		color: var(--colors-ultra-high);
		width: 100%;
		.wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
		}
		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
			transition: transform 0.3s ease-in-out;
		}
		label {
			cursor: pointer;
		}
		input[type='checkbox'] {
			display: none;
			& ~ .panel {
				display: grid;
				grid-template-rows: 0fr;
				transition: all 0.3s ease-in-out;
				div {
					display: flex;
					flex-direction: column;
					overflow: hidden;
				}
			}
			&:checked ~ .panel {
				grid-template-rows: 1fr;
			}
			&:checked + .wrapper > .icon {
				transform: rotate(-180deg);
			}
			&:disabled + .wrapper > label {
				cursor: not-allowed;
				opacity: 0.25;
			}
		}
	}
	.small {
		.wrapper {
			gap: 0.25rem;
		}
	}
	.default,
	.large {
		.wrapper {
			padding: 0.75rem;
		}
	}
	.compact,
	.small {
		.wrapper {
			padding: 0.5rem;
		}
	}
</style>
