/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				brightRed: 'hsl(12, 88%, 59%)',
				brightRedLight: 'hsl(12, 88%, 69%)',
				brightRedSupLight: 'hsl(12, 88%, 95%)',
				darkBlue: 'hsl(228, 39%, 23%)',
				darkGrayishBlue: 'hsl(227, 12%, 61%)',
				veryDarkBlue: 'hsl(233, 12%, 13%)',
				veryPaleRed: 'hsl(13, 100%, 96%)',
				veryLightGray: 'hsl(0, 0%, 98%)'
			}
		}
	},
	fontFamily: {
		body: [
			'Source Sans Pro',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'system-ui',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'Noto Sans',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji'
		],
		sans: [
			'Source Sans Pro',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'system-ui',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'Noto Sans',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji'
		]
	},

	plugins: [require('flowbite-typography')]
};

module.exports = config;
