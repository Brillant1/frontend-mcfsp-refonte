<template>
    <admin-layout>
        <div class="main-content-liste">
            <div class="row">
            <div class="col-12">
            <div
                class="page-title-box d-sm-flex align-items-center justify-content-between"
            >
                <h4 class="mb-sm-0 title">Boursiers</h4>
                <button class="m-bg-success font-bold btn-add" @click="openModal">Ajouter un boursier</button>

            </div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex table-topbar mb-4">
                        
                            <div class="col-6"> 
                                <div class="row">
                                    <div class="col-sm-auto ">
                                    <div class="input-group rounded search-input">
                                        <div class="input-group-text border-0 d-flex justify-content-center align-items-center" style="background-color: #F4F6F9;">
                                            <img src="@/assets/admin/images/icones/search.svg">
                                        </div>
                                        <input type="text" class="form-control border-0" id="autoSizingInputGroup" placeholder="Rechercher" style="background-color: #F4F6F9;">
                                    </div>
                                </div>
                                <div class="filter-input rounded d-flex justify-content-center align-items-center">
                                    <img src="@/assets/admin/images/icones/filter.svg" width="13" height="13"> &nbsp;&nbsp;
                                    <span class="font-bold">Filtrer</span>
                                </div>
                                </div>

                            </div>
                            <div class="col-6 d-flex justify-content-end">
                                <div class="d-flex justify-content-end align-items-center">
                                    <p class=" m-0 font-bold">
                                        1 - 14 sur 45
                                    </p>
                                    <button class="border-0 bg-white ms-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </button>
                                    <button class="border-0 bg-white ms-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    <div class="table-responsive">
                        <table class="table mb-0 data-table">
                            <thead class="table-header-color">
                                <tr class="py-3">
                                    <th >Photo</th>
                                    <th >Nom</th>
                                    <th >Pénom</th>
                                    <th >Cohorte</th>
                                    <th>Ecole</th>
                                    <th >Filière</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="boursier in boursiers" :key="boursier.id" :class="[boursier.id==0?'bg-second-tr-color':'']">
                                    <td  class="align-middle">
                                        <img :src=" boursier.media.url" class="img-scholar">
                                    </td>
                                    <td class="align-middle">
                                        {{ boursier.nom }}
                                    </td>
                                    <td class=" align-middle">{{ boursier.prenom }}</td>
                                    <td class=" align-middle">{{ boursier.cohorte.nom }}</td>
                                    <td class=" align-middle">{{ boursier.ecole }}</td>
                                    <td class=" align-middle">{{ boursier.filiere.nom }}</td>
                                    <td class="align-middle">
                                        <router-link :to="'/boursiers/'+boursier.slug" @click="push_boursier_to_store(boursier.id)"><img src="@/assets/admin/images/icones/view_icone.svg"></router-link>
                                        <router-link :to="'/boursiers/edit/'+boursier.slug" type="button" @click="push_boursier_to_store(boursier.id)"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                        <router-link to="" @click="deleteBoursier(boursier.id)"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>   
                </div>
            </div>
        </div>
        </div>
    </admin-layout>
    <add-boursier></add-boursier>
    <delete-modal></delete-modal>
    <add-boursier-history></add-boursier-history>
    <success-add-boursier></success-add-boursier>
</template>

<script>
import addBoursier from '@/components/admin/boursiers/addBoursier.vue'
import deleteModal from '@/components/admin/boursiers/deleteModal.vue'
import addBoursierHistory from '@/components/admin/boursiers/addBoursierHistory.vue';
import successAddBoursier from '@/components/admin/boursiers/successAddBoursier.vue';
import adminLayout from '@/layouts/admin/AdminLayout.vue';
import {useBoursierStore} from '@/store/boursier';
import utility from '@/components/admin/utility'
export default {
    name:'ListeBoursier',
    components: {
        addBoursier, deleteModal,addBoursierHistory,successAddBoursier,adminLayout
    },
    data(){
        return {
            show_add_modal: '',
           
            boursiers: [],
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
            url: utility.local_url
        }
    },
    mounted(){

        // $.noConflict();
       
        // $('.data-table').DataTable();

        this.boursiers = useBoursierStore().setBoursiers()
        this.boursiers = useBoursierStore().getBoursiers
        useBoursierStore().openSuccessAddModal(false)
        this.$watch(() => useBoursierStore().boursiers, (newVal) => {
            this.boursiers = newVal;
        });
    },
    created(){
        useBoursierStore().setCloseDeleteModal(false)
        useBoursierStore().setOpenAddModal(false)
        useBoursierStore().setOpenHistoryModal(false)

        this.show_add_modal = useBoursierStore().getOpenAddModal;
        this.$watch(() => useBoursierStore().show_add_modal, (newVal) => {
        this.show_add_modal = newVal;
        });
    },
    
    methods: {
        deleteBoursier(id){
            useBoursierStore().setDeleteElement(id)
            useBoursierStore().setCloseDeleteModal(true)
        },
        push_boursier_to_store(id){
            useBoursierStore().setBoursier(id)
        },
        openModal() {
            useBoursierStore().setOpenAddModal(true);
        },

        handleModalEvent(payload) {
            const {eventType, id} = payload
            console.log(payload)
            if(eventType ==="scholarsDeleted"){
                const index = this.boursiers.findIndex(element => element.id === id);
                console.log(index)
                if (index !== -1) {
                    this.boursiers.splice(index, 1);
                }
            }else if(eventType ==="closeDeleteModal"){
                this.display_delete_modal= false
            }
        },

        closeDeleteModal(closeDeleteModal){
            if(closeDeleteModal){
                this.display_delete_modal= false
            }
        },

        handleScholarsDeleted(scholarsDeleted){
            if(scholarsDeleted){
            const index = this.boursiers.findIndex(element => element.id === scholarsDeleted);
                console.log(index)
                if (index !== -1) {
                    this.boursiers.splice(index, 1);
                }
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .table-header-color{
        background-color: #F6FFFC;
    }
    .bg-second-tr-color{
        background-color: #FDF7E8;
    }
    .search-input{
        width: 280px;
        height:36px;
        background-color: #F4F6F9;
        border: 1px solid #DADEE3
    }
    .filter-input{
        border: 1px solid #DADEE3;
        height:36px;
        width:130px;
    }
     .search-input>input{
        padding: 8px 16px;
    }
    .search-input>div{
        padding: 8px 10px;
    }
    .table-topbar{
        padding:16px;
        border: 1px solid #DADEE3;
        border-radius: 4px;
        background-color: white;
    }
    table tr td {
        width: 14.28%;
    }
    .img-scholar{
        width: 69px;
        height: 46px;
        border-radius: 4px;
        object-fit: cover;
    }
    
</style>