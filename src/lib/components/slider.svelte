<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Content = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		compact?: Content
	}
	let { labelFor = Math.random().toString(16), compact = 'default', ...restProps }: Props = $props()
	let value = $state(16)
</script>

<div class="root {compact}">
	<label for={labelFor} class={compact}><slot /></label>
	<div class="wrapper">
		<div class="range {compact}">
			<input type="range" id={labelFor} bind:value {...restProps} />
		</div>
		<span>{value}</span>
	</div>
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.range {
		padding: 0 0.75rem;
		display: flex;
		align-items: center;
		position: relative;
	}
	input[type='range'] {
		appearance: none;
		width: 100%;
		height: 1.5rem;
		margin: 0;
	}
	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 0.0625rem;
		border-radius: 0.5rem;
		background-color: var(--colors-ultra-high);
	}
	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: var(--colors-ultra-high);
		margin-top: -0.725rem;
	}
</style>
