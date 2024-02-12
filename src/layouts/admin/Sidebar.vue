<template>
  
    <div class="vertical-menu" >
  
  <div data-simplebar class="h-100">
  
      <!--- Sidemenu -->
      <div id="sidebar-menu">
          <!-- Left Menu Start -->
          <ul class="metismenu list-unstyled" id="side-menu">

            <div class="d-flex justify-content-center py-3"><button class="btn btn-danger fs-16 fw-bold px-5 btn-annonce" @click="openModal">Créer une annonce</button></div>
              <li class="py-2">
                  <router-link to="/dashboard" class="waves-effect">
                      <img src="@/assets/admin/images/icones/dashboard.svg" alt="icone dashboard">
                     &nbsp; <span key="t-dashboards">Tableau de bord</span>
                  </router-link>
              </li>
              <li class="py-2">
                  <router-link to="/articles/index" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Article.svg" alt="icone Article">
                     &nbsp; <span key="t-dashboards">Article</span>
                  </router-link>
              </li>
              <!-- <li class="py-2">
                  <router-link to="/activites/index" class="waves-effect">
                      <img src="@/assets/admin/images/icones/PodCast.svg" alt="icone dashboard">
                     &nbsp; <span key="t-dashboards">Activités</span>
                  </router-link>
              </li> -->
              <!-- <li class="py-2">
                  <router-link to="" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Success.svg" alt="icone success storie">
                     &nbsp; <span key="t-dashboards">Success stories</span>
                  </router-link>
              </li>
              <li class="py-2">
                  <router-link to="" class="waves-effect">
                      <img src="@/assets/admin/images/icones/GiVingBack.svg" alt="icone GiVingBack">
                     &nbsp; <span key="t-dashboards">Giving back</span>
                  </router-link>
              </li>
              <li class="py-2">
                  <router-link to="" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Bamfa.svg" alt="icone Bamfa">
                     &nbsp; <span key="t-dashboards">Activités BAMFA</span>
                  </router-link>
              </li> -->
              <li class="py-2">
                  <router-link to="/boursiers/index" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Boursiers.svg" alt="icone Boursiers">
                     &nbsp; <span key="t-dashboards">Boursiers</span>
                  </router-link>
              </li>
              <li class="py-2">
                  <router-link to="/opportunites/index" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Opportunite.svg" alt="icone Opportunite">
                     &nbsp; <span key="t-dashboards">Opportunités</span>
                  </router-link>
              </li>
              <li class="py-2">
                  <router-link to="" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Media.svg" alt="icone Media">
                     &nbsp; <span key="t-dashboards">Médias</span>
                  </router-link>
              </li>
              <!-- <li class="py-2">
                  <router-link to="/magazines/index" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Magazines.svg" alt="icone Magazines">
                     &nbsp; <span key="t-dashboards">Magazines</span>
                  </router-link>
              </li> -->
              <li class="py-2">
                  <router-link to="/documents/index" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Documents.svg" alt="icone Documents">
                     &nbsp; <span key="t-dashboards">Ressources</span>
                  </router-link>
              </li>

              <li class="py-2">
                  <router-link to="/entites/liste" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Documents.svg" alt="icone Documents">
                     &nbsp; <span key="t-dashboards">Entités/Filières</span>
                  </router-link>
              </li>

              <li class="py-2">
                  <router-link to="/podcasts/liste" class="waves-effect">
                      <img src="@/assets/admin/images/icones/PodCast.svg" alt="icone Documents">
                     &nbsp; <span key="t-dashboards">Podcasts</span>
                  </router-link>
              </li>

              <li class="py-2">
                  <router-link to="/contacts" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Documents.svg" alt="icone Documents">
                     &nbsp; <span key="t-dashboards">Contacts & Newsletters</span>
                  </router-link>
              </li>


              <li>
                  <hr>
              </li>
  
              <li class="py-2">
                  <router-link to="" class="waves-effect">
                      <img src="@/assets/admin/images/icones/Paramètres.svg" alt="icone Paramètres">
                     &nbsp; <span key="t-dashboards">Paramètres</span>
                  </router-link>
              </li>
              <li class="py-2">
               
                      <router-link to="#" class="waves-effect" @click.prevent="logout">
                          <img src="@/assets/admin/images/icones/Déconnexion.svg" alt="icone Déconnexion">
                          &nbsp; <span key="t-dashboards">Déconnexion</span>
                      </router-link>
                 
              </li>
          </ul>
      </div>
  </div>
  </div>

  <add-annonce></add-annonce>
  
  </template>
  
  <script>
import addButton from '@/components/admin/annonces/addButton.vue'
import addAnnonce from '@/components/admin/annonces/addAnnonce.vue';

  import {useAnnonceStore} from '@/store/annonce'
  import {authStore} from '@/store'
  export default {
      name: 'Sidebar',
      components: {addButton, addAnnonce},
      methods: {
          logout(){
              this.$url.post('logout').then(response =>{
                  console.log(response)
                  if(response.data.status){
                  const store = authStore();
                  store.logout()
                  this.$router.push('/')
                  }
              }).catch(error=>{
                  console.log(error)
              })
            },
            mounted(){
                useAnnonceStore().setOpenAddModal(false)
            },
            openModal(){
                useAnnonceStore().setOpenAddModal(true)
            }
      }
  }
  </script>
  
  <style lang="css" scoped>
      .vertical-menu{
          margin-top: 70px;
      }
      .sidebar-menu{
          padding :0 !important;
      }
      #side-menu>li{
          font-weight: 400;
      }
      #side-menu>li:hover{
          background-color:rgba(242, 242, 242, 1);
          border-left: 2px solid black;
      }
      .btn-annonce{
        padding: 14px 18px;
        border-radius: 8px;
      }
  </style>