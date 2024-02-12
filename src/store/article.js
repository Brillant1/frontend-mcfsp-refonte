import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
export const useArticleStore = defineStore('article', {
  state: () => {
    return { 
      articles: [],
      article: '',
      modal_title: '',

      show_add_modal: false,
      delete_element_id: '',
      show_delete_modal: false,
    }
  },

  getters: {
      getArticles: (state) => state.articles,
      getArticle: (state) => state.article,
      getOpenAddModal: (state) => state.show_add_modal,
      getOpenDeleteModal: (state) => state.show_delete_modal,
      getDeleteElement: (state) => state.delete_element_id,
  },

  actions: {
    setArticles(){
      axios.get('postes').then( response=> {
        this.articles = response.data.data
      }).catch(error=> {
        console.log(error)
      })
    },
    setArticle(id){
      this.article = ''
      axios.get('postes/'+id).then(response=>{
        this.article = response.data.data
      })
    },
    setOpenAddModal(value){
        this.show_add_modal = value
    },
    setOpenDeleteModal(value){
        this.show_delete_modal = value
    },

    deleteArticle(){
      const toast = useToast()
      let id = this.delete_element_id
      axios.delete('postes/'+id).then(response => {
     
        const index = this.articles.findIndex(element => element.id === id);
       
        if (index !== -1) {
          this.articles.splice(index, 1);
          toast.success('Article supprimé avec succès')
        }
        this.show_delete_modal = false

        router.push({ name: 'articles/liste' });

      }).catch(error => {
        console.log(error)
      })
    },

    setDeleteElement(value) {
      this.delete_element_id = value;
    },
  },

  persist: true,
})
