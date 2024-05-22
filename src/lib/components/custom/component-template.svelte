<script lang="ts">
	import Typography from '$lib/components/ui/typography.svelte'
	import VerticalContainer from '$lib/components/custom/vertical-container.svelte'
	import type { Snippet } from 'svelte'

	type Props = {
		name: string
		tagline: string
		description: Snippet
		examples: Snippet
		controls: Snippet
		preview: Snippet
		implement: Snippet
		choose?: Snippet
		sizes?: Snippet
	}

	const {
		name,
		tagline,
		description,
		examples,
		controls,
		preview,
		implement,
		choose,
		sizes,
	}: Props = $props()
</script>

<section>
	<Typography variant="h2" bold>{name}</Typography>
	<Typography variant="large">
		{tagline}
	</Typography>
</section>

<VerticalContainer>
	<section class="description">
		{@render description()}
	</section>
	<section class="examples">
		{@render examples()}
	</section>
</VerticalContainer>

<hr />
<section id="use">
	<Typography class="title" variant="h4" bold>Use</Typography>
	<VerticalContainer>
		<section class="controls">
			{@render controls()}
		</section>

		<section class="preview">
			{@render preview()}
		</section>
	</VerticalContainer>
</section>

<hr />

<section id="implement">
	<Typography class="title" variant="h4" bold>Implement</Typography>
	{@render implement()}
</section>

<hr />

{#if choose}
	<section id="choose-a-button-type">
		<Typography class="title" variant="h4" bold>Choose a button type</Typography>
		{@render choose()}
	</section>

	<hr />
{/if}

{#if sizes}
	<section id="about-sizes">
		<Typography class="title" variant="h4" bold>About sizes</Typography>
		{@render sizes()}
	</section>

	<hr />
{/if}

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--double-padding);
		font-family: var(--font-family-sans-serif);
		& > :global(.title) {
			margin-bottom: var(--double-padding);
		}
	}
	hr {
		appearance: none;
		margin-bottom: var(--double-padding);
		border-width: 1px;
		border-style: solid;
		color: var(--colors-low);
	}
	.examples {
		gap: var(--padding);
		background: var(--colors-ultra-low);
		padding: var(--padding);
	}
	.preview {
		flex: 1;
	}
	.controls {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
	}
</style>
