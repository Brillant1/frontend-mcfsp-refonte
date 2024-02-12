<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<ul class="grid-container no-list-style">
					<li>
						<div class="icon-container">
							<font-awesome-icon
								icon="fa-solid fa-location-dot"
								aria-hidden="true" />
						</div>
						<span class="sr-only">Localisation</span>
						<p>
							3ème Vice rectorat chargé de la coopération à l’Université d’Abomey-Calavi
						</p>
						<router-link to="/">
							Voir sur le map
							<font-awesome-icon
								icon="fa-solid fa-arrow-right"
								aria-hidden="true"
								class="ms-2" />
						</router-link>
					</li>
					<li>
						<div class="icon-container">
							<font-awesome-icon
								icon="fa-solid fa-clock"
								aria-hidden="true" />
						</div>
						<span class="sr-only">Horaire d'ouverture</span>
						<p>Ouvert du lundi au vendredi <br> de 08:00 - 13:00 / 14:00 - 17:30</p>
					</li>
					<li>
						<div class="icon-container">
							<font-awesome-icon
								icon="fa-solid fa-phone"
								aria-hidden="true" />
						</div>
						<span class="sr-only">Numéro de Téléphone</span>
						<p>+229 62 29 59 59</p>
					</li>
					<li>
						<div class="icon-container">
							<font-awesome-icon
								icon="fa-solid fa-envelope"
								aria-hidden="true" />
						</div>
						<span class="sr-only">Adresse mail</span>
						<p>uac.mcf@gmail.com</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  justify-content: center;
  gap: 1.5rem;
  padding-block: 3rem;
}

.grid-container li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}
.icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #DDF1E7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-container svg {
  font-size: 1.5rem;
  color: var(--m-green);
}

@media screen and (min-width: 576px) {
	.grid-container {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media screen and (min-width: 992px) {
	.grid-container {
		grid-template-columns: repeat(3, 1fr);
	}
}
@media screen and (min-width: 1200px) {
	.grid-container {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
