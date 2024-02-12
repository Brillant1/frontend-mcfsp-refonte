<template>
  <admin-layout>
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-sm-flex align-items-center justify-content-start"
      >
        <h4 class="mb-sm-0 title">Tableau de bord</h4>
      </div>
    </div>
  </div>

  <div class="row section-statistique">
    <div class="col-md-3">
      <div class="card mini-stats-wid">
        <div class="card-body">
          <div class="d-flex">

            <div class="flex-shrink-0 align-self-center">
              <div
                class="rounded-circle "
              >
                <span class="">
                  <img src="../../assets/admin/images/icones/d-article.svg">
                </span>
              </div>
            </div>
            <div class=" ms-3 sta-text">
              <p class=" ">Articles</p>
              <h2 class="mb-0 ">600</h2>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card mini-stats-wid">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-shrink-0 align-self-center">
              <div
                class=" rounded-circle  "
              >
                <span class=" rounded-circle ">
                  <img src="../../assets/admin/images/icones/d-success.svg">
                </span>
              </div>
            </div>
            <div class=" ms-3 sta-text">
              <p class="">Succes stories</p>
              <h2 class="mb-0">600</h2>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card mini-stats-wid">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-shrink-0 align-self-center">
              <div
                class=" rounded-circle "
              >
                <span class=" rounded-circle">
                  <img src="../../assets/admin/images/icones/d-giving-back.svg">
                </span>
              </div>
            </div>
            <div class=" ms-3 font-bold sta-text">
              <p class="">Giving back</p>
              <h2 class="mb-0">600</h2>
            </div>

           
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card mini-stats-wid">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-shrink-0 align-self-center">
              <div
                class=" rounded-circle  "
              >
                <span class=" rounded-circle ">
                  <img src="../../assets/admin/images/icones/d-podcast.svg">
                </span>
              </div>
            </div>
            <div class=" ms-3 sta-text">
              <p class="">Podcasts</p>
              <h2 class="mb-0 text-chiffre">600</h2>
            </div>

         
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row my-3">
    <div class="col">
      <h3>Statistique des publications</h3>
    </div>
    <div class="col d-flex justify-content-end">
      <div class="position-relative" id="datepicker4">
          <input type="text" class="form-control month-picker-component" data-date-container='#datepicker4' data-provide="datepicker"
          data-date-format="MM yyyy" data-date-min-view-mode="1">
      </div>
      <!-- <month-picker-input  lang="fr" class="me-3 month-picker-component" style="z-index: 100;"></month-picker-input> -->
    </div>
  </div>

  <div class="row" style="z-index: -100;">
    <div class="col">
        <div class="card">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-tabs-custom justify-content-start pt-2" role="tablist">
                <li class="nav-item py-2">
                    <a class="nav-link active" data-bs-toggle="tab" href="#all-post" role="tab">
                        Articles
                    </a>
                </li>
                <li class="nav-item py-2">
                    <a class="nav-link" data-bs-toggle="tab" href="#archive" role="tab">
                        Success stories  
                    </a>
                </li>
                <li class="nav-item py-2">
                    <a class="nav-link" data-bs-toggle="tab" href="#archive" role="tab">
                        Giving back  
                    </a>
                </li>
                <li class="nav-item py-2">
                    <a class="nav-link" data-bs-toggle="tab" href="#archive" role="tab">
                        Podcasts  
                    </a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content p-4">
                <div class="tab-pane active" id="all-post" role="tabpanel">
                  
                </div>

                <div class="tab-pane" id="archive" role="tabpanel">

                </div>
            </div>
            
        </div>
    </div>
  </div>
</admin-layout>
</template>

<script>
import adminLayout from '@/layouts/admin/AdminLayout.vue';
import('@/assets/admin/js/pages/echarts.init.js')
import('@/assets/admin/libs/echarts/echarts.min.js')
import { MonthPicker } from 'vue-month-picker'
import { MonthPickerInput } from 'vue-month-picker'
import {authStore} from '@/store'

export default {
  name: 'Header',
  components: {
    MonthPickerInput,
    adminLayout
  },
  data(){
    return {
        
    }
  },
  methods: {
  
    logout() {
      this.$url.post('logout').then(response =>{
        if(response.data.status){
          const store = authStore();
          store.logout()
          this.$router.push('/')
        }
        alert(response.data.message)
      }).catch(error=>{
        console.log(error)
        alert('Erreur de serveur, réessayez plus tard')
      })
    },
   
  },
};
</script>

<style lang="css" scoped>
  .section-statistique>div>div{
    border: 1.25px solid rgba(226, 225, 226, 1);
    border-radius: 10px;
  }
  .fw-medium{
    margin-bottom: 0 !important;
  }
  .sta-text{
    display:flex;
    justify-content: center;
    flex-direction: column;
  }

  .sta-text>p{
    margin-bottom: 5px;
    font-size: 16px;
    font-weight:500
  }
  .sta-text>h2{
    margin-top:2px;
    font-size:24px;
    font-weight:600px;
  }
  .nav-tabs .nav-link{
    font-size:18px;
  
    color: rgba(0, 0, 0, 1)
  }
  
  .nav-tabs-custom .nav-item .nav-link.active {
    color: rgba(73, 131, 113, 1);
    /* border-bottom: 10px solid rgba(73, 131, 113, 1) !important; */
  }


 
  .month-picker__container>div{
    right:-0.81rem !important;
  }
  .month-picker-component{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.25px solid #B5B5B5;
    border-radius: 2px;
    padding: 7.49px 19.96px;
    z-index: 100;
  }
</style>
