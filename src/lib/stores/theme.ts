import { browser } from '$app/environment'
import { changeColors, getEffectiveColorMode, type Mode } from '$lib/utils/colors'
import { get, writable, type Writable } from 'svelte/store'

interface Theme {
	baseColor: string
	mode: Mode
}

interface ThemeStore extends Writable<Theme> {
	setColor: (newColor: string, newMode: Mode) => void
}

function onSystemColorSchemeChange() {
	const store = get(theme)
	if (store.mode !== 'system') {
		return
	}
	theme.setColor(store.baseColor, store.mode)
}

function createThemeStore(): ThemeStore {
	const baseColor = '#fefefe'
	const mode = 'system'
	const store = writable<Theme>({ baseColor, mode })

	// this would be better to do with CSS media queries to avoid initial flash
	const effectiveMode = getEffectiveColorMode(mode)
	changeColors(baseColor, effectiveMode === 'dark')

	if (browser) {
		const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
		// recommended method for newer browsers: specify event-type as first argument
		darkModePreference.addEventListener('change', onSystemColorSchemeChange)
	}

	return {
		...store,
		setColor: (newColor: string, newMode: Mode) => {
			store.update((theme) => ({ ...theme, baseColor: newColor, mode: newMode }))
			const effectiveMode = getEffectiveColorMode(newMode)
			changeColors(newColor, effectiveMode === 'dark')
		},
	}
}

export const theme = createThemeStore()
