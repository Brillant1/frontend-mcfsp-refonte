<template>
  <ActivityHeader>
    <template #img>
      <img
        src="@/assets/website/images/activites/activity-img.jpg"
        alt=""
        class="rounded-se" />
    </template>
    <template #description>
      Bienvenue dans la section Actualités dédiée au programme de bourses de la Mastercard Foundation à l'Université d'Abomey-Calavi. Ici, nous vous présentons les événements associés au programme de bourses, y compris les annonces majeures et les initiatives à venir telles que les conférences et les ateliers.
    </template>

  </ActivityHeader>
  <ActivityList />
</template>

<script setup>
import ActivityHeader from '@/components/website/Activities/ActivityHeader.vue';
import ActivityList from '@/components/website/Activities/ActivityList.vue';
</script>