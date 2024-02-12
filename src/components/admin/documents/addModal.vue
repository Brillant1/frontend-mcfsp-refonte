<template>
    <div class="modal fade modal-add" :class="[openModal?'show d-flex':'']" @click="closeModal">
        <div class="modal-dialog " @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Ajouter une ressource</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
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
                            <input type="file" class="form-control mb-4" @input="fileChange" required accept=".doc,.docs,.pdf" ref="fichier"> 
                        </div>
                        <div class="mt-4 col-6">
                            <label>Auteur de la ressource</label>
                            <input type="text" class="form-control" v-model="document.auteur" required>
                        </div>
                    
                        <div class="mt-2 col-12">
                            <label class="font-bold">Description</label>
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
   
    name: 'addDocumentModal',
    components: {
        ckeditor
    },
    
    
    data(){
        return {
            document : {
                titre: '',
                file: '',
                auteur: '',
                categorie: '',
                description: '',
            },
        }
    },
    
    methods: {
        store(){
            let form = new FormData()
            let toast = useToast()
            form.append('titre', this.document.titre)
            form.append('auteur', this.document.auteur)
            form.append('description', this.document.description)
            form.append('file', this.document.file)
            form.append('categorie', this.document.categorie)
            this.$url.post('documents', form).then(response => {
                for (let cle in this.document) {
                    this.document[cle] = '';
                }
                this.$refs.fichier.value = ""
                useDocumentStore().setDocuments()
                toast.success('Document ajouté avec succès')
                this.closeModal()
                this.$router.push('/documents/liste')
            }).catch(error => {
                console.log(error)
            })
        },
        closeModal(){
            useDocumentStore().setOpenAddModal(false)
        },
        fileChange(event){
            this.document.file = event.target.files[0];
        },
    },
    computed: {
        openModal(){
            return useDocumentStore().getOpenAddModal
        }
    },
    
}
</script>


<style lang="css" scoped>
   
    input, select{
        font-size: 14px;
    }
    @media (min-width: 576px){
        .modal-dialog{
            min-width:900px !important;
        }
    }
   
    .form-select{
        background-image: url('@/assets/admin/images/icones/select-arrow.svg');
        background-size: 24px;
    }
</style>