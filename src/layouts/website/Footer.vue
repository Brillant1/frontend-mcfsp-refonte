<template>
	<footer class="text-black bg-white">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-4 py-4">
					<a href="#" aria-label="Page d'accueil" class="footer-logo d-inline-block">
						<img src="@/assets/images/logo-mcf.png" alt="Logo de la Mastercard Foundation" />
					</a>
					<ul class="no-list-style d-flex flex-column gap-3 mb-5">
						<li v-for="(item, index) in contacts" :key="index" class="d-flex align-items-center gap-3">
							<font-awesome-icon :icon="item.icon" size="2x" />
							<div>
								<span class="d-block" v-for="i in item.info" :key="i">{{ i }}</span>
							</div>
						</li>
					</ul>
					<ul class="social-media-list no-list-style d-flex gap-4">
						<li v-for="item in socialMedia" :key="item.icon">
							<a :href="item.link" target="_blank">
								<span class="visually-hidden">{{ item.ariaLabel }}</span>
								<font-awesome-icon :icon="`fa-brands ${item.icon}`" aria-hidden="true" />
							</a>
						</li>
					</ul>
				</div>
				<div class="col-12 col-md-6 col-lg-4 py-4">
					<div class="mb-5">
						<h4 class="f-14 font-bold">Liens utiles</h4>
						<ul class="usefulLinksList no-list-style d-flex flex-column">
							<li v-for="link in usefulLinks" :key="link.text">
								<a :href="link.href" target="_blank" class="text-decoration-underline">{{ link.text }}</a>
							</li>
						</ul>
					</div>
					<div class="mb-4">
						<ul class="legalLinksList no-list-style d-flex flex-wrap gap-3">
							<li>
								<a href="#" class="text-decoration-underline">Mentions légales</a>
							</li>
							<li>
								<a href="#" class="text-decoration-underline">
									Conditions Générales d’Utilisation
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4 bg-green p-3">
					<form action="" class="d-flex flex-column gap-3 text-white">
						<h4 class="p-3 fs-2 font-bold bg-light-white text-white">Newsletter</h4>
						<p>
							Inscrivez-vous à notre newsletter pour être informé des activités
							de la
							<strong>Mastercard Foundation à l’Université d’Abomey-Calavi</strong>
						<div>
							<label for="name">Nom complet (*)</label>
							<input type="text" id="name">
						</div>
						<div class="mb-2">
							<label for="email">Adresse mail(*)</label>
							<input type="email" id="email">
						</div>
						<button class="btn main-btn--yellow mx-auto">S'inscrire</button>
						</p>
					</form>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<p class="f-14 m-0 text-center">© MCFSP at UAC . Tous droits réservés</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
const contacts = [
	{
		icon: ['fas', 'phone-volume'],
		info: ['(+229) 62 29 59 59']
	},
	{
		icon: ['fas', 'envelope-open-text'],
		info: ['uac.mcf@gmail.com']
	},
	{
		icon: ['fas', 'location-dot'],
		info: ['Abomey-Calavi - Bénin']
	}
];
const socialMedia = [
	{
		link: 'https://www.linkedin.com/company/mcfsp-uac/',
		ariaLabel: 'Nous suivre sur Linkedin',
		icon: 'fa-linkedin-in'
	},
	{
		link: 'https://www.facebook.com/MastercardFoundationUAC',
		ariaLabel: 'Nous suivre sur Facebook',
		icon: 'fa-facebook-f'
	},
	{
		link: 'https://www.youtube.com/@mastercardfoundationschola3020',
		ariaLabel: 'Nous suivre sur Youtube',
		icon: 'fa-youtube'
	},
]

const usefulLinks = [
	{
		text: 'UAC',
		href: 'https://uac.bj/',
	},
	{
		text: 'Institut de Formation et de Recherche en Informatique',
		href: 'https://www.ifri-uac.bj/',
	},
	{
		text: 'Faculté des Sciences Agronomiques',
		href: 'https://www.google.com',
	},
	{
		text: 'Ecole Polytechnique d’Abomey-Calavi',
		href: 'https://www.google.com',
	},
	{
		text: 'Faculté des Sciences et Techniques',
		href: 'https://www.google.com',
	},
	{
		text: 'Faseg',
		href: 'https://www.google.com',
	},
	{
		text: 'InMes',
		href: 'https://www.google.com',
	},
	{
		text: 'ENEAM',
		href: 'https://eneam.uac.bj/',
	},
];
</script>

<style scoped>
footer {
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
}

label {
	width: 100%;
}

input {
	width: 100%;
	height: 44px;
}

.bg-light-white {
	background-color: #ffffff15;
}

.footer-logo::after {
	content: '';
	display: block;
	width: 15rem;
	height: 5px;
	background: linear-gradient(270deg, #F79E1B 0%, #FF671B 100%);
	margin-block: 1.5rem;
}

a:focus {
	outline: 2px dashed var(--m-green) !important;
	outline-offset: 4px;
}

.social-media-list li a {
	font-size: 1rem;
	padding: 8px;
	border-radius: 50%;
	color: var(--white);
	background-color: #C4302B;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
}

.social-media-list li:first-of-type a {
	background-color: #0077B5;
}
.social-media-list li:nth-of-type(2) a {
	background-color: #3B5998;
}

.social-media-list li a:hover {
	transition: box-shadow 0.3s ease-in-out;
	box-shadow: 0 4px 8px #00000040;
}

.usefulLinksList {
	row-gap: 6px;
	column-gap: 1rem;
}

.legalLinksList li a,
.usefulLinksList li a {
	color: black;
}

.legalLinksList li a {
	opacity: 0.5;
}

.legalLinksList li a:hover,
.usefulLinksList li a:hover {
	opacity: 1;
	color: var(--m-red);
	transition: color 0.3s ease-in-out;
}

.legalLinksList li a:focus {
	opacity: 1;
}
</style>
