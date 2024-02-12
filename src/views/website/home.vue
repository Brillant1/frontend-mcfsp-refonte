<template>
	<WebsiteLayout>
		<HeroSection />
		<OurNumbers />
		<OurScholars />
		<OurDomains />
		<OurSchools />
		<ActivityFeed />
		<OurPartners />
	</WebsiteLayout>
</template>

<script setup>
	import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
	import HeroSection from '@/components/website/Home/HeroSection.vue';
	import OurNumbers from '@/components/website/Home/OurNumbers.vue';
	import OurScholars from '@/components/website/Home/OurScholars.vue';
	import OurDomains from '@/components/website/Home/OurDomains.vue';
	import OurSchools from '@/components/website/Home/OurSchools.vue';
	import ActivityFeed from '@/components/website/Home/ActivityFeed.vue';
	import OurPartners from '@/components/website/Home/OurPartners.vue';

	import { useSeoMeta } from '@unhead/vue';

	useSeoMeta({
  title: 'Mastercard Foundation Scholars Program at UAC',
  description: "Bienvenue sur le site du Programme de bourses de la Fondation Mastercard à l'Université d'Abomey-Calavi.",
  // ogDescription: 'Still about my about page',
  // ogTitle: 'About',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

</script>

<style scoped></style>
