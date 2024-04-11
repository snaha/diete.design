<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Content = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		content?: Content
	}
	let { labelFor = Math.random().toString(16), content = 'default', ...restProps }: Props = $props()
</script>

<div class="root {content}">
	<input type="radio" class="radio {content}" {...restProps} id={labelFor} />
	<label for={labelFor} class={content}><slot /></label>
</div>

<style lang="postcss">
	.root {
		display: inline-flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.root.default,
	.root.large {
		padding: 0.75rem;
	}
	.root.compact,
	.root.small {
		padding: 0.5rem;
	}
	.root.small {
		gap: 0.25rem;
	}
	input[type='radio'] {
		position: relative;
		appearance: none;
		margin: 0;
	}
	.radio.default {
		width: 1.5rem;
		height: 1.5rem;
	}
	.radio.large {
		width: 2rem;
		height: 2rem;
	}
	.radio.compact {
		width: 1.5rem;
		height: 1.5rem;
	}
	.radio.small {
		width: 1rem;
		height: 1rem;
	}
	.radio {
		border: 1px solid var(--colors-ultra-high);
		border-radius: 50%;
		cursor: pointer;
		&:checked {
			border-color: var(--colors-high);
		}
		&:checked ~ label {
			color: var(--colors-high);
		}
		&:disabled,
		&:disabled ~ label {
			cursor: not-allowed;
			opacity: 0.25;
		}
	}
	.radio.default:checked::after {
		width: 1rem;
		height: 1rem;
	}
	.radio.large:checked::after {
		width: 1.5rem;
		height: 1.5rem;
	}
	.radio.compact:checked::after {
		width: 1rem;
		height: 1rem;
	}
	.radio.small:checked::after {
		width: 0.625rem;
		height: 0.625rem;
	}
	.radio:checked::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: var(--colors-high);
	}
	label {
		font-family: sans-serif;
		color: var(--colors-ultra-high);
		cursor: pointer;
	}
	label.default {
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	label.large {
		font-size: 1.5rem;
		line-height: 1rem;
		letter-spacing: 0.03rem;
	}
	label.compact {
		font-size: 1rem;
		line-height: 1.5rem;
		letter-spacing: 0.02rem;
	}
	label.small {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.0375rem;
	}
</style>
