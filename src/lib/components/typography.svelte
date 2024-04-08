<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements'
	type Variant =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'large-paragraph'
		| 'paragraph'
		| 'small-paragraph'
	type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
	interface CustomProps {
		variant?: Variant
		element?: Element
	}
	type Props = (HTMLAttributes<HTMLHeadingElement> | HTMLAttributes<HTMLParagraphElement>) &
		CustomProps
	let { variant = 'paragraph', element = 'span', class: classProps, ...restProps }: Props = $props()
</script>

<svelte:element this={element}  class={`root ${variant} ${classProps}`} {...restProps}>
	<slot />
</svelte:element>

<style>
	.root {
		color: var(--colors-ultraHigh);
		font-family: Arial;
		font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
	}
	.h1 {
		font-size: 3rem;
		font-weight: 700;
		line-height: 3.5rem;
	}
	.h2 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 3rem;
	}
	.h3 {
		font-size: 2rem;
		font-weight: 700;
		line-height: 2.5rem;
	}
	.h4 {
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2rem;
		letter-spacing: 0.03rem;
	}
	.h5 {
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	.h6 {
		font-size: 0.75rem;
		font-weight: 700;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}
	.large-paragraph {
		font-size: 1.5rem;
		line-height: 2rem;
		letter-spacing: 0.03rem;
	}
	.paragraph {
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	.small-paragraph {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}
</style>
