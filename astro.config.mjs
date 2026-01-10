// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'eternt',
			tagline: 'We are here to stay, we make happy software',
			social: [{ icon: 'email', label: 'Contact', href: 'mailto:raphaeldlv@gmail.com' }],
			sidebar: [
				{
					label: 'Our Apps',
					items: [
						{ label: 'Splash Block', slug: 'splashblock/privacy' },
					],
				},
			],
			customCss: [],
		}),
	],
});
