<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'
	type Font = 'sans' | 'serif' | 'mono'
	type Weight = 'standart' | 'bold'
	type Style = 'normal' | 'italic'
	type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'large' | 'default' | 'small'
	type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	interface CustomProps {
		variant?: Variant
		element?: Element
		font?: Font
		weight?: Weight
		style?: Style
	}
	type Props = (HTMLAttributes<HTMLHeadingElement> | HTMLAttributes<HTMLParagraphElement>) &
		CustomProps
	let {
		variant = 'default',
		element = 'span',
		font = 'sans',
		weight = 'standart',
		style = 'normal',
		class: classProps,
		...restProps
	}: Props = $props()
</script>

<svelte:element
	this={element}
	class={`root ${font} ${weight} ${style} ${variant} ${classProps}`}
	{...restProps}
>
	<slot />
</svelte:element>

<style>
	.root {
		color: var(--colors-ultra-high);
		margin: 0;
		padding: 0;
	}
	.sans {
		font-family: sans-serif;
	}
	.serif {
		font-family: serif;
	}
	.mono {
		font-family: monospace;
	}
	.standart {
		font-weight: 400;
	}
	.bold {
		font-weight: 700;
	}
	.normal {
		font-style: normal;
	}
	.italic {
		font-style: italic;
	}
	.h1 {
		font-size: var(--font-size-h1);
		font-weight: var(--font-weight-h1);
		line-height: var(--line-height-h1);
	}
	.h2 {
		font-size: var(--font-size-h2);
		font-weight: var(--font-weight-h2);
		line-height: var(--line-height-h2);
	}
	.h3 {
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-h3);
		line-height: var(--line-height-h3);
	}
	.h4 {
		font-size: var(--font-size-h4);
		font-weight: var(--font-weight-h4);
		line-height: var(--line-height-h4);
		letter-spacing: var(--letter-spacing-h4);
	}
	.h5 {
		font-size: var(--font-size-h5);
		font-weight: var(--font-weight-h5);
		line-height: var(--line-height-h5);
		letter-spacing: var(--letter-spacing-h5);
	}
	.h6 {
		font-size: var(--font-size-h6);
		font-weight: var(--font-weight-h6);
		line-height: var(--line-height-h6);
		letter-spacing: var(--letter-spacing-h6);
	}
	.large {
		font-size: var(--font-size-large);
		line-height: var(--line-height-large);
		letter-spacing: var(--letter-spacing-large);
	}
	.default {
		font-size: var(--font-size);
		line-height: var(--line-height);
		letter-spacing: var(--letter-spacing);
	}
	.small {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
	}
</style>
