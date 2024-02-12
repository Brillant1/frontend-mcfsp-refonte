<template>
	<WebsiteLayout>
	<Banner class="mt-4">
		<template #title> Ressources </template>
	</Banner>
	<div class="container my-5">
		<div class="row">
			<div class="col-lg-6">
				<div class="">
					<div class="doc-img-container">
						<img
							src="@/assets/website/images/doc-img.png"
							alt=""
							class=""
							role="presentation" />
					</div>
					<div class="">
						<h2 class="doc-title">
							3ème journée de la tournée départementale de l'institut national
							de la femme
						</h2>
						<p>
							Aujourd'hui, la transformation digitale vient par phase>> dixit. Alain AHOUNOU, Directeur des systèmes d’information (DSI) du Ministère de l’économie et des finances a été reçu ...
						</p>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="">
					<div class="resource-card" v-for="item in docs" :key="item.title">
						<section>
							<h2 class="resource-card-title">{{ item.title }}</h2>
							<p>{{ item.details }}</p>
							<router-link
								to="/ressource-detail"
								class="resource-card-link"
								aria-label="Check documents">
								<font-awesome-icon
									icon="fa-solid fa-arrow-right"
									aria-hidden="true"
									class="" />
							</router-link>
						</section>
						<div class="">
							<img src="@/assets/website/images/ressources.png" alt="" />
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
	const docs = [
		{
			title: 'Magazines',
			details: 'Rapport d’activités, compte-rendus, Plan d’actions, etc...',
		},
		{
			title: 'Bibliothèque',
			details: 'Rapport d’activités, compte-rendus, Plan d’actions, etc...',
		},
	];
</script>

<style scoped>
	.doc-title {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 1.25rem;
	}
	.resource-card {
		border-radius: 1.5rem;
		background-color: #f3f5f6;
		padding: 2.5rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		max-width: 30rem;
		margin-bottom: 1rem;
	}

	.resource-card-title {
		font-size: 1.5rem;
		font-weight: 600;
	}

	.resource-card-link {
		color: var(--black);
		font-size: 1rem;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: 1px solid #5c476c;

		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	}
</style>
