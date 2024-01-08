import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
		vitePreprocess({}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter({
			runtime: 'edge',
			regions: ['bom1', 'sin1']
		})
	}
};

export default config;
