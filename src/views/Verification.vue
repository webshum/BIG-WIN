<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const disabled = ref(true);
const inputs = ref([null, null, null, null, null, null]);
const timeLeft = ref(59);
let timer = null;
const router = useRouter();
const code = ref('');
const error = ref(false);

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
        	fetchNewCode();
        }
    }, 1000);
};

const fetchNewCode = async () => {
	const token = localStorage.getItem('token');

	const result = await fetch('https://fdspnasa.info/api/v1/clients/request-verification', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-token': token
		}
	});

	const data = await result.json();
};

const onInput = (index, event) => {
	const value = event.target.value;

	if (value.length === 1 && index < inputs.value.length - 1) {
		const parent = event.target.closest('.numbers');
		const numbers = parent.querySelectorAll('input');

	    nextTick(() => {
	    	numbers[index + 1].focus();
	    });
	} else if (value.length === 1 && index === inputs.value.length - 1) {
		const parent = event.target.closest('.numbers');
		parent.querySelector('input:last-child').blur();

		parent.querySelectorAll('input').forEach(input => {
			code.value += input.value;
		});

	    disabled.value = false;
	}
};

async function onSubmit() {
	const token = localStorage.getItem('token');

	const result = await fetch('https://fdspnasa.info/api/v1/clients/phone-verification', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-token': token
		},
		body: JSON.stringify({
			'code': code.value,
		})
	});

	const data = await result.json();

	if (data.isVerified) {
		router.push('/timer');
	} else {
		document.querySelector('.form-verification').reset();
		error.value = true;
	}
}

onMounted(() => {
	if (!localStorage.getItem('token')) {
		router.push('/');
	}

    startTimer();
});
</script>

<template>
	<div class="page-verification">
		<div class="center">
			<div class="tx-c">
				<h3 class="title">Verification</h3>
				<p><span>Enter the 6 digit code sent to 49****33</span></p>
			</div>

			<form action="/timer" class="form-verification" @submit.prevent>
				<div class="numbers">
		        	<input
		        		v-for="(input, index) in inputs"
		        		:key="index"
		        		ref="input"
		        		type="number"
		        		maxlength="1"
		        		:class="{'input-error': error}"
		        		@input="onInput(index, $event)"
		        	>
		        </div>

				<div class="text-timer tx-c">Resend the code after <span class="timer">{{ formattedTime }}</span> Support</div>

				<div class="tx-c">
					<button type="submit" class="btn-discrover" :class="{disabled: disabled}" @click="onSubmit">
						<span class="inner"><span>submit</span></span>
					</button>
				</div>
			</form>

			<div class="foot tx-c">Having problems? <a href="#">Contact support</a></div>
		</div>
	</div>
</template>

<style>
.page-verification {
	position: relative;
	z-index: 3;
	padding-bottom: 50px;

	.foot {
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

		&:after {
			content: '';
			display: block;
			width: 135px;
			height: 5px;
			border-radius: 5px;
			background: #fff;
			margin: 20px auto 0 auto;
		}
	}
}

.form-verification {
	.numbers {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 8px;

		input {
			background: none;
			height: 65px;
			text-align: center;
			border: none;
			width: 100%;
			font-weight: bold;
			font-family: Montserrat, sans-serif;
			font-size: 36px;
			color: #fff;
			border-bottom: 1px solid rgba(77,87,97);
		}
	}

	.text-timer {
		color: #6C737F;
		font-size: 14px;
		font-weight: 600;
		margin-top: 20px;
		margin-bottom: 50px;
	}
}
</style>
