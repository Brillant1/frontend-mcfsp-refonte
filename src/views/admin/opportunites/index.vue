<template>
  <admin-layout>
    <div class="row">
        <div class="col-12">
        <div
            class="page-title-box d-sm-flex align-items-center justify-content-start"
          >
            <h4 class="mb-sm-0 title">Opportunités</h4>
        </div>
        </div>
    </div>
    <div class="row ">
        <div class="card d-flex justify-content-center align-items-center py-5">
            <div style="width:709px; height: 460px;">
                <img src="@/assets/admin/images/add-image.svg">
            </div>
            <div class="mt-5">
                <h2 class="text-add text-center">Aucune opportunité ajoutée</h2>
                <button class="m-bg-success font-bold btn-add" type="button" @click="openModal">Ajouter une opportunité</button>
            </div>
        </div>
    </div>
  </admin-layout>
    <modal-add-opportunite></modal-add-opportunite>
</template>
<script>
import modalAddOpportunite from '@/components/admin/opportunites/modalAjout.vue'
import { useOpportuniteStore } from '@/store/opportunite'
import AdminLayout from '@/layouts/admin/AdminLayout.vue';

export default {
  name: 'Index',
  components: {
    modalAddOpportunite,
    AdminLayout
  },
  data() {
    return {
      can_close_modal: false,
    };
  },
  methods: {
    openModal() {
        const opportuniteStore = useOpportuniteStore()
        opportuniteStore.openModal();
    }
  },
  beforeCreate(){
      useOpportuniteStore().setOpportunites()
      let opportunites = useOpportuniteStore().getOpportunites
      opportunites.length > 0 ? this.$router.push({ name: 'opportunites/liste' }):''
  },
  
  created() {
    useOpportuniteStore().closeModal()
    this.can_close_modal = useOpportuniteStore().getModalOpen;
    this.$watch(() => useOpportuniteStore().can_close_modal, (newVal) => {
      this.can_close_modal = newVal;
    });
  },
};
</script>

<style lang="css" scoped>
    
    .text-add{
        font-size: 16px;
        font-weight: 600;
    }
    input, select{
        font-size: 14px;
    }
</style>