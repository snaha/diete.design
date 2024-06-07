<script lang="ts">
	import ResponsiveContainer from '$lib/components/custom/responsive-container.svelte'
	import Typography from '$lib/components/ui/typography.svelte'
</script>

<Typography variant="h3">Build with Diète</Typography>

<section id="introduction">
	<Typography variant="large">
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
			>Copy the <a href="/generated/css/diete.css">diete.css</a> file to your projects that contain
			shared variable definitions. You may customize this file (<a href="/colors">colors</a>, fonts
			etc.) however you wish.</Typography
		>
	</li>
	<li>
		<Typography
			>Find the component you need and copy the necessary files from the Implement section to your
			project.</Typography
		>
	</li>
	<li>
		<Typography
			>Optional step: add the <a href="https://www.npmjs.com/package/carbon-icons-svelte"
				>carbon-icons-svelte</a
			> package as a dependency that contains necessary icons.</Typography
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
		<Typography variant="h5" class="box-title">Fully accessible</Typography>
		<Typography>
			Diète complies to the highest usability standards and strives to be as inclusive as possible.
			Color contrast, fonts and default components sizes all feature Triple-A conformance to the
			latest Web Content Accessibility Guidelines (WCAG 2.2). Furthermore, all components come with
			carefully designed, high-emphasis focused states allowing people to easily interact without a
			mouse — using the keyboard or voice control.
		</Typography>
	</section>
</ResponsiveContainer>

<ResponsiveContainer class="vspace">
	<section id="essential-design">
		<Typography variant="h5" class="box-title">Flexible</Typography>
		<Typography>
			All components come in 4 sizes (default, compact, small and large) and variants for vertical
			or horizontal layouts. Margins and spacing are built in the components themselves, so they can
			be perfectly assembled together to build advanced layouts. Moreover, Diète comes with a
			dynamic colour system that generates light or dark themes from any colour. You can also change
			the default system fonts and icon set to your preferences.
		</Typography>
	</section>

	<section id="no-dependencies">
		<Typography variant="h5" class="box-title">Minimum dependencies</Typography>
		<Typography>
			Diète is not a dependency you install. You download the source code and copy the components
			into your own project, where they become the starting point for your own component system.
			This way, you remain independent and gain complete control over the code. Diète comes with
			high-quality defaults that you can use as is, but you have the freedom to decide how to use
			and customise each component to your own needs. Your app, your code.
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
	ol {
		counter-reset: li;
		margin-left: 0;
		padding-left: 0;
		list-style: none;
	}
	ol li:before {
		content: counter(li) '. ';
		color: var(--colors-top);
		font-family: var(--font-family-sans-serif);
	}
	ol li {
		counter-increment: li;
	}
</style>
