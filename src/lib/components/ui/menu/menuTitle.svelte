<script lang="ts">
	import type { Snippet } from 'svelte'
	import { ChevronDown } from 'carbon-icons-svelte'
	import Typography from '../typography.svelte'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props {
		open?: boolean
		title?: boolean
		dimension?: Dimension
		children?: Snippet
		content: string
	}
	let { open = false, title = false, dimension = 'default', children, content }: Props = $props()
	let labelFor = Math.random().toString(16)
</script>

<div class="root {dimension}">
	<input type="checkbox" id={labelFor} checked={open} />
	<div class="wrapper">
		<label class="title" for={labelFor}>
			{#if title}
				<Typography variant={dimension === 'large' ? 'h4' : dimension === 'small' ? 'h6' : 'h5'}
					>{content}</Typography
				>
			{:else}
				<Typography
					variant={dimension === 'large' ? 'large' : dimension === 'small' ? 'small' : 'default'}
					>{content}</Typography
				>
			{/if}
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
		}
		label {
			cursor: pointer;
		}
		input[type='checkbox'] {
			display: none;
			& ~ .panel {
				display: grid;
				grid-template-rows: 0fr;
				transition: all 0.5s ease-in-out;
				div {
					overflow: hidden;
				}
			}
			&:checked ~ .panel {
				grid-template-rows: 1fr;
			}
			&:checked + .wrapper > .icon {
				transform: rotate(180deg);
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
