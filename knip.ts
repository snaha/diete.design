import type { KnipConfig } from 'knip'

const config: KnipConfig = {
	paths: {
		// This ain't pretty, but Svelte basically does the same
		'$app/*': ['node_modules/@sveltejs/kit/src/runtime/app/*'],
		'$env/*': ['.svelte-kit/ambient.d.ts'],
		'$lib/*': ['src/lib/*'],
	},
	entry: ['src/lib/index.ts'],
	ignoreExportsUsedInFile: true,
}

export default config
