<template>
	<div class="bg-container">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-7 px-md-0">
					<h2 class="text-white bg-green mb-0 px-4 pt-4">Nos activités</h2>
					<div class="card main-card">
						<img
							src="@/assets/website/images/activity-1.jpg"
							alt="Logo de l'UAC"
							class="card-img-top" />
						<div class="card-body">
							<span class="card-subtitle">4 Nov 2022</span>
							<h3 class="card-title">
								Opportunités de partenariat entre le Programme de bourses de la
								Fondation Mastercard et la société Eau Technologie Environnement
							</h3>
							<p class="card-text font-light">
								La société Eau Technologie Environnement produit au Bénin l’eau
								minérale Fifa de Sainte Luce. Au cours d’une rencontre organisée
								le mercredi 20 octobre 2021 avec son Administrateur général,
								Monsieur Christian MONDJANNANGNI, des possibilités de
								partenariat avec le Programme de bourses ont été discutées.
							</p>
							<a
								href="#"
								class="btn main-btn--rounded main-btn--white"
								aria-label="Voir plus sur .."
								>Voir plus
								<font-awesome-icon
									icon="fa-solid fa-arrow-right"
									aria-hidden="true"
									class="ms-2"
							/></a>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-5 bg-green">
					<div class="card-group-container">
						<div class="card-group">
							<div
								v-for="item in sideActivities"
								:key="item.title"
								class="card side-card">
								<img :src="item.img" alt="Activité" class="card-img" />
								<div class="card-img-overlay">
									<span class="card-subtitle">{{ item.subtitle }}</span>
									<h3 class="card-title">{{ item.title }}</h3>
									<router-link
										to="/"
										class="btn main-btn--rounded main-btn--white me-auto"
										aria-label="Voir plus sur .."
										>Voir plus
										<font-awesome-icon
											icon="fa-solid fa-arrow-right"
											aria-hidden="true"
											class="ms-2"
									/></router-link>
								</div>
							</div>
						</div>
						<router-link
							to="/"
							class="btn me-auto main-btn--bordered main-btn--rounded"
							>Toutes les activités
							<font-awesome-icon
								icon="fa-solid fa-arrow-right"
								aria-hidden="true"
								class="ms-2"
						/></router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Activity2 from '@/assets/website/images/activity-2.jpg';
import Activity3 from '@/assets/website/images/activity-3.jpg';
import Activity4 from '@/assets/website/images/activity-4.jpg';
	const sideActivities = [
		{
			img: Activity2,
			subtitle: '4 Nov 2022',
			title: 'LEADERSHIP TALKS SERIES',
			link: 'https://www.google.com',
		},
		{
			img: Activity3,
			subtitle: '4 Nov 2022',
			title:
				"Dialogue de l'INF avec les confessions religieuses au Bénin : La protection de la femme et de la fille au cœur des échanges",
			link: 'https://www.google.com',
		},
		{
			img: Activity4,
			subtitle: '4 Nov 2022',
			title:
				'Cérémonie d’accueil des boursiers de la 4ème cohorte de la Fondation Mastercard a l’UAC',
			link: 'https://www.google.com',
		},
	];
</script>

<style scoped>
	.bg-container {
		padding-block: 4rem;
	}
	.main-card {
		color: var(--white);
		background-color: var(--m-green);
		position: sticky;
		top: 0rem;
		padding: 1rem 2rem 2rem;
		border-radius: 0;
		margin-bottom: 8rem;
	}
	.card-img-top {
		min-height: 200px;
		max-height: 300px;
		height: auto;
		object-fit: cover;
		object-position: center 15%;
	}
	.card-subtitle {
		color: var(--yellow);
		text-transform: uppercase;
		font-size: 0.75rem;
		margin-bottom: 1rem;
		display: inline-block;
	}
	.card-title {
		color: var(--white) !important;
		line-height: 1.35;
		font-size: 1.125rem;
		margin-bottom: 1rem;
	}
	.card-body {
		padding-inline: 0;
		padding-bottom: 0;
	}

	.main-btn--rounded {
		padding: 0.625rem 1rem;
		margin-left: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
	}
	.card-group {
		padding: 1rem;
		flex-direction: column;
	}

	.bg-container {
		margin-bottom: 5rem;
	}
	@media (min-width: 768px) {
		.bg-container {
			margin-bottom: 9rem;
			margin-top: 4rem;
			padding-top: 2rem;
			padding-bottom: 1rem;
		}
		.main-card {
			margin-bottom: 0;
		}
	}
	.card-group-container {
		margin-top: -5rem;
		margin-bottom: -7rem;
	}

	.side-card .card-title {
		font-size: 1rem;
	}
	.side-card,
	.side-card img {
		border-radius: 0;
	}
	.side-card::after {
		content: '';
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36%, #000 83.59%);
		width: 100%;
		height: 100%;
		z-index: 499;
		position: absolute;
	}
	.side-card .card-img {
		height: 570px;
		object-fit: cover;
	}
	.card-img-overlay {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		z-index: 1000;
		padding: 1.5rem;
		text-align: center;
	}
</style>
