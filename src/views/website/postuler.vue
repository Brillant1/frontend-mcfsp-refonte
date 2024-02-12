<template>
	<WebsiteLayout>
	<Banner class="my-4">
		<template #title> Postuler au programme </template>
	</Banner>

	<PostulerNav />

  <div class="postuler">
    <router-view></router-view>
  </div>
</WebsiteLayout>
</template>

<script setup>
	import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
	import Banner from '@/components/website/Banner.vue';
	import PostulerNav from '@/components/website/Postuler/PostulerNav.vue';
</script>

<style>
	.bg-dark-red {
		background-color: #d22a2f;
	}

	.postuler h2 {
		font-size: 1.25rem;
		font-weight: 700;
	}

	.postuler ul {
		padding-left: 0;
		list-style: none;
	}

	.postuler ul li {
		line-height: 1.875rem;
	}

	.postuler ul p {
		margin-bottom: 0.25rem;
	}

	ul.first-level-list {
		list-style: none;
	}

	ul.first-level-list > li {
		margin-bottom: 1.5rem;
	}

	h2.first-level-title {
		display: grid;
		grid-template-columns: 2rem auto 1fr;
		align-items: center;
		gap: 1rem;
	}

	h2 .orange-block {
		width: 32px;
		height: 10px;
		background-color: var(--yellow);
		display: block;
	}

	h2 .grey-block {
		width: 100%;
		height: 4px;
		background: #e3e3e3;
		display: block;
	}

	ul.second-level-list > li::before {
		content: '';
		display: inline-block;
		width: 7px;
		height: 7px;
		background-color: var(--black);
		margin-right: 6px;
	}

  .postuler-card {
    height: 100%;
    border: none;
  }
  .postuler-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.125rem;
  }

	.postuler-card-img {
		width: 75px;
	}

	.postuler-card-text {
		line-height: 1.6;
	}

  .postuler-card .main-btn {
    margin-top: auto;
    padding: 1rem .75rem;
    line-height: 1.6;
  }

  @media screen and (min-width: 992px) {
  .cycle-img {
    height: 400px;
    object-fit: cover;
  }
  }
</style>
