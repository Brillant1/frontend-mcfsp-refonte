<template>
      
    <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="addPodcastModal" @click="closeModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myLargeModalLabel">Ajouter un podcast</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="closeModal"></button>
                </div>
                <div class="modal-body" @click.stop>
                  <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                          <div class="row">
                              <div class="mt-4 col-6">
                                  <label>Thème</label>
                                  <input type="text" class="form-control" v-model="podcast.theme" required>
                              </div>
                              <div class="mt-4 col-6">
                                  <label>Lien vers le podcast</label>
                                  <input type="text" class="form-control" v-model="podcast.lien" required>
                              </div>
                              <div class="mt-4 col-6">
                                  <label>Date de publication</label>
                                  <input type="date" class="form-control" v-model="podcast.publish_at" required>
                              </div>
                        
                              <div class="mt-4 col-6">
                                  <label>Image</label>
                                  <input type="file" class="form-control" @change="fileChange" required ref="file" accept=".png,.jpg,.jpeg">
                              </div>
                              <div class="col-12 mt-3">
                                    <label>Catégorie</label>
                                    <select class="form-control form-select" v-model="podcast.categorie_podcast_id" required>
                                        <option value="" selected>Sélectionnez la categorie</option>
                                        <option :value="categorie.id" v-if="categories.length>0" v-for="categorie in categories" :key="categorie.id">{{ categorie.name }}</option>
                                    </select>
                                </div>
                              <div class="mt-4 col-12">
                                  <label>Description</label>
                                  <ckeditor v-model="podcast.description"></ckeditor>
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
  import {usePodcastStore} from '@/store/podcast'
  import { useToast } from 'vue-toastification'
  import ckeditor from '@/components/admin/ckeditor.vue'

      export default {
  components: { ckeditor },
          name: 'addPodcast',
          data() {
              return {
                categories: '',
                  podcast: {
                      theme: '',
                      lien: '',
                      description: '',
                      file: '',
                      publish_at: '',
                      categorie_podcast_id : ''
                  }
              }
          },
        
          computed: {
              openModal(){
                  return usePodcastStore().getOpenAddModal
              }
          },
          mounted() {
            this.$url.get('categorie_podcasts').then(response=> {
            this.categories = response.data.data
            }).catch(error => {
                console.log(error)
            })
          },
          methods: {
              store(){

              
              let form = new FormData()
              let toast = useToast()
              for (let cle in this.podcast) {
                  form.append(cle, this.podcast[cle])
              }
             
              const regexLien = /^(http|https):\/\/[^ "]+$/;
              if(!regexLien.test(this.podcast.lien)){
                toast.error('Le lien entré est invalide')
                return ;
              }
              this.$url.post('podcasts', form).then(response => {
                    console.log(response)
                  usePodcastStore().setPodcasts()
                  for (let cle in this.podcast) {
                      this.podcast[cle] = '';
                  }
                  this.$refs.file.value = ""
                  toast.success('Podcast ajouté avec succès')
                  this.closeModal()
                  this.$router.push('/podcasts/liste')
              }).catch(error => {
                  console.log(error)
              })
          },
          closeModal(){
              usePodcastStore().setOpenAddModal(false)
          },
          fileChange(event){
              this.podcast.file = event.target.files[0];
          },
          }
      }
  </script>
  
  <style lang="css" scoped>
      input, select{
          font-size: 14px;
      }
  </style>

  