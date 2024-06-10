<script lang="ts">
	import Typography from '$lib/components/ui/typography.svelte'
	import ResponsiveContainer from '$lib/components/custom/responsive-container.svelte'
	import type { Snippet } from 'svelte'
	import TabBar from './tab-bar/tab-bar.svelte'
	import TabContent from './tab-bar/tab-content.svelte'
	import Code from './code.svelte'

	type Props = {
		name: string
		tagline: string
		description: Snippet
		examples: Snippet
		controls: Snippet
		preview: Snippet
		useCode: string
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
		useCode,
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

<ResponsiveContainer>
	<section class="description">
		{@render description()}
	</section>
	<section class="examples">
		{@render examples()}
	</section>
</ResponsiveContainer>

<hr />
<section id="use">
	<Typography class="title" variant="h4" bold>Use</Typography>
	<ResponsiveContainer>
		<section class="controls">
			{@render controls()}
		</section>

		<section class="preview">
			<TabBar dimension="small">
				<TabContent value="Preview">
					<div class="preview-tab">
						{@render preview()}
					</div>
				</TabContent>
				<TabContent value="Svelte"><Code language="svelte" code={useCode} /></TabContent>
			</TabBar>
		</section>
	</ResponsiveContainer>
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
	.preview-tab {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border: transparent 1px solid;
		background-color: var(--colors-ultra-low);
		padding: var(--padding);
		height: 288px;
	}
	.controls {
		display: flex;
		flex-direction: column;
		gap: var(--padding);
		height: fit-content;
	}
</style>
