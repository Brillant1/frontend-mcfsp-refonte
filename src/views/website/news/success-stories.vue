<template>
  <ActivityHeader>
    <template #img>
      <img
        src="@/assets/website/images/activites/success-stories.jpg"
        alt=""
        class="rounded-se" />
    </template>
    <template #description>
      Bienvenue dans la section <strong>"Success Stories"</strong> de nos boursiers, où nous mettons en lumière les réalisations exceptionnelles de nos étudiants. Ils décrochent distinctions et récompenses remarquables tout en poursuivant leurs formations. Découvrez ces inspirantes histoires de succès.
    </template>

  </ActivityHeader>
  <ActivityList />
</template>

<script setup>
import ActivityHeader from '@/components/website/Activities/ActivityHeader.vue';
import ActivityList from '@/components/website/Activities/ActivityList.vue'
</script>