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

export function withThemeStore(): Theme {
	let baseColor = $state('#fefefe')
	let mode = $state('system') as Mode

	return {
        get baseColor() {
            return baseColor
        },
        set baseColor(value: string) {
            baseColor = value
            updateColors(baseColor, mode)
        },
        get mode() {
            return mode
        },
        set mode(value: Mode) {
            mode = value
            updateColors(baseColor, mode)
        }
	}
}

function initializeTheme() {
    const theme = withThemeStore()

	// this would be better to do with CSS media queries to avoid initial flash
	const effectiveMode = getEffectiveColorMode(theme.mode)
	changeColors(theme.baseColor, effectiveMode === 'dark')

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

initializeTheme()