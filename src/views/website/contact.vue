<template>
  <WebsiteLayout>
    <Banner class="mt-4">
      <template #title>
        Contact
      </template>
    </Banner>
    <ContactInfos />
    <ContactForm />
  </WebsiteLayout>
</template>

<script setup>
import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
import Banner from '@/components/website/Banner.vue';
import ContactInfos from '@/components/website/Contact/ContactInfos.vue';
import ContactForm from '@/components/website/Contact/ContactForm.vue';

import { useSeoMeta } from '@unhead/vue';

	useSeoMeta({
  title: ' Nous contacter |Mastercard Foundation Scholars Program at UAC',
  description: "Entrez en contact avec le Programme de bourses de la Fondation Mastercard à l'Université d'Abomey-Calavi.",
})
</script>

<style scoped></style>
