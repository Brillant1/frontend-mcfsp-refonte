<template>
  
    <div class="modal fade" :class="[openModal?'show d-flex':'']" @click="closeModal">
        <div class="modal-dialog" @click.stop>
                <div class="modal-content d-flex justify-content-center">
                    <div class="modal-header border-0">
                    <!-- <h5 class="modal-title" id="myModalLabel">Default Modal Heading</h5> -->
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                    <img src="@/assets/admin/images/success-add-image.png" width="457" height="314">  
                    <div class=" mt-4">
                        <h1 class="text-center">Boursier ajouté avec succès !</h1>    
                         <p class="text-center">Vous pouvez ajouter maintenant l’histoire de ce boursier</p> 
                    </div>         
                </div>
                <div class="mt-3 d-flex justify-content-center">
                    <button type="reset" class="btn-back bg-white border me-2 border-dark" data-bs-dismiss="modal" aria-label="Close" @click="closeModal">Ajouter plus tard</button>
                    <button type="button" class="btn-approve font-bold ms-2 m-bg-success" @click="add_history">Ajouter maintenant</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
        <div class="modal-backdrop fade show" style="z-index: -100;"></div>
    </div>
    
</template>

<script>
import { useBoursierStore } from '@/store/boursier';
export default {
    name: 'successAddBousier',
    methods:{
        closeModal(){
            useBoursierStore().openSuccessAddModal(false)
        },
        add_history(){
            this.closeModal()
            useBoursierStore().setOpenHistoryModal(true)
        }
    },
    computed: {
        openModal(){
            return useBoursierStore().getOpenSuccessModal
        }
    },
}
</script>

<style lang="css" scoped>
    .modal-content{
        min-width: 650px !important; 
        padding: 32px;
    }
    .m-bg-success{
        background-color: rgba(73, 131, 113, 1);
    }
</style>