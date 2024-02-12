<template>
    <admin-layout>
    <div class="p-5">
        <div class="col">
            <router-link to="/articles/liste" class="back-link">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#498371" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </i>
                &nbsp;
                <span class="m-text-success font-bold f-16">Retour</span>
            </router-link>
        </div>
        <h5 class="modal-title mt-5">Modifier</h5>
        <form action="" enctype="multipart/form-data" class="add-form" @submit.prevent="update">
            <div class="mt-4">
                <label>Titre</label>
                <input type="text" class="form-control" v-model="article.titre">
            </div>
            <div class="mt-4">
                <label>Sous titre</label>
                <input type="text" class="form-control" v-model="article.sous_titre">
            </div>
            <div class="mt-4">
                <label>Catégorie</label>
                
                <select name="" id="" class=" form-control form-select" v-model="article.category_id">
                    <option value="">Sélectionnez une catégorie</option>
                    <option :value="categorie.id" v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>
                </select>
            </div>
            <div class="mt-4">
                <label>Description</label>
                <ckeditor v-model="article.description"></ckeditor>
            </div>
            <div class="mt-4">
                <label>Fichier</label>
                <input type="file" class="form-control mb-4" ref="fichier" @input="fileChange">
            </div>
            <div class="">
                <img :src="article_media.url" width="150" height="150" style="object-fit: cover;">
            </div>

            <div class="mt-4">
                <label>Date de publication</label>
                <input type="date" class="form-control mb-4" v-model="article.publish_at">
            </div>

            <div class="mt-4">
                <button class=" btn-add w-100" type="submit">Ajouter</button>
            </div>
        </form>
    </div>
</admin-layout>
</template>

<script>
import ckeditor from '@/components/admin/ckeditor.vue'
import { useArticleStore } from '@/store/article'
import {useToast} from 'vue-toastification'
import adminLayout from '@/layouts/admin/AdminLayout.vue'

export default {
    name: 'EditAticle',
    components: {
        ckeditor,adminLayout
        
    },
    data() {
        return {
            current_article: '',
            article_media: '',
            categories: '',
            article : {
                titre: '',
                sous_titre: '',
                category_id: '',
                description: '',
                publish_at:'',
                file:'',
            },
            form: new FormData()
        }
    },
    mounted(){
        
        this.current_article = useArticleStore().getArticle
        this.article_media = this.current_article.media
        for(let cle in this.article){
            this.article[cle] = this.current_article[cle]
        }


        this.$url.get('categories').then(response=>{
            this.categories = response.data.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
       
        update(){
            const toast = useToast();
            for(let cle in this.article){
                this.form.append(cle, this.article[cle])
            }
          
            this.form.append('poste_id', this.current_article.id)

            this.$url.post('postes/update', this.form).then(response=>{
                console.log(response)
                toast.success('Article modifié avec succès')
                this.$router.push({ name: 'articles/liste' });
            }).catch(error=> {
                console.log(error)
                toast.error('Une erreur s\'est produite lors de la mise à jour')
            })
        },
        fileChange(event){
            this.article.file = event.target.files[0]
        },
        formatDate(k) {
            const d = new Date(k);
            return d.toISOString().slice(0,10);
        }
        
    }
}
</script>
<style lang="css" scoped>
    input, select {
        font-size: 14px;
    }
</style>