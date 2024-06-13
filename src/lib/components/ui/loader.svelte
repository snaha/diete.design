<script lang="ts">
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	type Props = {
		dimension?: Dimension
	}
	let { dimension = 'default' }: Props = $props()
</script>

<div class="loader {dimension}"></div>

<style lang="postcss">
	.loader {
		animation: spin 1s linear infinite;
		border: 2px solid var(--colors-ultra-high);
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
