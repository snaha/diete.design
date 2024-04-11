<script lang="ts">
	import { Checkmark, ArrowRight } from 'carbon-icons-svelte'

	import Button from '$lib/components/ui/button.svelte'
	import Checkbox from '$lib/components/ui/checkbox.svelte'
	import Switch from '$lib/components/switch.svelte'
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
			<Button dimension="large">Strong</Button>
			<Button dimension="large" active>Strong active</Button>
			<Button dimension="large" disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button dimension="large"><Checkmark size={32} /></Button>
			<Button dimension="large" active><Checkmark size={32} /></Button>
			<Button dimension="large" disabled><Checkmark size={32} /></Button>
		</div>
		<div class="col">
			<Button dimension="large"><Checkmark size={32} />Strong</Button>
			<Button dimension="large" active><Checkmark size={32} />Strong active</Button>
			<Button dimension="large" disabled><Checkmark size={32} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button dimension="large">Strong<ArrowRight size={32} /></Button>
			<Button dimension="large" active>Strong active<ArrowRight size={32} /></Button>
			<Button dimension="large" disabled>Strong disabled<ArrowRight size={32} /></Button>
		</div>
		<div class="col">
			<Button dimension="large" variant="secondary">Secondary</Button>
			<Button dimension="large" variant="secondary" active>Secondary active</Button>
			<Button dimension="large" variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button dimension="large" variant="ghost">Ghost</Button>
			<Button dimension="large" variant="ghost" active>Ghost active</Button>
			<Button dimension="large" variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button dimension="large" variant="overlay">Overlay</Button>
			<Button dimension="large" variant="overlay" active>Overlay active</Button>
			<Button dimension="large" variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button dimension="large" variant="darkoverlay">Dark overlay</Button>
			<Button dimension="large" variant="darkoverlay" active>Dark overlay active</Button>
			<Button dimension="large" variant="darkoverlay" disabled>Dark overlay disabled</Button>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Button dimension="compact">Strong</Button>
			<Button dimension="compact" active>Strong active</Button>
			<Button dimension="compact" disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button dimension="compact"><Checkmark size={24} /></Button>
			<Button dimension="compact" active><Checkmark size={24} /></Button>
			<Button dimension="compact" disabled><Checkmark size={24} /></Button>
		</div>
		<div class="col">
			<Button dimension="compact"><Checkmark size={24} />Strong</Button>
			<Button dimension="compact" active><Checkmark size={24} />Strong active</Button>
			<Button dimension="compact" disabled><Checkmark size={24} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button dimension="compact">Strong<ArrowRight size={24} /></Button>
			<Button dimension="compact" active>Strong active<ArrowRight size={24} /></Button>
			<Button dimension="compact" disabled>Strong disabled<ArrowRight size={24} /></Button>
		</div>
		<div class="col">
			<Button dimension="compact" variant="secondary">Secondary</Button>
			<Button dimension="compact" variant="secondary" active>Secondary active</Button>
			<Button dimension="compact" variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button dimension="compact" variant="ghost">Ghost</Button>
			<Button dimension="compact" variant="ghost" active>Ghost active</Button>
			<Button dimension="compact" variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button dimension="compact" variant="overlay">Overlay</Button>
			<Button dimension="compact" variant="overlay" active>Overlay active</Button>
			<Button dimension="compact" variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button dimension="compact" variant="darkoverlay">Dark overlay</Button>
			<Button dimension="compact" variant="darkoverlay" active>Dark overlay active</Button>
			<Button dimension="compact" variant="darkoverlay" disabled>Dark overlay disabled</Button>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<Button dimension="small">Strong</Button>
			<Button dimension="small" active>Strong active</Button>
			<Button dimension="small" disabled>Strong disabled</Button>
		</div>
		<div class="col">
			<Button dimension="small"><Checkmark size={16} /></Button>
			<Button dimension="small" active><Checkmark size={16} /></Button>
			<Button dimension="small" disabled><Checkmark size={16} /></Button>
		</div>
		<div class="col">
			<Button dimension="small"><Checkmark size={16} />Strong</Button>
			<Button dimension="small" active><Checkmark size={16} />Strong active</Button>
			<Button dimension="small" disabled><Checkmark size={16} />Strong disabled</Button>
		</div>
		<div class="col">
			<Button dimension="small">Strong<ArrowRight size={16} /></Button>
			<Button dimension="small" active>Strong active<ArrowRight size={16} /></Button>
			<Button dimension="small" disabled>Strong disabled<ArrowRight size={16} /></Button>
		</div>
		<div class="col">
			<Button dimension="small" variant="secondary">Secondary</Button>
			<Button dimension="small" variant="secondary" active>Secondary active</Button>
			<Button dimension="small" variant="secondary" disabled>Secondary disabled</Button>
		</div>
		<div class="col">
			<Button dimension="small" variant="ghost">Ghost</Button>
			<Button dimension="small" variant="ghost" active>Ghost active</Button>
			<Button dimension="small" variant="ghost" disabled>Ghost disabled</Button>
		</div>
		<div class="col">
			<Button dimension="small" variant="overlay">Overlay</Button>
			<Button dimension="small" variant="overlay" active>Overlay active</Button>
			<Button dimension="small" variant="overlay" disabled>Overlay disabled</Button>
		</div>
		<div class="col">
			<Button dimension="small" variant="darkoverlay">Dark overlay</Button>
			<Button dimension="small" variant="darkoverlay" active>Dark overlay active</Button>
			<Button dimension="small" variant="darkoverlay" disabled>Dark overlay disabled</Button>
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
<section>
	<div class="row">
		<div class="col">
			<Switch>Switch button</Switch>
			<Switch checked>Switch button</Switch>
			<Switch disabled>Switch button</Switch>
			<Switch checked disabled>Switch button</Switch>
		</div>
		<div class="col">
			<Switch compact="large">Switch button</Switch>
			<Switch compact="large" checked>Switch button</Switch>
			<Switch compact="large" disabled>Switch button</Switch>
			<Switch compact="large" checked disabled>Switch button</Switch>
		</div>
		<div class="col">
			<Switch compact="compact">Switch button</Switch>
			<Switch compact="compact" checked>Switch button</Switch>
			<Switch compact="compact" disabled>Switch button</Switch>
			<Switch compact="compact" checked disabled>Switch button</Switch>
		</div>
		<div class="col">
			<Switch compact="small">Switch button</Switch>
			<Switch compact="small" checked>Switch button</Switch>
			<Switch compact="small" disabled>Switch button</Switch>
			<Switch compact="small" checked disabled>Switch button</Switch>
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
