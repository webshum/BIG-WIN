<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SocialYellow from '../components/SocialYellow.vue';

const toggle = ref(true);
const timeLeft = ref(30);
let timer = null;
const router = useRouter();

const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

const startTimer = () => {
    timer = setInterval(() => {
        if (timeLeft.value > 0) {
        	timeLeft.value--;
        } else {
          	clearInterval(timer);
        	fetchPing();
        }
    }, 1000);
};

const fetchPing = async () => {
	toggle.value = false;
	console.log('ping');
};

onMounted(() => {
	if (!localStorage.getItem('token')) {
		router.push('/');
	}

    startTimer();
});
</script>

<template>
	<div class="page-timer">
		<div class="center">
			<div class="section" v-if="toggle">
				<div class="tx-c">
					<h3 class="title">thank you for your<br> request</h3>
					<p><span>Our specialist has already received your application and will contact you within 1 minute</span></p>
				</div>

				<div class="timer">
					<span class="circle-1 circle"></span>
					<span class="circle-2 circle"></span>
					<span class="circle-3 circle"></span>
					<span class="circle-4 circle"></span>
					<span class="number">{{ formattedTime }}</span>
					<span class="bg-1"></span>
					<span class="bg-2"></span>
					<span class="bg-3"></span>
					<div class="diamond">
						<img src="/timer/ic-diamond.svg" alt="">
						<img src="/timer/ic-diamond.svg" alt="">
						<img src="/timer/ic-diamond.svg" alt="">
						<img src="/timer/ic-diamond.svg" alt="">
					</div>
				</div>
			</div>

			<section class="what" v-else>
				<span class="bg-1"></span>
				<span class="bg-2"></span>
				<span class="bg-3"></span>
				<span class="bg-4"></span>
				<span class="bg-small"></span>
				<span class="bg-dot"></span>
				<span class="bg-what"></span>
				<div class="top">
					<div class="avatar">
						<img src="/timer/avatar.png" alt="">
					</div>
					<div>
						<h4>Vanya.Smelo <span>2h</span></h4>
						<p>Follow my journey</p>
					</div>
				</div>

				<div class="descr">If suddenly you have not been called yet, wait a few minutes, we are already processing your application</div>
			</section>

			<div class="foot">
				<p><span>Follow us on social networks</span></p>
				<SocialYellow/>
			</div>
		</div>
	</div>
</template>

