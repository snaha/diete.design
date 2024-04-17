<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements'
	type Layout = 'vertical' | 'horizontal'
	type Dimension = 'default' | 'large' | 'compact' | 'small'
	interface Props extends HTMLInputAttributes {
		labelFor?: string
		dimension?: Dimension
		layout?: Layout
		unit?: string
		class?: string
	}
	let {
		labelFor = Math.random().toString(16),
		placeholder,
		value,
		dimension = 'default',
		layout = 'vertical',
		unit,
		class: classProp = '',
		...restProps
	}: Props = $props()
</script>

<div class="root {layout} {dimension} {classProp}">
	<div class="wrapper">
		<input id={labelFor} bind:value {placeholder} {...restProps} />
		{#if layout === 'vertical'}
			<label for={labelFor}>
				{placeholder}
			</label>
		{:else}
			<label for={labelFor}>
				<slot />
			</label>
		{/if}
		{#if unit}
			<span>{unit}</span>
		{/if}
	</div>
	{#if layout === 'vertical'}
		<div class="helper-text">
			<slot />
		</div>
	{/if}
</div>

<style lang="postcss">
	.vertical {
		&.root {
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
				color: var(--colors-top);
				outline: none;
				& + label {
					background: var(--colors-base);
					font-size: var(--font-size-small);
					line-height: var(--line-height-small);
				}
				& ~ span {
					opacity: 1;
				}
			}
			&:not(:placeholder-shown) {
				& + label {
					font-size: var(--font-size-small);
					line-height: var(--line-height-small);
				}
				& ~ span {
					opacity: 1;
				}
			}
			&:not(:focus) {
				color: var(--colors-ultra-high);
			}
			&:disabled {
				opacity: 0.25;
				cursor: not-allowed;
				& + label {
					background: transparent;
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
		label {
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
		span {
			position: absolute;
			user-select: none;
			opacity: 0;
			transition: opacity 0.25s;
		}
		&.default {
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
			span {
				top: 0.75rem;
				right: 0.75rem;
				padding: 0.75rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
		&.large {
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
			span {
				top: 0.75rem;
				right: 0.75rem;
				padding: 0.75rem;
				font-size: var(--font-size-large);
				line-height: var(--line-height-large);
				letter-spacing: var(--letter-spacing-large);
			}
		}
		&.compact {
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
			span {
				top: 0.5rem;
				right: 0.5rem;
				padding: 0.5rem;
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
			}
		}
		&.small {
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
			span {
				top: 0.5rem;
				right: 0.5rem;
				padding: 0.5rem;
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
				letter-spacing: var(--letter-spacing-small);
			}
		}
	}
	.horizontal {
		&.root {
			color: var(--colors-ultra-high);
			font-family: var(--font-family-sans-serif);
			position: relative;
		}
		.wrapper {
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
				& ~ span {
					opacity: 1;
				}
			}
			&:not(:placeholder-shown) ~ span {
				opacity: 1;
			}
			&:not(:focus) {
				color: var(--colors-ultra-high);
			}
			&:disabled {
				opacity: 0.25;
				cursor: not-allowed;
				& + label {
					background: transparent;
					opacity: 0.25;
					cursor: not-allowed;
				}
			}
		}
		label {
			font-size: var(--font-size-small);
			line-height: var(--line-height-small);
			letter-spacing: var(--letter-spacing-small);
			user-select: none;
			transform-origin: left center;
			color: var(--colors-high);
			cursor: pointer;
		}
		span {
			position: absolute;
			user-select: none;
			opacity: 0;
			transition: opacity 0.25s;
		}
		&.default {
			input {
				font-size: var(--font-size);
				line-height: var(--line-height);
				letter-spacing: var(--letter-spacing);
				padding: 0.75rem;
			}
			span {
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
			span {
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
			span {
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
			span {
				top: 0.5rem;
				right: 0.5rem;
				font-size: var(--font-size-small);
				line-height: var(--line-height-small);
				letter-spacing: var(--letter-spacing-small);
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
