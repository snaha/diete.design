<script lang="ts">
	import type { Snippet } from 'svelte'
	import { ChevronUp, ChevronDown } from 'carbon-icons-svelte'
	import Typography from '../typography.svelte'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props {
		open?: boolean
		title?: boolean
		dimension?: Dimension
		content: string
		children?: Snippet
	}
	let { open = false, title = false, dimension = 'default', children, content }: Props = $props()
	let isOpen = $state(open)
</script>

<div class="root {dimension}">
	<div
		class="wrapper"
		onclick={() => {
			isOpen = !isOpen
		}}
		onkeydown={(e) => {
			e.preventDefault()
			e.stopPropagation()
			if (!isOpen && e.key === 'ArrowDown') {
				isOpen = true
			} else if (isOpen && e.key === 'Escape') {
				isOpen = false
			}
		}}
		role="button"
		tabindex="0"
	>
		<div class="title">
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
		</div>
		{#if !isOpen}
			<ChevronDown size={dimension === 'small' ? 16 : 24} />
		{:else}
			<ChevronUp size={dimension === 'small' ? 16 : 24} />
		{/if}
	</div>
	<div class="panel" class:isOpen>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

<style lang="postcss">
	.root {
		display: flex;
		flex-direction: column;
		position: relative;
		gap: 0.5rem;
		&.small {
			gap: 0.25rem;
		}
		color: var(--colors-ultra-high);
		.wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: 0.5rem;
			padding: 0.75rem;
			cursor: pointer;
		}
		.panel {
			display: none;
			overflow: hidden;
		}
		.isOpen.panel {
			display: block;
		}
	}
</style>
