<template>
	<div
		class="offcanvas offcanvas-end"
		tabindex="-1"
		id="headerOffcanvas"
		aria-labelledby="offcanvasExampleLabel">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"><font-awesome-icon icon="xmark" /></button>
		</div>
		<div class="offcanvas-body">
			<nav>
				<template v-if="props.isMediumScreen">
					<ul class="social-media-list no-list-style">
						<li v-for="item in props.socialMedia" :key="item.icon">
							<a :href="item.link" class="icon">
								<span class="visually-hidden">{{ item.ariaLabel }}</span>
								<font-awesome-icon
									:icon="`fa-brands ${item.icon}`"
									aria-hidden="true" />
							</a>
						</li>
						<li>
							<img src="@/assets/website/icons/Phone.svg" alt="" class="me-2" />
							<a href="tel:(+229)62295959" class="f-12"
								>(+229) <strong>62 29 59 59</strong></a
							>
						</li>
					</ul>
				</template>
				<ul class="nav-list no-list-style">
					<template v-if="props.isSmallScreen">
						<li class="d-flex align-items-center gap-3 py-3">
							<router-link to="/postuler" class="main-btn main-btn--red btn-apply">Postuler</router-link>
							<div class="dropdown">
								<button
									class="btn bg-transparent dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									English
									<font-awesome-icon
										icon="fa-solid fa-chevron-down"
										class="ms-3" />
								</button>
								<ul class="dropdown-menu">
									<li>
										<a class="dropdown-item" href="#">Français</a>
									</li>
								</ul>
							</div>
						</li>
					</template>
					<li><router-link to="/">Accueil</router-link></li>
					<li><router-link to="/a-propos">À propos du programme</router-link></li>
					<li><router-link to="/notre-equipe">Notre équipe</router-link></li>
					<li>
						<button
							class="dropdown-btn btn bg-transparent text-black d-flex align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseExample"
							aria-expanded="false"
							aria-controls="collapseExample">
							Activités
							<font-awesome-icon icon="fa-solid fa-plus" class="ms-auto" />
						</button>
						<div class="collapse" id="collapseExample">
							<ul class="">
								<li>
									<router-link to="/news/actualites">Actualités</router-link>
								</li>
								<li>
									<router-link to="/news/success-stories">Success stories</router-link>
								</li>
								<li>
									<router-link to="/news/giving-back">Giving Back</router-link>
								</li>
								<li>
									<router-link to="/news/bamfa">Activités BAMFA</router-link>
								</li>
							</ul>
						</div>
					</li>
					<li><a href="#">Nos boursiers</a></li>
					<li>
						<button
							class="main-btn dropdown-btn"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#podcastExample"
							aria-expanded="false"
							aria-controls="podcastExample">
							Nos émissions
							<font-awesome-icon icon="fa-solid fa-plus" class="ms-auto" />
						</button>
						<div class="collapse" id="podcastExample">
							<ul class="">
								<li>
									<router-link to="/">Alumni Speak-Out</router-link>
								</li>
								<li>
									<router-link to="#">Parcours Inspirants</router-link>
								</li>
								<li>
									<router-link to="#">Podcast employabilité</router-link>
								</li>
								<li>
									<router-link to="#">Leadership Talk Series</router-link>
								</li>
							</ul>
						</div>
					</li>
					<li><router-link to="/nos-boursiers">Nos boursiers</router-link></li>
					<!-- <li><router-link to="/ressources">Ressources</router-link></li> -->
					<li>
						<button
							class="dropdown-btn btn bg-transparent text-black d-flex align-items-center"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#ressourcesCollapse"
							aria-expanded="false"
							aria-controls="ressourcesCollapse">
							Ressources
							<font-awesome-icon icon="fa-solid fa-plus" class="ms-auto" />
						</button>
						<div class="collapse" id="ressourcesCollapse">
							<ul class="">
								<li><router-link to="/ressource-detail">Documents de capitalisation</router-link></li>
								<li><router-link to="/ressource-detail">Magazines</router-link></li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="/contact">Contact</router-link>
					</li>
					<li>
						<a href="#">
							E-learning 
							<font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="ms-1" />
						</a>
					</li>
					<li>
						<router-link to="/faq">FAQ</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script setup>
	import { onMounted } from 'vue';
	import { Offcanvas } from 'bootstrap';

	const props = defineProps(['isSmallScreen', 'isMediumScreen', 'socialMedia']);

	onMounted(() => {
    
    const offcanvas = document.querySelector('.offcanvas');
    // let bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    offcanvas
    .addEventListener('click', function (e) {
      const link = e.target.closest('a[href]');
      
      // console.log("Header : ", offcanvas);
				if (!link) return;

				//  bsOffcanvas.hide();
        Offcanvas.getInstance(offcanvas).hide();
			});
	});
</script>

<style scoped>
	.offcanvas {
		background-color: var(--black);
	}

	.btn-close {
		--bs-btn-close-color: #fff;
		--bs-btn-close-bg: none;
  	--bs-btn-close-opacity: 1;
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nav-list li a {
		width: 100%;
		display: inline-block;
		padding-block: 0.75rem;
	}
	.nav-list li button.dropdown-btn {
		text-align: left;
		padding-left: 0;
	}
	.nav-list li:not(:last-of-type) {
		border-bottom: 0.5px solid #e0e0e0;
	}

	.offcanvas li a {
		color: white;
		text-decoration: none;
	}

	.dropdown-btn {
		display: flex;
		align-items: center;
		background-color: transparent;
		/* color: var(--black); */

		text-align: left;
		padding-left: 0;
		padding-block: 0.75rem;
		max-width: 100%;
		width: 100%;
	}

	.search-input-container {
		position: relative;
		width: 90%;
	}

	.search-input {
		width: 100%;
		height: 3rem;
		padding: 0.5rem 1rem;
		border-radius: 7rem;
		border: 1px solid var(--black);
	}

	.btn-search {
		font-size: 1rem;
		display: flex;
		padding: 0.875rem;
		position: absolute;
		top: 50%;
		right: 6px;
		transform: translateY(-50%);
		height: 40px;
		width: 40px;
	}

	.btn-apply {
		width: 75%;
		max-width: 100%;
		text-align: center;
		}
</style>
