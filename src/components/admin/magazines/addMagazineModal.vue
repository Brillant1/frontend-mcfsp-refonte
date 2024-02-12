<template>
    <div class="modal fade modal-add" tabindex="-1" role="dialog" aria-hidden="true" id="add-magazine-modal" ref="addMagazineModal">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">{{ magazine.modal_title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                        <div class="mt-4">
                            <label>Titre</label>
                            <input type="text" class="form-control" v-model="magazine.titre">
                        </div>
                        <div class="mt-4">
                            <label class="font-bold">Description</label>
                            <ckeditor :editorConfig="myEditorConfig" :defaultContent="magazine.initialContent" @update:contenu="updateEditorData"></ckeditor>
                        </div>
                        <div class="my-4">
                            <label class="file">Fichier</label>
                            <input type="file" class="form-control" @input="fileChange">
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
    </div>
</template>

<script>
import ckeditor from '@/components/admin/ckeditor.vue'
export default {
    props: ['magazineData'],
    name: 'addMagazineModal',
    components : {ckeditor},
    
    
    data(){
        return {
            magazine : {
                titre: 'Richard',
                fichier: 'DOVOEDO',
                description: '',
                modal_title: 'Modifier le magazine',
                edit: true,
                initialContent: ''
            },
            myEditorConfig: { /* Votre configuration d'éditeur ici */ },
            
        
        }
    },
    updateEditorData(contenu) {
        this.initialContent = contenu;
        this.$emit('update:contenu', contenu);
    },
  
    onChange(contenu) {
      this.editorData = contenu;
      this.$emit('update:contennu', contenu);
    },
    created(){
    
        if(this.magazineData){
            this.magazine = this.magazineData
        }
    },
    watch: {
      defaultContent(newValue) {
        this.editorData = newValue;
      }
    },
    methods: {
        store(){
            this.$emit('form-submitted', true);
            let element = this.$refs.addOpportuniteModal
            $(element).modal('hide')
        },
    }
    
}
</script>


<style lang="css" scoped>
   
    .select-input::before{
        content: "";
        background-repeat: no-repeat;
        background-image: url("@/assets/admin/images/icones/attachment.svg");
        position: absolute;
        /* top: 12px; */
        right: 0px;
        /* height: 20px; */
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