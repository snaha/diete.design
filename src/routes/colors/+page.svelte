<script lang="ts">
	import { browser } from '$app/environment'
	import Code from '$lib/components/custom/code.svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import { Light } from 'carbon-icons-svelte'
	import { onDestroy, onMount } from 'svelte'

	const getCSSProperty = (name: string) => {
		if (!browser) {
			return ''
		}
		return document?.documentElement?.style?.getPropertyValue(name)
	}
	let css = $state('')
	let interval: ReturnType<typeof setInterval> | undefined = undefined

	onMount(() => {
		interval = setInterval(() => getColors(), 500)
	})

	onDestroy(() => {
		clearInterval(interval)
	})

	const getColors = () => {
		css = `	--colors-top: ${getCSSProperty('--colors-top')};
	--colors-ultra-high: ${getCSSProperty('--colors-ultra-high')};
	--colors-high: ${getCSSProperty('--colors-high')};
	--colors-low: ${getCSSProperty('--colors-low')};
	--colors-ultra-low: ${getCSSProperty('--colors-ultra-low')};
	--colors-base: ${getCSSProperty('--colors-base')};

	--colors-dark-top: ${getCSSProperty('--colors-dark-top')};
	--colors-dark-ultra-high: ${getCSSProperty('--colors-dark-ultra-high')};
	--colors-dark-high: ${getCSSProperty('--colors-dark-high')};
	--colors-dark-low: ${getCSSProperty('--colors-dark-low')};
	--colors-dark-ultra-low: ${getCSSProperty('--colors-dark-ultra-low')};
	--colors-dark-base: ${getCSSProperty('--colors-dark-base')};

	--colors-light-top: ${getCSSProperty('--colors-light-top')};
	--colors-light-ultra-high: ${getCSSProperty('--colors-light-ultra-high')};
	--colors-light-high: ${getCSSProperty('--colors-light-high')};
	--colors-light-low: ${getCSSProperty('--colors-light-low')};
	--colors-light-ultra-low: ${getCSSProperty('--colors-light-ultra-low')};
	--colors-light-base: ${getCSSProperty('--colors-light-base')};

	--colors-dark-overlay: ${getCSSProperty('--colors-dark-overlay')};
	--colors-light-overlay: ${getCSSProperty('--colors-light-overlay')};
`
	}
</script>

<Typography
	>Choosing a different color from the appearance menu (marked by the <Light /> icon) changes the values
	here. You can copy and paste these values in your <a href="/generated/css/diete.css">diete.css</a>
	file.</Typography
>
<Code class="code-max-height" language="css" code={css} />

<style>
	:global(.code-max-height) {
		margin-top: var(--double-padding);
		margin-bottom: var(--double-padding);
		max-height: 80vh !important;
	}
</style>
