<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'

	interface Props extends HTMLAttributes<HTMLHRElement> {
		class?: string
	}
	let { class: className = '', ...restProps }: Props = $props()
</script>

<hr class={className} {...restProps} />

<style>
	hr {
		appearance: none;
		margin-top: var(--double-padding);
		margin-bottom: var(--double-padding);
		border-width: 1px;
		border-style: solid;
		width: 100%;
		color: var(--colors-low);
	}
</style>
