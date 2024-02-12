import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const usePodcastStore = defineStore('podcast', {
  state: () => {
    return { 
      podcasts: [],
      podcast: '',
     open_add_modal: false,
     open_delete_modal: false,
     open_update_modal: false,
     delete_element_id: '',
     update_element_id: ''
    }
  },

  getters: {
    getPodcasts: (state) => state.podcasts,
    getPodcast: (state) => state.podcast,
    getOpenAddModal: (state) => state.open_add_modal,
    getOpenDeleteModal: (state) => state.open_delete_modal,
    getOpenUpdateModal: (state) => state.open_update_modal,
    getDeleteElement: (state) => state.delete_element_id,
    getUpdateElement: (state) => state.update_element_id,
  },

  actions: {
    setPodcasts(){
      axios.get('podcasts').then( response=> {
        this.podcasts = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },
    setPodcast(id){
      this.podcast = ''
      axios.get('podcasts/'+id).then(response=>{
        this.podcast = response.data.data
      })
    },
    setOpenAddModal(value){
        this.open_add_modal = value
    },
    setOpenDeleteModal(value){
        this.open_delete_modal = value
    },
    setOpenUpdateModal(value){
      this.open_update_modal = value

    },

    deletePodcast(){
      const toast = useToast()
      let id = this.delete_element_id
      axios.delete('podcasts/'+id).then(response => {
     
        const index = this.podcasts.findIndex(element => element.id === id);
       
        if (index !== -1) {
          this.podcasts.splice(index, 1);
          toast.success('Podcast supprimé avec succès')
        }
        this.open_delete_modal = false
        router.push({ name: '/podcast/liste' });

      }).catch(error => {
        console.log(error)
      })
    },

    setDeleteElement(value) {
      this.delete_element_id = value;
  
    },
    setUpdateElement(value) {
      this.update_element_id = value;
      this.open_update_modal = true;
    },
  },

  persist: true,
})
