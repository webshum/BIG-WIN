<template>
	<div class="social-yellow tx-c">
		<a href="#"><img src="/svg/ic-fb.svg" alt=""></a>
		<a href="#"><img src="/svg/ic-in.svg" alt=""></a>
		<a href="#"><img src="/svg/ic-tl.svg" alt=""></a>
	</div>
</template>

<style>
.social-yellow {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 19px;

	a {
		display: inline-block;
		width: 33px;
		height: 33px;
		border-radius: 50%;
		overflow: hidden;
		transition: all 0.3s;
	}
	a:hover {transform: scale(1.1);}
}
</style>
