<script lang="ts">
	import { Checkmark, ArrowRight } from 'carbon-icons-svelte'

	import Button from '$lib/components/ui/button.svelte'
	import Checkbox from '$lib/components/ui/checkbox.svelte'
	import Input from '$lib/components/ui/input.svelte'
	import Radio from '$lib/components/ui/radio.svelte'
	import Typography from '$lib/components/ui/typography.svelte'
	import Switch from '$lib/components/ui/switch.svelte'
	import Select from '$lib/components/ui/select/select.svelte'
	import Option from '$lib/components/ui/select/option.svelte'
	import MenuTitle from '$lib/components/ui/menu/menuTitle.svelte'
	import MenuItem from '$lib/components/ui/menu/menuItem.svelte'
</script>

<Typography variant="h1">A design system for purists</Typography>
<Typography variant="default" element="p">
	Radically minimal UI components, that you can copy directly into your project. Diète is for
	uncompromising, free-spirited app makers who want to remain independent.
</Typography>

<section id="button">
	<Typography variant="h1">Button</Typography>
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
<section id="checkbox">
	<Typography variant="h1">Checkbox</Typography>
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
<section id="radio">
	<Typography variant="h1">Radio button</Typography>
	<div class="row">
		<div class="col">
			<Radio label="Radio button" name="rb" />
			<Radio label="Radio button" name="rb" checked />
			<Radio label="Radio button" disabled />
			<Radio label="Radio button" checked disabled />
		</div>
		<div class="col">
			<Radio dimension="large" label="Radio button" name="rbL" />
			<Radio dimension="large" label="Radio button" name="rbL" checked />
			<Radio dimension="large" label="Radio button" disabled />
			<Radio dimension="large" label="Radio button" checked disabled />
		</div>
		<div class="col">
			<Radio dimension="compact" label="Radio button" name="rbC" />
			<Radio dimension="compact" label="Radio button" name="rbC" checked />
			<Radio dimension="compact" label="Radio button" disabled />
			<Radio dimension="compact" label="Radio button" checked disabled />
		</div>
		<div class="col">
			<Radio dimension="small" label="Radio button" name="rbS" />
			<Radio dimension="small" label="Radio button" name="rbS" checked />
			<Radio dimension="small" label="Radio button" disabled />
			<Radio dimension="small" label="Radio button" checked disabled />
		</div>
	</div>
</section>
<section id="switch">
	<Typography variant="h1">Switch</Typography>
	<div class="row">
		<div class="col">
			<Switch label="Switch button" />
			<Switch label="Switch button" checked />
			<Switch label="Switch button" disabled />
			<Switch label="Switch button" checked disabled />
		</div>
		<div class="col">
			<Switch dimension="large" label="Switch button" />
			<Switch dimension="large" label="Switch button" checked />
			<Switch dimension="large" label="Switch button" disabled />
			<Switch dimension="large" label="Switch button" checked disabled />
		</div>
		<div class="col">
			<Switch dimension="compact" label="Switch button" />
			<Switch dimension="compact" label="Switch button" checked />
			<Switch dimension="compact" label="Switch button" disabled />
			<Switch dimension="compact" label="Switch button" checked disabled />
		</div>
		<div class="col">
			<Switch dimension="small" label="Switch button" />
			<Switch dimension="small" label="Switch button" checked />
			<Switch dimension="small" label="Switch button" disabled />
			<Switch dimension="small" label="Switch button" checked disabled />
		</div>
	</div>
