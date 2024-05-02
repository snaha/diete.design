import { getClosestColor } from '@waku-objects/luminance'

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
	}
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
	}
]

export function changeColors(baseColor: string, isDarkMode: boolean) {
	const colors = isDarkMode ? darkColorVars : lightColorVars
    const targetPrecision = 0.001

	colors.forEach(({ name, luminance }) => {
		const color = getClosestColor(baseColor, luminance, targetPrecision)
		document.documentElement.style.setProperty(name, color)
        console.debug({ name, color })
	})

    const darkOverlay = getClosestColor(baseColor, colors.slice(-1)[0].luminance, targetPrecision)
    const darkOpacity = Math.round(256 * (isDarkMode ? 0.95 : 0.7)).toString(16)
    document.documentElement.style.setProperty('--colors-dark-overlay', darkOverlay + darkOpacity)
    console.debug({ darkOverlay, darkOpacity })

    const baseOverlay = getClosestColor(baseColor, colors[0].luminance, targetPrecision)
    const baseOpacity = Math.round(256 * (isDarkMode ? 0.7 : 0.95)).toString(16)
    document.documentElement.style.setProperty('--colors-base-overlay', baseOverlay + baseOpacity)
    console.debug({ baseOverlay, baseOpacity })
}
