import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const useFiliereStore = defineStore('filiere', {
  state: () => {
    return { 
     filieres: [],
     filiere: '',
     open_add_modal: false,
     open_delete_modal: false,
     open_update_modal: false,
     delete_element_id: '',
     update_element_id: ''
    }
  },

  getters: {
    getFiliere: (state) => state.filiere,
    getFilieres: (state) => state.filieres,
    getOpenAddModal: (state) => state.open_add_modal,
    getOpenDeleteModal: (state) => state.open_delete_modal,
    getOpenUpdateModal: (state) => state.open_update_modal,
    getDeleteElement: (state) => state.delete_element_id,
    getUpdateElement: (state) => state.update_element_id,
  },

  actions: {
   
    setFilieres(){
      axios.get('filieres').then( response=> {
        this.filieres = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },
    setFiliere(id){
      this.filiere = ''
      axios.get('filieres/'+id).then(response=>{
        this.filiere = response.data.data
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

    deleteFiliere(){
      const toast = useToast()
      let id = this.delete_element_id
      axios.delete('filieres/'+id).then(response => {
     
        const index = this.filieres.findIndex(element => element.id === id);
       
        if (index !== -1) {
          this.filieres.splice(index, 1);
          toast.success('Spécialité supprimée avec succès')
        }
        this.open_delete_modal = false
        router.push({ name: '/entites/liste' });

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
