<script lang="ts">
	import { Add, Subtract } from 'carbon-icons-svelte'
	import Button from '../button.svelte'
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	interface CustomProps extends Props {
		formatter?: Intl.NumberFormat
	}
	let {
		formatter = new Intl.NumberFormat(undefined, { maximumFractionDigits: 12 }),
		value = $bindable(0),
		dimension,
		disabled,
		...restProps
	}: CustomProps & Omit<HTMLInputAttributes, 'type'> = $props()
	let size: 16 | 24 | 32 = $derived(dimension === 'large' ? 32 : dimension === 'small' ? 16 : 24)

	let stringValue = $state(numberToLocalString(value, formatter))

	function numberToLocalString(value: number, formatter: Intl.NumberFormat): string {
		return formatter.format(value)
	}

	function localeStringToNumber(
		numberString: string,
		formatter: Intl.NumberFormat,
	): number | undefined {
		const groupSeparator = formatter.format(11111).replace(/\p{Number}/gu, '')
		const decimalSeparator = formatter.format(1.1).replace(/\p{Number}/gu, '')

		// Replace the group separator and decimal separator with appropriate characters
		const sanitizedNumberString = numberString
			.split(groupSeparator)
			.join('')
			.replace(decimalSeparator, '.')
		const regex = /^-?([0-9]+(.[0-9]+)?|.[0-9]+)$/
		if (!regex.test(sanitizedNumberString)) {
			console.error('Invalid number format')
			return undefined
		}
		const parsedValue = parseFloat(sanitizedNumberString)
		if (Number.isNaN(parsedValue)) {
			return undefined
		} else {
			return parsedValue
		}
	}
	function updateCursorPosition(distanceFromEnd: number) {
		const input = document.querySelector('.input input') as HTMLInputElement
		let newCursorPosition = () => {
			let position = input.value.length - distanceFromEnd
			if (position < 0) {
				position = 0
			}
			return position
		}
		input?.setSelectionRange(newCursorPosition(), newCursorPosition())
	}
</script>

{#snippet buttons()}
	<Button
		{dimension}
		{disabled}
		variant="secondary"
		onclick={() => {
			value -= 1
			stringValue = numberToLocalString(value, formatter)
		}}
	>
		<Subtract {size} />
	</Button>
	<Button
		{dimension}
		{disabled}
		variant="secondary"
		onclick={() => {
			value += 1
			stringValue = numberToLocalString(value, formatter)
		}}
	>
		<Add {size} />
	</Button>
{/snippet}

<Input
	class="input"
	value={stringValue}
	oninput={(e) => {
		const regex = /[^\d\.,\s]+/g
		stringValue = e.currentTarget.value.replace(regex,'')
		const cursorPosition = e.currentTarget.selectionStart
		const distanceFromEnd = stringValue.length - (cursorPosition ?? 0)
		const temp = localeStringToNumber(stringValue, formatter)
		if (temp === undefined) {
			console.error('Not a number')
		} else {
			console.log('Valid number')
			value = temp
			stringValue = numberToLocalString(value, formatter)
		}
		setTimeout(() => {
			updateCursorPosition(distanceFromEnd)
		}, 0)
	}}
	{dimension}
	{disabled}
	{buttons}
	{...restProps}
/>
