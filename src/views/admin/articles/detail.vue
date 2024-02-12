<template>
    <admin-layout>
    <div class="container-fluid">
        <div class="p-0">
            <div class="row justify-content-between p-0">
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
                <div class="col d-flex justify-content-end">
                    <router-link to="" class="delete-btn me-4" data-bs-toggle="modal" data-bs-target="#myModal" @click="deleteArticle(article.id)">Supprimer</router-link>
                    <router-link :to="'/articles/edit/'+article.slug" class="update-btn" type="button" @click="push_article_to_store(article.id)">Modifier</router-link>
                </div>
            </div>

         
            
            <div class="card mt-5 p-5">
                <div>
                    <span class="actualite-etiquette font-bold">{{ article_categorie.name }}</span>
                </div>
                
                    
                    <h1 class="fs-30 py-3 font-bold">
                        {{ article.titre }}
                    </h1>
                    <hr>
                    <div class="d-flex align-items-center">
                        <p class=" pt-2 font-bold">Publié le: {{ formatDate(article.publish_at) }}</p>
                        <!-- <p class="pt-2 font-bold ms-5">Fermée le: {{ formatDate(article.date_fin) }}</p> -->
                    </div>
                    <hr>

                    <div class="d-flex justify-content-center align-items-center flex-column">
                        <div class="container-detail-image mb-5 pb-5">
                            <img :src="article_media.url" style="object-fit:cover">
                        </div>
                    </div>
                    <div v-html="article.description" class="px-5">

                    </div>
                </div>
            </div>
        </div>
        <delete-modal></delete-modal>
    </admin-layout>
</template>

<script>
    import deleteModal from '@/components/admin/articles/deleteModal.vue'
    import { useArticleStore } from '@/store/article';
    import adminLayout from '@/layouts/admin/AdminLayout.vue'

    export default {
        name: 'DetailArticle',
        components: {
            deleteModal,adminLayout
        },
        data(){
            return {
                article: '',
                article_media: '',
                article_categorie: '',
                display_delete_modal: '',
            }
        },
        methods: {
            deleteArticle(id){
                useArticleStore().setDeleteElement(id)
                useArticleStore().setOpenDeleteModal(true)
            }, 
            formatDate(k) {
                const d = new Date(k);
                return (
                    ("0" + d.getDate()).slice(-2) +
                    "-" +
                    ("0" + (d.getMonth() + 1)).slice(-2) +
                    "-" +
                    d.getFullYear() 
                );
            },
            push_article_to_store(id){
                useArticleStore().setArticle(id)
            },
        },
        created(){

            this.article = useArticleStore().getArticle
            this.article_media = this.article.media
            this.article_categorie = this.article.category
             
        },
    }
</script>

<style lang="css" scoped>
    .delete-btn{
        border-radius: 8px;
        padding:14px 18px;
        width:200px;
        height: 48px;
        border: none;
        color:white;
        font-weight: bold;
        background-color: #E31C27;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .update-btn{
        color:white;
        border-radius: 8px;
        padding:14px 18px;
        width:200px;
        height: 48px;
        border: none;
        font-weight: bold;
        background-color: #498371;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    .actualite-etiquette{
        padding: 8px 16px;
        border-radius: 40px;
       
        height: 32px;
        border: 1px solid #A5ABB3;

    }
    .opportunite-detail-content{
        padding: 40px 110px;
    }
    .opportunite-detail-content>p{
        line-height: 30px;
    }
</style>