<template>
  <div class="container">
		<div class="row">
			<div class="col-xl-10 mx-auto">
				<ul class="nav nav-underline my-4 d-flex justify-content-center">
					<li class="nav-item">
						<router-link to="/postuler/licence" class="nav-link active" aria-current="page"
							>Cycle de licence</router-link
						>
					</li>
					<li class="nav-item">
						<router-link to="/postuler/master" class="nav-link">Cycle de master</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/postuler/entrepreneuriat" class="nav-link">Pôle entrepreneurial</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/postuler/autres" class="nav-link">Autres opportunités</router-link>
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
	const navItemLink = document.querySelectorAll('.nav-link');

	nav.addEventListener('click', function(e) {
		const clickedLink = e.target.closest('.nav-link');
		
		if (!clickedLink) return;
		// console.log(clickedLink);

		navItemLink.forEach(link => {
			link.classList.remove('active');
			link.removeAttribute('aria-current');
		});

		clickedLink.classList.add('active');
		clickedLink.setAttribute('aria-current', true);
	})
});

</script>