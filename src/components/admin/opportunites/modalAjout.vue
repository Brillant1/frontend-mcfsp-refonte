<template>
    
    <div class="modal fade modal-add" :class="[openModal?'show d-flex':'']" id="add-opportunite-modal" ref="addOpportuniteModal" @click="closeModal">
        <div class="modal-dialog modal-dialog-centered" @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Ajouter une opportunité</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                        
                        <div class="row">
                            <div class="mt-4 col-6">
                                <label>Titre</label>
                                <input type="text" class="form-control" v-model="opportunite.titre" required>
                            </div>
                      
                            <div class="mt-4 col-6">
                                <label>Catégorie</label>
                                
                                <select class=" form-control form-select" v-model="opportunite.categorie" required>
                                    <option value=""></option>
                                    <option value="Bourse">Bourse</option>
                                    <option value="Volontariat">Volontariat</option>
                                    <option value="Formation">Formation</option>
                                </select>
                            </div>
                       
                        <div class="mt-4 col-6">
                            <label class="file">Ajouter une image</label>
                            <input type="file" class="form-control" @input="fileChange" required accept=".png,.jpg,.jpeg,.gif,.avif" ref="photo">
                        </div>
                        
                        <div class="col-6 mt-4">
                            <label>Date de debut</label>
                            <input type="date" class="form-control"  v-model="opportunite.date_debut" required>
                        </div>

                        <div class="col-6 mt-4">
                            <label class="">Date de fin</label>
                            <input type="date" class="form-control"  v-model="opportunite.date_fin" required>
                        </div>

                        <div class="form-group col-6 mt-4" >
                            <label for="prenom" >Cette opportunité est-elle postulable ?</label>
                            <div class="row my-2">
                                <div class="col-md-6 mt-2">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label d-flex align-items-center">
                                        <input type="radio" v-model="opportunite.postulable" value="1" class="form-check-input" required>
                                        <p class="mb-0"> &nbsp; Oui</p>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-2">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label d-flex align-items-center">
                                        <input type="radio" v-model="opportunite.postulable" value="0" class="form-check-input" required>
                                        <p class="mb-0"> &nbsp; Non</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4">
                            <label class="font-bold mt-4">Contenu</label>
                            <ckeditor v-model="opportunite.description" required></ckeditor>
                        </div>
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
import {useToast} from 'vue-toastification'
import {useOpportuniteStore} from '@/store/opportunite'
import moment from 'moment';
export default {

    name: 'addOpportuniteModal',
    components: {
        ckeditor
    },
    
    data(){
        return {
            opportunite : {
                titre: '',
                categorie: '',
                description: '',
                file: '',
                date_debut: '',
                date_fin: '',
                postulable: '',
            },
            
        }
    },
    
    
    computed: {
        openModal(){
            return useOpportuniteStore().getModalOpen
        }
    },
    
    methods: {
        store(){
            const toast = useToast()
            let form = new FormData()

            for(let cle in this.opportunite){
                if(this.opportunite[cle] ==''){
                    toast.error('Veuillez remplir tous les champs');
                    return;
                }
            }
            let date_debut = moment(this.opportunite.date_debut)
            let date_fin = moment(this.opportunite.date_fin)
            if(date_fin.isBefore(date_debut)){
                toast.error('La date de fin doit être postérieur à la date de debut');
                return; 
            }

            for(let cle in this.opportunite){
                form.append(cle, this.opportunite[cle])
            }

            this.$url.post('opportunites', form).then(response => {
                toast.success('Opportunité ajoutée avec succès');
                useOpportuniteStore().closeModal()
                for(let cle in this.opportunite){
                    this.opportunite[cle] = ''
                }
                this.$refs.photo.value= ''
                useOpportuniteStore().setOpportunites()
                
                this.$router.push('/opportunites/liste')
            }).catch(error => {
                console.log(error)
            })
        },
        
        fileChange(event){
            this.opportunite.file = event.target.files[0];
        },
        closeModal(){
            useOpportuniteStore().closeModal()
        }
    }
    
}
</script>


<style lang="css" scoped>
   
    input, select {
        font-size: 14px;
    }
    @media (min-width: 576px){
    .modal-dialog{
        min-width:900px !important;
    }
    }
    .form-select{
        background-image: url('../../../assets/admin/images/icones/select-arrow.svg');
        background-size: 24px;
    }
    
    
</style>