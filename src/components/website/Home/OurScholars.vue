<template>
	<div class="bg-texture">
		<div class="container py-large">
			<div class="row">
				<div class="col-12">
					<section>
						<h2 class="font-bold mb-5">
							Nous travaillons à renforcer la capacité des jeunes femmes et jeunes hommes brillants, originaires du Bénin et d’autres pays de l’Afrique francophone, issus de milieux sociaux défavorisés afin de faire d’eux des acteurs de changements dans leurs communautés de base.
						</h2>
						
						<div class="d-flex align-items-center justify-content-center flex-wrap gap-3">
							<router-link to="/a-propos" class="main-btn main-btn--red">
								À propos
							</router-link>
							<router-link to="/nos-boursiers" class="main-btn main-btn--red">
								Nos boursiers
							</router-link>
							<router-link to="/postuler" class="main-btn main-btn--red">
								Postuler
							</router-link>
						</div>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
	h2 {
		font-size: 1.5rem;
		/* font-weight: 600; */
		line-height: 1.5;
	}
	.bg-texture {
		background-image: url('../../../assets/website/images/texture-digit.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
	}
	section {
		max-width: 80ch;
		margin-inline: auto;
		text-align: center;
	}
</style>
