<script lang="ts">
	import { getContext } from 'svelte'
	import type { MenuStore } from './menu-store.svelte'
	import Button, { type Props } from '../button.svelte'

	let { dimension, disabled, ...restProps }: Props = $props()

	const store = getContext<MenuStore>('menu-store')
</script>

<Button
	class="menu-item"
	variant="ghost"
	dimension={dimension ?? store.size}
	disabled={disabled ?? store.disabled}
	{...restProps}
/>

<style lang="postcss">
	:global(.menu-item) {
		justify-content: space-between !important;
	}
</style>
