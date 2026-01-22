// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'eternt',
			tagline: 'We are here to stay, we make happy software',
			social: [{ icon: 'email', label: 'Contact', href: 'mailto:info@eternt.com' }],
			sidebar: [
				{
					label: 'Splash Block',
					items: [
						{ label: 'Wall of Fame', slug: 'splashblock/wall-of-fame' },
						{ label: 'Privacy Policy', slug: 'splashblock/privacy' },
					],
				},
				{
					label: 'WiseDay',
					items: [
						{ label: 'Privacy Policy', slug: 'wiseday/privacy' },
					],
				},
			],
			customCss: [],
		}),
	],
});
