<script setup>
import { RouterLink } from 'vue-router';
import Social from '../components/Social.vue';
</script>

<template>
	<div id="footer">
		<div class="center">
			<div class="tx-c">
				<h2 class="title">Let's NoApp<br> something great together</h2><br>

				<RouterLink to="/write-number" class="btn-discrover">
					<span class="inner"><span>Discover</span></span>
				</RouterLink>

				<div class="links">
					<a href="#">Terms & Conditions</a>
					<a href="#">Privacy Policy</a>
				</div>

				<div class="card">
					<span></span>
					<div class="bg"></div>
					<Social/>
				</div>

				<p class="copy"><span>© Copyright 2024 - NoAPP</span></p>
			</div>
		</div>
	</div>
</template>

<style>
#footer {
	background: #252728;
	border-radius: 0 30px 0 0;
	padding: 35px 0 25px 0;
	position: relative;
	z-index: 3;

	h2.title {
		margin-bottom: 25px;
		font-size: 28px;
	}

	.links {
		display: flex;
		justify-content: space-between;
		padding: 40px 0 30px;
		a {
			background: linear-gradient(90deg, #E3E8EF 0%, #9AA4B2 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-decoration: underline;
			position: relative;
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 1px;
				background: linear-gradient(90deg, #E3E8EF 0%, #9AA4B2 100%);
				position: absolute;
				top: 100%;
				left: 0;
				opacity: 0.6;
				transition: all 0.3s;
			}
			&:hover:after {opacity: 0;}
		}
	}

	.social {
		padding: 40px 0 25px 0;
	}

	.card {
		.bg {
			position: absolute;
			top: 60px;
			left: 0;
			background: url(/footer/bg-3.svg) no-repeat;
			width: 77px;
			height: 77px;
		}

		&:before {
			content: '';
			display: block;
			width: 65px;
			height: 65px;
			background: url(/footer/bg-1.svg) no-repeat;
			position: absolute;
			top: 20px;
			left: 45px;
		}
		&:after {
			content: '';
			display: block;
			width: 59px;
			height: 59px;
			background: url(/footer/bg-2.svg) no-repeat;
			position: absolute;
			top: 50px;
			right: 0;
		}
	}

	.copy {
		font-size: 14px;
	}
}
</style>
