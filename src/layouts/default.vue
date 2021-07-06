<template>
	<div class="text-gray-800">
		<nav role="navigation">
			<container class="text-2xl py-5 md:py-10 text-center md:text-left">
				<logotype />
			</container>
		</nav>
		<container>
			<nuxt />
		</container>
		<footer>
			<container
				class="py-6 text-sm md:text-base  text-center text-gray-400"
			>
				<span>
					created by
					<a
						href="https://github.com/imlautaro"
						class="font-bold underline"
						>imlautaro</a
					>
					- devChallenges.io
				</span>
			</container>
		</footer>
	</div>
</template>
