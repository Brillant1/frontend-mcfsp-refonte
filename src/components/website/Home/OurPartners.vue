<template>
	<div class="py-5">
		<div class="container">
			<div class="row">
				<div class="col">
					<h2 class="font-bold text-center mb-4">Nos partenaires</h2>
					<swiper-container id="partnersSwiper" init="false" speed="500" loop="true" autoplay="true" css-mode="true" navigation="true" class="partners-list">
						<swiper-slide
						v-for="(item, i) in partners" :key="i">
						<img :src="item.img" :alt="item.alt" />
							</swiper-slide>
					</swiper-container>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import startupValley from '@/assets/website/images/partners/startup-valley.png';
	import enabel from '@/assets/website/images/partners/enabel.png';
	import auf from '@/assets/website/images/partners/auf.png';
	import padmeSa from '@/assets/website/images/partners/padme-sa.png';
	import planInter from '@/assets/website/images/partners/plan-inter.png';
	import sensBenin from '@/assets/website/images/partners/sens-benin.png';
	import faphb from '@/assets/website/images/partners/faphb.jpeg';
	import socialWatch from '@/assets/website/images/partners/social-watch.jpeg';
	import technoserve from '@/assets/website/images/partners/technoserve.png';

	import { register } from 'swiper/element/bundle';
	import { onMounted } from 'vue';
	register();

	// swiper parameters
  const partnersSwiperParams = {
    slidesPerView: 1,
		autoplay: {
   		delay: 3000,
 		},
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };

	onMounted(() => {
		const partnersSwiper = document.getElementById('partnersSwiper');
		Object.assign(partnersSwiper, partnersSwiperParams);

		partnersSwiper.initialize();
	});

	const partners = [
		{
			img: startupValley,
			alt: 'UAC Startup Valley',
		},
		{
			img: enabel,
			alt: 'Enabel',
		},
		{
			img: auf,
			alt: 'Agence Universitaire de la Francophonie',
		},
		{
			img: padmeSa,
			alt: 'Padme SA',
		},
		{
			img: planInter,
			alt: 'Plan International',
		},
		{
			img: sensBenin,
			alt: 'Sens Bénin',
		},
		{
			img: faphb,
			alt: 'faphb',
		},
		{
			img: socialWatch,
			alt: 'Social Watch',
		},
		{
			img: technoserve,
			alt: 'Technoserve',
		},
	];
</script>

<style scoped>
	.partners-list {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
		list-style: none;
	}

	swiper-container {
		--swiper-navigation-size: 34px;
		--swiper-navigation-sides-offset: 7px;
		--swiper-navigation-color: var(--m-green);

		.swiper-button-next {
			background-color: forestgreen;
		}
	}

	swiper-slide {
		display: flex;
		justify-content: center;
		align-self: center;
	}

	swiper-slide img {
		object-fit: scale-down;
		width: 200px;
	}
</style>
