import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const useOtherStore = defineStore('other', {
  state: () => {
    return { 
     mission: '',
     open_add_modal: false,
     element_id: '',
    }
  },

  getters: {
    getMission: (state) => state.mission,
    getOpenAddModal: (state) => state.open_add_modal,
    getElement: (state) => state.element_id,
  },

  actions: {
   
    setMission(){
      axios.get('mission').then( response=> {
        this.mission = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },

    setOpenAddModal(value){
        this.open_add_modal = value
    },

    setUpdateElement(value) {
      this.element_id = value;
      this.open_add_modal = true;
    },
    

  },

  persist: true,
})
