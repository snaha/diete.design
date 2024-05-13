<script lang="ts">
	import { getContext } from 'svelte'
	import type { MenuStore } from './menu-store.svelte'
	import Button, { type Props } from '../button.svelte'

	let { dimension, disabled, tabindex, ...restProps }: Props = $props()

	const store = getContext<MenuStore>('menu-store')
</script>

<Button
	variant="ghost"
	dimension={dimension ?? store.size}
	disabled={disabled ?? store.disabled}
	tabindex={disabled || store.disabled || !store.open ? -1 : tabindex}
	{...restProps}
/>
