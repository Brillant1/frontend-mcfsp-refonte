<template>
      
    <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="addAnnonceModal" @click="closeModal">
        <div class="modal-dialog modal-lg" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myLargeModalLabel">Ajouter une annonce</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="closeModal"></button>
                </div>
                <div class="modal-body" @click.stop>
                  <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                          <div class="row">
                              <div class="mt-4 col-12">
                                  <label>Titre de l'annonce</label>
                                  <input type="text" class="form-control" v-model="annonce.titre" required>
                              </div>
                              <div class="mt-4 col-6">
                                <label class="file">Image</label>
                                <input type="file" class="form-control" @input="fileChange" required accept=".png,.jpg,.jpeg,.gif,.avif" ref="image">
                              </div>
                              <div class="mt-4 col-6">
                                  <label>Article à référencer</label>
                                  <select name="" id="" class=" form-control form-select" v-model="annonce.article" required>
                                    <option value="">Sélectionnez une catégorie</option>
                                    <option value="1" >Article 1</option>
                                    <option value="2" >Article 2</option>
                                    <option value="3" >Article 3</option>
                                    <option value="4" >Article 4</option>
                                </select>
                              </div>
                              
                        
                              <div class="mt-4 col-12">
                                <label>Description</label>
                                <ckeditor v-model="annonce.description"></ckeditor>
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
  import {useAnnonceStore} from '@/store/annonce'
  import { useToast } from 'vue-toastification'
      export default {
          name: 'addAnnonce',
          data() {
            return {
                annonce: {
                    titre: '',
                    image: '',
                    description: '',
                    article: '',
                },
                annonce_media: '',
                annonce_id: '',
            }
          },
          mounted(){
            this.$watch(() => useAnnonceStore().update_element_id, (newVal) => {
                this.annonce_id = newVal;
             
                this.$url.get('annonces/'+this.annonce_id).then(response=> {
                    this.annonce = response.data.data
                    this.annonce_media = this.annonce.media
                    console.log(this.annonce)
                }).catch(error=>{
                    console.log(error)
                })
            });
          },
          computed: {
              openModal(){
                  return useAnnonceStore().getOpenUpdateModal
              }
          },
          methods: {
              store(){
                  let form = new FormData()
                  let toast = useToast()
                  for (let cle in this.annonce) {
                      form.append(cle, this.annonce[cle])
                  }
                  form.append('annonce_id', this.annonce_id)
              
                  this.$url.post('annonces/update', form).then(response => {
                      useAnnonceStore().setAnnonces()
                      for (let cle in this.annonce) {
                          this.annonce[cle] = '';
                      }
                      this.$refs.image.value = ""
                      
                      toast.success('Entité ajoutée avec succès')
                      this.closeModal()
                  }).catch(error => {
                      console.log(error)
                  })
              },
              closeModal(){
                  useAnnonceStore().setOpenAddModal(false)
              },
              fileChange(event){
                  this.entite.image = event.target.files[0];
              },
          }
      }
  </script>
  
  <style lang="css" scoped>
      input, select{
          font-size: 14px;
      }
  </style>