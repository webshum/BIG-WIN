import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MaskInput } from 'vue-3-mask';
import VueSplide from '@splidejs/vue-splide';

const app = createApp(App)

app.use(router)
app.use(VueSplide);
app.component('MaskInput', MaskInput);

app.mount('#app')
