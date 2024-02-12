<template>
	<header class="py-2">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="d-flex justify-content-between align-items-center">
						<a class="skip-link" href="#main">Skip to main</a>

						<div>
							<router-link to="/" aria-label="Homepage" class="d-inline-block">
								<img src="@/assets/images/logo-mastercard-foundation-uac.png" alt="" width="300" height="auto" />
							</router-link>
						</div>
						<nav class="d-flex align-items-center gap-3">
							<ul class="no-list-style d-flex align-items-center gap-3">
								<template v-if="!isSmallScreen">
									<li>
										<div class="dropdown">
											<button
												class="bg-transparent border-0 text-black dropdown-toggle"
												type="button"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												English
												<font-awesome-icon
													icon="fa-solid fa-chevron-down"
													class="ms-3" />
											</button>
											<ul class="dropdown-menu">
												<li>
													<a class="dropdown-item" href="#">Français</a>
												</li>
											</ul>
										</div>
									</li>
									<li>
										<router-link to="/postuler" class="main-btn main-btn--red"
											>Postuler</router-link
										>
									</li>
								</template>
							</ul>
							<template v-if="!isMediumScreen">
								<ul class="social-media-list no-list-style">
									<li v-for="item in socialMedia" :key="item.icon">
										<a :href="item.link" target="_blank" class="icon">
											<span class="visually-hidden">{{ item.ariaLabel }}</span>
											<font-awesome-icon
												:icon="`fa-brands ${item.icon}`"
												aria-hidden="true" />
										</a>
									</li>
									<li>
										<img
											src="@/assets/website/icons/Phone.svg"
											alt=""
											class="me-2" />
										<a href="tel:(+229)62295959" class="f-12 text-black"
											>(+229) <strong>62 29 59 59</strong></a
										>
									</li>
								</ul>
							</template>
							<ul class="no-list-style">
								<li>
									<button
										class="btn-menu"
										type="button"
										data-bs-toggle="offcanvas"
										data-bs-target="#headerOffcanvas"
										aria-controls="headerOffcanvas"
										aria-label="Menu">
										<font-awesome-icon
											icon="fa-solid fa-bars"
											aria-hidden="true"
											size="2x" />
									</button>

									<Teleport to="body">
										<HeaderMenu
											:isSmallScreen="isSmallScreen"
											:isMediumScreen="isMediumScreen"
											:socialMedia="socialMedia" />
									</Teleport>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { defineAsyncComponent, onMounted, ref } from 'vue';

	const HeaderMenu = defineAsyncComponent(() =>
		import('@/components/website/HeaderMenu.vue')
	);

	let mediaQuery = window.matchMedia('(max-width: 767px)');
	let mdMediaQuery = window.matchMedia('(max-width: 991px)');

	let isSmallScreen = ref(mediaQuery.matches);
	let isMediumScreen = ref(mdMediaQuery.matches);

	onMounted(() => {
		mediaQuery.addEventListener('change', function (e) {
			if (e.matches) {
				isSmallScreen.value = e.matches;
			} else {
				isSmallScreen.value = e.matches;
			}
		});
		mdMediaQuery.addEventListener('change', function (e) {
			if (e.matches) {
				isMediumScreen.value = e.matches;
			} else {
				isMediumScreen.value = e.matches;
			}
		});

		// window.addEventListener('scroll', function() {
		// 	const header = document.querySelector('header');
		// 	header.classList.toggle('sticky-header', window.scrollY > 10);
		// })
	});

	const socialMedia = [
		{
			link: 'https://www.linkedin.com/company/mcfsp-uac/',
			ariaLabel: 'Visiter notre page Linkedin',
			icon: 'fa-linkedin-in',
		},
		{
			link: 'https://www.facebook.com/MastercardFoundationUAC',
			ariaLabel: 'Nous suivre sur Facebook',
			icon: 'fa-facebook-f',
		},
		{
			link: 'https://www.youtube.com/@mastercardfoundationschola3020',
			ariaLabel: 'Nous suivre sur Youtube',
			icon: 'fa-youtube',
		},
	];
</script>

<style scoped>
	header {
		box-shadow: 0 0 8px #00000025;
	}
	a:focus,
	button:focus {
		outline: 2px dashed var(--m-green) !important;
		outline-offset: 4px;
	}
	.skip-link {
		position: absolute;
		top: -100px;
		left: 0;
		background: #000000;
		color: white;
		padding: 8px;
		z-index: 100;
	}

	.skip-link:focus {
		top: 0;
	}

	.btn-search {
		color: white;
		font-size: 0.625rem;
		padding: 0.5rem;
		border-radius: 50%;
	}
	.btn-menu {
		color: var(--white);
		line-height: 1;
		background-color: #F38B00;
		border: none;
		padding: 0.35rem .5rem;
		transition: background-color ease-in-out .3s;
	}

	.btn-menu:hover {
		background-color: var(--m-red);
	}
</style>