<style>
.page-timer {
	position: relative;
	z-index: 3;
	padding-bottom: 50px;

	.foot {
		margin-top: 70px;
		color: #fff;
		text-align: center;
		font-size: 16px;
		position: relative;

		a {
			color: #F3B414;
			text-decoration: none;
			&:hover {text-decoration: underline;}
		}

		&:after {
			content: '';
			display: block;
			width: 135px;
			height: 5px;
			border-radius: 5px;
			background: #fff;
			margin: 20px auto 0 auto;
		}

		.social-yellow {
			padding-top: 10px;
			padding-bottom: 30px;
		}
	}

	.timer {
		width: 395px;
		height: 395px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #fff;
		font-size: 56px;
		font-weight: normal;
		margin: 0 auto;
		position: relative;
		border: 1px solid rgba(255,179,30,.03);
		text-shadow: 0px -59px 24px rgba(255, 255, 255, 0.02),
					 0px -33px 20px rgba(255, 255, 255, 0.06),
					 0px -15px 15px rgba(255, 255, 255, 0.1),
					 0px -4px 8px rgba(255, 255, 255, 0.12),
					 0px 59px 24px rgba(255, 255, 255, 0.02),
					 0px 33px 20px rgba(255, 255, 255, 0.06),
					 0px 15px 15px rgba(255, 255, 255, 0.1),
					 0px 4px 8px rgba(255, 255, 255, 0.12);

		.circle {
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.circle-1 {
			width: 352px;
			height: 352px;
			border: 1px solid rgba(255,179,30,.08);
		}

		.circle-2 {
			width: 318px;
			height: 318px;
			border: 1px solid rgba(255,179,30,.12);
		}

		.circle-3 {
			width: 282px;
			height: 282px;
			border: 1px solid rgba(255,179,30,.2);
		}

		.circle-4 {
			width: 250px;
			height: 250px;
			border: 1px solid rgba(255,179,30,.32);
		}

		.bg-1 {
			content: '';
			display: block;
			width: 52px;
			height: 75px;
			background: url(timer/bg-1.svg) no-repeat;
			position: absolute;
			top: 120px;
			left: 20px;
		}

		.bg-2 {
			content: '';
			display: block;
			width: 72px;
			height: 89px;
			background: url(timer/bg-2.svg) no-repeat;
			position: absolute;
            top: 50px;
            right: 35px;
		}

		.bg-3 {
			content: '';
			display: block;
			width: 81px;
			height: 96px;
			background: url(timer/bg-3.svg) no-repeat;
			position: absolute;
			bottom: 15px;
			right: 40px;
		}

		.diamond {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 16px;
			margin-top: -15px;
		}
	}

	.what {
		margin: 130px 0;
		background: linear-gradient(180deg, #A9A29D 0%, #D7D3D0 100%);
		box-shadow: 0px 176.205px 48.8946px rgba(0, 0, 0, 0.01), 0px 112.55px 45.2045px rgba(0, 0, 0, 0.05), 0px 63.6553px 37.8242px rgba(0, 0, 0, 0.16), 0px 28.5988px 28.5988px rgba(0, 0, 0, 0.27), 0px 7.38032px 15.6832px rgba(0, 0, 0, 0.31);
		border-radius: 10px;
		padding: 10px 7px;
		position: relative;

		.top {
			display: flex;
			align-items: center;
			gap: 7px;
		}
		.top .avatar {
			width: 35px;
			height: 35px;
			border-radius: 50%;
			overflow: hidden;
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.top h4 {
			font-size: 18px;
			font-weight: normal;
			font-family: var(--anton);
			line-height: 1;
			color: #292524;
			display: flex;
			align-items: center;

			span {
				color: #57534E;
				font-size: 8px;
				font-weight: 500;
				font-family: var(--awant);
				display: inline-block;
				padding-left: 12px;
				position: relative;
			}
			span:before {
				content: '';
				display: block;
				width: 2px;
				height: 2px;
				background: #57534E;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 5px;
				margin-top: -1px;
			}
		}
		.top p {
			font-size: 10px;
			font-weight: 500;
			color: #57534E;
		}

		.descr {
			margin-top: 10px;
			color: #292524;
			font-size: 15px;
			font-weight: normal;
			padding-left: 35px;
		}

		.bg-1 {
			width: 83px;
			height: 83px;
			background: url(timer/bg-1_1.svg) no-repeat;
			position: absolute;
			top: -49px;
			left: 55px;
		}

		.bg-2 {
			width: 64px;
			height: 64px;
			background: url(timer/bg-2_2.svg) no-repeat;
			position: absolute;
			top: -70px;
			right: 70px;
		}

		.bg-3 {
			width: 126px;
			height: 126px;
			background: url(timer/bg-3_3.svg) no-repeat;
			position: absolute;
			bottom: -82px;
			left: -21px;
		}

		.bg-4 {
			width: 57px;
			height: 57px;
			background: url(timer/bg-4_4.svg) no-repeat;
			position: absolute;
			bottom: -110px;
			left: 65px;
		}

		.bg-small {
			width: 81px;
			height: 83px;
			background: url(timer/ic-small.svg) no-repeat;
			position: absolute;
			top: -20px;
			right: 5px;
		}

		.bg-dot {
			width: 59px;
			height: 48px;
			background: url(timer/ic-dot.svg) no-repeat;
			position: absolute;
			bottom: 100%;
			left: 0;
			margin-bottom: 15px;
		}

		.bg-what {
			width: 225px;
			height: 189px;
			background: url(timer/ic-waht.svg) no-repeat;
			position: absolute;
			top: 100%;
			right: 0;
			margin-top: -65px;
		}
	}
}
</style>
