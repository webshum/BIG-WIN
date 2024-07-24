<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<div id="footer">
		<div class="center">
			<div class="tx-c">
				<h2 class="title">Zostaw swój numer, aby osobisty menedżer<br> mógł się z Tobą skontaktować. W ciągu 5<br> minut zaoferujemy Ci wyjątkowe warunki,<br> których nigdy wcześniej nie widziałeś!</h2><br>

				<RouterLink to="/write-number" class="btn-discrover">
					<span class="inner"><span>Discover</span></span>
				</RouterLink>

				<div class="links">
					<RouterLink to="/terms-conditions">Terms & Conditions</RouterLink>
					<RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
				</div>

				<div class="card">
					<span></span>
					<div class="bg"></div>
					<br>
					<br>
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
		font-size: 16px;
		line-height: 2;
	}

	.links {
		display: flex;
		justify-content: space-between;
		padding: 40px 0 30px;
		position: relative;
		z-index: 10;

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
			top: 0;
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
			top: -45px;
			left: 45px;
		}
		&:after {
			content: '';
			display: block;
			width: 59px;
			height: 59px;
			background: url(/footer/bg-2.svg) no-repeat;
			position: absolute;
			top: -20px;
            right: -8px;
		}
	}

	.copy {
		font-size: 14px;
	}
}
</style>
