<template>
	<WebsiteLayout>
	<section>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="text-center py-5">
						<h1 class="font-bold">Foire aux questions</h1>
						<p class="faq-subtitle mb-0">
							Des réponses claires et précises à toutes les questions que vous
							pourriez avoir sur le programme de bourses de la fondation
							Mastercard à l’UAC
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="py-5 bg-grey">
			<div class="container">
				<div class="row">
					<div class="col">
						<div class="accordion faq-page-container" id="faqAccordion">
							<div class="accordion-item" v-for="item in faq" :key="item.title">
								<h2 class="accordion-header">
									<button
										class="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										:data-bs-target="`#${item.id}`"
										aria-expanded="true"
										:aria-controls="item.id">
										{{ item.title }}
									</button>
								</h2>
								<div :id="item.id" class="accordion-collapse collapse">
									<div class="accordion-body">
										{{ item.content }}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row faq-page-container py-5 mx-auto align-items-center">
				<div class="col-12 col-md-4">
					<img
						src="@/assets/website/images/faq-question.svg"
						alt=""
						class="img-fluid" />
				</div>
				<div class="col-12 col-md-8">
					<section class="ask-question-section ms-auto">
						<h2 class="font-bold">
							Vous n’avez pas trouvé de réponse à votre question?
						</h2>
						<p>
							Si votre question ne figure pas dans la liste, n’hésitez pas à
							nous la poser.
						</p>
						<router-link to="/" class="btn main-btn main-btn--green"
							>Poser une question</router-link
						>
					</section>
				</div>
			</div>
		</div>
	</section>
</WebsiteLayout>
</template>

<script setup>
import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
	const faq = [
		{
			id: 'faq-one',
			title:
				"Qu'est-ce que le programme de bourses de la Fondation Mastercard à l'UAC ?",
			content:
				"Le programme de bourses de la Fondation Mastercard à l'UAC est une initiative qui vise à offrir des bourses d'études aux étudiants talentueux et méritants de l'Université d'Abomey-Calavi. Il offre des opportunités d'éducation et de développement personnel aux jeunes leaders africains.",
		},
		{
			id: 'faq-two',
			title:
				'Quels sont les critères de sélection pour les bourses de la Fondation Mastercard ?',
			content:
				"Les critères de sélection pour les bourses de la Fondation Mastercard comprennent l'excellence académique, le potentiel de leadership, l'engagement communautaire, le besoin financier et la motivation à contribuer au développement de l'Afrique.",
		},
		{
			id: 'faq-three',
			title:
				'Comment puis-je postuler aux bourses de la Fondation Mastercard ?',
			content:
				"Pour postuler aux bourses de la Fondation Mastercard, vous devez remplir le formulaire de candidature en ligne disponible sur notre site. Assurez-vous de fournir toutes les informations requises, y compris les documents justificatifs, et respectez les délais de candidature indiqués.",
		},
		{
			id: 'faq-four',
			title:
				'Quels documents sont requis pour la candidature aux bourses de la Fondation Mastercard ?',
			content:
				"Les documents requis pour la candidature aux bourses de la Fondation Mastercard peuvent varier, mais généralement, vous devrez fournir une copie de votre relevé de notes, des lettres de recommandation, une lettre de motivation, des preuves d'engagement communautaire et des documents financiers pertinents.",
		},
		{
			id: 'faq-five',
			title:
				"Existe-t-il d'autres opportunités de bourses en dehors du programme de la Fondation Mastercard ?",
			content:
				"Oui, en plus du programme de la Fondation Mastercard, il peut y avoir d'autres opportunités de bourses disponibles. Nous encourageons les étudiants à explorer d'autres sources de financement, telles que les bourses gouvernementales, les bourses d'organisations non gouvernementales (ONG) ou les bourses offertes par d'autres institutions.",
		},
		{
			id: 'faq-six',
			title:
				"Comment puis-je contacter l'équipe du programme de bourses de la Fondation Mastercard à l'UAC ?",
			content:
				"Vous pouvez nous contacter en utilisant le formulaire de contact disponible sur notre site. Nous nous efforcerons de vous répondre dans les plus brefs délais. Vous pouvez également trouver nos coordonnées de contact, y compris l'adresse e-mail et le numéro de téléphone, sur la page de contact du site.",
		},
	];
</script>

<style scoped>
	.faq-page-container {
		max-width: 54rem; /* 864px */
	}
	.faq-subtitle {
		margin-inline: auto;
		max-width: 40rem; /* 640px */
	}

	.accordion {
		margin-inline: auto;
	}

	.accordion-item {
		border: none;
		background-color: var(--white);
	}

	.accordion-item:not(:last-of-type) {
		margin-bottom: 1.5rem;
	}

	.accordion-button {
		color: var(--black);
		font-size: 0.875rem;
	}

	.ask-question-section {
		max-width: 30rem;
	}
</style>
