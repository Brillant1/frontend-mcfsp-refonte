<template>
	<div class="activity-header">
	<div class="grid-container">
		<div class="img-container">
			<slot name="img">
				<img
					src="@/assets/website/images/activites/activity-img.jpg"
					alt=""
					class="rounded-se" />
			</slot>
		</div>
		<section class="bg-green text-container p-4 p-md-4 p-lg-5">
			<p class="text-white">
				<slot name="description">
					L’objectif du programme de bourses de la Fondation Mastercard à
					l’Université d’Abomey-Calavi est double. Il offre la
					possibilité à des jeunes bacheliers brillants issus de famille
					défavorisée d’accéder à des formations dans les domaines de l’agronomie,
					des technologies de l’information et de la communication et des énergies
					renouvelables.
				</slot>
			</p>
		</section>
	</div>
	</div>
</template>

<style>
	.activity-header img {
		max-width: 100%;
		border-radius: 0.75rem 0.75rem 0 0;
		height: 100%;
		object-fit: cover;
		width: 100%;
		height: calc((200 / 16) * 1rem);
	}

	.activity-header  .text-container {
		border-radius: 0 0 0.75rem 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media screen and (min-width: 640px) {
   .activity-header .img-container {
      order: 2;
    }
		.activity-header img {
			border-radius: 0 0.75rem 0.75rem 0;
			/* height: 100%; */
			height: 350px;
		}

		.activity-header .grid-container {
			display: grid;
			grid-template-columns: 9fr 8fr;
		}

		.activity-header .text-container {
			border-radius: 0.75rem 0 0 0.75rem;
			order: 1;
		}
	}
</style>
