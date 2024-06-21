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
	let buttonIconTimeout: ReturnType<typeof setTimeout> | undefined = undefined

	function onclick() {
		navigator.clipboard.writeText(code)
		buttonIcon = 'checkmark'
		clearTimeout(buttonIconTimeout)
		buttonIconTimeout = setTimeout(() => (buttonIcon = 'copy'), 2000)
	}
</script>

<div class="container {classProp}">
	<div class="inside">
		{#if language === 'css'}
			<Highlight class="highlight" {...restProps} language={css} {code} />
		{:else}
			<HighlightSvelte class="highlight" {code} />
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
		position: relative;
		flex-direction: row;
		justify-content: stretch;
		align-items: stretch;
		border: var(--colors-dark-low) 1px solid;
		border-radius: var(--border-radius);
		background: var(--colors-dark-base);
		isolation: isolate;
		max-width: calc(100vw - var(--double-padding));
		min-height: 288px;
		max-height: 50vh;
	}

	.inside {
		display: flex;
		flex-grow: 1;
		align-self: stretch;
		border-radius: var(--border-radius);
		background: var(--colors-dark-base);
		overflow: auto;
	}
	:global(code) {
		white-space: preserve nowrap !important;
	}

	.copy-button {
		position: absolute;
		top: var(--padding);
		right: var(--padding);
		z-index: 1;
		color: var(--colors-dark-top);
	}

	:global(.highlight) {
		margin: 0;
	}
</style>
