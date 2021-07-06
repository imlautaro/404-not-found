<template>
	<div>
		<header
			class="grid grid-cols-1 md:grid-cols-2 py-6 md:py-8 gap-12 md:gap-16"
		>
			<div>
				<nuxt-img
					alt="scarecrow"
					class="mx-auto"
					width="1079"
					height="895"
					sizes="sm:100vw md:50vw lg:456px"
					src="/Scarecrow.png"
				/>
			</div>
			<div class="flex flex-col font-mono text-center md:text-left">
				<h1
					class="font-bold text-4xl md:text-6xl leading-snu mb-6 md:mb-8"
				>
					I have bad news for you
				</h1>
				<p
					class="text-gray-700 text-lg md:text-2xl mb-12 md:mb-16 leading-snug"
				>
					The page you are looking for might be removed or is
					temporarily unavailable
				</p>
				<nuxt-link
					class="block md:text-lg bg-gray-800 mx-auto md:mx-0 text-white px-6 py-3 font-bold uppercase w-min whitespace-nowrap"
					to="/"
					>Back to homepage</nuxt-link
				>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: '404 not found',
		}
	},
}
</script>
