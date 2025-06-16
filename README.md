# diete.design

A modern Svelte UI component library with tree-shaking support.

## Installation

```bash
npm install diete.design
# or
pnpm add diete.design
# or
yarn add diete.design
```

## Usage

Thanks to tree-shaking support, you can import individual components to keep your bundle size minimal:

```svelte
<script>
	import Button from 'diete.design/button'
	import Badge from 'diete.design/badge'
	import Input from 'diete.design/input'
</script>

<Button>Click me</Button>
<Badge>New</Badge>
<Input placeholder="Enter text..." />
```

## Available Components

### Basic Components

- `diete.design/badge` - Badge component
- `diete.design/button` - Button component
- `diete.design/checkbox` - Checkbox component
- `diete.design/divider` - Divider component
- `diete.design/loader` - Loading spinner component
- `diete.design/progress` - Progress bar component
- `diete.design/slider` - Slider component
- `diete.design/range-slider` - Range slider component
- `diete.design/switch` - Toggle switch component
- `diete.design/textarea` - Textarea component
- `diete.design/tooltip` - Tooltip component
- `diete.design/typography` - Typography component

### Input Components

- `diete.design/input` - Basic input component
- `diete.design/color-input` - Color picker input
- `diete.design/date-input` - Date input component
- `diete.design/number-input` - Number input component
- `diete.design/search-input` - Search input component

### Menu Components

- `diete.design/menu-item` - Menu item component
- `diete.design/menu-title` - Menu title component
- `diete.design/menu-store` - Menu state management

### Radio Button Components

- `diete.design/radio` - Radio button component
- `diete.design/radio-group` - Radio button group
- `diete.design/radio-store` - Radio state management

### Select Components

- `diete.design/select` - Select dropdown component
- `diete.design/option` - Select option component
- `diete.design/select-store` - Select state management

### Utilities

- `diete.design/theme-store` - Theme management store
- `diete.design/colors` - Color utilities

## Bulk Import

You can also import all components at once (though this will include everything in your bundle):

```svelte
<script>
	import { Button, Badge, Input } from 'diete.design'
</script>
```

## Requirements

- Svelte 5+
- SvelteKit 2+ (for projects using SvelteKit)

## Development

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
