<script setup>
import {RouterLink} from 'vue-router';
import Banner from '../components/Banner.vue';
import Footer from '../components/Footer.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const optionsSplide = {
	type: 'loop',
	rewind: true,
	arrows: false,
	pagination: false,
	perPage: 1,
	padding: '15%',
	gap: 12,
	autoplay: true
}
</script>

<template>
	<main class="page-index">
		<div class="head tx-c">
			<h2 class="title">ROYAL VIP</h2>
			<p class="subtitle"><span>Oficjalna strona firmy świadczącej usługi Royal VIP</span></p>
		</div>

		<div class="center">
			<Banner/>
		</div>

		<div class="body">
			<div class="center">
				<div class="group-buttons tx-c">
					<RouterLink to="/write-number" class="btn-discrover">
						<span class="inner"><span>Odkryj</span></span>
					</RouterLink>
				</div>

				<div class="text">
					<p><span>Czy masz pewność, że czerpiesz MAKSIMUM z gier, w które grasz? Nasz concierge service został stworzony, aby wzbogacić doświadczenia naszych klientów. Znajdujemy najlepsze warunki, gwarantujemy niezawodność partnerów, oferujemy wiele prywatnych ofert, wsparcie 24/7 i wiele więcej. Zawsze gramy po stronie naszych klientów, a nasza strona zawsze wygrywa!</span></p>
				</div>
			</div>

			<div class="partners">
				<div class="center">
					<div class="tx-c">
						<h2 class="title">Czym jest Royal VIP?</h2>
					</div>

					<p class="tx-c"><span>Naszym celem jest zapewnienie usługi VIP wszystkim naszym użytkownikom, niezależnie od doświadczenia. Dołącz do nas i wynieś swoją grę na nowy poziom.</span></p>
					<p class="tx-c"><span>Szukałeś czegoś do grania? Wiemy dokładnie, czego potrzebujesz!</span></p>

					<ul class="list">
						<li class="card">
							<span></span><span></span>
							<p><span>dostęp do gier<br> prywatnych<br> w 5 minut</span></p>
							<img src="/partners/icon-1.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<p><span>informacje o tym<br> GDZIE i KIEDY<br> najlepiej grać w<br> swoje ulubione gry!</span></p>
							<img src="/partners/icon-2.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<p><span>89% użytkowników<br> zgłasza pozytywne<br> wyniki korzystania z<br> naszej usługi</span></p>
							<img src="/partners/icon-3.svg" alt="">
						</li>
						<li class="card">
							<span></span><span></span>
							<p><span>wsparcie<br> premium dla<br> każdego 24/7</span></p>
							<img src="/partners/icon-4.svg" alt="">
						</li>
					</ul>

					<div class="text-bottom">
						<p><span>A co najważniejsze, nasze usługi są<br> całkowicie BEZPŁATNE!</span></p>
					</div>
				</div>
			</div>
		</div>

		<div class="reviews">
			<div class="tx-c">
				<h2 class="title">Nasze recenzje</h2>
			</div>

			<Splide :options="optionsSplide" aria-label="Vue Splide Example">
			    <SplideSlide>
			      	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-1.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Jan</h3>
			      				<p>32 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>Na początku nie mogłem uwierzyć własnym oczom, ale to najlepsze bonusy, jakie kiedykolwiek widziałem! Teraz gra jest o wiele przyjemniejsza. Dziękuję całemu zespołowi!</p>
			      	</div>
			    </SplideSlide>
			    <SplideSlide>
			    	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-2.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Amelia</h3>
			      				<p>28 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>Jestem bardzo wdzięczny za dostęp do prywatnych produktów! Naprawdę oferują one wyjątkowe możliwości, których nie można znaleźć gdzie indziej. Osobisty menedżer pomógł mi wybrać grę dostosowaną do moich zainteresowań i pragnień. Jestem bardzo zadowolony.</p>
			      	</div>
			    </SplideSlide>
			    <SplideSlide>
			    	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-3.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Tadeusz</h3>
			      				<p>25 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>Znajomi polecili mi waszą firmę i nie żałuję. Niezawodność i jakość są na najwyższym poziomie! Wasze produkty i bonusy przerosły moje oczekiwania. Z przyjemnością polecę was innym. Teraz gram z wielką chęcią!</p>
			      	</div>
			    </SplideSlide>
			    <SplideSlide>
			    	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-4.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Zofia</h3>
			      				<p>36 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>To niewiarygodne, bo tak długo szukałem odpowiedniej gry... a okazało się, że wystarczyło skorzystać z waszego serwisu i już!</p>
			      	</div>
			    </SplideSlide>
			    <SplideSlide>
			    	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-5.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Filip</h3>
			      				<p>48 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>Do ostatniej chwili nie wierzyłem, że w ogóle istnieje taka usługa znalezienia idealnej gry. Ale wasi menedżerowie przekroczyli wszystkie moje oczekiwania. Dziękuję!</p>
			      	</div>
			    </SplideSlide>
			    <SplideSlide>
			    	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-6.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Wojciech</h3>
			      				<p>26 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>To po prostu wow. Uzyskanie dostępu do prywatnych produktów było ogromną niespodzianką. Długo szukałem firmy, w której bonusy są naprawdę opłacalne. Menedżerowie są zawsze przyjaźni i gotowi do pomocy w każdej sprawie.</p>
			      	</div>
			    </SplideSlide>
			    <SplideSlide>
			    	<div class="slide">
			      		<div class="top">
			      			<div class="avatar">
			      				<img src="/reviews/avatar-7.png" alt="">
			      			</div>
			      			<div>
			      				<h3>Zuzanna</h3>
			      				<p>41 years</p>
			      			</div>
			      		</div>

			      		<img src="/svg/stars.svg" alt="">
			      		<p>Prywatne produkty i ekskluzywne bonusy sprawiają, że gra jest naprawdę ekscytująca. Nigdy wcześniej nie spotkałem się z takim poziomem obsługi. Znajomi polecili mi tę firmę i absolutnie zgadzam się z ich wyborem! Wasza firma jest najlepsza!</p>
			      	</div>
			    </SplideSlide>
			</Splide>
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
		background: #191B1C;

		.text {
			padding: 65px 0;
			text-align: center;
		}
	}

	.partners {
		background: #0F1011;
		padding-top: 35px;
		padding-bottom: 35px;
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
			top: 126px;
			left: -20px;
			transform: rotate(45deg);
		}
		&:before {
			content: '';
			display: block;
			width: 70px;
			height: 78px;
			position: absolute;
			top: 144px;
			right: -20px;
			background: url(/what/bg-1.svg) no-repeat;
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
				flex-direction: column;
				text-align: center;
				align-items: center;
				justify-content: center;
				position: relative;
				padding: 16px 0;

				p span {
					background: linear-gradient(90deg, #FFB31E 0%, #B57A05 20%, #FFB31E 49.5%, #FFD074 67%, #B56F05 85%, #FFB31E 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				img {margin-top: auto;}
			}
			li:nth-child(2):after {
				content: '';
				display: block;
				width: 60px;
				height: 60px;
				position: absolute;
				background: url(/svg/bg-title-1.svg) no-repeat;
				right: -25px;
				bottom: -30px;
				transform: rotate(45deg);
				zoom: 0.8;
			}
			li:nth-child(3):after {
				content: '';
				display: block;
				width: 95px;
				height: 174px;
				position: absolute;
				background: url(/what/bg-2.svg) no-repeat;
				left: -31px;
				bottom: -46px;
			}
		}

		.text-bottom {
			padding-top: 30px;
			font-weight: 600;
			font-size: 16px;
			text-align: center;
			p span {
				background: linear-gradient(90deg, #FFB31E 0%, #B57A05 20%, #FFB31E 49.5%, #FFD074 67%, #B56F05 85%, #FFB31E 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}

	.reviews {
		background: #191b1c;
		padding: 65px 0;

		h2.title {margin-bottom: 25px;}

		.slide {
			background: linear-gradient(90deg, #4D5761 0%, #3F3F46 100%);
			border-radius: 12px;
			padding: 16px;
			height: 100%;

			.avatar {
				width: 36px;
				height: 36px;
				overflow: hidden;
				img {
					display: block;
					width: 100%;
					height: 100%;
					object-fit: center;
					object-position: center;
				}
			}

			h3 {
				font-size: 18px;
				font-family: var(--anton);
				line-height: 1;
			}

			.top {
				display: flex;
				gap: 12px;
				margin-bottom: 12px;

				p {
					font-size: 12px;
					color: #9DA4AE;
					margin-top: 5px;
				}
			}

			& > p {
				margin-top: 10px;
				font-size: 14px;
				color: #F3F4F6;
			}
		}
	}
</style>
