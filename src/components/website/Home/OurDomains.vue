<template>
	<div class="bg-green bg-texture">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="py-large text-white">
						<section class="mb-4">
							<h2 class="text-white text-center">
								Domaines de <strong class="text-uppercase">formation</strong>
							</h2>
							<p class="mb-5">
								Nos boursiers bénéficient d'une formation spécialisée dans des secteurs porteurs et prometteurs pour l'avenir, visant à développer leurs compétences et à les préparer à exceller dans leurs parcours académiques, professionnels et entrepreneuriaux. Nous croyons fermement que cette diversité de domaines de formation contribuera à façonner une génération de leaders qualifiés et prêts à relever les défis de demain.
							</p>
						</section>
						<swiper-container id="domainsSwiper" init="false" speed="500" loop="true" autoplay="true" css-mode="true" navigation="true" class=" list text-center">
							<swiper-slide
								v-for="item in domains"
								:key="item.subtitle">
								<div
								class="text-white">
								<div class="card">
									<img
										:src="item.mainImg ?? '@/assets/website/images/orlane.jpg'"
										alt=""
										class="card-img-top" />
									<div class="card-body">
										<img
											:src="item.img"
											alt=""
											class="icon"
											role="presentation" />
										<p class="card-text">
											{{ item.title }} <br>
											<strong>{{ item.subtitle }}</strong>
										</p>
									</div>
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
	import agro from '@/assets/website/images/domains/domain-agro.png';
	import tech from '@/assets/website/images/domains/domain-tech.png';
	import energy from '@/assets/website/images/domains/domain-energy.png';
	import health from '@/assets/website/images/domains/domain-health.png';
	import finance from '@/assets/website/images/domains/domain-finance.png';
	import growth from '@/assets/website/images/domains/domain-growth.png';

	import agronomie from '@/assets/website/images/domains/agronomie.jpg';
	import computer from '@/assets/website/images/domains/computer.jpg';
	import energie from '@/assets/website/images/domains/energie.jpg';
	import sante from '@/assets/website/images/domains/sante.jpg';
	import economie from '@/assets/website/images/domains/finance.jpg';
	import statistics from '@/assets/website/images/domains/statistics.jpg';

	import { register } from 'swiper/element/bundle';
	import { onMounted } from 'vue';
	register();

	const domains = [
		{
			title: 'Sciences',
			subtitle: 'Agronomiques',
			img: agro,
			mainImg: agronomie
		},
		{
			title: 'Sciences',
			subtitle: 'Informatiques',
			img: tech,
			mainImg: computer
		},
		{
			title: 'Sciences des',
			subtitle: 'Energies Renouvelables',
			img: energy,
			mainImg: energie
		},
		{
			title: 'Sciences de la',
			subtitle: 'Santé',
			img: health,
			mainImg: sante
		},
		{
			title: 'Sciences',
			subtitle: 'Economiques et Financières',
			img: finance,
			mainImg: economie
		},
		{
			title: 'Tout autre secteur à',
			subtitle: 'Fort Développement',
			img: growth,
			mainImg: statistics
		},
	];

  // swiper parameters
  const domainsSwiperParams = {
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
      1400: {
        slidesPerView: 4,
      },
    },
  };

	onMounted(() => {
		const domainsSwiper = document.getElementById('domainsSwiper');

		Object.assign(domainsSwiper, domainsSwiperParams);

		domainsSwiper.initialize();
	});
</script>

<style scoped>
	.bg-texture {
		background-image: url('@/assets/website/images/texture-1.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position-y: -150%;
	}
	p {
		margin-bottom: 0;
	}

	section {
		max-width: 75ch;
		margin-inline: auto;
		text-align: center;
	}

	.list {
		/* font-size: 1rem; */
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		column-gap: 4rem;
		row-gap: 1rem;
	}

	.card {
		width: 17rem;
		border: none;
	}

	.card-img-top {
		width: 100%;
		height: 175px;
		border: none;
		object-fit: cover;
	}

	.card .icon {
		width: 7rem;
		height: 5rem;
		object-fit: scale-down;
	}

	swiper-container {
		--swiper-navigation-size: 34px;
		--swiper-navigation-sides-offset: 7px;
		/* --swiper-navigation-color: #FF0; */
		--swiper-navigation-color: var(--yellow);
	}

	swiper-slide {
		display: flex;
		justify-content: center;
	}

	.swiper-button-next svg, .swiper-button-prev svg {
		width: 1.75rem;
		height: 1.75rem;
		color: var(--yellow);
	}
</style>
