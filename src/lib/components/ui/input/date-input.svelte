<script lang="ts">
	import { CaretDown, CaretUp, ChevronLeft, ChevronRight, Calendar } from 'carbon-icons-svelte'
	import Button from '../button.svelte'
	import Divider from '../divider.svelte'
	import Input, { type Props } from './input.svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'
	import Typography from '../typography.svelte'

	let { dimension, disabled, ...restProps }: Props & HTMLInputAttributes = $props()

	let currentDate = new Date()
	let currentMonth = $state(currentDate.getMonth())
	let currentYear = $state(currentDate.getFullYear())
	let selectedDate = $state(currentDate)

	let showYearPicker = $state(false)

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

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

<div class="calendar-root">
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
				<Button variant="ghost" onclick={() => changeMonth(-1)}><ChevronLeft size={24} /></Button>
				<div class="current-month">
					<Typography variant="h5">{months[currentMonth]} {currentYear}</Typography>
					<Button variant="ghost" onclick={toggleYearPicker}>
						{#if showYearPicker}
							<CaretUp size={24} />
						{:else}
							<CaretDown size={24} />
						{/if}
					</Button>
				</div>
				<Button variant="ghost" onclick={() => changeMonth(1)}><ChevronRight size={24} /></Button>
			</div>
			{#if !showYearPicker}
				<div class="days">
					{#each days as day}
						<Typography>{day}</Typography>
					{/each}
				</div>
			{/if}
		</div>

		<Divider class="no-margin" />

		{#if showYearPicker}
			<div class="year-picker">
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each Array(30) as _, i}
					<Button variant="ghost" onclick={() => changeYear(2020 + i)}>{2020 + i}</Button>
				{/each}
			</div>
		{:else}
			<div class="calendar">
				{#each calendarDays as { date, type }}
					<Button
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
		/* position: absolute;
		bottom: 100%; */
		flex-direction: column;
		gap: 1rem;
		z-index: 10;
		border: 1px solid var(--colors-low);
		border-radius: var(--border-radius);
		background: var(--color-base);
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
	}
</style>
