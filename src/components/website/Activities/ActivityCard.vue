<template>
	<div class="card mb-3 mt-4">
		<div class="row">
			<div class="col-md-4">
				<img
					src="@/assets/website/images/orlane.jpg"
					alt=""
					class="img-fluid rounded"
					width="300" />
			</div>
			<div class="col-md-8">
				<div class="card-body py-md-0 px-md-0 px-lg-2">
					<div
						class="d-flex justify-content-between align-items-center flex-wrap text-light-grey mb-2">
						<p class="mb-0 text-uppercase">Publié le 13 Mars 2023</p>
						<strong>#Projets</strong>
					</div>
					<h3 class="card-title">
						Opportunités de partenariat entre le Programme de bourses de la
						Fondation Mastercard et la société Eau Technologie Environnement
					</h3>
					<p class="card-text">
						La société Eau Technologie Environnement produit au Bénin l’eau
						minérale Fifa de Sainte Luce. Au cours d’une rencontre organisée le
						mercredi 20 octobre 2021 avec son Administrateur général, Monsieur
						Christian MONDJANNANGNI, des possibilités de partenariat avec le
						Programme de bourses ont été discutées.
					</p>
					<router-link to="/news-detail" class="main-btn main-btn--red card-link"
						>Lire la suite</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.card {
		border: none;
		border-radius: 0;
		padding-bottom: 2rem;
	}

	.card:not(:last-of-type) {
		border-bottom: 1px solid #dadee3;
	}
	.card img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		object-position: top;
	}

	@media screen and (min-width: 768px) {
		.card img {
			/* height: 200px; */
			height: auto;
		}
	}

	.card-title {
		font-size: 1.25rem;
		font-weight: 600;
	}
</style>
