<template>
    <div class="card d-flex justify-content-center align-items-center py-5 d-none">
        <div style="width:709px; height: 460px;">
            <img src="@/assets/admin/images/add-image.svg">
        </div>
        <div class="mt-5">
            <h2 class="text-add text-center">Aucune information disponible</h2>
            <button class="m-bg-success font-bold btn-add" type="button" @click="openModal">Ajouter une opportunité</button>
        </div>
    </div>

    <div>
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex table-topbar my-4">
                            <div class="col-8"> 
                                <div class="d-flex">
                                    <div class="col-sm-auto ">
                                        <div class="input-group rounded search-input">
                                            <div class="input-group-text border-0 d-flex justify-content-center align-items-center" style="background-color: #F4F6F9;">
                                                <img src="@/assets/admin/images/icones/search.svg">
                                            </div>
                                            <input type="text" class="form-control border-0" id="autoSizingInputGroup" placeholder="Rechercher" style="background-color: #F4F6F9;">
                                        </div>
                                    </div>
                                    <div class="filter-input rounded d-flex justify-content-center align-items-center ms-2">
                                        <img src="@/assets/admin/images/icones/filter.svg" width="13" height="13"> &nbsp;&nbsp;
                                        <span class="font-bold">Filtrer</span>
                                    </div>
                                    <div>
                                        <button class="btn btn-sm bg-green text-white ms-2 btn-download fw-bold" style="background-color: #498371;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
                                            </svg>
                                            Télécharger
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 d-flex justify-content-end">
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
                        <div class="table-responsive ">
                            <table class="table mb-0">
                                <thead class="table-header-color">
                                    <tr class="py-3">
                                        <th >Nom</th>
                                        <th >Email</th>
                                       
                                        <th >Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="">
                                        <td class=" align-middle">DOSSOU Roger</td>
                                        <td class="align-middle">droger@gmail.com</td>
                                        <td class="align-middle">
                                            <router-link to="" @click="deleteDocument(1)"> <img src="@/assets/admin/images/icones/delete_icone.svg" class="ms-3"></router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div> 
                </div>
            </div>
</template>

<script>
export default {
    
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
    .filter-input, .btn-download{
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