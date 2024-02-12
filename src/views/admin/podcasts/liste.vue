<template>
    <admin-layout>
    <div class="main-content-liste">
        <div class="row">
            <div class="col-12">
            <div
                class="page-title-box d-sm-flex align-items-center justify-content-between"
            >
                <h4 class="mb-sm-0 title">Podcasts</h4>
                <button class="m-bg-success font-bold btn-add" @click="openModal">Ajouter un podcast</button>
            </div>
            </div>
        </div>
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex table-topbar mb-4">
                            <div class="col-6"> 
                                <div class="row">
                                    <div class="col-sm-auto ">
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
                        <table class="table mb-0">
                            <thead class="table-header-color">
                                <tr class="py-3">
                                    <th >Image</th>
                                    <th style="width: 5%;" >Lien</th>
                                    <th >Theme</th>
                                    <th  >Description</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="podcast in podcasts" :key="podcast.id" :class="[podcast.id==10?'bg-second-tr-color':'']">
                                    <td  class="align-middle">
                                        <img :src="podcast.media.url" class="img-scholar">
                                    </td>
                                    <!-- <td class=" align-middle" style="width: 12%;">{{ formatDate(podcast.created_at) }}</td> -->
                                    <td class="align-middle" ><a :href="podcast.lien" target="blank">Visualiser</a></td>
                                    <td class="align-middle" >{{ podcast.theme }}</td>

                                    <td class="align-middle" v-html="podcast.description.slice(0,100)"></td>
                                
                                    <td class="align-middle">
                                        <!-- <router-link :to="'http://51.68.119.154:8098/storage/'+document.media.url"></router-link> -->
                                        <!-- <a :href="document.media.url" target="blank"><img src="@/assets/admin/images/icones/view_icone.svg"></a> -->
                                        <router-link to="" @click="updatePodcast(podcast.id)"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                        <router-link to="" @click="deletePodcast(podcast.id)"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
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
    <delete-podcast></delete-podcast>
    <add-podcast></add-podcast>
    <edit-podcast></edit-podcast>
</template>

<script>
        
import addPodcast from '@/components/admin/podcasts/addPodcast.vue'
import editPodcast from '@/components/admin/podcasts/editPodcast.vue'

import utility from '@/components/admin/utility.json'
import deletePodcast from '@/components/admin/podcasts/deletePodcast.vue'
// import updateModal from '@/components/admin/documents/updateModal.vue'
import {usePodcastStore} from '@/store/podcast'
import AdminLayout from '@/layouts/admin/AdminLayout.vue'
export default {
    name:'ListePodcast',
    components: {
        deletePodcast ,addPodcast, editPodcast,
        AdminLayout
    },
    data(){
        return {
            podcasts: [],
           
        }
    },

    mounted(){
        usePodcastStore().setOpenAddModal(false)
        usePodcastStore().setOpenUpdateModal(false)
        usePodcastStore().setOpenDeleteModal(false)
        this.podcasts = usePodcastStore().setPodcasts()
        this.podcasts = usePodcastStore().getPodcasts
        console.log(this.podcasts)

        this.$watch(() => usePodcastStore().podcasts, (newVal) => {
            this.podcasts = newVal;
        });
    },
    methods:{
        deletePodcast(id){
            usePodcastStore().setDeleteElement(id)
            usePodcastStore().setOpenDeleteModal(true)
        },
        updatePodcast(id){
            usePodcastStore().setUpdateElement(id)
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
            usePodcastStore().setOpenAddModal(true)
        }
    },  

}
</script>

<style lang="css" scoped>
    .table-header-color{
        background-color: #F6FFFC;
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
    
    
</style>