<template>
    <div class="modal fade" :class="[openDeleteModal?'show d-flex':'']" @click="closeDeleteModal">
        <div class="modal-dialog"  @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeDeleteModal"></button>
                </div>
                <div class="modal-body">
                    <h2 class="font-bold text-center text-delete">Voulez-vous vraiment supprimer cette ressource ?</h2>
                </div>
                <div class="mt-3 d-flex justify-content-between">
                    <button type="button" class="btn-back bg-white border border-dark font-bold" data-bs-dismiss="modal" @click="closeDeleteModal">Retour</button>
                    <button type="button" class="btn-approve font-bold" @click="supprimer">Oui, supprimer</button>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show" style="z-index: -100;"></div>
    </div>
</template>

<script>
import { useDocumentStore } from '@/store/document';

export default {
    name: 'deleteModal',
  
    data() {
        return {
            delete_element_id: ''
        }
    },
    computed: {
        openDeleteModal(){
            return useDocumentStore().getOpenDeleteModal
        }
    },
    methods: {    
        closeDeleteModal(){
            useDocumentStore().setOpenDeleteModal(false)
        },
        supprimer(){
            useDocumentStore().deleteDocument()
        }
    },
}
</script>

<style lang="scss" scoped>

</style>