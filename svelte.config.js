import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: path.resolve('./src/lib/components'),
			$layout: path.resolve('./src/lib/components/layout'),
			$layouts: path.resolve('./src/lib/layouts'),
			$utils: path.resolve('./src/lib/utils'),
			$styles: path.resolve('./src/lib/styles'),
			$stores: path.resolve('./src/lib/stores')
		}
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
};

export default config;
