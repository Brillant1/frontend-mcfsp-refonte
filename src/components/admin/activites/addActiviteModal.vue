<template>
    
    <div class="modal fade bs-example-modal-center modal-add" tabindex="-1" role="dialog" aria-hidden="true" id="add-activite-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">{{ activite.modal_title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" enctype="multipart/form-data" class="add-form">
                        <div class="mt-4">
                            <label>Titre</label>
                            <input type="text" class="form-control" v-model="activite.title">
                        </div>
                        <div class="mt-4">
                            <label>Catégorie</label>
                           
                            <select name="" id="" class="form-control form-select" v-model="activite.categorie">
                                <option value="" selected>Sélectionnez une catégorie</option>
                                <option value="">BAMFA</option>
                                <option value="">Posdcast</option>
                                <option value="">Success stories</option>
                                <option value="">Giving back</option>
                            </select>
                        </div>
                        <div class="mt-4">
                            <label>Description</label>
                            <ckeditor :editorConfig="myEditorConfig" :defaultContent="initialContent" @update:contenu="updateEditorData"></ckeditor>
                        </div>
                       
                        <div class="mt-4" id="needsclick">
                            
                            <div action="#" class="dropzone" id="my-great-dropzone">
                               
                                <div class="dz-message needsclick">
                                    <div class="mb-3">
                                        <i class="display-4 text-muted bx bxs-cloud-upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
                                            </svg>
                                        </i>
                                    </div>
                                    <h4>Téléverser ou glisser et déposer vos fichiers ici.</h4>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class=" btn-add w-100" type="submit">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import ckeditor from '@/components/admin/ckeditor.vue'
import axios from "axios";
Dropzone.options.myGreatDropzone = { 
    paramName: "file", // The name that will be used to transfer the file
    acceptedFiles: '.png,.jpeg,.jpg,.avif,.bmp,.gif',
    maxFilesize: 2, // MB
    autoProcessQueue : false,
    clickable : '#needsclick',
    init: function (){
        var submitButton = document.getElementsByClassName('btn-add');
        myDropZone = this
        submitButton.addEventLister('click', function(){
            myDropZone.ProcessQueue
        });
        this.on("complete", function (response){
            console.log(response)
            if(this.getQueuedFiles().length==0 && this.getUploaddingFiles().length==0){
                var _this = this;
                _this.removeAllFiles();
            }
        })
    }
};
export default {
    props: ['activiteData'],
    name: 'activiteModal',
    components: {ckeditor},
    
    data(){
        return {
            activite : {
                title: '',
                categorie: '',
                contenu: '',
                image: '',
                modal_title: '',
                images: []
            },
            myEditorConfig: { /* Votre configuration d'éditeur ici */ },
            initialContent: `
                
            ` 
        }
    },
    created(){
        console.log(this.activiteData)
        if(this.activiteData){
            this.activite = this.activiteData
        }
    },
    methods: {
        onDrop(acceptFiles, rejectReasons) {
            this.activite.images.push(acceptFiles); // saveFiles as callback
        },
        updateEditorData(contenu) {
            this.initialContent = contenu;
            this.$emit('update:contenu', contenu);
        },

        saveFiles(files){
            const formData = new FormData(); 
            for (var x = 0; x < files.length; x++) {
                formData.append("images[]", files[x]);
            }

            axios
            .post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.info(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }
    
}
</script>


<style lang="css" scoped>
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
    #needsclick{
        cursor: pointer;
    }
    .form-select{
    background-image: url('../../../assets/admin/images/icones/select-arrow.svg');
    background-size: 24px;
    }
</style>