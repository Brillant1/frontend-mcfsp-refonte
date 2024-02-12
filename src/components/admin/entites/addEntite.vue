<template>
      
  <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="addEntiteModal" @click="closeModal">
      <div class="modal-dialog modal-lg" @click.stop>
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="myLargeModalLabel">Ajouter une entité</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="closeModal"></button>
              </div>
              <div class="modal-body" @click.stop>
                <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                        <div class="row">
                            <div class="mt-4 col-6">
                                <label>Nom complet</label>
                                <input type="text" class="form-control" v-model="entite.nom" required>
                            </div>
                            <div class="mt-4 col-6">
                                <label>Sigle</label>
                                <input type="text" class="form-control" v-model="entite.sigle" required>
                            </div>
                            <div class="mt-4 col-6">
                                <label>Lien site internet</label>
                                <input type="text" class="form-control" v-model="entite.website" required>
                            </div>
                      
                            <div class="mt-4 col-6">
                                <label>Représentant</label>
                                <input type="text" class="form-control" v-model="entite.representant" required>
                            </div>
                            <div class="mt-4 col-6">
                                <label>Contact représentant</label>
                                <input type="text" class="form-control" v-model="entite.contact_representant" required>
                            </div>
                       
                        <div class="mt-4 col-6">
                            <label class="file">Logo</label>
                            <input type="file" class="form-control" @input="fileChange" required accept=".png,.jpg,.jpeg,.gif,.avif" ref="logo">
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
import {useEntiteStore} from '@/store/entite'
import { useToast } from 'vue-toastification'
    export default {
        name: 'addEntite',
        data() {
            return {
                entite: {
                    nom: '',
                    sigle: '',
                    representant: '',
                    contact_representant: '',
                    logo: '',
                    website: ''
                }
            }
        },
        mounted(){
            
        },
        computed: {
            openModal(){
                return useEntiteStore().getOpenAddModal
            }
        },
        methods: {
            store(){
                let form = new FormData()
                let toast = useToast()
                for (let cle in this.entite) {
                    form.append(cle, this.entite[cle])
                }
            
            
                this.$url.post('entites', form).then(response => {
                    useEntiteStore().setEntites()
                    for (let cle in this.entite) {
                        this.entite[cle] = '';
                    }
                    this.$refs.logo.value = ""
                    
                    toast.success('Entité ajoutée avec succès')
                    this.closeModal()
                }).catch(error => {
                    console.log(error)
                })
            },
            closeModal(){
                useEntiteStore().setOpenAddModal(false)
            },
            fileChange(event){
                this.entite.logo = event.target.files[0];
            },
        }
    }
</script>

<style lang="css" scoped>
    input, select{
        font-size: 14px;
    }
</style>