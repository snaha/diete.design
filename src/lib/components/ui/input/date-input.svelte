<script lang="ts">
	import { CaretDown, CaretUp, ChevronLeft, ChevronRight, Calendar } from 'carbon-icons-svelte'
	import Button from '../button.svelte'
	import Divider from '../divider.svelte'
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	import Typography from '../typography.svelte'

	type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'large' | 'default' | 'small'

	let { dimension = 'default', disabled, ...restProps }: Props & HTMLInputAttributes = $props()

	let currentDate = new Date()
	let currentMonth = $state(currentDate.getMonth())
	let currentYear = $state(currentDate.getFullYear())
	let selectedDate = $state(currentDate)

	let showYearPicker = $state(false)

	const months = getLocalMonthNames()
	const days = getLocalDayNames()

	function getLocalMonthNames() {
		const formatter = new Intl.DateTimeFormat(undefined, { month: 'long' })
		const monthNames = []
		for (let month = 0; month < 12; month++) {
			const date = new Date(2020, month, 1)
			monthNames.push(formatter.format(date))
		}
		return monthNames
	}
	function getLocalDayNames() {
		const formatter = new Intl.DateTimeFormat(undefined, { weekday: 'short' })
		const dayNames = []
		for (let day = 0; day < 7; day++) {
			const date = new Date(2020, 0, day - 1)
			dayNames.push(formatter.format(date))
		}
		return dayNames
	}

	function selectDate(date: number) {
		selectedDate = new Date(currentYear, currentMonth, date)
	}

	function changeMonth(direction: number) {
		currentMonth += direction
		if (currentMonth < 0) {
			currentMonth = 11
			currentYear--
		} else if (currentMonth > 11) {
			currentMonth = 0
			currentYear++
		}
	}

	function changeYear(year: number) {
		currentYear = year
		showYearPicker = false
	}

	function toggleYearPicker() {
		showYearPicker = !showYearPicker
	}

	function isCurrentYear(year: number) {
		return year === currentDate.getFullYear()
	}

	function isSelected(date: number) {
		return (
			selectedDate.getDate() === date &&
			selectedDate.getMonth() === currentMonth &&
			selectedDate.getFullYear() === currentYear
		)
	}
	function isCurrentDay(date: number) {
		return (
			date === currentDate.getDate() &&
			currentMonth === currentDate.getMonth() &&
			currentYear === currentDate.getFullYear()
		)
	}
	function formatDate(date: Date) {
		const year = date.getFullYear()
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const day = String(date.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}

	let daysInMonth = $derived(new Date(currentYear, currentMonth + 1, 0).getDate())
	let firstDayOfMonth = $derived((new Date(currentYear, currentMonth, 1).getDay() + 6) % 7)
	let prevMonthDays = $derived(new Date(currentYear, currentMonth, 0).getDate())
	let totalCells = 42
	let calendarDays = $derived(
		Array.from({ length: totalCells }, (_, i) => {
			const dayNumber = i - firstDayOfMonth + 1
			if (dayNumber <= 0) {
				return {
					date: prevMonthDays + dayNumber,
					type: 'prev',
				}
			} else if (dayNumber > daysInMonth) {
				return {
					date: dayNumber - daysInMonth,
					type: 'next',
				}
			} else {
				return {
					date: dayNumber,
					type: 'current',
				}
			}
		}),
	)
	let size: 16 | 24 | 32 = $derived(dimension === 'large' ? 32 : dimension === 'small' ? 16 : 24)
	let showDatePicker = $state(false)
	let variant: Variant = $derived(
		dimension === 'large' ? 'large' : dimension === 'small' ? 'small' : 'default',
	)
</script>

{#snippet buttons()}
	<Button
		{dimension}
		{disabled}
		variant="secondary"
		onclick={() => {
			showDatePicker = !showDatePicker
		}}
	>
		<Calendar {size} />
	</Button>
{/snippet}

<div class="calendar-root {dimension}">
	<Input
		{dimension}
		{disabled}
		{...restProps}
		value={formatDate(selectedDate)}
		{buttons}
		type="date"
	/>
	<div class="date-picker" class:showDatePicker>
		<div class="header">
			<div class="month">
				<Button {dimension} variant="ghost" onclick={() => changeMonth(-1)}
					><ChevronLeft {size} /></Button
				>
				<div class="current-month">
					<Typography {variant} bold>{months[currentMonth]} {currentYear}</Typography>
					<Button {dimension} variant="ghost" onclick={toggleYearPicker}>
						{#if showYearPicker}
							<CaretUp {size} />
						{:else}
							<CaretDown {size} />
						{/if}
					</Button>
				</div>
				<Button {dimension} variant="ghost" onclick={() => changeMonth(1)}
					><ChevronRight {size} /></Button
				>
			</div>
			{#if !showYearPicker}
				<div class="days">
					{#each days as day}
						<Typography {variant}>{day}</Typography>
					{/each}
				</div>
			{/if}
		</div>

		<Divider class="no-margin" />

		{#if showYearPicker}
			<div class="year-picker">
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each Array(131) as _, i}
					<Button
						{dimension}
						variant="ghost"
						active={isSelected(1970 + i) || isCurrentYear(1970 + i)}
						onclick={() => changeYear(1970 + i)}>{1970 + i}</Button
					>
				{/each}
			</div>
		{:else}
			<div class="calendar">
				{#each calendarDays as { date, type }}
					<Button
						{dimension}
						class={type === 'current' && isCurrentDay(date) && !isSelected(date)
							? 'current-day'
							: ''}
						active={type === 'current' && isSelected(date)}
						disabled={type === 'prev' || type === 'next'}
						style="justify-content:center;"
						variant="ghost"
						onclick={() => {
							type === 'current' && selectDate(date)
							showDatePicker = false
						}}
					>
						{date}
					</Button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(input[type='date']::-webkit-calendar-picker-indicator) {
		display: none;
	}
	.calendar-root {
		position: relative;
	}
	.date-picker {
		display: none;
		position: absolute;
		bottom: -0.25rem;
		left: 0;
		flex-direction: column;
		gap: 1rem;
		transform: translateY(100%);
		z-index: 1;
		border: 1px solid var(--colors-low);
		border-radius: var(--border-radius);
		background: var(--colors-base);
		padding: 1rem;
		&.showDatePicker {
			display: flex;
		}
	}
	.month {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.current-month {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.days {
		display: flex;
		justify-content: space-between;
		align-self: stretch;
		padding: 0.75rem;
	}
	:global(.no-margin) {
		margin: 0 !important;
	}
	.calendar {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.5rem;
	}
	:global(.current-day) {
		text-decoration: underline !important;
		text-underline-offset: 0.25rem !important;
	}
	.year-picker {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		justify-content: center;
		gap: 0.5rem;
		overflow-y: scroll;
	}
	.default {
		.year-picker {
			max-height: 388px;
		}
	}
	.large {
		.year-picker {
			max-height: 444px;
		}
	}
	.compact {
		.year-picker {
			max-height: 340px;
		}
	}
	.small {
		.year-picker {
			max-height: 284px;
		}
	}
</style>
