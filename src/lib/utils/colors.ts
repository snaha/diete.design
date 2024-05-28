import { getClosestColor } from '@waku-objects/luminance'
import { browser } from '$app/environment'

export type Mode = 'light' | 'dark' | 'system'
export type EffectiveMode = 'light' | 'dark'

interface Color {
	name: string
	luminance: number
}

const darkColorVars: Color[] = [
	{
		name: '--colors-base',
		luminance: 0.0097,
	},
	{
		name: '--colors-ultra-low',
		luminance: 0.0203,
	},
	{
		name: '--colors-low',
		luminance: 0.0497,
	},
	{
		name: '--colors-high',
		luminance: 0.4508,
	},
	{
		name: '--colors-ultra-high',
		luminance: 0.8469,
	},
	{
		name: '--colors-top',
		luminance: 0.9911,
	},
]

const lightColorVars: Color[] = [
	{
		name: '--colors-base',
		luminance: 0.99,
	},
	{
		name: '--colors-ultra-low',
		luminance: 0.9474,
	},
	{
		name: '--colors-low',
		luminance: 0.7992,
	},
	{
		name: '--colors-high',
		luminance: 0.09085,
	},
	{
		name: '--colors-ultra-high',
		luminance: 0.02955,
	},
	{
		name: '--colors-top',
		luminance: 0.00973,
	},
]

function invertColors(colors: Color[]): Color[] {
	return colors.map((color, i) => ({
		name: color.name,
		luminance: colors[colors.length - 1 - i].luminance,
	}))
}

export function changeColors(baseColor: string, isDarkMode: boolean) {
	if (!browser) {
		return
	}

	const targetPrecision = 0.001

	const baseColorHex = baseColor.startsWith('#') ? baseColor : `#${baseColor}`

	const colors = isDarkMode ? darkColorVars : lightColorVars
	colors.forEach(({ name, luminance }) => {
		const color = getClosestColor(baseColorHex, luminance, targetPrecision)
		document.documentElement.style.setProperty(name, color)
	})

	const darkColors = isDarkMode ? darkColorVars : invertColors(lightColorVars)

	darkColors.forEach(({ name, luminance }) => {
		const darkName = name.replace('--colors', '--colors-dark')
		const color = getClosestColor(baseColorHex, luminance, targetPrecision)
		document.documentElement.style.setProperty(darkName, color)
	})

	const lightColors = invertColors(darkColors)

	lightColors.forEach(({ name, luminance }) => {
		const lightName = name.replace('--colors', '--colors-light')
		const color = getClosestColor(baseColorHex, luminance, targetPrecision)
		document.documentElement.style.setProperty(lightName, color)
	})

	const darkOverlay = getClosestColor(baseColorHex, darkColorVars[0].luminance, targetPrecision)
	const darkOpacity = Math.round(256 * 0.7).toString(16)
	document.documentElement.style.setProperty('--colors-dark-overlay', darkOverlay + darkOpacity)

	const lightOverlay = getClosestColor(baseColorHex, lightColors[0].luminance, targetPrecision)
	const lightOpacity = Math.round(256 * 0.7).toString(16)
	document.documentElement.style.setProperty('--colors-light-overlay', lightOverlay + lightOpacity)
}

export function isDarkSchemePreferred() {
	if (!browser) {
		return false
	}
	return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false
}

export function getEffectiveColorMode(mode: Mode): EffectiveMode {
	if (mode === 'dark' || mode === 'light') {
		return mode
	}
	return isDarkSchemePreferred() ? 'dark' : 'light'
}
