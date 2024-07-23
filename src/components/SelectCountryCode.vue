<script setup>
import { ref, computed, defineEmits } from 'vue';
import Country from './Country.json';

const searchQuery = ref('');

function onSelected(e) {
	const flag = e.target.closest('.item').dataset.flag;
	const code = e.target.closest('.item').dataset.code;
	const codeCountry = e.target.closest('.item').dataset.codecountry;

	e.target.closest('.item').classList.add('active');

	setTimeout(() => {
		e.target.closest('.item').classList.remove('active');

		emit('onFlag', false);
		emit('onCode', {
			code: code,
			codeCountry: codeCountry,
			flag: flag,
		});
	}, 300);
}

const filteredCountries = computed(() => {
	return Country.filter(country => {
		return country.name.toLowerCase().includes(searchQuery.value.toLowerCase());
	});
});

const emit = defineEmits(['onFlag', 'onCode']);

function onBack() {
	emit('onFlag', false);
}

</script>

<template>
	<div class="select-country relative">
		<button class="btn-back" @click="onBack">
			<img src="/svg/ic-back.svg" alt="">
		</button>

		<div class="tx-c">
			<h3 class="title"><span>Select a country code</span></h3>
		</div>

		<form action="#" class="search">
			<input type="search" placeholder="Search" v-model="searchQuery">
			<button type="submit"></button>
		</form>

		<div class="select">
			<div
				class="item"
				v-for="country in filteredCountries"
				:data-code="country.dial_code"
				:data-codeCountry="country.code"
				:data-flag="country.emoji"
				@click="onSelected"
			>
				<div>{{ country.emoji }}</div>
				{{ country.name }}
				<span>{{ country.dial_code }}</span>
			</div>
		</div>
	</div>
</template>

<style>
.select-country {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background: #191B1C;
	padding: 15px;
	display: block;
	flex-direction: column;

	h3.title {
		font-size: 18px;
		position: relative;
		padding-top: 15px;
		text-transform: capitalize;

		&:before {
			content: '';
			display: block;
			width: 80px;
			height: 5px;
			background: #4D5761;
			border-radius: 5px;
			position: absolute;
			left: 50%;
			bottom: 100%;
			transform: translateX(-50%);
		}
	}

	.search {
		position: relative;
		height: 48px;
		border-radius: 42px;
		background: #26272B;
		overflow: hidden;

		input {
			color: #6C737F;
			font-size: 16px;
			font-weight: 500;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: transparent url(/svg/ic-search.svg) no-repeat calc(50% - 50px) 50%;
			text-align: center;
			border: none;
			outline: none;
			&::placeholder {color: #6C737F;}
		}
		input:focus {background: transparent;}

		button {display: none;}
	}

	.select {
		border-radius: 12px;
		background: #26272B;
		padding-left: 12px;
		margin-top: 20px;
		height: 100%;
		overflow-y: auto;

		.item {
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 12px 12px 12px 0;
			font-size: 14px;
			font-weight: 600;
			color: #fff;
			transition: all 0.3s;
			cursor: pointer;

			border-bottom: 1px solid #6C737F;

			div {
				font-size: 25px;
				line-height: 0;
			}

			span {
				font-size: 14px;
				font-weight: 500;
				color: #6C737F;
				display: inline-block;
				margin-left: -5px;
			}

			&:hover {color: #FFB31E;}
			&:last-child {border-bottom: none;}
			&:after {
				content: '';
				display: inline-block;
				width: 16px;
				height: 10px;
				background: url(/svg/ic-check.svg) no-repeat;
				margin-left: auto;
				transition: all 0.3s;
				opacity: 0;
			}
			&.active:after {opacity: 1;}
		}
	}

	.select::-webkit-scrollbar {width: 5px;}
	.select::-webkit-scrollbar-track {width: 5px;}
	.select::-webkit-scrollbar-thumb {
		width: 5px;
		border-radius: 5px;
		background: #FFB31E;
	}

}
</style>
