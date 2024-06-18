<script lang="ts">
	import { Delete, Search } from 'carbon-icons-svelte'
	import Button from '../button.svelte'
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface SearchProps extends Props {
		withButton?: boolean
	}
	let {
		value = $bindable(),
		dimension,
		disabled,
		withButton = false,
		...restProps
	}: SearchProps & HTMLInputAttributes = $props()
	let size: 16 | 24 | 32 = $derived(dimension === 'large' ? 32 : dimension === 'small' ? 16 : 24)
</script>

{#snippet buttons(input)}
	{#if withButton}
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
		<Button {dimension} {disabled} variant="secondary">
			<Search {size} />
		</Button>
	{:else}
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
	{/if}
{/snippet}

{#snippet iconStart()}
	<Search {size} />
{/snippet}

<Input
	type="search"
	{dimension}
	{disabled}
	iconStart={!withButton ? iconStart : undefined}
	{buttons}
	bind:value
	{...restProps}
/>
