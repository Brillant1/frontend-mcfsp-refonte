<template>
    
    <div class="modal fade modal-add" :class="[openModal?'show d-flex':'']" @click="closeModal">
        <div class="modal-dialog modal-dialog-centered" @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Ajouter un article</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form action="" enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                        <div class="row">
                        
                            <div class="mt-4 col-6">
                                <label>Titre</label>
                                <input type="text" class="form-control" v-model="article.titre" required>
                            </div>
                            <div class="mt-4 col-6">
                                <label>Sous titre</label>
                                <input type="text" class="form-control" v-model="article.sous_titre" required>
                            </div>
                            <div class="mt-4 col-6">
                                <label>Fichier</label>
                                <input type="file" class="form-control mb-4" accept=".png, .avif,.jpg,.jpeg" ref="fichier" @input="changeFile" required>
                            </div>

                            <div class="mt-4 col-6">
                                <label>Date de publication</label>
                                <input type="date" class="form-control mb-4" v-model="article.publish_at" required>
                            </div>
                            <div class="mt-4 col-12">
                                <label>Catégorie</label>
                            
                                <select name="" id="" class=" form-control form-select" v-model="article.category_id" required>
                                    <option value="">Sélectionnez une catégorie</option>
                                    <option :value="categorie.id" v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>
                                </select>
                            </div>
                            <div class="mt-4 col-12">
                                <label>Description</label>
                                <ckeditor v-model="article.description"></ckeditor>
                            </div>
                            
                            
                        </div>
                        <div class="mt-4">
                            <button class=" btn-add w-100" type="submit">Ajouter</button>
                        </div>

                        
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show" style="z-index: -100;"></div>
    </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import ckeditor from '@/components/admin/ckeditor.vue'
import axios from "axios";
import { useArticleStore } from "@/store/article"
import { useToast } from "vue-toastification"
export default {
   
    name: 'articleModal',
    components: {ckeditor},
    
    data(){
        return {
            categories: [],
            article : {
                titre: '',
                sous_titre: '',
                category_id: '',
                description: '',
                publish_at:'',
                file:'',
                post_status: 'uncommentable'
            },
        }
    },
    computed: {
        openModal(){
            return useArticleStore().getOpenAddModal
        }
    },
    mounted(){
        this.$url.get('categories').then(response=>{
            this.categories = response.data.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        getImages(){
            const images = document.getElementsByClassName('dz-image')
            console.log(images)
        },
        store(){
            let form = new FormData()
            let toast = useToast()

            for(let cle in this.article){
                form.append(cle, this.article[cle])
            }

            this.$url.post('postes', form).then(response=>{
                console.log(response)
                if(response.data.status){
                    toast.success('Poste ajouté avec succès')
                    setTimeout(() => {
                        for(let cle in this.article){
                            this.article[cle] = ''
                        }
                        this.$refs.fichier.value = ''
                        useArticleStore().setArticles()
                        this.closeModal()
                    }, 1000);
                    this.$router.push('/articles/liste')
                }
            }).catch(error => {
                console.log(error)
            })
        },
        changeFile(event){
            this.article.file = event.target.files[0]
        },
        closeModal(){
            useArticleStore().setOpenAddModal(false)
        },
        onDrop(acceptFiles, rejectReasons) {
            this.article.images.push(acceptFiles); // saveFiles as callback
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
    input, select{
        font-size: 14px;
    }
    .form-select{
        background-image: url('@/assets/admin/images/icones/select-arrow.svg');
        background-size: 24px;
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
       
        height: 48px;
    }
    #needsclick{
        cursor: pointer;
    }
</style>