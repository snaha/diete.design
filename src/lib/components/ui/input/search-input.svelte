<script lang="ts">
	import { Delete, Search } from 'carbon-icons-svelte'
	import Button from '../button.svelte'
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	let {
		value = $bindable(),
		dimension,
		disabled,
		...restProps
	}: Props & HTMLInputAttributes = $props()
	let size: 16 | 24 | 32 = $derived(dimension === 'large' ? 32 : dimension === 'small' ? 16 : 24)
</script>

{#snippet iconStart()}
	<Search size={dimension === 'large' ? 32 : dimension === 'small' ? 16 : 24} />
{/snippet}

{#snippet buttons(input)}
	<Button
		{dimension}
		{disabled}
		variant="secondary"
		onclick={() => {
			value = ''
			input.focus()
		}}
	>
		<Delete {size} />
	</Button>
{/snippet}

<Input type="search" {dimension} {disabled} {iconStart} {buttons} bind:value {...restProps} />
