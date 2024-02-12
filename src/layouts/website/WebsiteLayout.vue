<template>
	<div class="d-flex flex-column min-height-100">
		<Header />
		<main id="main" class="flex-grow-1">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer.vue';
import Header from './Header.vue';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBars, faChevronDown, faPlus, faArrowRight, faPhoneVolume, faEnvelopeOpenText, faLocationDot, faClock, faPhone, faEnvelope, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';


library.add(faFacebookF, faLinkedinIn, faYoutube, faTwitter, faMagnifyingGlass, faBars, faChevronDown, faPlus, faArrowRight, faPhoneVolume, faEnvelopeOpenText, faLocationDot, faClock, faPhone, faEnvelope, faArrowUpRightFromSquare, faXmark);
</script>

<style lang="css">
	@import url('@/assets/website/css/style.css');

	.min-height-100 {
		min-height: 100vh;
	}

	header {
		position: fixed;
		width: 100%;
		background-color: var(--white);
		z-index: 1001;
	}
	main {
		margin-top: 106px;
	}
</style>
