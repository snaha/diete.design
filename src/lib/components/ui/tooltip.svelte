<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	type Position = 'top' | 'bottom' | 'left' | 'right'
	interface Props extends HTMLAttributes<HTMLElement> {
		helperText?: Snippet
		position?: Position
		large?: boolean
		show?: boolean
		tooltipId?: string
		tooltipName: string
	}
	let {
		position = 'top',
		children,
		helperText,
		large = false,
		show = false,
		tooltipId = Math.random().toString(16),
		tooltipName = 'tooltip',
	}: Props = $props()
</script>

<div class="root">
	{#if children}
		<button popovertarget={tooltipId} style={`--anchor-name: --${tooltipName}`}>
			{@render children()}
		</button>
	{/if}
	{#if helperText}
		<span
			id={tooltipId}
			style={`--anchor: --${tooltipName}`}
			role="note"
			popover="auto"
			class={position}
			class:show
		>
			<span class="popover-inner" class:large>
				{@render helperText()}
			</span>
		</span>
	{/if}
</div>

<style lang="postcss">
	.root {
		position: relative;
	}
	button {
		display: flex;
		align-items: center;
		appearance: none;
		border: none;
		background: none;
		anchor-name: var(--anchor-name);
		cursor: pointer;
		margin: 0;
		padding: 0;
		color: var(--colors-ultra-high);
		&:hover ~ [popover] {
			display: block;
		}
	}
	.popover-inner {
		display: block;
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
	.show {
		display: block;
	}
	[popover] {
		position: absolute;
		top: anchor(var(--anchor) top);
		left: anchor(var(--anchor) center);
		transform-origin: center;
		z-index: 1;
		margin: 0;
		border: none;
		background: none;
		padding: 0;
	}
	.top {
		transform: translate(-50%, -100%);
		padding-bottom: 0.5rem;
	}
	.bottom {
		top: anchor(var(--anchor) bottom);
		transform: translate(-50%, 0);
		padding-top: 0.5rem;
	}
	.left {
		left: anchor(var(--anchor) left);
		transform: translate(-100%, 0);
		padding-right: 0.5rem;
		&:has(.large) {
			top: anchor(var(--anchor) center);
			transform: translate(-100%, -50%);
		}
	}
	.right {
		left: anchor(var(--anchor) right);
		transform: translate(0, 0);
		padding-left: 0.5rem;
		&:has(.large) {
			top: anchor(var(--anchor) center);
			transform: translateY(-50%);
		}
	}
	@-moz-document url-prefix() {
		.top {
			top: 0;
			left: 50%;
			transform: translate(-50%, -100%);
			padding-bottom: 0.5rem;
		}
		.bottom {
			top: 100%;
			left: 50%;
			transform: translate(-50%, 0);
			padding-top: 0.5rem;
		}
		.left {
			top: 0;
			right: 100%;
			transform: translate(0, 0);
			padding-right: 0.5rem;
			&:has(.large) {
				top: 50%;
				transform: translate(0, -50%);
			}
		}
		.right {
			top: 0;
			left: 100%;
			padding-left: 0.5rem;
			&:has(.large) {
				top: 50%;
				transform: translate(0, -50%);
			}
		}
	}
</style>
