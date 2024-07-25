<script setup>
import { ref } from 'vue';

const text = ref(true);

async function onLink() {
	const token = localStorage.getItem('token');

	const response = await fetch('https://fdspnasa.info/api/v1/clients/request-call', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-token': token
		},
	});

	const data = await response.json();

	if (data.isSuccess) {
		text.value = false;
	}
}

</script>

<template>
	<div class="foot-problems tx-c">Masz jakieś problemy? <a href="#" @click="onLink"><span v-if="text">Kontakt z pomocą techniczną</span><span v-else>Wysłano</span></a></div>
</template>

<style>
	.foot-problems {
		margin-top: 15px;
		color: #fff;
		text-align: center;
		font-size: 12px;
		font-weight: 600;
		position: relative;

		a {
			color: #F3B414;
			text-decoration: none;
			&:hover {text-decoration: underline;}
		}
	}
</style>
