import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const useDocumentStore = defineStore('document', {
  state: () => {
    return { 
     documents: [],
     document: '',
     open_add_modal: false,
     open_delete_modal: false,
     open_update_modal: false,
     delete_element_id: '',
     update_element_id: ''

    }
  },

  getters: {
    getDocument: (state) => state.document,
    getDocuments: (state) => state.documents,
    getOpenAddModal: (state) => state.open_add_modal,
    getOpenDeleteModal: (state) => state.open_delete_modal,
    getOpenUpdateModal: (state) => state.open_update_modal,
    getDeleteElement: (state) => state.delete_element_id,
    getUpdateElement: (state) => state.update_element_id,
  },

  actions: {
   
    setDocuments(){
      axios.get('documents').then( response=> {
        this.documents = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },
    setDocument(id){
      this.document = ''
      axios.get('documents/'+id).then(response=>{
        this.document = response.data.data
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

    deleteDocument(){
      const toast = useToast()
      let id = this.delete_element_id
      axios.delete('documents/'+id).then(response => {
     
        const index = this.documents.findIndex(element => element.id === id);
       
        if (index !== -1) {
          this.documents.splice(index, 1);
          toast.success('Document supprimé avec succès')
        }
        this.open_delete_modal = false

        router.push({ name: 'documents/liste' });

      }).catch(error => {
        console.log(error)
      })
    },

    updateDocument(){
      
    },
    setDeleteElement(value) {
      this.delete_element_id = value;
    },
    setUpdateElement(value) {
      this.update_element_id = value;
    },
    

  },

  persist: true,
})
