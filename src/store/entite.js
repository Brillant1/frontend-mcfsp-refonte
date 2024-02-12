import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const useEntiteStore = defineStore('entite', {
  state: () => {
    return { 
     entites: [],
     entite: '',
     open_add_modal: false,
     open_delete_modal: false,
     open_update_modal: false,
     delete_element_id: '',
     update_element_id: ''
    }
  },

  getters: {
    getEntite: (state) => state.entite,
    getEntites: (state) => state.entites,
    getOpenAddModal: (state) => state.open_add_modal,
    getOpenDeleteModal: (state) => state.open_delete_modal,
    getOpenUpdateModal: (state) => state.open_update_modal,
    getDeleteElement: (state) => state.delete_element_id,
    getUpdateElement: (state) => state.update_element_id,
  },

  actions: {
   
    setEntites(){
      axios.get('entites').then( response=> {
        this.entites = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },
    setEntite(id){
      this.entite = ''
      axios.get('entites/'+id).then(response=>{
        this.entite = response.data.data
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

    deleteEntite(){
      const toast = useToast()
      let id = this.delete_element_id
      axios.delete('entites/'+id).then(response => {
     
        const index = this.entites.findIndex(element => element.id === id);
       
        if (index !== -1) {
          this.entites.splice(index, 1);
          toast.success('Entité supprimée avec succès')
        }
        this.open_delete_modal = false
        router.push({ name: '/entites/liste' });

      }).catch(error => {
        console.log(error)
      })
    },

    updateEntite(){
      
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
