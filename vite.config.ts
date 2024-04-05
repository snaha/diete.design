import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import autoprefixer from 'autoprefixer'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	css: {
		postcss: {
			plugins: [autoprefixer],
		}
	}
})
