<script>
	import Typography from '$lib/components/ui/typography.svelte'
	import '../app.pcss'
</script>

<slot />

<section id="footer">
	<Typography>
		Made by diete. Source code is available on <a
			href="https://github.com/diete-design/diete.design">Github</a
		>.
	</Typography>
</section>
