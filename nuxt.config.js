export default {
	buildModules: [
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
	],
	components: true,
	googleFonts: {
		display: 'swap',
		families: {
			Inconsolata: [700],
			'Space+Mono': [400, 700],
			Montserrat: [500, 600, 700],
		},
	},
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0',
			},
		],
		link: [
			{
				rel: 'icon',
				href: '/devchallenges.png',
			},
		],
	},
	srcDir: 'src',
	target: 'static',
}
