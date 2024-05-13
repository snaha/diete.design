<script lang="ts">
	import { type Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	import Typography from '../typography.svelte'

	interface Props extends HTMLAttributes<HTMLElement> {
		label?: string
		helperText?: Snippet
	}
	let { label, helperText, children }: Props = $props()
</script>

<div class="root">
	{#if label}
		<Typography>{label}</Typography>
	{/if}
	<div class="radios" role="radiogroup" tabindex="0">
		{#if children}
			{@render children()}
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
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		.radios:focus-visible {
			border-radius: 0.25rem;
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
		}
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
