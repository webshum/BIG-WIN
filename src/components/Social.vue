<template>
	<div class="social tx-c">
		<a href="#"><img src="/svg/ic-telegram.svg" alt=""></a>
		<a href="#"><img src="/svg/ic-x.svg" alt=""></a>
	</div>
</template>

<style>
.social {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
	padding: 50px 0;

	a {
		display: inline-block;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
		transition: all 0.3s;
	}
	a:hover {transform: scale(1.1);}
}
</style>
