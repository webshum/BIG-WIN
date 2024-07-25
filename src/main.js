import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MaskInput } from 'vue-3-mask';
import VueSplide from '@splidejs/vue-splide';

let glid = getQueryParameter('glid');
let fb_p = getQueryParameter('fb_p');

const app = createApp(App)

app.use(router)
app.use(VueSplide);
app.component('MaskInput', MaskInput);

app.mount('#app')
