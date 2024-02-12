<template>
  <div class="container">
		<div class="row">
			<div class="col">
				<ul class="nav nav-underline my-4 d-flex justify-content-center">
					<li class="nav-item">
						<router-link to="/news/actualites" class="nav-link active" aria-current="page"
							>Actualités</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/news/success-stories" class="nav-link">Success Stories</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/news/giving-back" class="nav-link">Giving Back</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/news/bamfa" class="nav-link">BAMFA</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>

import { onMounted } from 'vue';


onMounted(() => {
	const nav = document.querySelector('.nav');
	const navLink = document.querySelectorAll('.nav-link');

	nav.addEventListener('click', function(e) {
		const clickedLink = e.target.closest('.nav-link');
		
		if (!clickedLink) return;

		navLink.forEach(link => {
			link.classList.remove('active');
			link.removeAttribute('aria-current');
		});

		clickedLink.classList.add('active');
		clickedLink.setAttribute('aria-current', 'page');
	})
});
</script>

<style scoped></style>