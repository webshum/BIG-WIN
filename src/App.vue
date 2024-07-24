<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import CookieConsent from './components/CookieConsent.vue';
</script>

<template>
	<div class="wrapper">
		<Header v-if="$route.path != '/'"/>

		<main class="main">
			<RouterView/>
		</main>
	</div>

	<CookieConsent/>

	<svg class="d-none">
		<symbol viewBox="0 0 17 13" id="logo">
			<path d="M6.11893 12.129L6.225 12.235L6.33107 12.129L16.0477 2.41232L16.1538 2.30625L16.0477 2.20018L14.7415 0.893934L14.6354 0.787868L14.5294 0.893934L6.225 9.19828L2.41232 5.3856L2.30625 5.27953L2.20018 5.3856L0.893934 6.69185L0.787868 6.79792L0.893934 6.90398L6.11893 12.129Z" fill="#D6AD60" stroke="#D6AD60" stroke-width="0.3" />
		</symbol>
	</svg>
</template>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	overflow: hidden;

	.main {
		height: 100%;
	}
}
</style>
