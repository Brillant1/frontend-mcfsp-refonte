<template>
  <ActivityHeader>
    <template #img>
      <img
        src="@/assets/website/images/activites/activity-img.jpg"
        alt=""
        class="rounded-se" />
    </template>
    <template #description>
      Bienvenue dans la section dédiée aux activités de retour à la communauté menées par nos boursiers. Explorez ces actions de contribution pour comprendre comment nos boursiers contribuent activement au développement et au bien-être de leurs communautés.
    </template>

  </ActivityHeader>
  <ActivityList />
</template>

<script setup>
import ActivityHeader from '@/components/website/Activities/ActivityHeader.vue';
import ActivityList from '@/components/website/Activities/ActivityList.vue'
</script>