<template>
    <admin-layout>
        <div class="row">
            <div class="col-12">
            <div
                class="page-title-box d-sm-flex align-items-center justify-content-start"
            >
                <h4 class="mb-sm-0 title">Boursiers</h4>
            </div>
            </div>
        </div>
        <div class="row ">
            
            <div class="card d-flex justify-content-center align-items-center py-5">
                <div style="width:709px; height: 460px;">
                    <img src="@/assets/admin/images/add-image.svg">
                </div>
                <div class="mt-5">
                    <h2 class="text-add text-center">Aucun boursier ajouté</h2>
                    <button class="m-bg-success font-bold btn-add" type="button" @click="openModal">Ajouter un boursier</button>
                </div>
            </div>
        </div>
    </admin-layout>

    <modal-boursier></modal-boursier>
   
    <success-add-boursier></success-add-boursier>
  
    <add-boursier-history></add-boursier-history>
</template>

<script>
import modalBoursier from '@/components/admin/boursiers/addBoursier.vue'
import successAddBoursier from '@/components/admin/boursiers/successAddBoursier.vue';
import addBoursierHistory from '@/components/admin/boursiers/addBoursierHistory.vue';
import adminLayout from '@/layouts/admin/AdminLayout.vue';

import {useBoursierStore} from '@/store/boursier'
export default {
    name: 'AjoutBoursier',
    components: {
        modalBoursier,successAddBoursier,addBoursierHistory,adminLayout
    },
    data(){
        return {
            isAddedBoursier: false,
            display_history_modal: false,
        }
    },
    methods: {
        handleFormSubmitted(isSubmitted){
            if(isSubmitted){  
               setTimeout(() => {
                this.isAddedBoursier = true;
               }, 1000);
            }
        },
        open_history_modal(open_history_form){
            if(open_history_form){
                this.isAddedBoursier = false;
                this.display_history_modal = true
            }
        },
        openModal() {
            useBoursierStore().setOpenAddModal(true);
        }
  
    },
    beforeCreate(){
        useBoursierStore().setBoursiers()
        let boursiers = useBoursierStore().getBoursiers
        boursiers.length > 0 ? this.$router.push({ name: 'boursiers/liste' }):''
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