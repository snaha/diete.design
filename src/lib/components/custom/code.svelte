<script lang="ts">
	import { Copy, Checkmark } from 'carbon-icons-svelte'
	import Button from '$lib/components/ui/button.svelte'

	import { Highlight, HighlightSvelte } from 'svelte-highlight'
	import { css } from 'svelte-highlight/languages'
	import type { HTMLAttributes } from 'svelte/elements'
	import '$lib/components/custom/highlight-diete.css'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLAttributes<HTMLElement> {
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

	function onclick() {
		navigator.clipboard.writeText(code)
		buttonIcon = 'checkmark'
		setTimeout(() => (buttonIcon = 'copy'), 2000)
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
		background: var(--colors-top);
		position: relative;
		max-height: 50vh;
	}

	.inside {
		background: var(--colors-top);
		align-self: stretch;
		flex-grow: 1;
		overflow: auto;
	}

	.copy-button {
		position: absolute;
		top: 16px;
		right: 16px;
		color: var(--colors-base);
		z-index: 1;
	}
	:global(.highlight) {
		margin: 0;
	}
</style>
