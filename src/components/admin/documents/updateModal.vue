<template>
    <div class="modal fade modal-add" :class="[openModal?'show d-flex':'']" @click="closeModal">
        <div class="modal-dialog " @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Modifier le document</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form  enctype="multipart/form-data" class="add-form" @submit.prevent="update">
                        <div class="row">

                        <div class="mt-4 col-6">
                            <label>Titre</label>
                            <input type="text" class="form-control" v-model="document.titre" required>
                        </div>
                        <div class="mt-4 col-6">
                            <label>Catégorie</label>
                            <select class="form-control form-select" v-model="document.categorie" required>
                                <option value="" selected>Sélectionnez le categorie</option>
                                <option value="Document">Document</option>
                                <option value="Magazine">Magazine</option>
                            </select>
                        </div>
                        <div class="mt-4 col-6">
                            <label class="file">Fichier</label>
                            <input type="file" class="form-control mb-4" @input="fileChange" accept=".doc,.docs,.pdf" ref="fichier"> 
                        </div>
                        <div class="mt-4 col-6">
                            <label>Auteur du document</label>
                            <input type="text" class="form-control" v-model="document.auteur" required>
                        </div>
                        <div class="mt-5 col-12">
                            <label class="font-bold">Histoire</label>
                            <ckeditor v-model="document.description"></ckeditor>
                        </div>
                    </div>
                        <div>
                            <div class="">
                                <button class="btn-add w-100 mt-4" type="submit">Ajouter</button>
                            </div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show" style="z-index: -100;"></div>

    </div>
</template>

<script>
import {useDocumentStore} from '@/store/document'
import ckeditor from '@/components/admin/ckeditor.vue'
import { useToast } from 'vue-toastification'
export default {
   
    name: 'updateDocumentModal',
    components: {
        ckeditor
    },
    
    
    data(){
        return {
            
            document : {
                titre: '',
                file: '',
                auteur: '',
                description: '',
                categorie: ''
            }
        }
    },

    computed: {
        openModal(){
            return useDocumentStore().getOpenUpdateModal
        }
    },
    mounted(){
        let id = useDocumentStore().getUpdateElement
        this.$url.get('documents/'+id).then(response => {
            console.log(response)
            this.document.titre = response.data.data.titre
            this.document.categorie = response.data.data.categorie
            this.document.auteur = response.data.data.auteur
            this.document.description = response.data.data.description
        }).catch(error => {
            console.log(error)
        })
    },

    
    methods: {
        update(){
            const toast = useToast()
            let id = useDocumentStore().getUpdateElement
            let form = new FormData()

            form.append('titre', this.document.titre)
            form.append('categorie', this.document.categorie)
            form.append('auteur', this.document.auteur)
            form.append('description', this.document.description)
            form.append('file', this.document.file)
            form.append('document_id', id)
           
            this.$url.post('documents/update', form).then(response => {
                console.log(response)
                toast.success('Document modifié avec succès')
                this.open_update_modal = false
                this.closeModal()
                this.$router.push({ name: 'documents/liste' });

            }).catch(error => {
                console.log(error)
            })
        },
        closeModal(){
            useDocumentStore().setOpenUpdateModal(false)
        },
        fileChange(event){
            this.document.file = event.target.files[0];
        },
    },
    
}
</script>


<style lang="css" scoped>
   
    input{
        font-size: 14px;
    }
    @media (min-width: 576px){
        .modal-dialog{
            min-width:900px !important;
        }
    }
   
    
    
</style>