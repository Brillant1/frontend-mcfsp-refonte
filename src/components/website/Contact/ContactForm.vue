<template>
	<div class="container mb-large">
		<div class="row">
			<div class="col">
				<div class="bg-light-green p-3 p-md-5 mx-auto">
					<div class="grid-container">
						<div class="img-container">
							<img
								src="@/assets/website/images/contact-img.jpg"
								alt=""
								class="form-img" />
						</div>
						<div class="bg-white form-container">
							<h2 class="text-center">Contactez-nous</h2>
							<form>
								<div class="mb-3">
									<label for="nameInput" class="form-label"
										>Nom et prénoms (*)</label
									>
									<input
										type="text"
										class="form-control"
										id="nameInput" />
								</div>
								<div class="mb-3">
									<label for="mailInput" class="form-label"
										>Email (*)</label
									>
									<input
										type="email"
										class="form-control"
										id="mailInput" />
								</div>
								<div class="mb-3">
									<label for="phoneInput" class="form-label"
										>Téléphone (*)</label
									>
									<input
										type="tel"
										class="form-control"
										id="phoneInput" />
								</div>
								<div class="mb-3">
									<label for="objectInput" class="form-label"
										>Objet (*)</label
									>
									<input
										type="text"
										class="form-control"
										id="objectInput"
										placeholder="Demande d'informations" />
								</div>
								<div class="mb-3">
									<label for="fileInput" class="form-label"
										>Fichier</label
									>
									<input
										type="file"
										class="form-control"
										id="fileInput"
										placeholder="Cliquer pour ajouter un fichier" />
								</div>
								<div class="mb-3">
									<label for="messageInput" class="form-label"
										>Message (*)</label
									>
									<textarea
										class="form-control"
										id="messageInput"
										placeholder="Votre message ici"
										rows="3"></textarea>
								</div>
								<button type="submit" class="main-btn main-btn--green">
									Envoyer
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
  .grid-container {
    max-width: 400px;
    margin-inline: auto;
  }
	.form-img {
		object-fit: cover;
    border-radius: 1rem 1rem 0 0;
    height: 200px;
	}

	.form-container {
		padding: 2.5rem 2rem;
    border-radius: 0 0 1rem 1rem;
	}
	.bg-light-green {
		background-color: #f4f6f9;
	}

	img {
		max-width: 100%;
		width: 100%;
	}

	textarea {
		resize: none;
	}

	@media screen and (min-width: 768px) {
		.grid-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
      max-width: max-content;
		}

    .form-img {
		  height: 100%;
		  border-radius: 1rem 0 0 1rem;
    }

		.form-container {
			margin-right: -2rem;
			transform: translateX(-2rem);
      border-radius: 1rem;
		}
	}
</style>
