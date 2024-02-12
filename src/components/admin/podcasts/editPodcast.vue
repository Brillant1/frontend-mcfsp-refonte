<template>
      
    <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="editPodcastModal" @click="closeModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myLargeModalLabel">Modifier le podcast</h5>
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
                                  <input type="file" class="form-control" @change="fileChange" ref="file">

                              </div>
                              <div class="col-6"></div>
                          <div class="col-6 mt-2">
                                <img :src="podcast_media.url" class="img-scholar" width="50" height="50">
                          </div>
                              <div class="mt-4 col-12"> 
                                  <label>Description</label>
                                  <ckeditor v-model="podcast.description"></ckeditor>
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
  import {usePodcastStore} from '@/store/podcast'
  import { useToast } from 'vue-toastification'
  import ckeditor from '@/components/admin/ckeditor.vue'
  import utility from '@/components/admin/utility.json'

      export default {
  components: { ckeditor },
          name: 'addPodcast',
          data() {
              return {
                  podcast: {
                      theme: '',
                      lien: '',
                      description: '',
                      file: '',
                  },
                  url: utility.local_url,
                  podcast_media: '',
                  podcast_id: '',

              }
          },

          mounted(){
            this.$watch(() => usePodcastStore().update_element_id, (newVal) => {
                this.podcast_id = newVal;
                this.$url.get('podcasts/'+this.podcast_id).then(response=> {
                    
                    this.podcast = response.data.data
                    this.podcast_media = this.podcast.media
                }).catch(error=>{
                    console.log(error)
                })
            });
          },
        
          computed: {
              openModal(){
                  return usePodcastStore().getOpenUpdateModal
              }
          },
          methods: {
              store(){
              let form = new FormData()
              let toast = useToast()
              for (let cle in this.podcast) {
                    form.append(cle, this.podcast[cle])
                }
                form.append('podcast_id', this.podcast_id)
             
            
              this.$url.post('podcasts/update', form).then(response => {
                    console.log(response)
                  usePodcastStore().setPodcasts()
                  for (let cle in this.podcast) {
                      this.podcast[cle] = '';
                  }
                  this.$refs.file.value = ""
                  toast.success('Podcast modifié avec succès')
                  this.closeModal()
              }).catch(error => {
                  console.log(error)
              })
          },
          closeModal(){
              usePodcastStore().setOpenUpdateModal(false)
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