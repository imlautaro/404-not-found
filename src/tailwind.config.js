const colors = require('tailwindcss/colors')

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false,
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			mono: ['"Space Mono"', 'monospace'],
			brand: ['Inconsolata', 'monospace'],
		},
		extend: {
			colors: {
				gray: colors.trueGray,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
