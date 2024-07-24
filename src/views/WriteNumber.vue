<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SelectCountryCode from '../components/SelectCountryCode.vue';
import Country from '../components/Country.json';

const flag = ref(false);
const dataCountry = ref({
	code: Country[0].dial_code,
	codeCountry: Country[0].code,
	flag: Country[0].emoji
});
const availableCountries = ref([]);
const tel = ref();
const agree = ref(false);
const disabled = ref(true);
const router = useRouter();

const globalError = ref(false);
const globalErrorText = ref('Error!!!');

const errorPhone = ref(false);
const errorAgree = ref(false);

function onInput() {
	errorPhone.value = false;
	disabled.value = false;
}

function onFocus() {
	setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 300);
}

function onAgree() {
	if (agree.value) {
		errorAgree.value = false;
	} else {
		errorAgree.value = true;
	}
}

async function onSubmit() {
	if (tel.value == undefined || tel.value == '') {
		errorPhone.value = true;
		return false;
	}

	if (!agree.value) {
		errorAgree.value = true;
		return false;
	}

	const cleanedNumber = tel.value.replace(/[()\-]/g, '');
	const phone = dataCountry.value.code + cleanedNumber;

	const result = await fetch('https://fdspnasa.info/api/v1/clients', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"name": "new client",
			"phone": phone,
			"countryCode": dataCountry.value.codeCountry,
			"bundle": "string"
		})
	});

	const data = await result.json();

	if (data.success) {
		localStorage.setItem('token', data.token);
		localStorage.setItem('code', dataCountry.code);
		localStorage.setItem('phone', tel.value.toString());

		if (data.needVerif) {
			router.push('/verification');
		} else {
			router.push('/timer');
		}
	} else {
		globalError.value = true;
		globalErrorText.value = data;
	}
}

const filteredCountries = computed(() => {
	return Country.filter(country => availableCountries.value.includes(country.iso));
});

onMounted(async () => {
	window.scrollTo(0, 0);

	const result = await fetch('https://fdspnasa.info/api/v1/countries', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			"bundle": "string"
		})
	});

	const data = await result.json();

	availableCountries.value = data.availableCountries;

	dataCountry.value = {
		code: filteredCountries.value[0].code,
		codeCountry: filteredCountries.value[0].iso,
		flag: filteredCountries.value[0].flag,
		mask: filteredCountries.value[0].mask,
	};
});
</script>

<template>
	<div class="page-write">
		<div class="center">
			<div class="tx-c">
				<h3 class="title">Sign up with your number</h3>
				<p>There are many variations of passages<br>of Lorem Ipsum available</p>
			</div>

			<SelectCountryCode v-if="flag" @onFlag="flag = $event" @onCode="dataCountry = $event"/>

			<form action="/verification" class="form" @submit.prevent>
				<div class="label-text">Write your phone number</div>

				<div class="input-tel field" :class="{'input-error': error}">
					<div class="code" @click="flag = true">
						<img class="flag" :src="dataCountry.flag" alt="">
						{{ dataCountry.code }}
					</div>

					<MaskInput
						type="tel"
						:mask="dataCountry.mask"
						placeholder="mobile phone"
						v-model="tel"
						@input="onInput"
						@focus="onFocus"
					/>

					<div class="error" v-if="errorPhone">Enter a phone number</div>
				</div>

				<div class="tx-c">
					<button type="submit" class="btn-discrover" :class="{disabled: disabled}" @click="onSubmit">
						<span class="inner"><span>continue</span></span>
					</button>
				</div>

				<label class="input-checkout field">
					<input type="checkbox" v-model="agree" @change="onAgree">
					<div class="input"></div>
					<div class="text">I am over 18 years old and i agree to the terms of use of the site</div>
					<div class="error" v-if="errorAgree">Select the check mark</div>
				</label>
			</form>
		</div>

		<div class="global-error" v-if="globalError">
			<span>{{ globalErrorText }}</span><br>
			<button @click="globalError = false">close</button>
		</div>
	</div>
</template>

<style>
.page-write {
	position: relative;
	height: calc(100vh - 115px);

	.form {
		padding: 25px 0 50px 0;
	}
}

.label-text {
	font-size: 14px;
	color: #fff;
	font-weight: 600;
	margin-bottom: 8px;
}

.input-tel {
	width: 100%;
	height: 52px;
	border-radius: 60px;
	border: 1px solid rgba(77, 87, 97, 0.48);
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
	color: #fff;
	padding: 0 12px;
	margin-bottom: 30px;

	.code {
		min-width: 97px;
		position: relative;
		border-right: 1px solid rgba(77, 87, 97, 0.48);
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 16px;

		span {font-size: 25px;}

		&:after {
			content: '';
			display: block;
			width: 10px;
			height: 6px;
			background: url(/svg/ic-arr.svg) no-repeat;
			position: absolute;
			right: 12px;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	input {
		background: none;
		border: none;
		padding-left: 12px;
		color: #fff;
		display: block;
		width: 100%;
		height: 100%;
		font-size: 16px;
		&::placeholder {
			color: #A4ACB5;
			font-size: 14px;
			font-weight: 500;
		}
	}
}

.input-checkout {
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 14px;
	color: #848484;
	line-height: 1.2;
	margin-top: 25px;
	user-select: none;

	input {display: none;}

	.input {
		width: 28px;
		min-width: 28px;
		height: 28px;
		border-radius: 8px;
		border: 2px solid #4D5761;
		position: relative;

		&:after {
			content: '';
			display: block;
			width: 16px;
			height: 10px;
			background: url(/svg/ic-check.svg) no-repeat;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			transition: all 0.3s;
		}
	}

	input:checked + .input:after {opacity: 1;}
}
</style>
