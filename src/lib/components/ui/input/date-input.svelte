<script lang="ts">
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	let { ...restProps }: Props & HTMLInputAttributes = $props()
</script>

<Input type="date" {...restProps} />
