import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import fs from 'fs'

const DIST_DIR = './css'

function cssPreprocess() {
	const vite = vitePreprocess()
	const viteStyle = vite.style


	return {
		...vite,
		async style(args) {
			const preprocessedStyle = await viteStyle(args)
			const match = args.filename.match(/^.*\/src\/lib\/components(.*\/)(.*)\.svelte/)
			if (match && match.length === 3) {
				const compPath = match[1]
				const compName = match[2]
				
				const path = `${DIST_DIR}${compPath}`
				fs.mkdirSync(path, { recursive: true })

				const cssFilePath = `${path}/${compName}.css`
				fs.writeFileSync(cssFilePath, preprocessedStyle.code)
			}
			return preprocessedStyle
		},
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [cssPreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
}

export default config
