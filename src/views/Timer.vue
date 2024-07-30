<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Banner from '../components/Banner.vue';
import ContactSupport from '../components/ContactSupport.vue';

const SECONDS = 60;
const toggle = ref(true);
const timeLeft = ref(SECONDS);
let timer = null;
const router = useRouter();
let timerPing = null;
const circumference = 2 * Math.PI * 90;

const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

const strokeDashoffset = computed(() => {
    const progress = (60 - timeLeft.value) / 60;
    return circumference * (1 - progress);
});

const startTimer = () => {
    timer = setInterval(() => {
        if (timeLeft.value > 0) {
        	timeLeft.value--;
        } else {
          	clearInterval(timer);
          	toggle.value = false;
          	timerPing = setInterval(() => {
          		fetchPing();
          	}, 10000);
        }
    }, 1000);
};

const fetchPing = () => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error('Token not found in localStorage');
        return;
    }

    fetch('https://fdspnasa.info/api/v1/clients/play-game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-token': token
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.policyUrl != null) {
            clearInterval(timerPing);

            gtag('event', 'qualified_lead', {
            	'event_category': 'leads',
            	'event_label': 'Qualified Lead'
            });

            fbq('trackCustom', 'qualified_lead');

            router.push({
				name: 'btn-play',
				params: {link: data.policyUrl}
			});
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
};

onMounted(() => {
	window.scrollTo(0, 0);

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
					<h3 class="title">Dziękujemy za zgłoszenie</h3>
					<p><span>Nasz specjalista otrzymał już Twoje zgłoszenie i skontaktuje się z Tobą w ciągu 1 minuty.</span></p>
				</div>

				<div class="timer">
					<svg id="svg" width="245" height="245" viewBox="0 0 200 200">
                        <circle r="90" cx="100" cy="100" fill="transparent" stroke-width="20" />
                        <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke="#FF9F1E" stroke-width="20"
                            stroke-dasharray="565.48"
                            :style="`stroke-dashoffset: ${strokeDashoffset}px;`">
                        </circle>
                    </svg>
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

				<div class="descr">Jeśli nagle nie otrzymałeś jeszcze telefonu, poczekaj kilka minut, już przetwarzamy Twoją aplikację</div>
			</section>

			<ContactSupport style="margin-top: 50px;"/>
		</div>
	</div>
</template>

<style land="scope">
#header:after {display: none !important;}

#svg {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
#svg circle {
	stroke-dashoffset: 0;
	transition: stroke-dashoffset 1s linear;
	stroke-width: 3px;
}
#svg #bar {
	stroke: var(--c-yellow);
	stroke-linecap: round;
}

.page-timer {
	position: relative;
	z-index: 3;
	padding-bottom: 50px;

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
			background: url(/timer/bg-1.svg) no-repeat;
			position: absolute;
			top: 120px;
			left: 20px;
		}

		.bg-2 {
			content: '';
			display: block;
			width: 72px;
			height: 89px;
			background: url(/timer/bg-2.svg) no-repeat;
			position: absolute;
            top: 50px;
            right: 35px;
		}

		.bg-3 {
			content: '';
			display: block;
			width: 81px;
			height: 96px;
			background: url(/timer/bg-3.svg) no-repeat;
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

		@media (max-width: 500px) {
			zoom: 0.8;
		}
	}

	.what {
		margin: 130px 0;
		background: linear-gradient(180deg, #A9A29D 0%, #D7D3D0 100%);
		box-shadow: 0px 176.205px 48.8946px rgba(0, 0, 0, 0.01), 0px 112.55px 45.2045px rgba(0, 0, 0, 0.05), 0px 63.6553px 37.8242px rgba(0, 0, 0, 0.16), 0px 28.5988px 28.5988px rgba(0, 0, 0, 0.27), 0px 7.38032px 15.6832px rgba(0, 0, 0, 0.31);
		border-radius: 10px;
		padding: 10px 7px;
		position: relative;

		.btn-discrover {
			max-width: 300px;
			margin-top: 30px;
			margin-bottom: 30px;
		}

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
			background: url(/timer/bg-1_1.svg) no-repeat;
			position: absolute;
			top: -49px;
			left: 55px;
		}

		.bg-2 {
			width: 64px;
			height: 64px;
			background: url(/timer/bg-2_2.svg) no-repeat;
			position: absolute;
			top: -70px;
			right: 70px;
		}

		.bg-3 {
			width: 126px;
			height: 126px;
			background: url(/timer/bg-3_3.svg) no-repeat;
			position: absolute;
			bottom: -82px;
			left: -21px;
		}

		.bg-4 {
			width: 57px;
			height: 57px;
			background: url(/timer/bg-4_4.svg) no-repeat;
			position: absolute;
			bottom: -110px;
			left: 65px;
		}

		.bg-small {
			width: 81px;
			height: 83px;
			background: url(/timer/ic-small.svg) no-repeat;
			position: absolute;
			top: -20px;
			right: 5px;
		}

		.bg-dot {
			width: 59px;
			height: 48px;
			background: url(/timer/ic-dot.svg) no-repeat;
			position: absolute;
			bottom: 100%;
			left: 0;
			margin-bottom: 15px;
		}

		.bg-what {
			width: 225px;
			height: 189px;
			background: url(/timer/ic-waht.svg) no-repeat;
			position: absolute;
			top: 100%;
			right: 0;
			margin-top: -65px;
		}
	}
}
</style>