</section>
<section id="typography">
	<Typography variant="h1">Typography</Typography>
	<div class="row">
		<div class="col">
			<Typography variant="h1">h1 Title</Typography>
			<Typography variant="h2">h2 Title</Typography>
			<Typography variant="h3">h3 Title</Typography>
			<Typography variant="h4">h4 Title</Typography>
			<Typography variant="h5">h5 Title</Typography>
			<Typography variant="h6">h6 Title</Typography>
		</div>
		<div class="col">
			<Typography variant="large" element="p">Large paragraph</Typography>
			<Typography variant="default" element="p">Paragraph</Typography>
			<Typography variant="small" element="p">Small-paragraph</Typography>
		</div>
		<div class="col">
			<Typography>Sans</Typography>
			<Typography italic>Sans Italic</Typography>
			<Typography bold>Sans Bold</Typography>
			<Typography bold italic>Sans Bold Italic</Typography>
			<Typography font="serif">Serif</Typography>
			<Typography font="serif" italic>Serif Italic</Typography>
			<Typography font="serif" bold>Serif Bold</Typography>
			<Typography font="serif" bold italic>Serif Bold Italic</Typography>
			<Typography font="mono">Mono</Typography>
			<Typography font="mono" italic>Mono Italic</Typography>
			<Typography font="mono" bold>Mono Bold</Typography>
			<Typography font="mono" bold italic>Mono Bold Italic</Typography>
		</div>
	</div>
</section>
<section>
	<Typography variant="h1">Input</Typography>
	<div class="row">
		<div class="col">
			<Input placeholder="Input label">This is some helper text.</Input>
			<Input placeholder="Input label" value="With text">This is some helper text.</Input>
			<Input placeholder="Input label" value="Disabled" disabled>This is some helper text.</Input>
			<Input placeholder="Input label" value="With unit" unit="%">This is some helper text.</Input>
		</div>
		<div class="col">
			<Input placeholder="Input label" dimension="large">This is some helper text.</Input>
			<Input placeholder="Input label" dimension="large" value="With text">
				This is some helper text.
			</Input>
			<Input placeholder="Input label" dimension="large" value="Disabled" disabled>
				This is some helper text.
			</Input>
			<Input placeholder="Input label" dimension="large" value="With unit" unit="%">
				This is some helper text.
			</Input>
		</div>
		<div class="col">
			<Input placeholder="Input label" dimension="compact">This is some helper text.</Input>
			<Input placeholder="Input label" dimension="compact" value="With text">
				This is some helper text.
			</Input>
			<Input placeholder="Input label" dimension="compact" value="Disabled" disabled>
				This is some helper text.
			</Input>
			<Input placeholder="Input label" dimension="compact" value="With unit" unit="%">
				This is some helper text.
			</Input>
		</div>
		<div class="col">
			<Input placeholder="Input label" dimension="small">This is some helper text.</Input>
			<Input placeholder="Input label" dimension="small" value="With text">
				This is some helper text.
			</Input>
			<Input placeholder="Input label" dimension="small" value="Disabled" disabled>
				This is some helper text.
			</Input>
			<Input placeholder="Input label" dimension="small" value="With unit" unit="%">
				This is some helper text.
			</Input>
		</div>
	</div>
</section>
<section>
	<Typography variant="h1">Input (horizontal)</Typography>
	<div class="row">
		<div class="col">
			<Input layout="horizontal" placeholder="Placeholder">Input label</Input>
			<Input layout="horizontal" placeholder="Placeholder" value="With text">Input label</Input>
			<Input layout="horizontal" placeholder="Placeholder" value="Disabled" disabled
				>Input label</Input
			>
			<Input layout="horizontal" placeholder="Placeholder" value="With unit" unit="%"
				>Input label</Input
			>
		</div>
		<div class="col">
			<Input layout="horizontal" dimension="large" placeholder="Placeholder">Input label</Input>
			<Input layout="horizontal" dimension="large" placeholder="Placeholder" value="With text"
				>Input label</Input
			>
			<Input
				layout="horizontal"
				dimension="large"
				placeholder="Placeholder"
				value="Disabled"
				disabled>Input label</Input
			>
			<Input
				layout="horizontal"
				dimension="large"
				placeholder="Placeholder"
				value="With unit"
				unit="%">Input label</Input
			>
		</div>
		<div class="col">
			<Input layout="horizontal" dimension="compact" placeholder="Placeholder">Input label</Input>
			<Input layout="horizontal" dimension="compact" placeholder="Placeholder" value="With text"
				>Input label</Input
			>
			<Input
				layout="horizontal"
				dimension="compact"
				placeholder="Placeholder"
				value="Disabled"
				disabled>Input label</Input
			>
			<Input
				layout="horizontal"
				dimension="compact"
				placeholder="Placeholder"
				value="With unit"
				unit="%">Input label</Input
			>
		</div>
		<div class="col">
			<Input layout="horizontal" dimension="small" placeholder="Placeholder">Input label</Input>
			<Input layout="horizontal" dimension="small" placeholder="Placeholder" value="With text"
				>Input label</Input
			>
			<Input
				layout="horizontal"
				dimension="small"
				placeholder="Placeholder"
				value="Disabled"
				disabled>Input label</Input
			>
			<Input
				layout="horizontal"
				dimension="small"
				placeholder="Placeholder"
				value="With unit"
				unit="%">Input label</Input
			>
		</div>
	</div>
