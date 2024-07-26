<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params);
// const link = route.params.id;
</script>

<template>


	<div class="box-play">
		<RouterLink to="/" class="btn-back">
			<img src="/svg/ic-back.svg" alt="">
		</RouterLink>

		<img src="/timer/timer.png" alt="">

		<div class="tx-c">
			<RouterLink to="route.params.link" class="btn-discrover">
				<span class="inner"><span>Grać</span></span>
			</RouterLink>
		</div>

		<ContactSupport style="margin-top: 50px;"/>
	</div>
</template>

<style>
.box-play {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background: url(/timer/bg.jpg) no-repeat center;
	background-size: cover;
	padding: 50px 0;
	text-align: center;

	img {
		max-width: 500px;
		width: 100%;
	}

	.tx-c {padding: 0 15px;}
}
</style>
