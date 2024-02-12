<template>
	<WebsiteLayout>
	<div class="container mt-4">
		<div class="row">
			<div class="col-lg-9 mx-auto">
				<h1 class="news-title">
					Appel à manifestation d’intérêt pour la sélection de mentors au profit
					du Programme de bourses de la Fondation Mastercard à l’UAC
				</h1>

				<div class="news-info">
					<p class="text-uppercase text-grey mb-0">Publié le 4 Nov 2022</p>
					<div class="d-flex align-items-center gap-2 gap-md-4">
						<p class="text-uppercase text-grey mb-0">Partager sur</p>
						<ul class="social-media-list no-list-style">
							<li v-for="item in socialMedia" :key="item.icon">
								<router-link :to="item.link" class="social-link">
									<span class="visually-hidden">{{ item.ariaLabel }}</span>
									<font-awesome-icon
										:icon="`fa-brands ${item.icon}`"
										aria-hidden="true" />
								</router-link>
							</li>
						</ul>
					</div>
				</div>

				<div class="my-4">
					<div class="news-img-container">
						<img
							src="@/assets/website/images/news-img.png"
							alt=""
							class="w-100" />
					</div>
					<div class="news-content">
						<p>
							Le Programme de bourses de la Fondation Mastercard à l’Université
							d’Abomey-Calavi (MCFSP-UAC) a identifié le mentorat comme l’un de
							mes moyens pour accompagner ses boursiers dans leurs transitions
							de l’école vers la vie active. À cet effet, le Programme a lancé
							pour le compte de l’année académique 2020-2021, le projet de
							mentorat au profit de 61 boursiers. Le projet a consisté à mettre
							en liaison un boursier avec un mentor, qui s’est engagé à
							accompagner ce dernier par des conseils avisés pour lui permettre
							d’adopter une attitude positive afin de réussir dans ses études,
							de s’intégrer dans le monde de l’emploi et de créer de l’impact
							autour de lui. Après une première année de mise en œuvre, le
							projet de mentorat a permis aux boursiers bénéficiaires d’obtenir
							des opportunités sur différents plans. Au regard des avantages
							résultant de la mise en œuvre de ce projet, le Programme envisage
							reconduire à nouveau le projet au profit des boursiers non encore
							bénéficiaires. Ainsi, sont ciblés pour la deuxième année
							(2021-2022) de mise en œuvre, les boursiers en troisième année au
							sein du Programme de bourses à l’UAC. Il s’agit des soixante et un
							(61) boursiers de la 3e cohorte qui seront mis en contact avec 61
							mentors.
						</p>
						<p>
							Il est à rappeler qu’une relation tripartite et bénévole sera
							instaurée entre le mentor, le mentoré et le Programme de bourses
							afin de garantir l’instauration de la confiance et des échanges
							sains et productifs entre les différentes parties.
						</p>
						<ol>
							<li>
								<h2 class="text-uppercase">Rôles des mentors</h2>
								<p>
									Les mentors bénévoles œuvreront aux côtés des boursiers à la
									réalisation des plans de carrière de ceux-ci. A cet effet, ils
									auront pour rôle de : participer à une rencontre
									d’introduction du projet (en ligne ou en présentiel) ; offrir
									du temps d’écoute et d’orientation académique et/ou
									professionnelle aux boursiers mentorés ; appuyer les boursiers
									mentorés dans la réalisation de leurs choix de carrière de
									manière éclairée ; aider les boursiers à identifier ou à
									obtenir un stage académique ou professionnel ; favoriser le
									développement de compétences professionnelles chez les
									boursiers par le partage de connaissances et d’expériences
									relatives à l’accès et à la conduite en milieu professionnel ;
									faire un retour sur sa relation avec le boursier mentoré en
									participant à une enquête d’appréciation organisée par le
									Programme de bourses.
								</p>
							</li>
							<li>
								<h2 class="text-uppercase">Bénéfices à être un mentor</h2>
								<ul>
									<li>
										valorisation de ses expériences acquises par le partage avec
										les plus jeunes ;
									</li>
									<li>
										appartenance à un réseau national et international de
										mentors dynamiques motivés par l’entraide, l’échange et le
										partage d’expériences ;
									</li>
									<li>
										participation à des activités de réseautage entre mentors
										d’une part et entre mentors et boursiers d’autre part ;
									</li>
									<li>
										distinction honorifique du mentor le plus impactant par le
										Programme de bourses de la Fondation Mastercard à
										l’Université d’Abomey-Calavi.
									</li>
								</ul>
							</li>
							<li>
								<h2 class="text-uppercase">Profils recherchés des mentors</h2>
								<ul>
									<li>
										être spécialiste de l’un des domaines d’intervention du
										programme (agriculture informatique, énergies renouvelables)
										;
									</li>
									<li>
										être un professionnel autodidacte désireux de partager son
										expérience de manière générale avec des plus jeunes ;
									</li>
									<li>
										justifier d’une expérience professionnelle de trois ans au
										moins ;
									</li>
									<li>
										avoir une forte volonté de s’investir de manière bénévole
										pour le développement professionnel des plus jeunes ;
									</li>
									<li>
										être disponible à participer aux rencontres présentielles ou
										en ligne de partage avec les boursiers ;
									</li>
									<li>
										faire preuve d’empathie et avoir de bonnes compétences
										relationnelles, interpersonnelles et communicationnelles.
									</li>
								</ul>
							</li>
							<li>
								<h2 class="text-uppercase">
									Comment participer à l'appel à manifestation d'intérêt ?
								</h2>
								<p>
									Pour participer à cet appel, nous invitons les potentiels
									mentors à remplir le formulaire Google ci-joint au plus tard
									le 18 février 2022. Pour toutes informations complémentaires,
									veuillez contacter le 96112650 (Whatsapp) ou écrire à
									l’adresse : <span class="text-red text-decoration-underline">uac.mcf@gmail.com</span>
								</p>
							</li>
						</ol>
					</div>
					<div class="news-footer">
						<p class="text-uppercase text-grey mb-0">Partager sur</p>
						<ul class="social-media-list no-list-style">
							<li v-for="item in socialMedia" :key="item.icon">
								<router-link :to="item.link" class="social-link">
									<span class="visually-hidden">{{ item.ariaLabel }}</span>
									<font-awesome-icon
										:icon="`fa-brands ${item.icon}`"
										aria-hidden="true" />
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	</WebsiteLayout>
</template>

