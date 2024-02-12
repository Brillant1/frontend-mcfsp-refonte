import { defineStore } from 'pinia'
import axios from '@/axios'
import router from '@/router'
import { useToast } from 'vue-toastification'
export const useBoursierStore = defineStore('boursier', {
    state: () => {
      return { 
        boursiers: [],
        boursier: '',
        delete_element_id: '',
        close_delete_modal: false,
        show_add_modal: false,
        show_history_modal: false,
        open_success_add_modal: false,
      }
    },
  
    getters: {
      getBoursiers: (state) => state.boursiers,
      getBoursier: (state) => state.boursier,
      getDeleteElement: (state) => state.delete_element_id,
      getCloseDeleteModal:(state) => state.close_delete_modal,
      getOpenAddModal: (state) => state.show_add_modal,
      getOpenHistoryModal: (state) => state.show_history_modal,
      getOpenSuccessModal: (state) => state.open_success_add_modal,
    },
  
    actions: {
      setCloseDeleteModal(value){
        this.close_delete_modal = value
      },
      setOpenAddModal(value){
        this.show_add_modal = value
      },
      setOpenHistoryModal(value){
        this.show_history_modal = value
      },
      setBoursiers() {
        axios.get('boursiers').then( response=> {
          this.boursiers = response.data.data
        }).catch(error=> {
          console.log(error)
        })
      },

      setBoursier(id){
        this.boursier = ''
        axios.get('boursiers/'+id).then(response=>{
          this.boursier = response.data.data
        })
      },

      deleteBoursier(){
        const toast = useToast()
        let id = this.delete_element_id
        
        axios.delete('boursiers/'+id).then(response => {
          
          const index = this.boursiers.findIndex(element => element.id === id);
         
          if (index !== -1) {
            this.boursiers.splice(index, 1);
            toast.success('Boursier supprimé avec succès')
          }
          this.close_delete_modal = false

          router.push({ name: 'boursiers/liste' });

        }).catch(error => {
          console.log(error)
        })
      },

      setDeleteElement(value) {
        this.delete_element_id = value;
      },

      openSuccessAddModal(value) {
        this.open_success_add_modal = value
      }
    },
  
    persist: true,
  })