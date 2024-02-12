<template>
	<div class="py-5">
		<div class="container">
			<div class="row">
				<div class="col">
					<h2 class="font-bold text-center mb-4">Nos écoles de formation</h2>

					<div>
						<swiper-container id="schoolsSwiper" class="card-groups" init="false" speed="500" loop="true" autoplay="true" css-mode="true" navigation="true">
							<swiper-slide v-for="item in schools" :key="item.title">
								<div class="card">
									<div class="img-container">
										<img :src="item.img" class="card-img-top" alt="" />
									</div>
									<div class="card-body px-0 pb-0">
										<p class="card-title mb-3">{{ item.title }}</p>
										<router-link
											to="/"
											class="card-link"
											:aria-label="item.ariaLabel">
											Voir plus
										</router-link>
									</div>
								</div>
							</swiper-slide>
						</swiper-container>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import fsa from '@/assets/website/images/schools/fsa.png';
	import epac from '@/assets/website/images/schools/epac.png';
	import faseg from '@/assets/website/images/schools/faseg.png';
	import ifri from '@/assets/website/images/schools/ifri.png';
	import fast from '@/assets/website/images/schools/fast.png';
	import inmes from '@/assets/website/images/schools/inmes.png';
	import eneam from '@/assets/website/images/schools/eneam.png';

	import { register } from 'swiper/element/bundle';
	import { onMounted } from 'vue';
	register();

	// swiper parameters
  const schoolsSwiperParams = {
    slidesPerView: 1,
		autoplay: {
   		delay: 3000,
 		},
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

	onMounted(() => {
		const schoolsSwiper = document.getElementById('schoolsSwiper');

		Object.assign(schoolsSwiper, schoolsSwiperParams);

		schoolsSwiper.initialize();
	});

	const schools = [
	{
			img: fast,
			title: 'Faculté des Sciences et Techniques',
			link: '/',
			ariaLabel: 'Visiter le site de la Faculté des Sciences et Techniques',
		},
		{
			img: faseg,
			title: 'Faculté des Sciences économiques et de Gestion',
			link: '/',
			ariaLabel: 'Visiter le site de la Faseg',
		},
		{
			img: fsa,
			title: 'Faculté des Sciences agronomiques',
			link: '/',
			ariaLabel: 'Visiter le site de la FSA',
		},
		{
			img: inmes,
			title: 'Institut national Médico-Sanitaire',
			link: '/',
			ariaLabel: "Visiter le site de l'inmes",
		},
		{
			img: epac,
			title: 'Ecole Polytechnique d’Abomey-Calavi',
			link: '/',
			ariaLabel: "Visiter le site de l'Ecole Polytechnique d’Abomey-Calavi",
		},
		{
			img: eneam,
			title: "École Nationale d’Économie appliquée et de Management",
			link: '/',
			ariaLabel: 'Visiter le site de l\'ENEAM',
		},
		{
			img: ifri,
			title: 'Institut de Formation et de Recherche en Informatique',
			link: '/',
			ariaLabel:
				"Visiter le site de l'Institut de Formation et de Recherche en Informatique",
		},
	];
</script>

<style scoped>
	.card-groups {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		row-gap: 16px;
	}
	.card {
		box-shadow: none;
		text-align: center;
		color: var(--black);
		padding: 1.5rem;
		width: calc((275 / 16) * 1rem);
		border: none;
	}
	.card-body {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img-container {
		width: 225px;
		height: 150px;
		margin-inline: auto;
	}

	.img-container img {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}

	.card-link {
		border: 1px solid var(--m-green);
		margin-top: auto;
		display: inline-block;
		padding: .5rem 1rem;
		border-radius: 2rem;
		transition: color 0.3s ease-in-out;
		color: var(--m-green);
		font-weight: 700;
		text-decoration: none;
	}

	.card-link:hover {
		color: var(--white);
		background-color: var(--m-green);
	}

	swiper-slide {
		display: flex;
		justify-content: center;
	}
</style>
