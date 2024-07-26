import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import WriteNumber from '../views/WriteNumber.vue';
import Verification from '../views/Verification.vue';
import Timer from '../views/Timer.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import TermsConditions from '../views/TermsConditions.vue';
import Play from '../views/Play.vue';

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
	      	path: '/timer-verifi',
	      	name: 'timer',
	      	component: Timer
	    },
	    {
	      	path: '/privacy-policy',
	      	name: 'PrivacyPolicy',
	      	component: PrivacyPolicy
	    },
	    {
	      	path: '/terms-conditions',
	      	name: 'TermsConditions',
	      	component: TermsConditions
	    },
	    {
	      	path: '/play/:link',
	      	name: 'play',
	      	component: Play
	    }
	]
})

export default router
