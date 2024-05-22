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
		hover?: boolean
		active?: boolean
		focus?: boolean
	}
	let {
		open = $bindable(false),
		bold = false,
		dimension = 'default',
		element = 'span',
		disabled,
		content,
		hover,
		active,
		focus,
		children,
		class: className = '',
		...restProps
	}: Props = $props()
	let labelFor = Math.random().toString(16)
	const store = withMenuStore(dimension, open, disabled)
	setContext('menu-store', store)

	$effect(() => {
		store.size = dimension
		store.disabled = disabled
		store.open = open
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

<div
	class="root {dimension} {className}"
	{...restProps}
	onclick={() => (open = !open)}
	role="menuitem"
	tabindex={-1}
>
	<input type="checkbox" class:focus id={labelFor} bind:checked={open} {disabled} />
	<div class="wrapper" class:hover class:active>
		<label class="title" for={labelFor}>
			<Typography class="content" {element} {variant}>{content}</Typography>
		</label>
		<label class="icon" for={labelFor}>
			<ChevronDown size={dimension === 'small' ? 16 : 24} />
		</label>
	</div>
	{#if children}
		<div class="panel">
			<div>
				{@render children()}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.root {
		display: flex;
		position: relative;
		flex-direction: column;
		cursor: pointer;
		width: 100%;
		color: var(--colors-ultra-high);

		.wrapper {
			display: flex;
			flex-direction: row;
			justify-content: stretch;
			align-items: center;
			border-radius: 0.25rem;
		}
		&:has(input[type='checkbox']:not(:disabled)) {
			.wrapper {
				&:hover,
				&.hover {
					background: var(--colors-low);
				}
				&:active,
				&.active {
					background: var(--colors-low);
					label {
						color: var(--colors-high);
						:global(.content) {
							color: var(--colors-high);
						}
					}
				}
			}
		}
		&:has(input[type='checkbox']:not(:disabled):focus-visible),
		&:has(input[type='checkbox']:not(:disabled).focus) {
			.wrapper {
				outline: 4px solid var(--colors-top);
				outline-offset: -4px;
				background: var(--colors-base);
				label {
					color: var(--colors-top);
					:global(.content) {
						color: var(--colors-top);
					}
				}
			}
		}
		.title {
			flex-grow: 1;
			padding-right: 0.5rem;
		}
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			transition: transform 0.3s ease-in-out;
		}
		label {
			cursor: pointer;
		}
		input[type='checkbox'] {
			position: absolute;
			opacity: 0;
			z-index: 1;
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
				opacity: 0.25;
				cursor: not-allowed;
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
