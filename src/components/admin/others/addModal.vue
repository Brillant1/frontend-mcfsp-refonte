<template>
      
    <div class="modal fade bs-example-modal-lg" :class="[openModal?'show d-flex':'']" ref="addOtherModal" @click="closeModal">
        <div class="modal-dialog modal-lg" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myLargeModalLabel">Ajout d'information</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="closeModal"></button>
                </div>
                <div class="modal-body" @click.stop>
                  <form  enctype="multipart/form-data" class="add-form" @submit.prevent="store">
                            <div class="row">
                                <div class="mt-4 col-12">
                                    <label>Mission</label>
                                    <ckeditor v-model="info.mission"></ckeditor>
                                </div>
                                <div class="mt-4 col-12">
                                    <label>Vision</label>
                                    <ckeditor v-model="info.vision"></ckeditor>
                                </div>
                                <div class="mt-4 col-12">
                                    <label>Vidéo de fond</label>
                                    <input type="file" class="form-control" accept=".mp4" @input="fileChange" ref="video">
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
  import {useOtherStore} from '@/store/other'
  import { useToast } from 'vue-toastification'
  import ckeditor from '@/components/admin/ckeditor.vue'

      export default {
          name: 'addInfo',
          components: {ckeditor},
          data() {
              return {
                  info: {
                      mission: '',
                      vision: '',
                      video_presentation: '',
                     
                  }
                }
            },
          
            computed: {
                openModal(){
                    return useOtherStore().getOpenAddModal
                }
            },
            methods: {
                store(){
                let form = new FormData()
                let toast = useToast()
                for (let cle in this.info) {
                        form.append(cle, this.info[cle])
                    }
                this.$url.post('mission', form).then(response => {
                    
                    for (let cle in this.info) {
                        this.info[cle] = '';
                    }
                    this.$refs.video.value = ""
                    useOtherStore().setMission()
                    toast.success('Informations ajoutées avec succès')
                    this.closeModal()     
                }).catch(error => {
                    console.log(error)
                })
            },
            closeModal(){
                useOtherStore().setOpenAddModal(false)
            },
            fileChange(event){
                this.info.video_presentation = event.target.files[0];
            },
            
          },
            mounted(){
                useOtherStore().setOpenAddModal(false)
                useOtherStore().setMission()
                this.info = useOtherStore().getMission
                console.log(this.info)
            }
      }
  </script>
  
  <style lang="css" scoped>
      input, select{
          font-size: 14px;
      }
  </style>