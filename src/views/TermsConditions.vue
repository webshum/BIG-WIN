<script setup>
import { onMounted } from 'vue';
import Footer from '../components/Footer.vue';

onMounted(() => {
	window.scrollTo(0, 0);
});
</script>

<template>
	<div class="page">
		<div class="center">
			<h3 class="title">Privacy Policy</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nam laudantium explicabo nemo consequatur, illo, veniam quo ea beatae deleniti animi. Officia, exercitationem sed, consequatur debitis ipsam nemo ratione, soluta dolore illum voluptatibus, beatae! Nobis, aspernatur tenetur delectus, voluptas sequi est praesentium recusandae fuga, esse sit nostrum, quas laborum necessitatibus! Facere veniam dolores, quod hic saepe repellat eius aut quas nulla necessitatibus minus temporibus culpa impedit, error delectus. Blanditiis dolore totam accusamus dicta doloremque necessitatibus nulla laudantium? Minus laboriosam sunt temporibus ad cumque sed placeat quas laudantium exercitationem accusamus doloremque ipsum ullam nemo quia voluptate, possimus aliquam delectus! Ipsum, temporibus!</p>
		</div>
	</div>

	<Footer />
</template>

<style>
	.page {
		padding: 50px 0;
		text-align: center;
	}
</style>
