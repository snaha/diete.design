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

<label class="root {dimension} {className}" class:hover class:active class:focus>
	<input type="checkbox" {...restProps} />
	{label}
</label>

<style lang="postcss">
	.root {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		font-family: var(--font-family-sans-serif);
		color: var(--colors-ultra-high);
		&:focus {
			outline: none;
		}
		&:has(input[type='checkbox']:checked) {
			color: var(--colors-high);
		}
		&:has(input[type='checkbox']:not(:disabled):focus),
		&:has(input[type='checkbox']:not(:disabled):focus-visible),
		&.focus:has(input[type='checkbox']:not(:disabled)) {
			outline: 4px solid var(--colors-top);
			outline-offset: -4px;
			background: var(--colors-base);
			color: var(--colors-top);

			input[type='checkbox']::before {
				border: 1px solid var(--colors-top);
			}
			input[type='checkbox']:checked::before {
				border: 1px solid var(--colors-top);
				background: var(--colors-top);
			}
			&:has(input[type='checkbox']:checked) {
				color: var(--colors-top);
			}
		}
		&:has(input[type='checkbox']:disabled) {
			opacity: 0.25;
			cursor: not-allowed;
		}
		&:active:has(input[type='checkbox']:not(:disabled)),
		&.active:has(input[type='checkbox']:not(:disabled)) {
			outline: none;
		}
		&:hover:has(input[type='checkbox']:not(:disabled)),
		&.hover:has(input[type='checkbox']:not(:disabled)),
		&:active:has(input[type='checkbox']:not(:disabled)),
		&.active:has(input[type='checkbox']:not(:disabled)) {
			color: var(--colors-high);
			&:has(input[type='checkbox']:checked) {
				color: var(--colors-ultra-high);
			}
			input[type='checkbox']::before {
				border: 1px solid var(--colors-high);
			}
			input[type='checkbox']:checked::before {
				border: 1px solid var(--colors-ultra-high);
				background: var(--colors-ultra-high);
			}
		}
	}
	input[type='checkbox'] {
		appearance: none;
		margin: 0;
		position: relative;
		z-index: 0;
	}
	input[type='checkbox']:focus {
		outline: none;
	}
	input[type='checkbox']::before {
		content: '';
		display: flex;
		align-items: flex-start;
		border: 1px solid var(--colors-ultra-high);
		border-radius: 0.25rem;
		cursor: pointer;
	}
	input[type='checkbox']:checked::before {
		border: 1px solid var(--colors-high);
		background: var(--colors-high);
	}
	input[type='checkbox']:checked::after {
		content: '';
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		border-bottom: 2px solid var(--colors-ultra-low);
		border-right: 2px solid var(--colors-ultra-low);
	}

	input[type='checkbox']:checked:disabled::before,
	input[type='checkbox']:disabled::before {
		cursor: not-allowed;
	}
	input[type='checkbox']:checked:disabled::after {
		cursor: not-allowed;
	}

	.default {
		&.root {
			padding: 0.75rem;
			font-size: 1rem;
			line-height: 1.5rem;
			letter-spacing: 0.02rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.5rem;
			height: 1rem;
		}
		input[type='checkbox']::before {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.large {
		&.root {
			padding: 0.75rem;
			font-size: 1.5rem;
			line-height: 1rem;
			letter-spacing: 0.03rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.75rem;
			height: 1.25rem;
			border-bottom-width: 3px;
			border-right-width: 3px;
		}
		input[type='checkbox']::before {
			width: 2rem;
			height: 2rem;
		}
	}
	.compact {
		&.root {
			padding: 0.5rem;
			font-size: 1rem;
			line-height: 1.5rem;
			letter-spacing: 0.02rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.5rem;
			height: 1rem;
		}
		input[type='checkbox']::before {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
	.small {
		&.root {
			gap: 0.25rem;
			padding: 0.5rem;
			font-size: 0.75rem;
			line-height: 1rem;
			letter-spacing: 0.0375rem;
		}
		input[type='checkbox']:checked::after {
			width: 0.25rem;
			height: 0.5rem;
			border-bottom-width: 1.5px;
			border-right-width: 1.5px;
		}
		input[type='checkbox']::before {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
