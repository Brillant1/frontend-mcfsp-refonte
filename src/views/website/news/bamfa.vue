<template>
  <ActivityHeader>
    <template #img>
      <img
        src="@/assets/website/images/activites/bamfa.jpeg"
        alt=""
        class="rounded-se" />
    </template>
    <template #description>
      L'Association des Anciens Boursiers de la Fondation Mastercard au Bénin (BAMFA) réunit les anciens bénéficiaires du programme de bourses de l'Université d'Abomey-Calavi. Découvrez ici les réalisations de l'association, notamment ses initiatives philanthropiques telles que les projets sociaux, le bénévolat et les campagnes de sensibilisation. Nos anciens boursiers s'engagent activement à créer un impact positif dans leurs communautés.
    </template>

  </ActivityHeader>
  <ActivityList />
</template>

<script setup>
import ActivityHeader from '@/components/website/Activities/ActivityHeader.vue';
import ActivityList from '@/components/website/Activities/ActivityList.vue'
</script>