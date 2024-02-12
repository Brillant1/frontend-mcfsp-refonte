<template>
    <admin-layout>
    <div class="container-fluid">
        <div class="p-0">
            <div class="row justify-content-between p-0">
                <div class="col">
                    <router-link to="/opportunites/liste" class="back-link">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#498371" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </i>
                        &nbsp;
                        <span class="m-text-success font-bold f-16">Retour</span>
                    </router-link>
                </div>
                <div class="col d-flex justify-content-end">
                    <router-link to="" class="delete-btn me-4" data-bs-toggle="modal" data-bs-target="#myModal" @click="deleteOpportunite(opportunite.id)">Supprimer</router-link>
                    <router-link :to="'/opportunites/edit/'+opportunite.slug" class="update-btn" type="button" @click="push_opportunite_to_store(opportunite.id)">Modifier</router-link>
                </div>
            </div>

         
            
            <div class="card mt-5 p-5">
                
                    <p class="actualite-etiquette font-bold">{{ opportunite.categorie }}</p>
                    <h1 class="fs-30 py-3 font-bold">
                        {{ opportunite.titre }}
                    </h1>
                    <hr>
                    <div class="d-flex align-items-center">
                        <p class=" pt-2 font-bold">Ouverte le: {{ formatDate(opportunite.date_debut) }}</p>
                        <p class="pt-2 font-bold ms-5">Fermée le: {{ formatDate(opportunite.date_fin) }}</p>
                    </div>
                    <hr>

                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <div class="container-detail-image mb-5 pb-5">
                            <img :src="opportunite_media.url" style="object-fit:cover">
                        </div>
                    </div>
                    <div v-html="opportunite.description" class="px-5">
                    </div>
                </div>
            </div>
        </div>
        <modal-add-opportunite :opportuniteData="opportuniteProps" @form-submitted="handleFormSubmitted"></modal-add-opportunite>
        <delete-modal></delete-modal>
    </admin-layout>
</template>

<script>
    import modalAddOpportunite from '@/components/admin/opportunites/modalAjout.vue'
    import deleteModal from '@/components/admin/opportunites/deleteModal.vue'
    import { useOpportuniteStore } from '@/store/opportunite';
    import AdminLayout from '@/layouts/admin/AdminLayout.vue'
     

    export default {
        name: 'DetailOpportunite',
        components: {
            modalAddOpportunite, deleteModal,AdminLayout
        },
        data(){
            return {
                opportunite: '',
                opportunite_media: '',
                display_delete_modal: '',
                opportuniteProps: {
                    titre: '',
                    categorie: '',
                    delai: '',
                    contenu: '',
                    photo: '',
                    modal_title: 'Modifier l\'opportunité',
                },
            }
        },
        methods: {
            deleteOpportunite(id){
                useOpportuniteStore().setDeleteElement(id)
                useOpportuniteStore().setCloseDeleteModal(true)
            }, 
            formatDate(k) {
                const d = new Date(k);
                return (
                    ("0" + d.getDate()).slice(-2) +
                    "-" +
                    ("0" + (d.getMonth() + 1)).slice(-2) +
                    "-" +
                    d.getFullYear() 
                );
            },
            handleFormSubmitted(isSubmitted){
                if(isSubmitted){  
                
                }
            },
            push_opportunite_to_store(id){
                useOpportuniteStore().fetchOpportunite(id)    
            },
        },
        created(){
            this.opportunite = useOpportuniteStore().getOpportunite
            this.opportunite_media = this.opportunite.media
        },
    }
</script>

<style lang="css" scoped>
    .delete-btn{
        border-radius: 8px;
        padding:14px 18px;
        width:200px;
        height: 48px;
        border: none;
        color:white;
        font-weight: bold;
        background-color: #E31C27;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .update-btn{
        color:white;
        border-radius: 8px;
        padding:14px 18px;
        width:200px;
        height: 48px;
        border: none;
        font-weight: bold;
        background-color: #498371;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    .actualite-etiquette{
        padding: 8px 16px;
        border-radius: 40px;
        width:102px;
        height: 32px;
        border: 1px solid #A5ABB3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .opportunite-detail-content{
        padding: 40px 110px;
    }
    .opportunite-detail-content>p{
        line-height: 30px;
    }
</style>