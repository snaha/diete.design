<script lang="ts">
	import { Delete, Search } from 'carbon-icons-svelte'
	import Button from '../button.svelte'
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface SearchProps extends Props {
		withButton?: boolean
	}
	let {
		value = $bindable(''),
		variant = 'outline',
		dimension,
		disabled,
		withButton = false,
		...restProps
	}: SearchProps & Omit<HTMLInputAttributes, 'type'> = $props()
	let size: 16 | 24 | 32 = $derived(dimension === 'large' ? 32 : dimension === 'small' ? 16 : 24)
</script>

{#snippet buttons(input:HTMLInputElement)}
	{#if withButton}
		<Button
			{dimension}
			{disabled}
			variant={variant === 'outline' ? 'secondary' : 'solid'}
			onclick={() => {
				value = ''
				input.focus()
			}}
		>
			<Delete {size} />
		</Button>
		<Button {dimension} {disabled} variant={variant === 'outline' ? 'secondary' : 'solid'}>
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
	class={`${value !== '' ? 'noEmpty' : ''}`}
	{dimension}
	{disabled}
	iconStart={!withButton ? iconStart : undefined}
	{buttons}
	bind:value
	{variant}
	{...restProps}
	type="search"
/>


<style>
	:global(.default.noEmpty .wrapper, input) {
		width: calc(100% - 49px);
	}
	:global(.large.noEmpty .wrapper, input) {
		width: calc(100% - 57px);
	}
	:global(.compact.noEmpty .wrapper, input) {
		width: calc(100% - 41px);
	}
	:global(.small.noEmpty .wrapper, input) {
		width: calc(100% - 33px);
	}
	:global(.control-buttons) {
		position: absolute;
		right: 0;
		transform: translateX(100%);
	}
</style>
