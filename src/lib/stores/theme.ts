import { changeColors } from '$lib/utils/colors'
import { writable, type Writable } from 'svelte/store'

interface Theme {
	baseColor: string
    isDarkMode: boolean
}

interface ThemeStore extends Writable<Theme> {
	setColor: (newColor: string, newMode: boolean) => void
}

function createThemeStore(): ThemeStore {
	const baseColor = '#fefefe'
    const isDarkMode = false
	const store = writable<Theme>({ baseColor, isDarkMode })

	return {
		...store,
		setColor: (newColor: string, newMode: boolean) => {
			store.update((theme) => ({ ...theme, baseColor: newColor, isDarkMode: newMode }))
            changeColors(newColor, newMode)
		}
	}
}

export const theme = createThemeStore()
