<script lang="ts">
	import { Checkmark, ArrowRight } from 'carbon-icons-svelte'

	import Button from '$lib/components/ui/button.svelte'
	import Checkbox from '$lib/components/ui/checkbox.svelte'
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
			<Button variant="overlay">Overlay</Button>
			<Button variant="overlay" active>Overlay active</Button>
			<Button variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button variant="darkoverlay">Dark overlay</Button>
			<Button variant="darkoverlay" active>Dark overlay active</Button>
			<Button variant="darkoverlay" disabled>Dark overlay disabled</Button>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Button size="large">Strong</Button>
			<Button size="large" active>Strong active</Button>
			<Button size="large" disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button size="large"><Checkmark size={32} /></Button>
			<Button size="large" active><Checkmark size={32} /></Button>
			<Button size="large" disabled><Checkmark size={32} /></Button>
		</div>
		<div class="col">
			<Button size="large"><Checkmark size={32} />Strong</Button>
			<Button size="large" active><Checkmark size={32} />Strong active</Button>
			<Button size="large" disabled><Checkmark size={32} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button size="large">Strong<ArrowRight size={32} /></Button>
			<Button size="large" active>Strong active<ArrowRight size={32} /></Button>
			<Button size="large" disabled>Strong disabled<ArrowRight size={32} /></Button>
		</div>
		<div class="col">
			<Button size="large" variant="secondary">Secondary</Button>
			<Button size="large" variant="secondary" active>Secondary active</Button>
			<Button size="large" variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button size="large" variant="ghost">Ghost</Button>
			<Button size="large" variant="ghost" active>Ghost active</Button>
			<Button size="large" variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button size="large" variant="overlay">Overlay</Button>
			<Button size="large" variant="overlay" active>Overlay active</Button>
			<Button size="large" variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button size="large" variant="darkoverlay">Dark overlay</Button>
			<Button size="large" variant="darkoverlay" active>Dark overlay active</Button>
			<Button size="large" variant="darkoverlay" disabled>Dark overlay disabled</Button>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Button size="compact">Strong</Button>
			<Button size="compact" active>Strong active</Button>
			<Button size="compact" disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button size="compact"><Checkmark size={24} /></Button>
			<Button size="compact" active><Checkmark size={24} /></Button>
			<Button size="compact" disabled><Checkmark size={24} /></Button>
		</div>
		<div class="col">
			<Button size="compact"><Checkmark size={24} />Strong</Button>
			<Button size="compact" active><Checkmark size={24} />Strong active</Button>
			<Button size="compact" disabled><Checkmark size={24} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button size="compact">Strong<ArrowRight size={24} /></Button>
			<Button size="compact" active>Strong active<ArrowRight size={24} /></Button>
			<Button size="compact" disabled>Strong disabled<ArrowRight size={24} /></Button>
		</div>
		<div class="col">
			<Button size="compact" variant="secondary">Secondary</Button>
			<Button size="compact" variant="secondary" active>Secondary active</Button>
			<Button size="compact" variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button size="compact" variant="ghost">Ghost</Button>
			<Button size="compact" variant="ghost" active>Ghost active</Button>
			<Button size="compact" variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button size="compact" variant="overlay">Overlay</Button>
			<Button size="compact" variant="overlay" active>Overlay active</Button>
			<Button size="compact" variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button size="compact" variant="darkoverlay">Dark overlay</Button>
			<Button size="compact" variant="darkoverlay" active>Dark overlay active</Button>
			<Button size="compact" variant="darkoverlay" disabled>Dark overlay disabled</Button>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Button size="small">Strong</Button>
			<Button size="small" active>Strong active</Button>
			<Button size="small" disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button size="small"><Checkmark size={16} /></Button>
			<Button size="small" active><Checkmark size={16} /></Button>
			<Button size="small" disabled><Checkmark size={16} /></Button>
		</div>
		<div class="col">
			<Button size="small"><Checkmark size={16} />Strong</Button>
			<Button size="small" active><Checkmark size={16} />Strong active</Button>
			<Button size="small" disabled><Checkmark size={16} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button size="small">Strong<ArrowRight size={16} /></Button>
			<Button size="small" active>Strong active<ArrowRight size={16} /></Button>
			<Button size="small" disabled>Strong disabled<ArrowRight size={16} /></Button>
		</div>
		<div class="col">
			<Button size="small" variant="secondary">Secondary</Button>
			<Button size="small" variant="secondary" active>Secondary active</Button>
			<Button size="small" variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button size="small" variant="ghost">Ghost</Button>
			<Button size="small" variant="ghost" active>Ghost active</Button>
			<Button size="small" variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button size="small" variant="overlay">Overlay</Button>
			<Button size="small" variant="overlay" active>Overlay active</Button>
			<Button size="small" variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button size="small" variant="darkoverlay">Dark overlay</Button>
			<Button size="small" variant="darkoverlay" active>Dark overlay active</Button>
			<Button size="small" variant="darkoverlay" disabled>Dark overlay disabled</Button>
		</div>
	</div>
</section>
<section>
	<h1>Checkbox</h1>
	<div class="row">
		<div class="col">
			<Checkbox label="Checkbox" />
			<Checkbox label="Checkbox" checked />
			<Checkbox label="Checkbox" disabled />
			<Checkbox label="Checkbox" checked disabled />
		</div>
		<div class="col">
			<Checkbox dimension="large" label="Checkbox" />
			<Checkbox dimension="large" label="Checkbox" checked />
			<Checkbox dimension="large" label="Checkbox" disabled />
			<Checkbox dimension="large" label="Checkbox" checked disabled />
		</div>
		<div class="col">
			<Checkbox dimension="compact" label="Checkbox" />
			<Checkbox dimension="compact" label="Checkbox" checked />
			<Checkbox dimension="compact" label="Checkbox" disabled />
			<Checkbox dimension="compact" label="Checkbox" checked disabled />
		</div>
		<div class="col">
			<Checkbox dimension="small" label="Checkbox" />
			<Checkbox dimension="small" label="Checkbox" checked />
			<Checkbox dimension="small" label="Checkbox" disabled />
			<Checkbox dimension="small" label="Checkbox" checked disabled />
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
		padding-bottom: 5rem;
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
