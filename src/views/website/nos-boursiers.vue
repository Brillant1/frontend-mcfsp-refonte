<template>
	<WebsiteLayout>
	<Banner class="my-4">
		<template #title> Nos boursiers </template>
	</Banner>

	<div class="container">
		<div class="row mb-5 border-bottom pb-3">
				<div class="col-md-5">
					<div class="search-input-container">
					<input
						type="search"
						name="searchScholar"
						id="searchScholar"
						placeholder="Rechercher un boursier"
						aria-label="Rechercher un boursier"
						class="search-input" />
				</div>
				</div>
				<div class="col-md-7">

				<div class="selects-container">
					<select
						class="form-select"
						aria-label="Selectionner un cycle de formation">
						<option value="licence" selected>Licence</option>
						<option value="master">Master</option>
						<option value="business">Pôle entrepreneuriat</option>
					</select>

					<select
						class="form-select"
						aria-label="Selectionner une cohorte de boursiers">
						<option value="c1">Cohorte 1</option>
						<option value="c2">Cohorte 2</option>
						<option value="c3">Cohorte 3</option>
						<option value="c4" selected>Cohorte 4</option>
						<option value="c5">Cohorte 5</option>
					</select>

					<select
						class="form-select"
						aria-label="Selectionner un domaine de formation">
						<option value="agro" selected>Agronomie</option>
						<option value="tic">Informatique</option>
						<option value="energy">Energies Renouvelables</option>
						<option value="sante">Santé</option>
						<option value="finance">Finance</option>
					</select>
				</div>
				</div>
		</div>
	</div>

	<div class="container">
		<div class="row mb-5">
			<div class="col">
				<div class="card-container">
					<div
						class="card" data-aos="fade-up"
						style="width: 18rem"
						v-for="(item) in scholars"
						:key="item.id">
						<img
							:src="`${apiUrl}/${item.media.url}`"
							alt=""
							class="card-img-top" />
						<div class="card-body">
							<h2 class="card-title">{{ item.prenom }} {{ item.nom.toUpperCase() }}</h2>
							<p class="card-text">{{ item.ecole }} | {{ item.filiere }}</p>
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
	import { onMounted, ref } from 'vue';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	onMounted(() => {
		AOS.init(
			{
				once: true
			}
		);
	});

	const apiUrl = "http://51.68.119.154:8098/storage";
	let scholars = ref();
	const getScholars = async function() {
		const res = await fetch('http://51.68.119.154:8098/api/boursiers/liste');
		const { data: boursiers } = await res.json();

		scholars.value = boursiers;
	}

	onMounted(() => {
		getScholars();
	});


</script>

<style scoped>
	.search-input-container {
		position: relative;
		width: 100%;
		max-width: 460px;
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
		width: 100%;
	}

	.selects-container {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	select {
		width: 200px;
		height: 47px;
	}
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
		text-align: center;
	}

	.card-img-top {
		border-radius: 50%;
		width: 275px;
		height: 275px;
		object-fit: cover;
		object-position: top;
	}
	.card-title {
		font-size: 1rem;
		font-weight: 700;
	}

	.card-text {
		color: #394452;
	}
</style>
