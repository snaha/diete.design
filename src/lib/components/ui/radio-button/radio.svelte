<script lang="ts">
	import { getContext } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	import { type RadioStore } from './radio-store.svelte'

	interface Props extends HTMLInputAttributes {
		hover?: boolean
		active?: boolean
		focus?: boolean
	}
	let {
		hover,
		value = $bindable(),
		active,
		focus,
		name = '',
		children,
		class: className = '',
		...restProps
	}: Props = $props()
	const store = getContext<RadioStore>('radio-store')
</script>

<label class="root {store.dimension} {className}" class:hover class:active class:focus>
	<input type="radio" bind:group={store.value} {value} name={store?.name ?? name} {...restProps} />
	{#if children}
		{@render children()}
	{/if}
</label>

<style lang="postcss">
	.root {
		display: flex;
		align-items: center;
		border-radius: 0.25rem;
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		cursor: pointer;
		gap: 0.5rem;
		&:has(input[type='radio']:disabled) {
			cursor: not-allowed;
			opacity: 0.25;
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
		&:has(input[type='radio']:not(:disabled):focus-visible),
		&.focus:has(input[type='radio']:not(:disabled)) {
			color: var(--colors-top);
			input[type='radio'] {
				outline: 4px solid var(--colors-top);
				outline-offset: -4px;
				&:checked {
					outline: 4px solid var(--colors-top);
					outline-offset: -4px;
				}
				&:checked::after {
					background: var(--colors-top);
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
		&.root {
			padding: 0.75rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			&:has(input[type='radio']:not(:disabled):focus-visible),
			&.focus:has(input[type='radio']:not(:disabled)) {
				input[type='radio']:checked:after,
				input[type='radio']:checked:after {
					width: 0.625rem;
					height: 0.625rem;
				}
			}
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
		&.root {
			padding: 0.75rem;
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
			&:has(input[type='radio']:not(:disabled):focus-visible),
			&.focus:has(input[type='radio']:not(:disabled)) {
				input[type='radio']:checked:after,
				input[type='radio']:checked:after {
					width: 1rem;
					height: 1rem;
				}
			}
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
		&.root {
			padding: 0.5rem;
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			&:has(input[type='radio']:not(:disabled):focus-visible),
			&.focus:has(input[type='radio']:not(:disabled)) {
				input[type='radio']:checked:after,
				input[type='radio']:checked:after {
					width: 0.625rem;
					height: 0.625rem;
				}
			}
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
		&.root {
			padding: 0.5rem;
			gap: 0.25rem;
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			&:has(input[type='radio']:not(:disabled):focus-visible),
			&.focus:has(input[type='radio']:not(:disabled)) {
				input[type='radio']:checked:after,
				input[type='radio']:checked:after {
					width: 0.25rem;
					height: 0.25rem;
				}
			}
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
