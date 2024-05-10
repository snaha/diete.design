export interface MenuStore {
	size: Dimension
	open: boolean
	disabled?: boolean
}

export type Dimension = 'default' | 'large' | 'compact' | 'small'
export function withMenuStore(
	dimension: Dimension,
	isOpen: boolean,
	inactive?: boolean,
): MenuStore {
	let size = $state<Dimension>(dimension)
	let disabled = $state<boolean | undefined>(inactive)
	let open = $state(isOpen)

	return {
		get size() {
			return size
		},
		set size(newValue) {
			size = newValue
		},
		get disabled() {
			return disabled
		},
		set disabled(newValue) {
			disabled = newValue
		},
		get open() {
			return open
		},
		set open(newValue) {
			open = newValue
		},
	}
}
