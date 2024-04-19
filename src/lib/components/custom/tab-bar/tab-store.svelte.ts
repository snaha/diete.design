export type TabStore = {
	selected: number
	readonly items: string[]

	addItem: (item: string) => void
}

export function withTabStore(): TabStore {
	let selected = $state(0)
	const items = $state<string[]>([])

	return {
		get selected() {
			return selected
		},
		set selected(newValue) {
			selected = newValue
		},
		items,

		addItem(item) {
			if (items.includes(item)) {
				console.warn(`Duplicate tab item, ignored: ${item}`)
				return
			}
			items.push(item)
		},
	}
}
