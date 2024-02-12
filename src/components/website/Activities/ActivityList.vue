<template>
	<div>
		<ActivityCard  v-for="n in 10" :key="n" />
	</div>
</template>

<script setup>
import ActivityCard from './ActivityCard.vue'

</script>

