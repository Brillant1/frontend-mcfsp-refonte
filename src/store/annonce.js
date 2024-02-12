import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const useAnnonceStore = defineStore('annonce', {
  state: () => {
    return { 
     annonces: [],
     annonce: '',
     open_add_modal: false,
     open_delete_modal: false,
     open_update_modal: false,
     delete_element_id: '',
     update_element_id: ''
    }
  },

  getters: {
    getAnnonce: (state) => state.annonce,
    getAnnonces: (state) => state.annonces,
    getOpenAddModal: (state) => state.open_add_modal,
    getOpenDeleteModal: (state) => state.open_delete_modal,
    getOpenUpdateModal: (state) => state.open_update_modal,
    getDeleteElement: (state) => state.delete_element_id,
    getUpdateElement: (state) => state.update_element_id,
  },

  actions: {
   
    setAnnonces(){
      axios.get('annonces').then( response=> {
        this.annonces = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },
    setAnnonce(id){
      this.annonce = ''
      axios.get('annonces/'+id).then(response=>{
        this.annonce = response.data.data
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

    deleteAnnonce(){
      const toast = useToast()
      let id = this.delete_element_id
      axios.delete('annonces/'+id).then(response => {
     
        const index = this.annonces.findIndex(element => element.id === id);
       
        if (index !== -1) {
          this.annonces.splice(index, 1);
          toast.success('Annonce supprimée avec succès')
        }
        this.open_delete_modal = false
        router.push({ name: '/annonces/liste' });

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
