import { browser } from '$app/environment'
import { changeColors, getEffectiveColorMode, type Mode } from '$lib/utils/colors'

interface Theme {
	baseColor: string
	mode: Mode
}

function updateColors(baseColor: string, mode: Mode) {
	const effectiveMode = getEffectiveColorMode(mode)
	changeColors(baseColor, effectiveMode === 'dark')
}

function withThemeStore(): Theme {
	let storedBaseColor = browser ? localStorage.getItem('baseColor') || '#fefefe' : '#fefefe'
	let storedMode = browser ? (localStorage.getItem('mode') as Mode) || 'system' : 'system'

	let baseColor = $state(storedBaseColor)
	let mode: Mode = $state(storedMode)

	return {
		get baseColor() {
			return baseColor
		},
		set baseColor(value: string) {
			baseColor = value
			updateColors(baseColor, mode)
			if (browser) {
				localStorage.setItem('baseColor', baseColor)
			}
		},
		get mode() {
			return mode
		},
		set mode(value: Mode) {
			mode = value
			updateColors(baseColor, mode)
			if (browser) {
				localStorage.setItem('mode', mode)
			}
		},
	}
}

function initializeTheme(theme: Theme) {
	// this would be better to do with CSS media queries to avoid initial flash
	updateColors(theme.baseColor, theme.mode)

	if (browser) {
		const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)')
		// recommended method for newer browsers: specify event-type as first argument
		darkModePreference.addEventListener('change', () => {
			if (theme.mode !== 'system') {
				return
			}
			updateColors(theme.baseColor, theme.mode)
		})
	}
}

export const theme = withThemeStore()

initializeTheme(theme)
