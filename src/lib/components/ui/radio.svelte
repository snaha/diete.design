<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		label: string
		dimension?: Dimension
		hover?: boolean
		active?: boolean
		focus?: boolean
	}
	let {
		label,
		dimension = 'default',
		hover,
		active,
		focus,
		class: className = '',
		...restProps
	}: Props = $props()
</script>

<label class="{dimension} {className}" class:hover class:active class:focus>
	<input type="radio" tabindex="0" {...restProps} />
	{label}
</label>

<style lang="postcss">
	label {
		display: flex;
		align-items: center;
		border-radius: 0.25rem;
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		cursor: pointer;
		gap: 0.5rem;
		&:has(input[type='radio']:checked) {
			color: var(--colors-high);
		}
		&:has(input[type='radio']:disabled) {
			cursor: not-allowed;
			opacity: 0.25;
		}
		&:has(input[type='radio']:not(:disabled):focus),
		&:has(input[type='radio']:not(:disabled):focus-visible),
		&.focus:has(input[type='radio']:not(:disabled)) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			background: var(--colors-base);
			color: var(--colors-top);
			input[type='radio'] {
				border: 1px solid var(--colors-top);
				&:checked {
					border: 1px solid var(--colors-top);
					background: var(--colors-base);
				}
				&:checked::after {
					background: var(--colors-top);
				}
			}
		}
		&:active:has(input[type='radio']:not(:disabled)),
		&.active:has(input[type='radio']:not(:disabled)) {
			outline: none;
		}
		&:hover:has(input[type='radio']:not(:disabled)),
		&.hover:has(input[type='radio']:not(:disabled)),
		&:active:has(input[type='radio']:not(:disabled)),
		&.active:has(input[type='radio']:not(:disabled)) {
			color: var(--colors-high);
			&:has(input[type='radio']:checked) {
				color: var(--colors-ultra-high);
			}
			input[type='radio'] {
				border: 1px solid var(--colors-high);
				&:checked {
					border: 1px solid var(--colors-ultra-high);
					background: var(--colors-base);
				}
				&:checked::after {
					background: var(--colors-ultra-high);
				}
			}
		}
	}
	input[type='radio'] {
		position: relative;
		appearance: none;
		margin: 0;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 50%;
		cursor: pointer;
		&:focus,
		&:focus-visible {
			outline: none;
		}
		&:checked {
			border-color: var(--colors-high);
		}
		&:checked::after {
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
		&:disabled {
			cursor: not-allowed;
		}
	}
	.default {
		& {
			padding: 0.75rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		input[type='radio'] {
			width: 1.5rem;
			height: 1.5rem;
		}
		input[type='radio']:checked::after {
			width: 1rem;
			height: 1rem;
		}
	}
	.large {
		& {
			padding: 0.75rem;
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
		}
		input[type='radio'] {
			width: 2rem;
			height: 2rem;
		}
		input[type='radio']:checked::after {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.compact {
		& {
			padding: 0.5rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
		}
		input[type='radio'] {
			width: 1.5rem;
			height: 1.5rem;
		}
		input[type='radio']:checked::after {
			width: 1rem;
			height: 1rem;
		}
	}
	.small {
		& {
			padding: 0.5rem;
			gap: 0.25rem;
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
		}
		input[type='radio'] {
			width: 1rem;
			height: 1rem;
		}
		input[type='radio']:checked::after {
			width: 0.625rem;
			height: 0.625rem;
		}
	}
</style>
