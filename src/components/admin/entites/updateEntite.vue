<template>
      
    <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="addEntiteModal" @click="closeModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myLargeModalLabel">Modifié entité</h5>
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
                              <input type="file" class="form-control" @input="fileChange" accept=".png,.jpg,.jpeg,.gif,.avif" ref="logo">
                          </div>
                          <div class="col-6"></div>
                          <div class="col-6 mt-2">
                                <img :src="entite_media.url" class="img-scholar" width="50" height="50">
                          </div>
                          </div>
                         <div>
                              <div class="">
                                  <button class="btn-add w-100 mt-4" type="submit">Modifier</button>
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
                      website: '',
                    
                    },
                    entite_media: '',
                    entite_id: '',
                    
              }
            },
          mounted(){
            this.$watch(() => useEntiteStore().update_element_id, (newVal) => {
                this.entite_id = newVal;
                console.log(this.entite_id)
                this.$url.get('entites/'+this.entite_id).then(response=> {
                    this.entite = response.data.data
                    this.entite_media = this.entite.media
                    console.log(this.entite)
                }).catch(error=>{
                    console.log(error)
                })
            });
          },
          computed: {
              openModal(){
                  return useEntiteStore().getOpenUpdateModal
              }
          },
          methods: {
              store(){
              let form = new FormData()
              let toast = useToast()
              for (let cle in this.entite) {
                 form.append(cle, this.entite[cle])
              }
              form.append('entite_id', this.entite_id)
             
              this.$url.post('entites/update', form).then(response => {
                console.log(response)
                  useEntiteStore().setEntites()
                  for (let cle in this.entite) {
                      this.entite[cle] = '';
                  }
                  this.$refs.logo.value = ""
                  
                  toast.success('Entité modifiée avec succès')
                  this.closeModal()
              }).catch(error => {
                  console.log(error)
              })
            },
          closeModal(){
            useEntiteStore().setOpenUpdateModal(false)
           
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