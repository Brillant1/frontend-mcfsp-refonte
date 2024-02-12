import { defineStore } from 'pinia'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
import { useArticleStore } from '@/store/article'
import router from '@/router'
export const useOpportuniteStore = defineStore('opportunite', {
    state: () => {
      return { 
        opportunites: [],
        opportunite: '',
        modal_title: '',
        can_close_modal: false, 
        show_add_modal: false,

        delete_element_id: '',
        close_delete_modal: false,
      }
    },
  
    getters: {
      getOpportunites: (state) => state.opportunites,
      getOpportunite: (state) => state.opportunite,
      getModalOpen: (state) => state.can_close_modal,
      getShowModalValue: (state) => state.show_add_modal,

      getCloseDeleteModal: (state) => state.close_delete_modal,
      getDeleteElement: (state) => state.delete_element_id,
    },
  
    actions: {

      setCloseDeleteModal(value) {
        this.close_delete_modal = value;
      },
  
      setDeleteElement(value) {
          this.delete_element_id = value;
      },


      setOpportunites() {
        axios.get('opportunites').then( response=> {
          this.opportunites = response.data.data
        }).catch(error=> {
          console.log(error)
        })
      },
      fetchOpportunite(id){
        this.opportunite = ''
        axios.get('opportunites/'+id).then(response=>{
          this.opportunite = response.data.data
        })
      },
      deleteOpportunite(){
        const toast = useToast()
        let id = this.delete_element_id
        console.log(id)
        axios.delete('opportunites/'+id).then(response => {
         console.log(response)
          const index = this.opportunites.findIndex(element => element.id === id);
         
          if (index !== -1) {
            this.opportunites.splice(index, 1);
            toast.success('Opportunité supprimée avec succès')
          }
          this.close_delete_modal = false

          router.push({ name: 'opportunites/liste' });

        }).catch(error => {
          console.log(error)
        })
      },
      
      openModal(){
        this.can_close_modal= true;
      },
      closeModal(){
        this.can_close_modal= false;
      }
    },
  
    persist: true,
  })