<template>
    <div class="modal modal-add fade" :class="[openModal?'show d-flex':'']" @click="closeModal">
        <div class="modal-dialog modal-xl" @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Histoire {{ boursier.prenom }} {{ boursier.nom }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form class="add-form" @submit.prevent="save_history">
                        <div class="mt-4">
                            <label class="font-bold">Histoire</label>
                            <ckeditor v-model="initialContent"></ckeditor>
                        </div>
                        
                        <div>
                            <div class="">
                                <button class="btn-add w-100 mt-4" type="submit">Ajouter</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show" style="z-index: -100;"></div>
    </div>
</template>

<script>
import ckeditor from '@/components/admin/ckeditor.vue'
import { useToast } from 'vue-toastification';
import { useBoursierStore } from '@/store/boursier'

export default {
   mane: 'addBousierHistory',
   components : {ckeditor},
   data() {
    return {
        initialContent: `
            <p>Un exemple d'histoire</p> 
        `,
        boursier: ''
    };
  },
  methods: {
    save_history(){
        const toast = useToast()
        this.$url.post('save_boursier_history', {
            boursier_id: this.boursier.id,
            histoire: this.initialContent
        }).then(response => {
            console.log(response)
            if(response.data.status){
                toast.success('Histoire ajoutée avec succès')
                this.boursier = useBoursierStore().getBoursier
                setTimeout(() => {
                    this.closeModal()
                }, 2000);
            }
        }).catch(error=> {
            console.log(error)
        })
    },

    closeModal(){
        useBoursierStore().setOpenHistoryModal(false)
    }
  },
  mounted(){
    this.$watch(() => useBoursierStore().boursier, (newVal) => {
        
        this.boursier = newVal
        console.log(this.boursier.id)
        this.initialContent = this.boursier.histoire?this.boursier.histoire:''
    })
  },
  computed: {
        openModal(){
            return useBoursierStore().getOpenHistoryModal
        }
    },
    watch: {
      defaultContent(newValue) {
        this.editorData = newValue;
      }
    }
}
</script>

<style lang="css" scoped>
    .ck-editor__main{
        height: 450px !important;
    }
   
</style>