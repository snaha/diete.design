<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface Props extends HTMLInputAttributes {
		label: string
		labelFor?: string
	}
	let { label, labelFor = Math.random().toString(16), ...restProps }: Props = $props()
</script>

<div class="root">
	<input type="checkbox" {...restProps} id={labelFor} />
	<span class="checkmark">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<rect
				width="24"
				height="24"
				fill="black"
				fill-opacity="0.5"
				style="mix-blend-mode:multiply"
			/>
			<path
				d="M9.75 18L3 11.25L4.0605 10.1895L9.75 15.8782L19.9395 5.68945L21 6.74995L9.75 18Z"
				fill="#F9F9F9"
			/>
		</svg>
	</span>
	<label for={labelFor}>{label}</label>
</div>

<style lang="postcss">
	.root {
		display: inline-flex;
		padding: 0.75rem;
		align-items: center;
		gap: 0.5rem;
		position: relative;
	}
	.checkmark {
		display: flex;
		align-items: center;
		position: absolute;
		border-radius: 0.25rem;
		opacity: 0;
		svg {
			border-radius: 0.25rem;
		}
	}

	input[type='checkbox'] {
		position: relative;
		width: 1.5rem;
		height: 1.5rem;
		margin: 0;
		&:checked {
			.checkmark {
				opacity: 1;
			}
		}
	}
</style>
