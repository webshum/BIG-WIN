import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MaskInput } from 'vue-3-mask';
import VueSplide from '@splidejs/vue-splide';

function getQueryParameter(param) {
	let params = new URLSearchParams(window.location.search);
	return params.get(param);
}

let glid = getQueryParameter('glid');
let fb_p = getQueryParameter('fb_p');

// Google Analytics
if (glid) {
	gtag('config', 'UA-XXXXXX-Y', {
		'page_path': window.location.pathname + window.location.search,
		'custom_map': {'dimension1': 'glid'}
	});
	gtag('event', 'custom_event', {'glid': glid});
}

// Facebook Pixel
if (fb_p) {
	fbq('track', 'CustomEvent', {
		'fb_p': fb_p
	});
}

const app = createApp(App)

app.use(router)
app.use(VueSplide);
app.component('MaskInput', MaskInput);

app.mount('#app')
