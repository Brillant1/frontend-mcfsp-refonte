<template>
  <div class="row mt-4">
      <div class="col-12">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#home1" role="tab">
                            <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                            <span class="d-none d-sm-block">Entités de formation</span> 
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#profile1" role="tab">
                            <span class="d-block d-sm-none"><i class="far fa-user"></i></span>
                            <span class="d-none d-sm-block">Spécialités</span> 
                        </a>
                    </li>
                </ul>
               
                <div class="tab-content p-3 text-muted">
                    <div class="tab-pane active" id="home1" role="tabpanel">
                        <div class="">
                            <div class="card-body">
                                <div class="row">
                                <div class="col-12">
                                <div
                                    class="page-title-box d-sm-flex align-items-center justify-content-between"
                                >
                                    <h4 class="mb-sm-0 title">Entités de formation</h4>
                                    <button class="m-bg-success font-bold btn-add" @click="openModal">Ajouter une entité</button>
                                </div>
                                </div>
                            </div>       
                                <div class="table-rep-plugin">
                                    <div class="table-responsive mb-0" data-pattern="priority-columns">
                                        <table id="entiteTable" class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th  data-priority="1">Logo</th>
                                                <th  data-priority="3">Nom</th>
                                                <th  data-priority="3">Site web</th>
                                                <th  data-priority="3">Représentant</th>
                                                <th  data-priority="3">Contact R</th>
                                                <th  data-priority="3">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            
                                            <tr v-for="entite in entites" :key="entite.id" :class="[entite.id==2?'bg-second-tr-color':'']">
                                                <td  class="align-middle">
                                                    <img :src="entite.media.url" class="img-scholar">
                                                </td>
                                                <td class="align-middle">{{ entite.sigle }}</td>
                                                <td class="align-middle">{{ entite.website }}</td>
                                                <td class="align-middle">{{ entite.representant }}</td>
                                                <td class="align-middle">{{ entite.contact_representant }} </td>
                                                <td class="align-middle">
                                                    <router-link to="" @click="updateEntite(entite.id)"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                                    <router-link to="" @click="deleteEntite(entite.id)"><img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" id="profile1" role="tabpanel">
                        <div class="">
                            <div class="card-body">
                                <div class="row">
                                <div class="col-12">
                                <div
                                    class="page-title-box d-sm-flex align-items-center justify-content-between"
                                >
                                    <h4 class="mb-sm-0 title">Filières de formation</h4>
                                    <button class="m-bg-success font-bold btn-add" @click="openFiliereModal">Ajouter une filière</button>
                                </div>
                                </div>
                            </div>       
                                <div class="table-rep-plugin">
                                    <div class="table-responsive mb-0" data-pattern="priority-columns">
                                        <table id="tech-companies-1" class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th data-priority="3">Intitulé</th>
                                                    <th data-priority="3">Entité</th>
                                                    <th data-priority="3">Secteur</th>
                                                    <th data-priority="3">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="filiere in filieres" :key="filiere.id" :class="[filiere.id==2?'bg-second-tr-color':'']">
                                                    <td>{{ filiere.nom }}</td>
                                                    <td>{{ filiere.entite.sigle }}</td>
                                                    <td>{{ filiere.secteur.nom }}</td>
                                                    
                                                    <td class="align-middle">
                                                        <router-link to="" @click="updateFiliere(filiere.id)"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                                        <router-link to="" @click="deleteFiliere(filiere.id)"><img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div> <!-- end col -->
  </div>

  <div class=" d-flex justify-content-end mb-3">
    <button class="m-bg-success font-bold btn-add" @click="openOtherModal">Mettre à jour</button>
  </div>
  <div class="row">
    <div class="col-4">
        <div class="card h-100">
            <div class="card-title d-flex justify-content-between p-3">
                <p>Notre mission</p>
                <div class="bg-success rounded-circle d-flex justify-content-center align-items-center cursor-pointer" style="width:35px; height:35px;">
                  
                </div>
            </div>
            <div class="card-body">
                <p v-html="infos.mission"></p>
            </div>
        </div>
    </div>
    <div class="col-4">
        <div class="card h-100">
            <div class="card-title d-flex justify-content-between p-3">
                <p>Notre vision</p>
                <div class="bg-success rounded-circle d-flex justify-content-center align-items-center cursor-pointer" style="width:35px; height:35px;">
                   
                </div>
            </div>
            <div class="card-body">
                <p v-html="infos.vision"></p>
            </div>
        </div>
    </div>
    <div class="col-4">
        <div class="card h-100">
            <div class="card-title d-flex justify-content-between p-3">
                <p>Vidéo de fond</p>
               
            </div>
            <div class="card-body">
                <video controls width="270">
                <source :src="infos.video_presentation" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  </div>
  <add-entite></add-entite>
  <delete-modal></delete-modal>
  <update-modal></update-modal>

  <add-filiere></add-filiere>
  <update-filiere></update-filiere>
  <delete-filiere></delete-filiere>

  <add-other></add-other>
