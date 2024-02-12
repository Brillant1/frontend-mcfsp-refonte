<template>
    <admin-layout>
<div class="main-content-liste">
    <div class="row">
        <div class="col-12">
        <div
            class="page-title-box d-sm-flex align-items-center justify-content-between"
        >
            <h4 class="mb-sm-0 title">Opportunités</h4>
            <button class="m-bg-success font-bold btn-add" @click="openModal">Ajouter une opportunité</button>
        </div>
        </div>
    </div>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="d-flex table-topbar mb-4">
                    
                        <div class="col-6"> 
                            <div class="row">
                                <div class="col-sm-auto">
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
                    <table class="table mb-0" id="opportuniteTable">

                        <thead class="table-header-color">
                            <tr class="py-3">
                                <th >Image</th>
                                <th >Titre</th>
                                <th >Date debut</th>
                                <th >Date fin</th>
                                <th class="w-50">Détail</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="opportunite in opportunites" :key="opportunite.id" :class="[opportunite.id==2?'bg-second-tr-color':'']">
                                <td  class="align-middle">
                                    <img :src=" opportunite.media.url" class="img-scholar">
                                </td>
                                <td class="align-middle">
                                    {{ opportunite.titre }}
                                </td>
                                <td class=" align-middle">{{ formatDate(opportunite.date_debut) }}</td>
                                <td class=" align-middle">{{ formatDate(opportunite.date_fin) }}</td>
                                <td class=" align-middle" >
                                    <div v-html="opportunite.description.slice(0,200)"></div>
                                </td>
                                <td class="align-middle">
                                    <router-link :to="'/opportunites/detail/'+opportunite.slug " @click="push_opportunite_to_store(opportunite.id)" ><img src="@/assets/admin/images/icones/view_icone.svg"></router-link>
                                    <router-link :to="'/opportunites/edit/'+opportunite.slug"  @click="push_opportunite_to_store(opportunite.id)" type="button"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                    <router-link to="" @click="deleteOpportunite(opportunite.id)"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
            </div>
        </div>
    </div>
</div>

<add-opportunite-modal></add-opportunite-modal>
<delete-modal></delete-modal>
</admin-layout>
</template>

<script>
import addOpportuniteModal from '@/components/admin/opportunites/modalAjout.vue';
import deleteModal from '@/components/admin/opportunites/deleteModal.vue';
import { useOpportuniteStore } from '@/store/opportunite';
import utility from '@/components/admin/utility'
import AdminLayout from '@/layouts/admin/AdminLayout.vue';


export default {
    name:'ListeOpportunite',
    components: {
        addOpportuniteModal, deleteModal, AdminLayout
    },
    data(){
        return {
            opportunites: [],
            can_close_modal: '',
            url: utility.local_url
        }
    },
    mounted(){

        // $.noConflict();
        
            // $('#opportuniteTable').DataTable({
            //     "language": {
            //     "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
            //     },
            //     order: [[ 0, "desc" ]],
            // });
      
        this.opportunites = useOpportuniteStore().setOpportunites()
        this.opportunites = useOpportuniteStore().getOpportunites

        this.$watch(() => useOpportuniteStore().opportunites, (newVal) => {
            this.opportunites = newVal;
        });
    },

    created() {
        useOpportuniteStore().setCloseDeleteModal(false)

        useOpportuniteStore().closeModal()
        this.can_close_modal = useOpportuniteStore().getModalOpen;
        this.$watch(() => useOpportuniteStore().can_close_modal, (newVal) => {
        this.can_close_modal = newVal;
        });
    },

    methods:{
        push_opportunite_to_store(id){
            useOpportuniteStore().fetchOpportunite(id)    
        },
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
                d.getFullYear() +
                " à " +
                ("0" + d.getHours()).slice(-2) +
                ":" +
                ("0" + d.getMinutes()).slice(-2)
            );
        },
        openModal() {
            const opportuniteStore = useOpportuniteStore()
            opportuniteStore.openModal();
        }
    },  





       
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
    
</style>