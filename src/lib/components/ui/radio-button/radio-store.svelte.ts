export type Dimension = 'default' | 'large' | 'compact' | 'small'

export interface RadioStore {
	name?: string
	value?: string
	dimension: Dimension
}
export function withRadioStore(
	size: Dimension,
	defaultValue?: string,
	newName?: string,
): RadioStore {
	let name = $state<string | undefined>(newName)
	let value = $state<string | undefined>(defaultValue)
	let dimension = $state<Dimension>(size)

	return {
		get name() {
			return name
		},
		set name(value) {
			name = value
		},
		get value() {
			return value
		},
		set value(newValue) {
			value = newValue
		},
		get dimension() {
			return dimension
		},
		set dimension(newValue) {
			dimension = newValue
		},
	}
}
