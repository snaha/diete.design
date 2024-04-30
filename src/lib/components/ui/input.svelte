<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Layout = 'vertical' | 'horizontal'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		dimension?: Dimension
		layout?: Layout
		unit?: string
	}
	let {
		labelFor = Math.random().toString(16),
		placeholder,
		value,
		dimension = 'default',
		layout = 'vertical',
		unit,
		type,
		class: className = '',
		...restProps
	}: Props = $props()
</script>

{#if layout == 'vertical'}
	<div class="root {layout} {dimension} {className}">
		<input id={labelFor} bind:value {placeholder} {type} {...restProps} />
		<label class="label" for={labelFor}>
			{placeholder}
		</label>
		{#if unit}
			<label class="unit" for={labelFor}>{unit}</label>
		{/if}
		<div class="helper-text">
			<slot />
		</div>
	</div>
{:else}
	<div class="root {layout} {dimension} {className}">
		<input id={labelFor} bind:value {placeholder} {type} {...restProps} />
		<label class="label" for={labelFor}>
			<slot />
		</label>
		{#if unit}
			<label for={labelFor} class="unit">{unit}</label>
		{/if}
	</div>
{/if}

<style lang="postcss">
	input[type='number']::-webkit-inner-spin-button {
		appearance: none;
	}
	.vertical {
		&.root {
			position: relative;
			color: var(--colors-ultra-high);
			font-family: var(--font-family-sans-serif);
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
		input {
			background: var(--colors-low);
			border: 1px solid var(--colors-low);
			border-radius: 0.25rem;
			&:focus {
				border: 1px solid var(--colors-high);
				background: var(--colors-base);
				color: var(--colors-top);
				outline: none;
				& + .label {
					background: var(--colors-base);
					font-size: var(--font-size-small);
					line-height: var(--line-height-small);
				}
				& ~ .unit {
					opacity: 1;
				}
			}
			&:not(:placeholder-shown) {
				& + .label {
					font-size: var(--font-size-small);
					line-height: var(--line-height-small);
				}
				& ~ .unit {
					opacity: 1;
				}
			}
			&:not(:focus) {
				color: var(--colors-ultra-high);
			}
			&:disabled {
				opacity: 0.25;
				cursor: not-allowed;
				& + .label {
					background: transparent;
					opacity: 0.25;
					cursor: not-allowed;
				}
				& ~ .unit {
					opacity: 0.25;
					cursor: not-allowed;
				}
			}
		}

		input::placeholder {
			text-align: center;
			color: transparent;
			user-select: none;
		}
		.label {
			position: absolute;
			left: 0.75rem;
			user-select: none;
			transform-origin: left center;
			transition: transform 0.25s;
			border: none;
			color: var(--colors-high);
			background: var(--colors-low);
			cursor: text;
		}
		.unit {
			position: absolute;
			user-select: none;
			opacity: 0;
			transition: opacity 0.25s;
			cursor: text;
		}
		&.default {
			.label {
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
					& + .label {
						transform: translateY(-0.75rem);
					}
				}
				&:not(:placeholder-shown) {
					padding: 2.25rem 0.75rem 0.75rem;
					& + .label {
						transform: translateY(-0.75rem);
					}
				}
			}
			.unit {
				top: 0.75rem;
				right: 0.75rem;
				padding: 0.75rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
		&.large {
			.label {
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
					& + .label {
						transform: translateY(-0.75rem);
					}
				}
				&:not(:placeholder-shown) {
					padding: 2.25rem 0.75rem 0.75rem;
					& + .label {
						transform: translateY(-0.75rem);
					}
				}
			}
			.unit {
				top: 0.75rem;
				right: 0.75rem;
				padding: 0.75rem;
				font-size: var(--font-size-large);
				line-height: var(--line-height-large);
				letter-spacing: var(--letter-spacing-large);
			}
		}
		&.compact {
			.label {
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
					& + .label {
						transform: translateY(-0.5rem);
					}
				}
			}
			.unit {
				top: 0.5rem;
				right: 0.5rem;
				padding: 0.5rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
		&.small {
			.label {
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
					& + .label {
						transform: translateY(-0.5rem);
					}
				}
				&:not(:placeholder-shown) {
					padding: 1.5rem 0.75rem 0.5rem;
					& + .label {
						transform: translateY(-0.5rem);
					}
				}
			}
			.unit {
				top: 0.5rem;
				right: 0.5rem;
				padding: 0.5rem;
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
				letter-spacing: var(--letter-spacing-small);
			}
		}
		.helper-text {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			padding: 0 0.75rem;
		}
	}
	.horizontal {
		&.root {
			color: var(--colors-ultra-high);
			font-family: var(--font-family-sans-serif);
			position: relative;
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			gap: 0.5rem;
		}
		input {
			background: var(--colors-low);
			border: 1px solid var(--colors-low);
			border-radius: 0.25rem;
			&::placeholder {
				color: var(--colors-high);
			}
			&:focus {
				border: 1px solid var(--colors-high);
				background: var(--colors-base);
				color: var(--colors-top);
				outline: none;
				& ~ .unit {
					opacity: 1;
				}
			}
			&:not(:placeholder-shown) ~ .unit {
				opacity: 1;
			}
			&:not(:focus) {
				color: var(--colors-ultra-high);
			}
			&:disabled {
				opacity: 0.25;
				cursor: not-allowed;
				& + .label {
					background: transparent;
					opacity: 0.25;
					cursor: not-allowed;
				}
				& ~ .unit {
					opacity: 0.25;
					cursor: not-allowed;
				}
			}
		}
		.label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			user-select: none;
			transform-origin: left center;
			color: var(--colors-high);
			cursor: pointer;
		}
		.unit {
			position: absolute;
			user-select: none;
			opacity: 0;
			transition: opacity 0.25s;
			cursor: text;
		}
		&.default {
			input {
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
				padding: 0.75rem;
			}
			.unit {
				top: 0.75rem;
				right: 0.75rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
		&.large {
			input {
				font-size: var(--font-size-large);
				line-height: var(--line-height-large);
				letter-spacing: var(--letter-spacing-large);
				padding: 0.75rem;
			}
			.unit {
				top: 0.75rem;
				right: 0.75rem;
				font-size: var(--font-size-large);
				line-height: var(--line-height-large);
				letter-spacing: var(--letter-spacing-large);
			}
		}
		&.compact {
			input {
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
				padding: 0.5rem;
			}
			.unit {
				top: 0.5rem;
				right: 0.5rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
		&.small {
			input {
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
				letter-spacing: var(--letter-spacing-small);
				padding: 0.5rem;
			}
			.unit {
				top: 0.5rem;
				right: 0.5rem;
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
				letter-spacing: var(--letter-spacing-small);
			}
		}
	}
</style>
