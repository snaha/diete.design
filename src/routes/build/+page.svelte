<script lang="ts">
	import ResponsiveContainer from '$lib/components/custom/responsive-container.svelte'
	import Typography from '$lib/components/ui/typography.svelte'
</script>

<Typography variant="h3">Build with Diète</Typography>

<section id="introduction">
	<Typography>
		Diète is an open-source design system. Guided by an essential design approach, built with the
		highest usability standards, it lays great emphasis on accessibility and flexibility. UI
		components can be copy-pasted directly into your own code, easily customised and assembled
		together to build a wide variety of applications.
	</Typography>
</section>

<hr />

<Typography variant="h4" class="section-title">Get started</Typography>

<ol>
	<li>
		<Typography
			>Add the <a href="https://www.npmjs.com/package/carbon-icons-svelte">carbon-icons-svelte</a> package
			as a dependency that contains necessary icons.</Typography
		>
	</li>
	<li>
		<Typography
			>Copy the <a href="/generated/css/diete.css">diete.css</a> file to your projects that contain shared
			variable definitions.</Typography
		>
	</li>
	<li>
		<Typography
			>Find the component you need and copy the necessary files from the Implement section to your
			project.</Typography
		>
	</li>
</ol>

<hr />

<Typography variant="h4" class="section-title">Why Diète</Typography>

<section id="quote">
	<Typography variant="large" font="serif" italic
		>“Good design is as little design as possible. Less, but better – because it concentrates on the
		essential aspects, and the products are not burdened with non-essentials. Back to purity, back
		to simplicity.”</Typography
	>
	<Typography>— Dieter Rams</Typography>
</section>

<ResponsiveContainer class="vspace">
	<section id="essential-design">
		<Typography variant="h5" class="box-title">Essential design</Typography>
		<Typography>
			Diète aims for simplicity and timeless design by avoiding superfluous effects or trendy
			styles. Not merely the superficial simplicity that comes from a minimalist appearance, but the
			simplicity that stems from deeply understanding the underlying challenges of designing a
			product interface. Diète advocates for no-nonsense, unobtrusive design and clean elegance that
			efficiently help everyone using your app.
		</Typography>
	</section>

	<section id="fully-accessible">
		<Typography variant="h5" class="box-title">Fully accessible (WIP)</Typography>
		<Typography>
			Diète complies to the highest usability standards and strives to be as inclusive as possible.
			<ul>
				<li>color contrast ratio</li>
				<li>font sizes</li>
				<li>component sizes</li>
				<li>screen reader / no mouse</li>
			</ul>
		</Typography>
	</section>
</ResponsiveContainer>

<ResponsiveContainer class="vspace">
	<section id="essential-design">
		<Typography variant="h5" class="box-title">Flexible (WIP)</Typography>
		<Typography>
			Diète aims for simplicity Diète is designed with flexibility in mind.
			<ul>
				<li>Easy to combine components into vertical or horizontal layouts</li>
				<li>Easy customisation color customisation</li>
				<li>Easy fonts/icons change</li>
				<li>Easy to change anything in the code, no dependencies</li>
			</ul>
		</Typography>
	</section>

	<section id="no-dependencies">
		<Typography variant="h5" class="box-title">No dependencies</Typography>
		<Typography>
			Diete is not a dependency you install, instead you download the source and copy the components
			into your own project where they become the starting point for your own component system.
		</Typography>
	</section>
</ResponsiveContainer>

<hr />

<style lang="postcss">
	#introduction {
		margin-top: var(--double-padding);
	}
	#quote {
		display: flex;
		flex-direction: column;
		gap: calc(var(--padding) / 2); /* TODO use half-padding */
		margin-bottom: var(--double-padding);
	}
	hr {
		appearance: none;
		margin-top: var(--double-padding);
		margin-bottom: var(--double-padding);
		border-width: 1px;
		border-style: solid;
		width: 100%;
		color: var(--colors-low);
	}
	:global(.vspace) {
		margin-top: var(--padding);
	}
	:global(.box-title) {
		margin-bottom: var(--half-padding) !important;
	}
	:global(.section-title) {
		margin-bottom: var(--double-padding) !important;
	}
</style>
