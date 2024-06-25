<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Props = {
		dimension?: Dimension
	}
	let { dimension = 'default', ...restProps }: Props & HTMLAttributes<HTMLDivElement> = $props()
</script>

<div class="loader {dimension}" {...restProps}></div>

<style lang="postcss">
	.loader {
		animation: spin 1s linear infinite;
		border: 2px solid var(--loader-color, var(--colors-ultra-high));
		border-top: 2px solid transparent;
		border-radius: 50%;
		&.default,
		&.compact,
		&.small {
			width: 1rem;
			height: 1rem;
		}
		&.large {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
