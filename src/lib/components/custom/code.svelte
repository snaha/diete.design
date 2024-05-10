<script lang="ts">
	import { Copy, Checkmark } from 'carbon-icons-svelte'
	import Button from '$lib/components/ui/button.svelte'

	import { Highlight, HighlightSvelte } from 'svelte-highlight'
	import { css } from 'svelte-highlight/languages'
	import type { HTMLAttributes } from 'svelte/elements'
	import '$lib/components/custom/highlight-diete.css'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLAttributes<HTMLPreElement> {
		dimension?: Dimension
		class?: string
		code: string
		language: 'css' | 'svelte'
	}
	let {
		dimension = 'default',
		class: classProp = '',
		code,
		language,
		...restProps
	}: Props = $props()

	let buttonIcon = $state('copy')
	let buttonIconTimeout: number | undefined = undefined

	function onclick() {
		navigator.clipboard.writeText(code)
		buttonIcon = 'checkmark'
		clearTimeout(buttonIconTimeout)
		buttonIconTimeout = setTimeout(() => (buttonIcon = 'copy'), 2000)
	}
</script>

<div class="container">
	<div class="inside">
		{#if language === 'css'}
			<Highlight class="highlight {classProp}" {...restProps} language={css} {code} />
		{:else}
			<HighlightSvelte class="highlight {classProp}" {code} />
		{/if}
	</div>
	<div class="copy-button">
		<Button {dimension} variant={'darkoverlay'} {onclick}>
			{#if buttonIcon === 'copy'}
				<Copy size={24} />
			{:else}
				<Checkmark size={24} />
			{/if}
		</Button>
	</div>
</div>

<style lang="postcss">
	.container {
		display: flex;
		flex-direction: row;
		justify-content: stretch;
		align-items: stretch;
		isolation: isolate;
		background: var(--colors-dark-base);
		position: relative;
		max-height: 50vh;
		min-height: 288px;
		max-width: calc(100vw - var(--double-padding));
		border: var(--colors-dark-low) 1px solid;
	}

	.inside {
		background: var(--colors-dark-base);
		align-self: stretch;
		flex-grow: 1;
		overflow: auto;
		display: flex;

		&:focus-visible:not(:disabled) {
			outline: 4px solid var(--colors-dark-top);
			outline-offset: -4px;
		}
	}

	.copy-button {
		position: absolute;
		top: var(--padding);
		right: var(--padding);
		color: var(--colors-dark-top);
		z-index: 1;
	}

	:global(.highlight) {
		margin: 0;
	}
</style>
