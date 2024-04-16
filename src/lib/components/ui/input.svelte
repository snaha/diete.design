<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'

	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		dimension?: Dimension
		unit?: string
		class?: string
	}
	let {
		labelFor = Math.random().toString(16),
		placeholder,
		value,
		dimension = 'default',
		class: classProp = '',
		...restProps
	}: Props = $props()
</script>

<div class="root {dimension} {classProp}">
	<input id={labelFor} bind:value {placeholder} {...restProps} />
	<label for={labelFor}>
		{placeholder}
	</label>
	<div class="helper-text">
		<slot />
	</div>
</div>

<style lang="postcss">
	.root {
		position: relative;
		color: var(--colors-ultra-high);
		font-family: var(--font-family-sans-serif);
		display: flex;
		flex-direction: column;
	}
	input {
		background: var(--colors-low);
		border: 1px solid var(--colors-low);
		border-radius: 0.25rem;
		&:focus {
			border: 1px solid var(--colors-high);
			background: var(--colors-base);
			outline: none;
			& + label {
				background: var(--colors-base);
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
			}
		}
		&:not(:placeholder-shown) {
			color: var(--colors-ultra-high);
			& + label {
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
			}
		}
	}
	input::placeholder {
		text-align: center;
		color: transparent;
	}
	label {
		left: 0.75rem;
		position: absolute;
		pointer-events: none;
		transform-origin: left center;
		transition: transform 0.25s;
		border: none;
		color: var(--colors-high);
		background: var(--colors-low);
	}
	.default {
		label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			top: 1.5rem;
		}
		input {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			padding: 1.5rem 0.75rem;
			&:focus {
				padding: 2.25rem 0.75rem 0.75rem;
				& + label {
					transform: translateY(-0.75rem);
				}
			}
			&:not(:placeholder-shown) {
				padding: 2.25rem 0.75rem 0.75rem;
				& + label {
					transform: translateY(-0.75rem);
				}
			}
		}
	}
	.large {
		label {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
			top: 1.5rem;
		}
		input {
			font-size: var(--font-size-large);
			line-height: var(--line-height-large);
			letter-spacing: var(--letter-spacing-large);
			padding: 1.5rem 0.75rem;
			&:focus {
				padding: 2.25rem 0.75rem 0.75rem;
				& + label {
					transform: translateY(-0.75rem);
				}
			}
			&:not(:placeholder-shown) {
				padding: 2.25rem 0.75rem 0.75rem;
				& + label {
					transform: translateY(-0.75rem);
				}
			}
		}
	}
	.compact {
		label {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			top: 1rem;
		}
		input {
			font-size: var(--font-size);
			line-height: var(--line-height);
			letter-spacing: var(--letter-spacing);
			padding: 1rem 0.75rem;
			&:focus {
				padding: 1.5rem 0.75rem 0.5rem;
				& + label {
					transform: translateY(-0.5rem);
				}
			}
			&:not(:placeholder-shown) {
				padding: 1.5rem 0.75rem 0.5rem;
				& + label {
					transform: translateY(-0.5rem);
				}
			}
		}
	}
	.small {
		label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			top: 1rem;
		}
		input {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			padding: 1rem 0.75rem;
			&:focus {
				padding: 1.5rem 0.75rem 0.5rem;
				& + label {
					transform: translateY(-0.5rem);
				}
			}
			&:not(:placeholder-shown) {
				padding: 1.5rem 0.75rem 0.5rem;
				& + label {
					transform: translateY(-0.5rem);
				}
			}
		}
	}
	.helper-text {
		font-size: var(--font-size-small);
		line-height: var(--line-height-small);
		letter-spacing: var(--letter-spacing-small);
		padding: 0.5rem 0.75rem;
	}
</style>
