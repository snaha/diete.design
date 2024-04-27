export interface MenuStore {
	size: Dimension
	disabled?: boolean
}

export type Dimension = 'default' | 'large' | 'compact' | 'small'
export function withMenuStore(dimension: Dimension, inactive?: boolean): MenuStore {
	let size = $state<Dimension>(dimension)
	let disabled = $state<boolean | undefined>(inactive)

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
	}
}