<script setup>
import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
	const socialMedia = [
		{
			link: '/',
			ariaLabel: 'Twitter',
			icon: 'fa-twitter',
		},
		{
			link: '/',
			ariaLabel: 'Linkedin',
			icon: 'fa-linkedin-in',
		},
		{
			link: '/',
			ariaLabel: 'Facebook',
			icon: 'fa-facebook-f',
		},
		{
			link: '/',
			ariaLabel: 'Nous suivre sur Youtube',
			icon: 'fa-youtube',
		},
	];
</script>

<style scoped>
	h2 {
		font-size: 1rem;
		font-weight: 700;
	}
	.news-title {
		font-size: calc(1rem + 1vw);
		font-weight: 600;
		margin-block: 1.5rem;
	}

	.news-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		border-top: 1px solid #dadee3;
		border-bottom: 1px solid #dadee3;
		padding: 1rem 0.5rem;
	}

	.social-media-list {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.social-link {
		color: #6d7580;
		background-color: var(--white);
		border: 1px solid #6d7580;

		font-size: 1rem;
		padding: 8px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
	}

	.news-img-container img {
		border-radius: 0.75rem;
		max-height: 32rem;
	}

	.news-content {
		margin-block: 2rem;
		font-size: .9375rem;
	}

	.news-content ul {
		list-style-type: disc;
		padding-left: 1rem;
	}

	.news-content li {
		margin-bottom: 0.5rem;
	}

	.news-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		border-top: 1px solid #dadee3;
		border-bottom: 1px solid #dadee3;
		padding: 1rem 0.5rem;
	}
	
</style>
