<template>
  <WebsiteLayout>
	<Banner class="mt-4">
		<template #title> Activités </template>
	</Banner>
	<ActivityNav />
  <div class="container">
    <div class="row mb-5">
      <div class="col-xl-10 mx-auto">
        <router-view></router-view>
	      <!-- <ActivityHeader /> -->
      </div>
    </div>
  </div>
</WebsiteLayout>
</template>

<script setup>
  import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
	import Banner from '@/components/website/Banner.vue';
  import ActivityNav from '@/components/website/Activities/ActivityNav.vue'
  // import ActivityHeader from '@/components/website/Activities/ActivityHeader.vue'
</script>

<style scoped></style>
