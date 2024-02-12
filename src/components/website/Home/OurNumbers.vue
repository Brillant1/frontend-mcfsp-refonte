<template>
	<div class="bg-black bg-texture" id="scrollArea">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="py-large">
						<h2 class="text-white text-center">Nos chiffres parlent pour nous</h2>
						<p class="mb-5 text-white text-center mx-auto" style="max-width: 70ch;">
							Depuis 2017, à travers le Programme de bourses de la Fondation Mastercard, nos boursiers apportent un changement positif à leurs communautés. En intégrant des écoles prestigieuses, ces derniers ne cessent de se démarquer en décrochant  des postes clés dans des institutions nationales et internationales, en réalisant des projets innovants et en remportant de nombreux prix nationaux et internationaux.
						</p>
						
						<ul class="no-list-style list">
							<li v-for="item in stats" :key="item.title" class="list-item">
								<img :src="item.img" alt="" class="img-fluid icon" role="presentation" />
								<div>
                  <p>
                    <strong class="number">
											+
											<count-up :startVal="0" :end-val="item.number" :duration="5" :enableScrollSpy="true"></count-up>
						          <!-- <vue3-autocounter ref='counter' :startAmount='0' :endAmount='item.number' :duration='3' :decimals="0" :autoinit="true"/> -->
										</strong>
                  </p>
									<p>{{ item.title }}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Boursiers from '@/assets/website/icons/Boursiers.svg';
import Graduate from '@/assets/website/icons/Graduate.svg';
import Entreprises from '@/assets/website/icons/Entreprises.svg';
import Entrepreunariat from '@/assets/website/icons/Entrepreunariat.svg';
import Extérieur from '@/assets/website/icons/Extérieur.svg';
import Prix from '@/assets/website/icons/Prix.svg';

import Vue3Autocounter from 'vue3-autocounter';
import CountUp from 'vue-countup-v3';

const stats = [
	{
		number: 245,
		title: 'Boursiers en licence',
		bgColor: '#0598C6',
		img: Boursiers,
	},
	{
		number: 170,
		title: 'Diplômés',
		bgColor: '#FF671B',
		img: Graduate,
	},
	{
		number: 170,
		title: 'Entreprises accompagnés',
		bgColor: '#8DB92E',
		img: Entreprises,
	},
	{
		number: 587,
		title: 'Diplômés formés à la culture entrepreunariale',
		bgColor: '#D22A2F',
		img: Entrepreunariat,
	},
	{
		number: 14,
		title: 'Alumnis continuants un master à l’extérieur',
		bgColor: '#F38B00',
		img: Extérieur,
	},
	{
		number: 50,
		title: 'Prix remportés',
		bgColor: '#F38B00',
		img: Prix,
	},
];
</script>

<style scoped>
li:nth-of-type(1),
li:nth-of-type(6) {
  --color: #D22A2F;
}

li:nth-of-type(2) {
  --color: #2F7B6B;
}

li:nth-of-type(3),
li:nth-of-type(4) {
  --color: #FF671B;
}

li:nth-of-type(5) {
  --color: #006400;
}
p {
	margin-bottom: 0;
}

.bg-texture {
	background-image: url('@/assets/website/images/texture-1.png');
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	z-index: 1;
}

.list {
	display: flex;
  justify-content: center;
  flex-wrap: wrap;
	column-gap: 4rem;
	row-gap: 3rem;
	max-width: calc((900 / 16) * 1rem);
	margin-inline: auto;
}

.icon {
	width: 3rem;
	height: 3rem;
}

.list-item {
	text-align: center;
	padding-block: 1rem;
	padding-inline: .6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	width: 12rem;
	height: 12rem;
	background-color: var(--white);
	position: relative;
}

.list-item::before,
.list-item::after {
	content: '';
	display: inline-block;
	width: 50%;
	height: 50%;
	position: absolute;
	background-color: var(--color);
	z-index: -1;
}

.list-item::before {
	right: -5px;
	top: -5px;
}
.list-item::after {
	left: -5px;
	bottom: -5px;
}

.number {
  font-size: 1.5rem;
	font-weight: 700;
  color: var(--color);
}

@media screen and (min-width: 992px) {
	.icon {
		width: ((80 / 16) * 1rem);
		height: ((80 / 16) * 1rem);
	}
}
</style>
