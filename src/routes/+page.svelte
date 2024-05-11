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
	import MenuTitle from '$lib/components/ui/menu/menu-title.svelte'
	import MenuItem from '$lib/components/ui/menu/menu-item.svelte'
</script>

<div class="page-wrapper">
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
				<Button hover>Strong hover</Button>
				<Button active>Strong active</Button>
				<Button focus>Strong focus</Button>
				<Button disabled>Strong disabled</Button>
			</div>
			<div class="col">
				<Button><Checkmark size={24} /></Button>
				<Button hover><Checkmark size={24} /></Button>
				<Button active><Checkmark size={24} /></Button>
				<Button focus><Checkmark size={24} /></Button>
				<Button disabled><Checkmark size={24} /></Button>
			</div>
			<div class="col">
				<Button><Checkmark size={24} />Strong</Button>
				<Button hover><Checkmark size={24} />Strong hover</Button>
				<Button active><Checkmark size={24} />Strong active</Button>
				<Button focus><Checkmark size={24} />Strong focus</Button>
				<Button disabled><Checkmark size={24} />Strong disabled</Button>
			</div>
			<div class="col">
				<Button>Strong<ArrowRight size={24} /></Button>
				<Button hover>Strong hover<ArrowRight size={24} /></Button>
				<Button active>Strong active<ArrowRight size={24} /></Button>
				<Button focus>Strong focus<ArrowRight size={24} /></Button>
				<Button disabled>Strong disabled<ArrowRight size={24} /></Button>
			</div>
			<div class="col">
				<Button variant="secondary">Secondary</Button>
				<Button variant="secondary" hover>Secondary hover</Button>
				<Button variant="secondary" active>Secondary active</Button>
				<Button variant="secondary" focus>Secondary focus</Button>
				<Button variant="secondary" disabled>Secondary disabled</Button>
			</div>
			<div class="col">
				<Button variant="ghost">Ghost</Button>
				<Button variant="ghost" hover>Ghost hover</Button>
				<Button variant="ghost" active>Ghost active</Button>
				<Button variant="ghost" focus>Ghost focus</Button>
				<Button variant="ghost" disabled>Ghost disabled</Button>
			</div>
			<div class="col">
				<Button variant="solid">Solid</Button>
				<Button variant="solid" hover>Solid hover</Button>
				<Button variant="solid" active>Solid active</Button>
				<Button variant="solid" focus>Solid focus</Button>
				<Button variant="solid" disabled>Solid disabled</Button>
			</div>
			<div class="col">
				<Button variant="darkoverlay">Dark overlay</Button>
				<Button variant="darkoverlay" hover>Dark overlay hover</Button>
				<Button variant="darkoverlay" active>Dark overlay active</Button>
				<Button variant="darkoverlay" focus>Dark overlay focus</Button>
				<Button variant="darkoverlay" disabled>Dark overlay disabled</Button>
			</div>
			<div class="col">
				<Button variant="lightoverlay">Light overlay</Button>
				<Button variant="lightoverlay" hover>Light overlay hover</Button>
				<Button variant="lightoverlay" active>Light overlay active</Button>
				<Button variant="lightoverlay" focus>Light overlay focus</Button>
				<Button variant="lightoverlay" disabled>Light overlay disabled</Button>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Button dimension="large">Strong</Button>
				<Button dimension="large" hover>Strong hover</Button>
				<Button dimension="large" active>Strong active</Button>
				<Button dimension="large" focus>Strong focus</Button>
				<Button dimension="large" disabled>Strong disabled</Button>
			</div>
			<div class="col">
				<Button dimension="large"><Checkmark size={32} /></Button>
				<Button dimension="large" hover><Checkmark size={32} /></Button>
				<Button dimension="large" active><Checkmark size={32} /></Button>
				<Button dimension="large" focus><Checkmark size={32} /></Button>
				<Button dimension="large" disabled><Checkmark size={32} /></Button>
			</div>
			<div class="col">
				<Button dimension="large"><Checkmark size={32} />Strong</Button>
				<Button dimension="large" hover><Checkmark size={32} />Strong hover</Button>
				<Button dimension="large" active><Checkmark size={32} />Strong active</Button>
				<Button dimension="large" focus><Checkmark size={32} />Strong focus</Button>
				<Button dimension="large" disabled><Checkmark size={32} />Strong disabled</Button>
			</div>
			<div class="col">
				<Button dimension="large">Strong<ArrowRight size={32} /></Button>
				<Button dimension="large" hover>Strong hover<ArrowRight size={32} /></Button>
				<Button dimension="large" active>Strong active<ArrowRight size={32} /></Button>
				<Button dimension="large" focus>Strong focus<ArrowRight size={32} /></Button>
				<Button dimension="large" disabled>Strong disabled<ArrowRight size={32} /></Button>
			</div>
			<div class="col">
				<Button dimension="large" variant="secondary">Secondary</Button>
				<Button dimension="large" variant="secondary" hover>Secondary hover</Button>
				<Button dimension="large" variant="secondary" active>Secondary active</Button>
				<Button dimension="large" variant="secondary" focus>Secondary focus</Button>
				<Button dimension="large" variant="secondary" disabled>Secondary disabled</Button>
			</div>
			<div class="col">
				<Button dimension="large" variant="ghost">Ghost</Button>
				<Button dimension="large" variant="ghost" hover>Ghost hover</Button>
				<Button dimension="large" variant="ghost" active>Ghost active</Button>
				<Button dimension="large" variant="ghost" focus>Ghost focus</Button>
				<Button dimension="large" variant="ghost" disabled>Ghost disabled</Button>
			</div>
			<div class="col">
				<Button dimension="large" variant="solid">Solid</Button>
				<Button dimension="large" variant="solid" hover>Solid hover</Button>
				<Button dimension="large" variant="solid" active>Solid active</Button>
				<Button dimension="large" variant="solid" focus>Solid focus</Button>
				<Button dimension="large" variant="solid" disabled>Solid disabled</Button>
			</div>
			<div class="col">
				<Button dimension="large" variant="darkoverlay">Dark overlay</Button>
				<Button dimension="large" variant="darkoverlay" hover>Dark overlay hover</Button>
				<Button dimension="large" variant="darkoverlay" active>Dark overlay active</Button>
				<Button dimension="large" variant="darkoverlay" focus>Dark overlay focus</Button>
				<Button dimension="large" variant="darkoverlay" disabled>Dark overlay disabled</Button>
			</div>
			<div class="col">
				<Button dimension="large" variant="lightoverlay">Light overlay</Button>
				<Button dimension="large" variant="lightoverlay" hover>Light overlay hover</Button>
				<Button dimension="large" variant="lightoverlay" active>Light overlay active</Button>
				<Button dimension="large" variant="lightoverlay" focus>Light overlay focus</Button>
				<Button dimension="large" variant="lightoverlay" disabled>Light overlay disabled</Button>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Button dimension="compact">Strong</Button>
				<Button dimension="compact" hover>Strong hover</Button>
				<Button dimension="compact" active>Strong active</Button>
				<Button dimension="compact" focus>Strong focus</Button>
				<Button dimension="compact" disabled>Strong disabled</Button>
			</div>
			<div class="col">
				<Button dimension="compact"><Checkmark size={24} /></Button>
				<Button dimension="compact" hover><Checkmark size={24} /></Button>
				<Button dimension="compact" active><Checkmark size={24} /></Button>
				<Button dimension="compact" focus><Checkmark size={24} /></Button>
				<Button dimension="compact" disabled><Checkmark size={24} /></Button>
			</div>
			<div class="col">
				<Button dimension="compact"><Checkmark size={24} />Strong</Button>
				<Button dimension="compact" hover><Checkmark size={24} />Strong hover</Button>
				<Button dimension="compact" active><Checkmark size={24} />Strong active</Button>
				<Button dimension="compact" focus><Checkmark size={24} />Strong focus</Button>
				<Button dimension="compact" disabled><Checkmark size={24} />Strong disabled</Button>
			</div>
			<div class="col">
				<Button dimension="compact">Strong<ArrowRight size={24} /></Button>
				<Button dimension="compact" hover>Strong hover<ArrowRight size={24} /></Button>
				<Button dimension="compact" active>Strong active<ArrowRight size={24} /></Button>
				<Button dimension="compact" focus>Strong focus<ArrowRight size={24} /></Button>
				<Button dimension="compact" disabled>Strong disabled<ArrowRight size={24} /></Button>
			</div>
			<div class="col">
				<Button dimension="compact" variant="secondary">Secondary</Button>
				<Button dimension="compact" variant="secondary" hover>Secondary hover</Button>
				<Button dimension="compact" variant="secondary" active>Secondary active</Button>
				<Button dimension="compact" variant="secondary" focus>Secondary focus</Button>
				<Button dimension="compact" variant="secondary" disabled>Secondary disabled</Button>
			</div>
			<div class="col">
				<Button dimension="compact" variant="ghost">Ghost</Button>
				<Button dimension="compact" variant="ghost" hover>Ghost hover</Button>
				<Button dimension="compact" variant="ghost" active>Ghost active</Button>
				<Button dimension="compact" variant="ghost" focus>Ghost focus</Button>
				<Button dimension="compact" variant="ghost" disabled>Ghost disabled</Button>
			</div>
			<div class="col">
				<Button dimension="compact" variant="solid">Solid</Button>
				<Button dimension="compact" variant="solid" hover>Solid hover</Button>
				<Button dimension="compact" variant="solid" active>Solid active</Button>
				<Button dimension="compact" variant="solid" focus>Solid focus</Button>
				<Button dimension="compact" variant="solid" disabled>Solid disabled</Button>
			</div>
			<div class="col">
				<Button dimension="compact" variant="darkoverlay">Dark overlay</Button>
				<Button dimension="compact" variant="darkoverlay" hover>Dark overlay hover</Button>
				<Button dimension="compact" variant="darkoverlay" active>Dark overlay active</Button>
				<Button dimension="compact" variant="darkoverlay" focus>Dark overlay focus</Button>
				<Button dimension="compact" variant="darkoverlay" disabled>Dark overlay disabled</Button>
			</div>
			<div class="col">
				<Button dimension="compact" variant="lightoverlay">Light overlay</Button>
				<Button dimension="compact" variant="lightoverlay" hover>Light overlay hover</Button>
				<Button dimension="compact" variant="lightoverlay" active>Light overlay active</Button>
				<Button dimension="compact" variant="lightoverlay" focus>Light overlay focus</Button>
				<Button dimension="compact" variant="lightoverlay" disabled>Light overlay disabled</Button>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<Button dimension="small">Strong</Button>
				<Button dimension="small" hover>Strong hover</Button>
				<Button dimension="small" active>Strong active</Button>
				<Button dimension="small" focus>Strong focus</Button>
				<Button dimension="small" disabled>Strong disabled</Button>
			</div>
			<div class="col">
				<Button dimension="small"><Checkmark size={16} /></Button>
				<Button dimension="small"><Checkmark size={16} />Strong</Button>
				<Button dimension="small" active><Checkmark size={16} /></Button>
				<Button dimension="small" disabled><Checkmark size={16} /></Button>
				<Button dimension="small" disabled><Checkmark size={16} /></Button>
			</div>
			<div class="col">
				<Button dimension="small"><Checkmark size={16} />Strong</Button>
				<Button dimension="small" hover><Checkmark size={16} />Strong hover</Button>
				<Button dimension="small" active><Checkmark size={16} />Strong active</Button>
				<Button dimension="small" focus><Checkmark size={16} />Strong focus</Button>
				<Button dimension="small" disabled><Checkmark size={16} />Strong disabled</Button>
			</div>
			<div class="col">
				<Button dimension="small">Strong<ArrowRight size={16} /></Button>
				<Button dimension="small" hover>Strong hover<ArrowRight size={16} /></Button>
				<Button dimension="small" active>Strong active<ArrowRight size={16} /></Button>
				<Button dimension="small" focus>Strong focus<ArrowRight size={16} /></Button>
				<Button dimension="small" disabled>Strong disabled<ArrowRight size={16} /></Button>
			</div>
			<div class="col">
				<Button dimension="small" variant="secondary">Secondary</Button>
				<Button dimension="small" variant="secondary" hover>Secondary hover</Button>
				<Button dimension="small" variant="secondary" active>Secondary active</Button>
				<Button dimension="small" variant="secondary" focus>Secondary focus</Button>
				<Button dimension="small" variant="secondary" disabled>Secondary disabled</Button>
			</div>
			<div class="col">
				<Button dimension="small" variant="ghost">Ghost</Button>
				<Button dimension="small" variant="ghost" hover>Ghost hover</Button>
				<Button dimension="small" variant="ghost" active>Ghost active</Button>
				<Button dimension="small" variant="ghost" focus>Ghost focus</Button>
				<Button dimension="small" variant="ghost" disabled>Ghost disabled</Button>
			</div>
			<div class="col">
				<Button dimension="small" variant="solid">Solid</Button>
				<Button dimension="small" variant="solid" hover>Solid hover</Button>
				<Button dimension="small" variant="solid" active>Solid active</Button>
				<Button dimension="small" variant="solid" focus>Solid focus</Button>
				<Button dimension="small" variant="solid" disabled>Solid disabled</Button>
			</div>
			<div class="col">
				<Button dimension="small" variant="darkoverlay">Dark overlay</Button>
				<Button dimension="small" variant="darkoverlay" hover>Dark overlay hover</Button>
				<Button dimension="small" variant="darkoverlay" active>Dark overlay active</Button>
				<Button dimension="small" variant="darkoverlay" focus>Dark overlay focus</Button>
				<Button dimension="small" variant="darkoverlay" disabled>Dark overlay disabled</Button>
			</div>
			<div class="col">
				<Button dimension="small" variant="lightoverlay">Light overlay</Button>
				<Button dimension="small" variant="lightoverlay" hover>Light overlay hover</Button>
				<Button dimension="small" variant="lightoverlay" active>Light overlay active</Button>
				<Button dimension="small" variant="lightoverlay" focus>Light overlay focus</Button>
				<Button dimension="small" variant="lightoverlay" disabled>Light overlay disabled</Button>
			</div>
		</div>
	</section>
	<section id="checkbox">
		<Typography variant="h1">Checkbox</Typography>
		<div class="row">
			<div class="col">
				<Checkbox label="Unselected" />
				<Checkbox label="Hover unselected" hover />
				<Checkbox label="Pressed unselected" active />
				<Checkbox label="Focused unselected" focus />
				<Checkbox label="Disabled unselected" disabled />
				<Checkbox label="Selected" checked />
				<Checkbox label="Hover selected" checked hover />
				<Checkbox label="Pressed selected" checked active />
				<Checkbox label="Focused selected" checked focus />
				<Checkbox label="Disabled selected" checked disabled />
			</div>
			<div class="col">
				<Checkbox dimension="large" label="Unselected" />
				<Checkbox dimension="large" label="Hover unselected" hover />
				<Checkbox dimension="large" label="Pressed unselected" active />
				<Checkbox dimension="large" label="Focused unselected" focus />
				<Checkbox dimension="large" label="Disabled unselected" disabled />
				<Checkbox dimension="large" label="Selected" checked />
				<Checkbox dimension="large" label="Hover selected" checked hover />
				<Checkbox dimension="large" label="Pressed selected" checked active />
				<Checkbox dimension="large" label="Focused selected" checked focus />
				<Checkbox dimension="large" label="Disabled selected" checked disabled />
			</div>
			<div class="col">
				<Checkbox dimension="compact" label="Unselected" />
				<Checkbox dimension="compact" label="Hover unselected" hover />
				<Checkbox dimension="compact" label="Pressed unselected" active />
				<Checkbox dimension="compact" label="Focused unselected" focus />
				<Checkbox dimension="compact" label="Disabled unselected" disabled />
				<Checkbox dimension="compact" label="Selected" checked />
				<Checkbox dimension="compact" label="Hover selected" checked hover />
				<Checkbox dimension="compact" label="Pressed selected" checked active />
				<Checkbox dimension="compact" label="Focused selected" checked focus />
				<Checkbox dimension="compact" label="Disabled selected" checked disabled />
			</div>
			<div class="col">
				<Checkbox dimension="small" label="Unselected" />
				<Checkbox dimension="small" label="Hover unselected" hover />
				<Checkbox dimension="small" label="Pressed unselected" active />
				<Checkbox dimension="small" label="Focused unselected" focus />
				<Checkbox dimension="small" label="Disabled unselected" disabled />
				<Checkbox dimension="small" label="Selected" checked />
				<Checkbox dimension="small" label="Hover selected" checked hover />
				<Checkbox dimension="small" label="Pressed selected" checked active />
				<Checkbox dimension="small" label="Focused selected" checked focus />
				<Checkbox dimension="small" label="Disabled selected" checked disabled />
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
				<Switch label="Off" />
				<Switch label="Hover off" hover />
				<Switch label="Active off" active />
				<Switch label="Focus off" focus />
				<Switch label="Disabled off" disabled />
				<Switch label="On" checked />
				<Switch label="Hover on" checked hover />
				<Switch label="Active on" checked active />
				<Switch label="Focus on" checked focus />
				<Switch label="Disabled on" checked disabled />
			</div>
			<div class="col">
				<Switch dimension="large" label="Off" />
				<Switch dimension="large" label="Hover off" hover />
				<Switch dimension="large" label="Active off" active />
				<Switch dimension="large" label="Focus off" focus />
				<Switch dimension="large" label="Disabled off" disabled />
				<Switch dimension="large" label="On" checked />
				<Switch dimension="large" label="Hover on" checked hover />
				<Switch dimension="large" label="Active on" checked active />
				<Switch dimension="large" label="Focus on" checked focus />
				<Switch dimension="large" label="Disabled on" checked disabled />
			</div>
			<div class="col">
				<Switch dimension="compact" label="Off" />
				<Switch dimension="compact" label="Hover off" hover />
				<Switch dimension="compact" label="Active off" active />
				<Switch dimension="compact" label="Focus off" focus />
				<Switch dimension="compact" label="Disabled off" disabled />
				<Switch dimension="compact" label="On" checked />
				<Switch dimension="compact" label="Hover on" checked hover />
				<Switch dimension="compact" label="Active on" checked active />
				<Switch dimension="compact" label="Focus on" checked focus />
				<Switch dimension="compact" label="Disabled on" checked disabled />
			</div>
			<div class="col">
				<Switch dimension="small" label="Off" />
				<Switch dimension="small" label="Hover off" hover />
				<Switch dimension="small" label="Active off" active />
				<Switch dimension="small" label="Focus off" focus />
				<Switch dimension="small" label="Disabled off" disabled />
				<Switch dimension="small" label="On" checked />
				<Switch dimension="small" label="Hover on" checked hover />
				<Switch dimension="small" label="Active on" checked active />
				<Switch dimension="small" label="Focus on" checked focus />
				<Switch dimension="small" label="Disabled on" checked disabled />
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
				<Input placeholder="Input label" value="With unit" unit="%">This is some helper text.</Input
				>
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
				<Select placeholder="Select label">
					{#snippet helperText()}
						Without any default value.
					{/snippet}
					<Option value="1">Label 1</Option>
					<Option value="2">Label 2</Option>
					<Option value="3">Label 3</Option>
					<Option value="4">Label 4</Option>
					<Option value="5">Label 5</Option>
					<Option value="6">Label 6</Option>
					<Option value="7">Label 7</Option>
				</Select>
				<Select value="2" placeholder="Select label">
					{#snippet helperText()}
						With default value.
					{/snippet}
					<Option value="1">Label 1</Option>
					<Option value="2">Label 2</Option>
					<Option value="3">Label 3</Option>
					<Option value="4">Label 4</Option>
					<Option value="5">Label 5</Option>
					<Option value="6">Label 6</Option>
					<Option value="7">Label 7</Option>
				</Select>
				<Select value="2" placeholder="Select label" disabled>
					{#snippet helperText()}
						Disabled.
					{/snippet}
					<Option value="1">Label 1</Option>
					<Option value="2">Label 2</Option>
					<Option value="3">Label 3</Option>
					<Option value="4">Label 4</Option>
					<Option value="5">Label 5</Option>
					<Option value="6">Label 6</Option>
					<Option value="7">Label 7</Option>
				</Select>
				<Select value="2" placeholder="Select label">
					{#snippet helperText()}
						No labels, just values.
					{/snippet}
					<Option value="1" />
					<Option value="2" />
					<Option value="3" />
					<Option value="4" />
					<Option value="5" />
					<Option value="6" />
					<Option value="7" />
				</Select>
				<Select>
					{#snippet helperText()}
						No options.
					{/snippet}
				</Select>
			</div>
			<div class="col">
				<Select dimension="large" placeholder="Select label">
					{#snippet helperText()}
						This is some helper text.
					{/snippet}
					<Option value="1">Label 1</Option>
					<Option value="2">Label 2</Option>
					<Option value="3">Label 3</Option>
					<Option value="4">Label 4</Option>
					<Option value="5">Label 5</Option>
					<Option value="6">Label 6</Option>
					<Option value="7">Label 7</Option>
				</Select>
				<Select value="2" dimension="large" placeholder="Select label">
					{#snippet helperText()}
						This is some helper text.
					{/snippet}
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
				<Select dimension="compact" placeholder="Select label">
					{#snippet helperText()}
						This is some helper text.
					{/snippet}
					<Option value="1">Label 1</Option>
					<Option value="2">Label 2</Option>
					<Option value="3">Label 3</Option>
					<Option value="4">Label 4</Option>
					<Option value="5">Label 5</Option>
					<Option value="6">Label 6</Option>
					<Option value="7">Label 7</Option>
				</Select>
				<Select value="2" dimension="compact" placeholder="Select label">
					{#snippet helperText()}
						This is some helper text.
					{/snippet}
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
				<Select dimension="small" placeholder="Select label">
					{#snippet helperText()}
						This is some helper text.
					{/snippet}
					<Option value="1">Label 1</Option>
					<Option value="2">Label 2</Option>
					<Option value="3">Label 3</Option>
					<Option value="4">Label 4</Option>
					<Option value="5">Label 5</Option>
					<Option value="6">Label 6</Option>
					<Option value="7">Label 7</Option>
				</Select>
				<Select value="2" dimension="small" placeholder="Select label">
					{#snippet helperText()}
						This is some helper text.
					{/snippet}
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
	<section id="menu">
		<Typography variant="h1">Menu</Typography>
		<div class="row">
			<div class="col">
				<MenuTitle bold content="Closed">
					<MenuItem href="#button">Button</MenuItem>
					<MenuItem href="#checkbox">Checkbox</MenuItem>
					<MenuItem href="#radio">Radio button</MenuItem>
					<MenuItem href="#switch">Switch</MenuItem>
					<MenuItem href="#typography">Typography</MenuItem>
				</MenuTitle>
				<MenuTitle bold content="Opened" open>
					<MenuItem href="#button" disabled>Button</MenuItem>
					<MenuItem href="#checkbox">Checkbox</MenuItem>
					<MenuItem href="#radio">Radio button</MenuItem>
					<MenuItem href="#switch">Switch</MenuItem>
					<MenuItem href="#typography">Typography</MenuItem>
				</MenuTitle>
				<MenuTitle bold content="Disabled" disabled />
				<MenuTitle bold content="Open disabled" open disabled>
					<MenuItem href="#button">Button</MenuItem>
					<MenuItem href="#checkbox">Checkbox</MenuItem>
					<MenuItem href="#radio">Radio button</MenuItem>
					<MenuItem href="#switch">Switch</MenuItem>
					<MenuItem href="#typography">Typography</MenuItem>
				</MenuTitle>
			</div>
			<div class="col">
				<MenuTitle bold content="Organic taiyaki" dimension="large">
					<MenuItem href="#button">Button</MenuItem>
					<MenuItem href="#checkbox">Checkbox</MenuItem>
					<MenuItem href="#radio">Radio button</MenuItem>
					<MenuItem href="#switch">Switch</MenuItem>
					<MenuItem href="#typography">Typography</MenuItem>
				</MenuTitle>
				<MenuTitle bold content="Organic taiyaki" dimension="large" open />
			</div>
			<div class="col">
				<MenuTitle bold content="Organic taiyaki" dimension="compact">
					<MenuItem href="#button">Button</MenuItem>
					<MenuItem href="#checkbox">Checkbox</MenuItem>
					<MenuItem href="#radio">Radio button</MenuItem>
					<MenuItem href="#switch">Switch</MenuItem>
					<MenuItem href="#typography">Typography</MenuItem>
				</MenuTitle>
				<MenuTitle bold content="Organic taiyaki" dimension="compact" open />
			</div>
			<div class="col">
				<MenuTitle bold content="Organic taiyaki" dimension="small">
					<MenuItem href="#button">Button</MenuItem>
					<MenuItem href="#checkbox">Checkbox</MenuItem>
					<MenuItem href="#radio">Radio button</MenuItem>
					<MenuItem href="#switch">Switch</MenuItem>
					<MenuItem href="#typography">Typography</MenuItem>
				</MenuTitle>
				<MenuTitle bold content="Organic taiyaki" dimension="small" open />
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
</div>

<style>
	.page-wrapper {
		background-color: var(--colors-ultra-low);
	}

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
