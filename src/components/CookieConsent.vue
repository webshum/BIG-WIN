<script setup>
import { ref, onMounted } from 'vue';

const consentGiven = ref(false);

const checkConsent = () => {
	consentGiven.value = localStorage.getItem('cookieConsent') === 'true';
};

const giveConsent = () => {
	localStorage.setItem('cookieConsent', 'true');
	consentGiven.value = true;
};

onMounted(() => {
 	checkConsent();
});
</script>

<template>
	<div v-if="!consentGiven" class="cookie-consent">
		<p>Używamy plików cookie, aby poprawić Twoje doświadczenia na naszej stronie. Kontynuując przeglądanie, zgadzasz się na używanie plików cookie.</p>
		<button @click="giveConsent">Zgadzam się</button>
	</div>
</template>

<style land="scope">
	.cookie-consent {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		text-align: center;
		padding: 1em;
		z-index: 999;
	}
	.cookie-consent button {
		background-color: #4CAF50; /* Green */
		border: none;
		color: white;
		padding: 10px 24px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 4px;
	}
</style>
