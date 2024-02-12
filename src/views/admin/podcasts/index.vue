<template>
    <admin-layout>
    <div class="row">
        <div class="col-12">
        <div
            class="page-title-box d-sm-flex align-items-center justify-content-start"
        >
            <h4 class="mb-sm-0 title">Podcasts</h4>
        </div>
        </div>
    </div>
    <div class="row">
        <div class="card d-flex justify-content-center align-items-center py-5">
            <div style="width:709px; height: 460px;">
                <img src="@/assets/admin/images/add-image.svg">
            </div>
            <div class="mt-5">
                <h2 class="text-add text-center">Aucun podcast ajouté</h2>
                <button class="m-bg-success font-bold btn-add" type="button" @click="openModal">Ajouter un podcast</button>
            </div>
        </div>
    </div>
</admin-layout>

    <add-podcast></add-podcast>
   
</template>

<script>
import addPodcast from '@/components/admin/podcasts/addPodcast.vue'
import AdminLayout from '@/layouts/admin/AdminLayout.vue';

import {usePodcastStore} from '@/store/podcast'
export default {
    name: 'AjoutPodcast',
    components: {
        addPodcast,AdminLayout
    },
    data(){
        return {
            
        }
    },
    mounted(){
        usePodcastStore().setOpenAddModal(false)
    },
    beforeCreate(){
        usePodcastStore().setPodcasts()
      let podcasts = usePodcastStore().getPodcasts
      podcasts.length > 0 ? this.$router.push({ name: 'podcasts/liste' }):''
  },
    methods: {
        openModal() {
            usePodcastStore().setOpenAddModal(true)
        },
    }
}
</script>

<style lang="css" scoped>
    
    .text-add{
        font-size: 16px;
        font-weight: 600;
    }
    .modal-add{
        border-radius: 16px;
        padding:32px;
    }
    
    @media (min-width: 576px){
    .modal-dialog{
        min-width:900px !important;
    }
    }
    .add-form input, .add-form select{
        border-radius: 8px;
        padding : 12px 16px 12px 16px;
        border:1px solid rgba(109, 117, 128, 1);
        width: 802px;
        height: 48px;
    }
</style>