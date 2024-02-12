<template>
      
    <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="addEntiteModal" @click="closeModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myLargeModalLabel">Ajouter une filière</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="closeModal"></button>
                </div>
                <div class="modal-body" @click.stop>
                    <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                        <div class="row">
                            <div class=" mt-3 col-6">
                                <label>Intitulé</label>
                                <input type="text" class="form-control" v-model="filiere.nom" required>
                            </div>
                           
                            <div class="col-6 mt-3">
                                <label>Secteur</label>
                                <select class="form-control form-select" v-model="filiere.secteur_id" required>
                                    <option value="">Sélectionnez un secteur</option>
                                    <option :value="secteur.id" v-if="secteurs.length>0" v-for="secteur in secteurs" :key="secteur.id">{{ secteur.nom }}</option>
                                </select>
                            </div>
                            <div class="col-6 mt-3">
                                <label>Entité</label>
                                <select class="form-control form-select" v-model="filiere.entite_id" required>
                                    <option value="">Sélectionnez une entité</option>
                                    <option :value="entite.id" v-if="entites.length>0" v-for="entite in entites" :key="entite.id">{{ entite.nom }}</option>
                                </select>
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
  import {useFiliereStore} from '@/store/filiere'
  import { useToast } from 'vue-toastification'
      export default {
          name: 'addFiliere',
          data() {
              return {
                  filiere: {
                      nom: '',
                      secteur_id: '',
                      entite_id: ''
                  },
                  entites: '',
                  secteurs: ''
              }
          },
          computed: {
              openModal(){
                  return useFiliereStore().getOpenAddModal
              }
          },
          methods: {
              store(){
              let form = new FormData()
              let toast = useToast()
              for (let cle in this.filiere) {
                 form.append(cle, this.filiere[cle])
              }
              this.$url.post('filieres', form).then(response => {
                  useFiliereStore().setFilieres()
                  for (let cle in this.filiere) {
                      this.filiere[cle] = '';
                  }
                  toast.success('Filière ajoutée avec succès')
                  this.closeModal()
              }).catch(error => {
                  console.log(error)
              })
          },
          closeModal(){
              useFiliereStore().setOpenAddModal(false)
          }

        },
         

          mounted(){
            
            this.$url.get('entites').then(response => {
                this.entites = response.data.data
                console.log(response)
            }).catch(error => {
                console.log(error)
            })

            this.$url.get('secteurs').then(response => {
                this.secteurs = response.data.data
            }).catch(error => {
                console.log(error)
            })
          }
         
         
      }
  </script>
  
  <style lang="css" scoped>
      input, select{
          font-size: 14px;
      }
      .form-select{
        background-image: url('@/assets/admin/images/icones/select-arrow.svg');
        background-size: 24px;
        }
  </style>