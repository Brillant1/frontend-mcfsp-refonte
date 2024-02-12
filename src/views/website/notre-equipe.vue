<template>
	<WebsiteLayout>
	<Banner class="my-4">
		<template #title> Notre équipe </template>
	</Banner>

	<div class="container">
		<div class="row mb-5">
			<div class="col">
				<p class="description">
					Notre équipe dévouée est composée de professionnels passionnés qui sont engagés à soutenir les étudiants et à faire avancer le programme de bourses. Nous sommes une équipe multidisciplinaire. Nous sommes là pour vous aider à atteindre des objectifs académiques et à saisir toutes les opportunités offertes par le programme de bourses.
				</p>
				<div class="card-container">
					<div class="card" data-aos="fade-up" style="width: 18rem;" v-for="(item, index) in teamMembers" :key="index">
						<img
						:src="`/public/images/team/${item.img}`"
						alt=""
						class="member-img" />
						<div class="card-body">
							<h2 class="card-title">{{ item.name }}</h2>
							<p class="card-text">{{ item.role }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</WebsiteLayout>
</template>

<script setup>
import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
import Banner from '@/components/website/Banner.vue';
import { onMounted } from 'vue';

import { useSeoMeta } from '@unhead/vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

	useSeoMeta({
		title: ' Notre équipe | Mastercard Foundation Scholars Program at UAC',
		description: "Découvrez l'équipe derrière le Programme de bourses de la Fondation Mastercard à l'Université d'Abomey-Calavi.",
	})

onMounted(() => {
	AOS.init(
		{
			// once: true
		}
	);
})

const teamMembers = [
	{
		name: 'Enoch ACHIGAN DAKO',
		role: 'Directeur du programme',
		img: 'prof-enock.jpg'
	},
	{
		name: 'Kadmiel OROU',
		role: 'Assistant programme',
		img: 'kadmiel-orou.png'
	},
	{
		name: "Jean Eric SAGBOSSINON",
		role: 'Secrétaire de Direction',
		img: 'jean-eric.jpg'
	},
	{
		name: 'Lydia SOGNON',
		role: 'Responsable Genre et Inclusion',
		img: 'lydia-sognon.jpg'
	},
	{
		name: 'Hervé COUTHON',
		role: 'Responsable financier',
		img: 'herve-couthon.jpg'
	},
	{
		name: 'Eveline DANGNON',
		role: 'Comptable',
		img: 'eveline-dangnon.png'
	},
	{
		name: 'Wilfrid AHOUANSOU',
		role: 'Conseiller en partenariats stratégiques',
		img: 'wilfrid-ahouansou.jpg'
	},
	{
		name: 'Arnaud DANGBENON',
		role: "Coordonnateur C3E (Centre pour l’Employabilité et l’Entrepreneuriat des Etudiants)",
		img: 'arnaud-dangbenon.png'
	},
	{
		name: 'Mireille HOUNGA',
		role: 'Responsable communication et relations publiques',
		img: 'mireille-hounga.jpg'
	},
	{
		name: 'Wilfride KOSSOUHO',
		role: 'Assistant production audiovisuel',
		img: 'wilfride-kossouho.jpeg'
	},
	{
		name: 'Roger HOUNDJAME',
		role: 'Responsable pôle entrepreneuriat',
		img: 'roger-houndjame.jpg'
	},
	{
		name: 'Carole DEGLA',
		role: "Conseillère d’entreprise au sein du pôle entrepreneuriat",
		img: 'carole-degla.png'
	},
	{
		name: 'Razack MIDINGOYI',
		role: 'Conseiller d’entreprise au sein du pôle entrepreneuriat',
		img: 'razack-midingoyi.jpg'

	},
	{
		name: 'Fadhel SALIFOU BIO',
		role: 'Responsable MERL (Monitoring Evaluation Research and Learning)',
		img: 'fadhel-salifou.jpg'
	},
	{
		name: 'Jules MAHINOU',
		role: 'Assistant MERL (Monitoring Evaluation Research and Learning)',
		img: 'jules-mahinou.jpg'
	},
	{
		name: 'Mélanie TCHAFFA',
		role: 'Responsable transition',
		img: 'melanie-tchaffa.jpg'
	},
	{
		name: 'Marlaine AHOUANYE',
		role: 'Responsable suivi psychosocial des boursiers',
		img: 'marlaine-ahouanye.jpg'
	},
	{
		name: 'Rémi HONVO',
		role: 'Assistant social',
		img: 'remi-honvo.png'
	},
	{
		name: 'Oscar ZOHOUNLOGO',
		role: 'Psychologue',
		img: 'oscar-zohounlogo.png'
	},
	{
		name: 'Chantal AGBADI',
		role: 'Psychologue',
		img: 'chantal-agbadi.png'
	},
	{
		name: 'FASSINOU Hotegnin Nicodème',
		role: '',
		img: 'nicodeme-fassinou.png'
	},
	{
		name: 'AOUDJI Augustin',
		role: '',
		img: 'augustin-aoudji.jpg'
	},
	{
		name: 'Audrey METOEVI',
		role: 'Conseillère',
		img: 'audrey-metoevi.jpg'
	},
	{
		name: 'Cyndia AGONNOUDE',
		role: 'Spécialiste en Passation des Marchés',
		img: 'cyndia-agonnoude.png'
	},
]
</script>

<style scoped>
.description {
	max-width: 85ch;
	margin-bottom: 3rem;
	text-align: center;
	margin-inline: auto;
}

.card-container {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 3rem;
}

.card {
	border: none;
}

.card-title {
	font-size: 1rem;
	font-weight: 700;
}

.card-text {
	color: #394452;
}

.member-img {
	width: 275px;
	height: 250px;
	object-fit: cover;
	object-position: top;
	border-radius: 10px;
	box-shadow: 0 0 10px -4px #cccccc;
}
</style>