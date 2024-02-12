<template>
	<WebsiteLayout>
	<Banner class="my-4">
		<template #title> Bibliothèque </template>
	</Banner>

	<div class="container mb-5">
		<div class="row">
			<div class="col-lg-10 mx-auto">
				<div class="border-top border-bottom d-flex flex-wrap gap-4 py-3">
					<div class="col-md-6">
						<div class="search-input-container">
							<input
								type="search"
								name="searchDoc"
								id="searchDoc"
								placeholder="Rechercher"
								aria-label="Rechercher un document"
								class="search-input" />
						</div>
					</div>
					<div class="col-md-3 col-lg-2">
						<div class="filter-btn-container">
							<button type="button" class="main-btn filter-btn">Filtrer</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-10 mx-auto">
				<div class="doc-card" v-for="i in 10" :key="i">
					<div class="">
						<img
							src="@/assets/website/images/doc-img.png"
							alt=""
							class="w-100 d-none d-sm-block"
							role="presentation" />
					</div>
					<section>
						<strong class="text-uppercase text-light-grey d-inline-block mb-3"
							>Publié le 4 Nov 2022</strong
						>
						<h2 class="doc-title">
							3ème journée de la tournée départementale de l'institut national
							de la femme
						</h2>
						<p>
							Aujourd'hui, la transformation digitale vient par phase>> dixit.
							Alain AHOUNOU, Directeur des systèmes d’information (DSI) du
							Ministère de l’économie et des finances a été reçu ...
						</p>
						<p>PDF | <span>1.27 Mo</span></p>
						<div class="doc-actions-container">
							<button type="button" class="main-btn main-btn--bordered">
								Lire
							</button>
							<button type="button" class="main-btn main-btn--green">
								Télécharger
							</button>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</WebsiteLayout>
</template>

<script setup>
	import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
	import Banner from '@/components/website/Banner.vue';
</script>

<style scoped>
	.search-input-container {
		position: relative;
	}
	.search-input-container::before {
		content: url('@/assets/website/icons/Search.svg');
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 1rem;
		transform: translateY(-50%);
		width: 24px;
		height: 24px;
	}
	.search-input {
		border-radius: 0.25rem;
		border: 1px solid #dadee3;
		background: #f4f6f9;
		padding: 0.75rem 1rem 0.75rem 3rem;
		/* max-width: 450px; */
		width: 100%;
	}

	.filter-btn {
		color: black;
		font-weight: 600;
		border-radius: 0.5rem;
		background: #e6ecea;
		padding: 0.75rem 1rem;
		min-width: 150px;
		display: inline-block;
		max-width: initial;
	}

	.doc-card {
		display: grid;
		grid-template-columns: 0px auto;
		padding-block: 2rem;
		gap: 1rem;
	}

	.doc-card:not(:last-of-type) {
		border-bottom: 1px solid #dadee3;
	}

	.doc-title {
		font-size: 1.25rem;
		font-weight: 700;
	}

	.doc-actions-container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.doc-actions-container button {
		height: calc((42 / 16) * 1rem);
		min-width: 175px;
	}

	@media screen and (min-width: 576px) {
		.doc-actions-container button {
			min-width: 150px;
		}
		.doc-card {
			grid-template-columns: 180px auto;
			gap: 1.5rem;
		}
	}
	@media screen and (min-width: 992px) {
		.doc-actions-container button {
			min-width: 175px;
		}
		.doc-card {
			gap: 2.5rem;
		}
	}
</style>
