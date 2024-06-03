<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'

	type Position = 'top' | 'bottom' | 'left' | 'right'
	interface Props extends HTMLAttributes<HTMLElement> {
		helperText?: Snippet
		position?: Position
		large?: boolean
	}
	let { position = 'top', children, helperText, large = false }: Props = $props()

	let showTooltip = $state(false)
	let tooltip: HTMLDivElement | undefined = $state(undefined)
	let element: HTMLDivElement | undefined = $state(undefined)

	$effect(() => {
		function clickToolTip(e: MouseEvent) {
			const target = e.target as unknown as Node
			if (element?.contains(target)) {
				showTooltip = true
			} else {
				showTooltip = false
			}
		}
		window.addEventListener('click', clickToolTip)
		return () => {
			window.removeEventListener('click', clickToolTip)
		}
	})

	$effect(() => {
		updateTooltipPosition()
		window.addEventListener('resize', updateTooltipPosition)
		window.addEventListener('scroll', updateTooltipPosition)

		return () => {
			window.removeEventListener('resize', updateTooltipPosition)
			window.removeEventListener('scroll', updateTooltipPosition)
		}
	})
	function updateTooltipPosition() {
		if (tooltip && element) {
			const elementRect = element.getBoundingClientRect()
			const tooltipRect = tooltip.getBoundingClientRect()
			// Set tooltip initial position
			let top = 0,
				left = 0
			if (position === 'top') {
				top = elementRect.top - tooltipRect.height
				left = elementRect.left + elementRect.width / 2 - tooltipRect.width / 2
			} else if (position === 'bottom') {
				top += elementRect.bottom
				left = elementRect.left + elementRect.width / 2 - tooltipRect.width / 2
			} else if (position === 'left') {
				top = elementRect.top + elementRect.height / 2 - tooltipRect.height / 2
				left = elementRect.left - tooltipRect.width
			} else if (position === 'right') {
				top = elementRect.top + elementRect.height / 2 - tooltipRect.height / 2
				left = elementRect.right
			}

			// Check and adjust position if out of screen
			if (top < 0) {
				top = elementRect.bottom
			}
			if (left < 0) {
				left = elementRect.right
			}
			if (top + tooltipRect.height > window.innerHeight) {
				top = elementRect.top - tooltipRect.height
			}
			if (left + tooltipRect.width > window.innerWidth) {
				left = elementRect.left - tooltipRect.width
			}

			tooltip.style.top = `${top}px`
			tooltip.style.left = `${left}px`
		}
	}
</script>

<div class="tooltip">
	<div class="tooltip-text" class:large bind:this={tooltip}>
		{#if helperText}
			{@render helperText()}
		{/if}
	</div>
	{#if children}
		<div class="tooltip-trigger" class:showTooltip bind:this={element}>
			{@render children()}
		</div>
	{/if}
</div>

<style lang="postcss">
	.tooltip {
		display: flex;
		position: relative;
		align-items: center;
		.tooltip-trigger {
			display: flex;
			align-items: center;
			cursor: help;
			padding: 8px;
		}
		&:has(.tooltip-trigger:hover),
		&:has(.showTooltip) {
			.tooltip-text {
				opacity: 1;
				z-index: 10;
			}
		}
		.tooltip-text {
			position: fixed;
			opacity: 0;
			z-index: -1;
			border-radius: 0.75rem;
			background-color: var(--colors-top);
			padding: 0.25rem 0.5rem;
			color: var(--colors-base);
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			font-family: var(--font-family-sans-serif);
			letter-spacing: var(--letter-spacing-small);
			white-space: nowrap;
			&.large {
				border-radius: 1.25rem;
				padding: 0.5rem 0.75rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
	}
</style>
