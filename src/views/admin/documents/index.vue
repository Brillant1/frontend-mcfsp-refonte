<template>
    <admin-layout>
    <div class="row">
        <div class="col-12">
        <div
            class="page-title-box d-sm-flex align-items-center justify-content-start"
        >
            <h4 class="mb-sm-0 title">Ressources</h4>
        </div>
        </div>
    </div>
    <div class="row">
        <div class="card d-flex justify-content-center align-items-center py-5">
            <div style="width:709px; height: 460px;">
                <img src="@/assets/admin/images/add-image.svg">
            </div>
            <div class="mt-5">
                <h2 class="text-add text-center">Aucun document ajouté</h2>
                <button class="m-bg-success font-bold btn-add" type="button" @click="openModal">Ajouter un document</button>
            </div>
        </div>
    </div>
</admin-layout>

    <add-document-modal></add-document-modal>
   
</template>

<script>
import addDocumentModal from '@/components/admin/documents/addModal.vue'
import {useDocumentStore} from '@/store/document'
import AdminLayout from '@/layouts/admin/AdminLayout.vue'
export default {
    name: 'AjoutDocument',
    components: {
        addDocumentModal,
        AdminLayout
    },
    data(){
        return {
            
        }
    },
    mounted(){
        useDocumentStore().setOpenAddModal(false)
    },
    beforeCreate(){
      useDocumentStore().setDocuments()
      let documents = useDocumentStore().getDocuments
      documents.length > 0 ? this.$router.push({ name: 'documents/liste' }):''
  },
    methods: {
        openModal() {
            useDocumentStore().setOpenAddModal(true)
        },
    }
}
</script>

<style lang="css" scoped>
    
    .text-add{
        font-size: 16px;
        font-weight: 600;
    }
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
</style>