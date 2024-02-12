<template>
    <admin-layout>
<div class="main-content-liste">
    <div class="row">
        <div class="col-12">
        <div
            class="page-title-box d-sm-flex align-items-center justify-content-start"
        >
            <h4 class="mb-sm-0 title">Documents de capitalisation</h4>
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
                               
                                <th >Titre</th>
                                <th >Description</th>
                                <th >Date</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="i in data" :key="i" :class="[i==1?'bg-second-tr-color':'']">
                                
                                <td class="align-middle">
                                    Revue semestrielle des activités
                                </td>
                                <td style="width:60%">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit natoque neque hendrerit consequat, feugiat blandit arcu id sapien curabitur maecenas dictum litora venenatis, facilisi montes etiam euismod nunc laoreet mi lectus sagittis orci.
                                </td>
                                <td class=" align-middle">23/10/2023</td>
                              
                                <td class="align-middle">
                                    <router-link to="#"><img src="@/assets/admin/images/icones/view_icone.svg"></router-link>
                                    <router-link to="" type="button" data-bs-toggle="modal" data-bs-target="#add-magazine-modal"><img src="@/assets/admin/images/icones/Edit.svg" class="ms-3"></router-link>
                                    <router-link to="" data-bs-toggle="modal" data-bs-target="#myModal"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>   
            </div>
        </div>
    </div>
</div>
    <delete-modal :propsData="dataToDelete"></delete-modal>
    <add-magazine-modal :magazineData="magazineProps" @form-submitted="handleFormSubmitted"></add-magazine-modal>
</admin-layout>
</template>

<script>
        
import addMagazineModal from '@/components/admin/magazines/addMagazineModal.vue'
import deleteModal from '@/components/admin/articles/deleteModal.vue'
import AdminLayout from '@/layouts/admin/AdminLayout.vue'

export default {
    name:'ListeMagazine',
    components: {
        addMagazineModal, deleteModal,
        AdminLayout 
    },
    data(){
        return {
            data: [1,2,3,4,5],
            magazineProps: {
                titre: 'Richard',
                fichier: '',
                description: '',
                modal_title: 'Modifier la magazine ',
                edit: true
            },
            dataToDelete : {
                modal_title : 'Êtes vous sûr de vouloir supprimer cette magazine ?'
            }
        }
    },
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
   
    
</style>