</section>
<section>
	<Typography variant="h1">Select</Typography>
	<div class="row">
		<div class="col">
			<Select placeholder="Select label" helperText="Without any default value.">
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
			<Select value="2" placeholder="Select label" helperText="With default value.">
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
			<Select value="2" placeholder="Select label" helperText="Disabled." disabled>
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
			<Select value="2" placeholder="Select label" helperText="No labels, just values.">
				<Option value="1" />
				<Option value="2" />
				<Option value="3" />
				<Option value="4" />
				<Option value="5" />
				<Option value="6" />
				<Option value="7" />
			</Select>
			<Select helperText="No options." />
		</div>
		<div class="col">
			<Select dimension="large" placeholder="Select label" helperText="This is some helper text.">
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
			<Select
				value="2"
				dimension="large"
				placeholder="Select label"
				helperText="This is some helper text."
			>
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
		</div>
		<div class="col">
			<Select dimension="compact" placeholder="Select label" helperText="This is some helper text.">
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
			<Select
				value="2"
				dimension="compact"
				placeholder="Select label"
				helperText="This is some helper text."
			>
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
		</div>
		<div class="col">
			<Select dimension="small" placeholder="Select label" helperText="This is some helper text.">
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
			<Select
				value="2"
				dimension="small"
				placeholder="Select label"
				helperText="This is some helper text."
			>
				<Option value="1">Label 1</Option>
				<Option value="2">Label 2</Option>
				<Option value="3">Label 3</Option>
				<Option value="4">Label 4</Option>
				<Option value="5">Label 5</Option>
				<Option value="6">Label 6</Option>
				<Option value="7">Label 7</Option>
			</Select>
		</div>
	</div>
</section>
<section>
	<div class="row">
		<div class="col">
			<MenuTitle title content="Organic taiyaki">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle title content="Organic taiyaki" open />
		</div>
		<div class="col">
			<MenuTitle title content="Organic taiyaki" dimension="large">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle title content="Organic taiyaki" dimension="large" open />
		</div>
		<div class="col">
			<MenuTitle title content="Organic taiyaki" dimension="compact">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle title content="Organic taiyaki" dimension="compact" open />
		</div>
		<div class="col">
			<MenuTitle title content="Organic taiyaki" dimension="small">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle title content="Organic taiyaki" dimension="small" open />
		</div>
	</div>
	<div class="row">
		<div class="col">
			<MenuTitle content="Organic taiyaki">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle content="Organic taiyaki" open />
		</div>
		<div class="col">
			<MenuTitle content="Organic taiyaki" dimension="large">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle content="Organic taiyaki" dimension="large" open />
		</div>
		<div class="col">
			<MenuTitle content="Organic taiyaki" dimension="compact">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle content="Organic taiyaki" dimension="compact" open />
		</div>
		<div class="col">
			<MenuTitle content="Organic taiyaki" dimension="small">
				<MenuItem href="#button">Button</MenuItem>
				<MenuItem href="#checkbox">Checkbox</MenuItem>
				<MenuItem href="#radio">Radio button</MenuItem>
				<MenuItem href="#switch">Switch</MenuItem>
				<MenuItem href="#typography">Typography</MenuItem>
			</MenuTitle>
			<MenuTitle content="Organic taiyaki" dimension="small" open />
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
