export interface MenuStore {
	size: Dimension
}

export type Dimension = 'default' | 'large' | 'compact' | 'small'
export function withMenuStore(dimension: Dimension) {
	let size = $state<Dimension>(dimension)

	return {
		get size() {
			return size
		},
		set size(newValue) {
			size = newValue
		},
	}
}
