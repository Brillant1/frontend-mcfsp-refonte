<template>
	<div class="card">
		<div class="iframe-wrapper">
			<iframe id="video" width="100%" height="315" src="https://www.youtube.com/embed/LLkTGpo4hhc?autoplay=1&amp;loop=1&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;start=1&amp;playlist=LLkTGpo4hhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen loading="lazy"></iframe>
		</div>

		<div class="card-content">
			<h1 class="card-title text-white mb-4">
				Working together to make <br class="d-none d-lg-block" />
				<strong class="font-bold d-sm-block">a better world</strong>
			</h1>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
	p,
	.card {
		margin-bottom: 0;
	}
	.card {
		width: 100%;
		height: max(calc(100vh - 100px), 550px);
		background: linear-gradient(to bottom, #00000050, #00000040);
		border-radius: 0;
		border: none;
		position: relative;
		overflow: hidden;
	}
	
	.iframe-wrapper {
		width: 100%;
		height: calc(100% + 24px);
		margin-top: -24px;
		position: absolute;
		z-index: -1;
	}

	.card iframe {
		width: 100%;
		height: max(768px, calc(100% + 10px));
		pointer-events: none;
		border: none;
		transform: scale(1.1);
	}

	.card-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding-inline: 2rem;
	}

	.card-title {
		font-size: clamp(1.5rem, calc(2rem + .5vw), 2.5rem);
		font-weight: 700;
		text-align: center;
		text-shadow: 0 0 8px #00000025;
	}

	@media screen and (min-width: 992px) {
		.card-title {
			font-size: 3.5rem;
		}
	}
</style>