</template>

<script>
import addEntite from '@/components/admin/entites/addEntite.vue'
import deleteModal from '@/components/admin/entites/deleteModal.vue';
import updateModal from '@/components/admin/entites/updateEntite.vue'

import addFiliere from '@/components/admin/specialites/addSpecialite.vue'
import deleteFiliere from '@/components/admin/specialites/deleteSpecialite.vue'
import updateFiliere from '@/components/admin/specialites/updateSpecialite.vue'

import addOther from '@/components/admin/others/addModal.vue'

import utility from '@/components/admin/utility.json'
import { useEntiteStore } from '@/store/entite'
import { useFiliereStore } from '@/store/filiere'
import { useOtherStore } from '@/store/other'



export default {

    name: 'ListeEntite',
    components: {
        addEntite,deleteModal,updateModal, addFiliere, deleteFiliere, updateFiliere, addOther
    },
    data(){
        return {
            entites: '',
            url: utility.local_url,
            filieres: '',
            infos: ''
        }
    },
    methods: {
        openModal() {
            useEntiteStore().setOpenAddModal(true);
        },
        openFiliereModal(){
            useFiliereStore().setOpenAddModal(true);
        },
        openOtherModal(){
            useOtherStore().setOpenAddModal(true);
        },

        deleteEntite(id){
            useEntiteStore().setDeleteElement(id)
            useEntiteStore().setOpenDeleteModal(true)
        },

        deleteFiliere(id){
            useFiliereStore().setDeleteElement(id)
            useFiliereStore().setOpenDeleteModal(true)
          
        },

        updateEntite(id){
            useEntiteStore().setUpdateElement(id)
            useEntiteStore().setOpenUpdateModal(true)
        },

        updateFiliere(id){
            useFiliereStore().setUpdateElement(id)
            useFiliereStore().setOpenUpdateModal(true)
        }
    },

    mounted(){
        // $.noConflict();
        // $('document').ready(function(){
        //     $('#entiteTable').DataTable();
        // })

        useEntiteStore().setOpenAddModal(false)


        useEntiteStore().setOpenDeleteModal(false)
        useEntiteStore().setOpenUpdateModal(false)
        
        useEntiteStore().setEntites()
        this.entites = useEntiteStore().getEntites
        this.$watch(() => useEntiteStore().entites, (newVal) => {
            this.entites = newVal;
        });

        useFiliereStore().setOpenDeleteModal(false)
        useFiliereStore().setOpenUpdateModal(false)
        useFiliereStore().setOpenAddModal(false)
        useFiliereStore().setFilieres()
        this.filieres = useFiliereStore().getFilieres
        this.$watch(() => useFiliereStore().filieres, (newVal) => {
            this.filieres = newVal;
        });


        useOtherStore().setOpenAddModal(false)
        useOtherStore().setMission()
        this.infos = useOtherStore().getMission
        this.$watch(() => useOtherStore().mission, (newVal) => {
            this.infos = newVal;
        });
        
        
        
    }
}
</script>

<style lang="css" scoped>
    #entiteTable .page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #498371 !important;
    border-color: #498371 !important;
}
</style>