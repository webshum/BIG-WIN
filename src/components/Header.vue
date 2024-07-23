<template>
	<header id="header">
		<div class="center tx-c">
			<a href="#" class="logo">
				<img src="/header/logo.svg" alt="">
				<div class="bg"></div>
			</a>
		</div>
	</header>
</template>

<style>
#header {
	position: relative;
	padding: 20px 0;

	&:after {
		content: '';
		display: block;
		width: 100%;
		height: 800px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background: url(/header/bg.png) no-repeat;
		background-size: 100% 100%;
	}

	.logo {
		display: inline-block;
		position: relative;

		&:before {
			content: '';
			display: block;
			width: 60px;
			height: 60px;
			background: url(/header/bg-1.svg) no-repeat;
			position: absolute;
			top: 0;
			left: -45px;
		}

		&:after {
			content: '';
			display: block;
			width: 62px;
			height: 62px;
			background: url(/header/bg-2.svg) no-repeat;
			position: absolute;
			top: 40px;
			right: -70px;
		}

		.bg {
			content: '';
			display: block;
			width: 102px;
			height: 102px;
			background: url(/header/bg-3.svg) no-repeat;
			position: absolute;
			bottom: -35px;
			left: -100px;
		}
	}
}
</style>
