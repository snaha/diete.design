<script lang="ts">
	import { Checkmark, ArrowRight } from 'carbon-icons-svelte'

	import Button from '$lib/components/ui/button.svelte'
</script>

<h1>A design system for purists</h1>
<p>
	Radically minimal UI components, that you can copy directly into your project. Diète is for
	uncompromising, free-spirited app makers who want to remain independent.
</p>

<section>
	<h1>Button</h1>
	<div class="row">
		<div class="col">
			<Button>Strong</Button>
			<Button active>Strong active</Button>
			<Button disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button><Checkmark size={24} /></Button>
			<Button active><Checkmark size={24} /></Button>
			<Button disabled><Checkmark size={24} /></Button>
		</div>
		<div class="col">
			<Button><Checkmark size={24} />Strong</Button>
			<Button active><Checkmark size={24} />Strong active</Button>
			<Button disabled><Checkmark size={24} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button>Strong<ArrowRight size={24} /></Button>
			<Button active>Strong active<ArrowRight size={24} /></Button>
			<Button disabled>Strong disabled<ArrowRight size={24} /></Button>
		</div>
		<div class="col">
			<Button variant="secondary">Secondary</Button>
			<Button variant="secondary" active>Secondary active</Button>
			<Button variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button variant="ghost">Ghost</Button>
			<Button variant="ghost" active>Ghost active</Button>
			<Button variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button variant="ghost">Ghost</Button>
			<Button variant="ghost" active>Ghost active</Button>
			<Button variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button variant="overlay">Overlay</Button>
			<Button variant="overlay" active>Overlay active</Button>
			<Button variant="overlay" disabled>Overlay disabled</Button>
		</div>
	</div>
</section>

<style>
	.row {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.col {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 1rem;
		border: 1px dashed var(--colors-ultra-high);
		padding: 1rem;
	}
</style>
