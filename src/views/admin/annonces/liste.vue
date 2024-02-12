<template>
    <admin-layout>
        <div class="main-content-liste">
            <div class="row">
            <div class="col-12">
            <div
                class="page-title-box d-sm-flex align-items-center justify-content-between"
            >
                <h4 class="mb-sm-0 title">Annonces</h4>
                <!-- <button class="m-bg-success font-bold btn-add" @click="openModal">Ajouter une annonce</button> -->
            </div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table mb-0 data-table">
                            <thead class="table-header-color">
                                <tr class="py-3">
                                    <th >Fichier</th>
                                    <th >Titre</th>
                                    <th >Description</th>
                                    <th >Lien</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="annonce in annonces" :key="annonce.id" :class="[annonce.id==1?'bg-second-tr-color':'']">
                                    <td  class="align-middle">
                                        <img :src=" annonce.media.url" class="img-scholar">
                                    </td>
                                    <td class="align-middle">
                                       {{annonce.titre}}
                                    </td>
                                    <td class=" align-middle" v-html="annonce.description.slice(0,200)">
                                       
                                    </td>
                                    <td class=" align-middle">{{ annonce.article }}</td>
                                   
                                    <td class="align-middle">
                                        <!-- <router-link to=""><img src="@/assets/admin/images/icones/view_icone.svg"></router-link> -->
                                        <router-link to="" @click="updateAnnonce(annonce.id)"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                        <router-link to="" @click="deleteAnnonce(annonce.id)"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
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
    <add-annonce></add-annonce>
    <delete-annonce></delete-annonce>
    <update-annonce></update-annonce>
</template>

<script>
import addAnnonce from '@/components/admin/annonces/addAnnonce.vue';
import deleteAnnonce from '@/components/admin/annonces/deleteAnnonce.vue';
import updateAnnonce from '@/components/admin/annonces/updateAnnonce.vue';
import adminLayout from '@/layouts/admin/AdminLayout.vue';
import {useAnnonceStore} from '@/store/annonce'
export default {
    name: 'ListeAnnonce',
    components: {addAnnonce, deleteAnnonce, updateAnnonce,adminLayout},
    data(){
        return {
            annonces: ''
        }
    },
    methods: {
        openModal(){
            useAnnonceStore().setOpenAddModal(true)
        },

        updateAnnonce(id){
            useAnnonceStore().setUpdateElement(id)
            useAnnonceStore().setOpenUpdateModal(true)
        },

        deleteAnnonce(id){
              useAnnonceStore().setDeleteElement(id)
              useAnnonceStore().setOpenDeleteModal(true)
          },
    },
    mounted(){
        useAnnonceStore().setOpenAddModal(false)
        useAnnonceStore().setOpenUpdateModal(false)
        useAnnonceStore().setOpenDeleteModal(false)

        this.annonces = useAnnonceStore().setAnnonces()
        this.annonces = useAnnonceStore().getAnnonces
        this.$watch(() => useAnnonceStore().annonces, (newVal) => {
            this.annonces = newVal;
        });
    }
}
</script>
<style>

</style>