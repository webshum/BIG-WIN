import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WriteNumber from '../views/WriteNumber.vue';
import Verification from '../views/Verification.vue';
import Timer from '../views/Timer.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	    {
	      	path: '/',
	      	name: 'home',
	      	component: Home
	    },
	    {
	      	path: '/write-number',
	      	name: 'write-number',
	      	component: WriteNumber
	    },
	    {
	      	path: '/verification',
	      	name: 'verification',
	      	component: Verification
	    },
	    {
	      	path: '/timer',
	      	name: 'timer',
	      	component: Timer
	    }
	]
})

export default router
