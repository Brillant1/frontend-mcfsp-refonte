<template>
    <admin-layout>
        <div class="container-fluid d-flex justify-content-center">
            <div class="" style="width: 95%;">
                <div class="row justify-content-between p-0">
                    <div class="col">
                        <router-link to="/boursiers/liste" class="back-link">
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
                        <router-link to="" class="delete-btn me-4" @click="deleteBoursier(boursier.id)">Supprimer</router-link>
                        <router-link :to="'/boursiers/edit/'+boursier.slug" @click="push_boursier_to_store(boursier.id)" class="update-btn" type="button">Modifier</router-link>
                    </div>
                </div>
                <div class="mt-5 container-detail-boursier row align-items-center">
                
                    <img :src="boursier_media.url" class="scholar-img col-5">
                
                    <div class="col-7">
                        <div class="row justify-content-between">
                            <h2 class="col fw-bold">   {{ boursier.prenom }}        {{ boursier.nom }}   </h2>
                            <div class="col align-items-center justify-content-end d-flex btn-add-history" @click="openModalHistory(boursier.id)">
                                <img src="@/assets/admin/images/icones/add to_photos.svg" alt="" class="me-2">
                                <span class="font-bold border-dark border-2 border-bottom">Ajouter une histoire</span>
                            </div>
                        </div>
                        <div class="info-formation-boursier">
                            <div class="d-flex justify-content-between align-items-center pt-4 pb-2">
                                <p class="text-start">Cohorte</p>
                                <p class="text-end"> {{ boursier_cohorte.nom }}</p>
                            </div>
                            <div class="d-flex justify-content-between pt-4 pb-2">
                                <p>Cycle</p>
                                <p>Licence</p>
                            </div>
                            <div class="d-flex justify-content-between pt-4 pb-2">
                                <p>Ecole</p>
                                <p>  {{ boursier.ecole }}  </p>
                            </div>
                            <div class="d-flex justify-content-between pt-4 pb-2">
                                <p>Filière</p>
                                <p>  {{ boursier.filiere.nom }}  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="histoire-boursier">
                    <p class="fs-16" v-if="boursier.histoire" v-html="boursier.histoire">
                        
                    </p>
                </div>
            </div>
        </div>

        <!-- Modal to update -->
        <add-boursier :boursierData="boursierProps"></add-boursier>
        <!-- Modal to delete -->
        <delete-modal></delete-modal>
        <add-boursier-history></add-boursier-history>
    </admin-layout>
</template>

<script>
    import addBoursier from '@/components/admin/boursiers/addBoursier.vue'
    import deleteModal from '@/components/admin/boursiers/deleteModal.vue'
    import addBoursierHistory from '@/components/admin/boursiers/addBoursierHistory.vue';
    import adminLayout from '@/layouts/admin/AdminLayout.vue';
    import { useBoursierStore } from '@/store/boursier';

    export default {
        name: 'DetailBoursier',
        components: {
            addBoursier, deleteModal,addBoursierHistory,
                adminLayout
        },
        data(){
            return {
                boursier: '',
                boursier_cohorte: '',
                boursier_media: '',
                boursierProps: {
                nom: 'Richard',
                prenom: 'DOVOEDO',
                cohorte: 'Cohorte 2018',
                cycle: 'Licence',
                ecole: 'IFRI',
                photo: '',
                modal_title: 'Modifier le boursier',
                edit: true
                },
                dataToDelete : {
                    boursier_to_delete_id: '',
                    modal_title : 'Êtes vous sûr de vouloir supprimer cet boursier ?'
                },
                display_history_modal: false,
                display_delete_modal: false,

            }
        },
        mounted(){
           useBoursierStore().setOpenHistoryModal(false) 
           
        },
        created(){
            this.boursier = useBoursierStore().getBoursier;
            this.boursier_cohorte = this.boursier.cohorte
            this.boursier_media = this.boursier.media
        },
        methods: {
            deleteBoursier(id){
                useBoursierStore().setDeleteElement(id)
                useBoursierStore().setCloseDeleteModal(true)
            },

            openModalHistory(id){
                useBoursierStore().setBoursier(id)
                useBoursierStore().setOpenHistoryModal(true)
            },
            closeModal(closeModal){
                if(closeModal){
                    this.display_history_modal = false
                }
            },
            getBoursier(id){
                this.$url.get('boursiers/'+id).then(response => {
                this.boursier = response.data.data
                this.boursier_cohorte = this.boursier.cohorte
                this.boursier_media = this.boursier.media
                }).catch(error=>{
                    console.log(error)
                })
            },
            push_boursier_to_store(id){
                useBoursierStore().setBoursier(id)
            },
        }
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
    .container-detail-boursier{
        padding: 25px 25px;
        border-radius: 8px;
        background-color: #F5F5F5;
    }
    .info-formation-boursier>div{
        border-bottom: 1px solid silver;
    }
    .histoire-boursier{
        padding: 40px 120px;
    }
    .histoire-boursier>p{
        font-weight: bold;
        line-height: 30px;
    }
    .btn-add-history{
        cursor:  pointer;
    }
    .scholar-img{
        width: 423px;
        height:282px;
        object-fit: cover;
    }
</style>