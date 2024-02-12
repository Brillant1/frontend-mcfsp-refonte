<template>
    <admin-layout>
        <div class="main-content-liste">
            <div class="row">
            <div class="col-12">
            <div
                class="page-title-box d-sm-flex align-items-center justify-content-between"
            >
                <h4 class="mb-sm-0 title">Articles</h4>
                <button class="m-bg-success font-bold btn-add" @click="openModal">Ajouter un article</button>

            </div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col">
                    <div class="d-flex table-topbar mb-4">
                        
                            <div class="col-6"> 
                                <div class="row">
                                    <div class="col-sm-auto ">
                                    <!-- <label class="visually-hidden" for="autoSizingInputGroup">Username</label> -->
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
                        <table class="table mb-0 table-bordered dt-responsive data-table" id="datatable">

                            <thead class="table-header-color">
                                <tr class="py-3">
                                    <th>Image</th>
                                    <th>Titre</th>
                                    <th>Date</th>
                                    <th>Catégorie</th>
                                    <!-- <th>Statut</th> -->
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="article in articles" :key="article.id" :class="[article.id==1?'bg-second-tr-color':'']">
                                    <td  class="align-middle" style="width: 5%;">
                                        <img :src=" article.media.url" class="img-scholar">
                                    </td>
                                    <td class="align-middle" style="width: 18%;" v-html="article.titre.slice(0,50)">
                                    
                                    </td>
                                    <td class="align-middle"  style="width: 14%;">{{ formatDate(article.publish_at) }}
                                    </td>
                                    <td class=" align-middle">{{ article.category.name }}</td>
                                    <!-- <td class=" align-middle">{{ article.post_status }}</td> -->
                                    <td class="" style="width: 43%;" v-html="article.description.slice(0,200)"></td>
                                    <td class="align-middle" style="width: 10%;">
                                        <router-link :to="'/articles/detail/'+article.slug" @click="push_article_to_store(article.id)"><img src="@/assets/admin/images/icones/view_icone.svg"></router-link>
                                        <router-link :to="'/articles/edit/'+article.slug" type="button" @click="push_article_to_store(article.id)"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                        <router-link to="" @click="deleteArticle(article.id)"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>   
                </div>
            </div>
        </div>
        </div>
        <add-article-modal></add-article-modal>
        <delete-modal></delete-modal>
    </admin-layout>
</template>

<script>
import addArticleModal from '@/components/admin/articles/addArticle.vue'
import deleteModal from '@/components/admin/articles/deleteModal.vue'
import { useArticleStore } from '@/store/article'
import utility from '@/components/admin/utility'
import adminLayout from '@/layouts/admin/AdminLayout.vue'

export default {
    name:'ListeArticle',
    components: {
        addArticleModal, deleteModal, adminLayout
    },
    data(){
        return {
            articles: [],
            url: utility.local_url
        }
    },
    mounted(){
        // $.noConflict();
        
        // $('.data-table').DataTable();
     
        useArticleStore().setOpenAddModal(false)
        useArticleStore().setOpenDeleteModal(false)
        this.articles = useArticleStore().setArticles()
        this.articles = useArticleStore().getArticles
        this.$watch(() => useArticleStore().articles, (newVal) => {
            this.articles = newVal;
        });
    },
    methods: {
        deleteArticle(id){
            useArticleStore().setDeleteElement(id)
            useArticleStore().setOpenDeleteModal(true)
        },

        push_article_to_store(id){
            useArticleStore().setArticle(id)
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
            useArticleStore().setOpenAddModal(true)
        }
    }
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
    .img-scholar{
        width: 69px;
        height: 46px;
        border-radius: 4px;
        object-fit: cover;
    }
    
</style>