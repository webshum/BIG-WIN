<script setup>
import {RouterLink} from 'vue-router';
import Banner from '../components/Banner.vue';
import Social from '../components/Social.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
	<main class="page-index">
		<div class="head tx-c">
			<h2 class="title">FIRST APP</h2>
			<p class="subtitle"><span>There are many variations of passages<br> of Lorem Ipsum available, but the majority.</span></p>
		</div>

		<div class="center">
			<Banner/>
		</div>

		<div class="body">
			<div class="center">
				<div class="group-buttons tx-c">
					<RouterLink to="/write-number" class="btn-discrover">
						<span class="inner"><span>Discover</span></span>
					</RouterLink>
				</div>

				<Social/>

				<div class="partners">
					<div class="tx-c">
						<h2 class="title">our partners</h2>
					</div>

					<ul class="list">
						<li class="card">
							<span></span><span></span>
							<img src="/partners/coinMarketCap.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<img src="/partners/msn.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<img src="/partners/yahoo.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<img src="/partners/benzinga.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<img src="/partners/finbold.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<img src="/partners/business.svg" alt="">
						</li>
					</ul>
				</div>
			</div>

			<div class="what">
				<div class="center">
					<div class="tx-c">
						<h2 class="title">What is no app?</h2>
						<p><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span></p>
					</div>
					<ul class="list">
						<li class="card">
							<span></span><span></span>
							<p><span>Lorem Ipsum<br>available</span></p>
							<img src="/what/image-1.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<p><span>Lorem Ipsum<br>available</span></p>
							<img src="/what/image-2.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<p><span>Lorem Ipsum<br>available</span></p>
							<img src="/what/image-3.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<p><span>Lorem Ipsum<br>available</span></p>
							<img src="/what/image-4.svg" alt="">
						</li>
					</ul>
				</div>
			</div>
		</div>
	</main>

	<Footer/>
</template>

<style>
	.head {
		padding-top: 50px;
		background: url('/bg-home.png') no-repeat center bottom;
		background-size: cover;
	}

	.body {
		padding: 55px 0 0 0;
		background: #191B1C;
	}

	.partners {
		padding-bottom: 65px;
		h2.title {
			position: relative;
			&:after {
				content: '';
				display: block;
				width: 60px;
				height: 60px;
				position: absolute;
				top: 0;
				right: 0;
				background: url(/svg/bg-title-1.svg) no-repeat;
				top: -24px;
				right: -50px;
			}
			&:before {
				content: '';
				display: block;
				width: 60px;
				height: 60px;
				position: absolute;
				bottom: 0;
				left: 0;
				background: url(/svg/bg-title-2.svg) no-repeat;
				bottom: -28px;
				left: -37px;
			}
		}
		.list {
			margin-top: 20px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			list-style: none;
			gap: 8px;

			li {
				min-height: 160px;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
			}
		}
	}

	.what {
		padding: 35px 0;
		background: #0F1011;

		.center {
			position: relative;

			&:before {
				content: '';
				display: block;
				width: 70px;
				height: 78px;
				position: absolute;
				top: -10px;
				right: 15px;
				background: url(/what/bg-1.svg) no-repeat;
			}

			& > .tx-c > p {
				position: relative;

				&:after {
					content: '';
					display: block;
					width: 95px;
					height: 174px;
					position: absolute;
					bottom: -120px;
					left: -10px;
					background: url(/what/bg-2.svg) no-repeat;
				}
			}
		}

		.list {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 8px;
			list-style: none;
			margin-top: 25px;
			li {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				text-align: center;
				gap: 15px;
				padding: 15px;
			}
		}
	}
</style>
