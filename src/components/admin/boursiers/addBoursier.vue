<template>
    
    <div class="modal fade modal-add" :class="[openModal?'show d-flex':'']" id="add-boursier-modal" ref="addBoursierModal" @click="closeModal">
        <div class="modal-dialog modal-dialog-centered"  @click.stop>
            <div class="modal-content">
                <div class="modal-header border-0">
                    <h5 class="modal-title">Ajouter un boursier</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form enctype="multipart/form-data" class="add-form" @submit.prevent="store">

                        <div class="row">

                            <div class="col-6 mt-3">
                                <label>Nom</label>
                                <input type="text" class="form-control" v-model="boursier.nom" required>
                            </div>
                            <div class="col-6 mt-3">
                                <label>Prénom</label>
                                <input type="text" class="form-control" v-model="boursier.prenom" required>
                            </div>

                            <div class="col-6 mt-3">
                                <label>Département</label>
                                
                                <select class="form-control form-select" v-model="boursier.departement" @change="getCommune()" required>
                                    <option value="" selected>Sélectionnez le département</option>
                                    <option :value="departement.departement" v-if="departements.length>0" v-for="departement in departements" :key="departement.codedep">{{ departement.departement }}</option>
                                </select>
                            </div>
                            <div class="col-6 mt-3">
                                <label>Commune</label>
                                
                                <select class=" form-control form-select" v-model="boursier.commune" required>
                                    <option value="" selected>Sélectionnez la commune</option>
                                    <option :value="commune.commune" v-if="communes.length>0" v-for="commune in communes" :key="commune.codecom">{{ commune.commune }}</option>

                                </select>
                            </div>

                            <div class="col-6 mt-3">
                                <label>Date de naissance</label>
                                <input type="date" class="form-control" v-model="boursier.date_naissance" required>
                            </div>

                            <div class="col-6 mt-3">
                                <label>Lieu de naissance</label>
                                <input type="text" class="form-control" v-model="boursier.lieu_naissance" required>
                            </div>
                        
                            <div class="col-6 mt-3">
                                <label>Cohorte</label>
    
                                <select  class=" form-control form-select" v-model="boursier.cohorte_id" required>
                                    <option value="">Sélectionnez la cohorte</option>

                                    <option :value="cohorte.id" v-if="cohortes.length>0" v-for="cohorte in cohortes" :key="cohorte.id">{{ cohorte.nom }}</option>
                                    
                                </select>
                            </div>
                            <div class="col-6 mt-3">
                                <label>Cycle</label>
                                
                                <select class="form-control form-select" v-model="boursier.cycle_id" required>
                                    <option value="" selected>Sélectionnez le cycle</option>
                                    <option :value="cycle.id" v-if="cycles.length>0" v-for="cycle in cycles" :key="cycle.id">{{ cycle.nom }}</option>
                                </select>
                            </div>
                            
                                <div class="col-6 mt-3 select">
                                    <label>Ecole</label>
                                    <select class=" form-control form-select" v-model="boursier.ecole" @change="displayFiliere()" required>
                                        <option value="">Sélectionnez l'école</option>
                                        <option :value="ecole.nom" v-if="ecoles.length>0" v-for="ecole in ecoles" :key="ecole.id">{{ ecole.nom }}</option>
                                    </select>
                                </div>
                                <div class="col-6 mt-3">
                                    <label>Filière</label>
                                    
                                    <select class=" form-control form-select" v-model="boursier.filiere_id" required>
                                        <option value="">Sélectionnez la filière</option>
                                        <option :value="filiere.id" v-if="filieres.length>0" v-for="filiere in filieres" :key="filiere.id">{{ filiere.nom }}</option>
                                    </select>
                                </div>

                                <div class="col-6 mt-3">
                                    <label>Secteur</label>
                                    <select class="form-control form-select" v-model="boursier.secteur_id" required>
                                        <option value="" selected>Sélectionnez le secteur</option>
                                        <option :value="secteur.id" v-if="secteurs.length>0" v-for="secteur in secteurs" :key="secteur.id">{{ secteur.nom }}</option>
                                    </select>
                                </div>

                                <div class="form-group col-6 mt-3" >
                                <label for="prenom" >Sexe</label>
                                <div class="row my-2">
                                    <div class="col-md-6 mt-2">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label d-flex align-items-center">
                                            <input type="radio" v-model="boursier.sexe" value="Masculin" class="form-check-input" required>
                                            <p class="mb-0"> &nbsp; Masculin</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mt-2">
                                        <div class="form-check form-check-inline">
                                            <label class="form-check-label d-flex align-items-center">
                                            <input type="radio" v-model="boursier.sexe" value="Féminin" class="form-check-input" required>
                                            <p class="mb-0"> &nbsp; Féminin</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            
                            <div class="col-12 mt-3">
                                <label class="file">Photo du boursier</label>
                                <input type="file" class="form-control" @input="fileChange" required accept=".png,.jpg,.jpeg,.gif,.avif" ref="image">
                            </div>
                            
                           
                        </div>
                       <div>
                        <div class="">
                            <button class="btn-add w-100 mt-4" type="submit">Ajouter</button>
                        </div>
                       </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show" style="z-index: -100;"></div>
    </div>
</template>

<script>
import ckeditor from '@/components/admin/ckeditor.vue'
import axios from '@/axios'
import { useToast } from 'vue-toastification'
import { useBoursierStore } from '@/store/boursier'
import localisation from '@/components/admin/localisation.json'

export default {
    props: ['boursierData'],
    name: 'boursierModal',
    components: {
        ckeditor
    },
    
    data(){
        return {
            cohortes :'',
            cycles:'',
            departements: '',
            departement_id: '',
            communes: '',
            ecoles: '',
            filieres: '',
            secteurs: '',
            boursier : {
                nom: '',
                prenom: '',
                cohorte_id: '',
                cycle_id: '',
                secteur_id: '',
                filiere_id: '',
               
                ecole: '',
                // filiere: '',
                commune:'',
                departement: '',
                // secteur: '',
                sexe: '',
                date_naissance: '',
                // cycle: '',
                lieu_naissance: '',
                coverImage: '',
                modal_title: 'null',
            },
            myEditorConfig: { /* Votre configuration d'éditeur ici */ },
            initialContent: `
                <p>Gastropub chillwave lumbersexual umami lyft. Poke austin direct trade, marfa raclette letterpress actually. Chartreuse sriracha pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism organic hot chicken literally heirloom occupy af semiotics food truck.Gastropub chillwave lumbersexual umami lyft. Poke austin direct trade, marfa raclette letterpress actually. Chartreuse sriracha pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism organic hot chicken literally heirloom occupy af semiotics food truck.</p>
            ` 
        }
    },
   
    mounted(){
        this.$url.get('cohortes').then(response=> {
            this.cohortes = response.data.data
            console.log(this.cohortes)
        }).catch(error => {
            console.log(error)
        })

        this.$url.get('entites').then(response=> {
            this.ecoles = response.data.data
            
        }).catch(error => {
            console.log(error)
        })

        this.$url.get('cycles').then(response=> {
            this.cycles = response.data.data
            console.log(this.cycles)
        }).catch(error => {
            console.log(error)
        })

        this.$url.get('secteurs').then(response=> {
            this.secteurs = response.data.data
            console.log(this.secteurs)
        }).catch(error => {
            console.log(error)
        })

        this.departements = localisation.departements
        
    },
    computed: {
        openModal(){
            return useBoursierStore().getOpenAddModal
        }
    },
    methods: {
        store(){
            const formData = new FormData();
            const toast = useToast();
            const boursierStore = useBoursierStore()

            for (let cle in this.boursier) {
               formData.append(cle, this.boursier[cle])
            }
            
            this.$url.post('boursiers', formData).then(response => {
                if(response.data.status){
                    boursierStore.setBoursiers()
                    boursierStore.setBoursier(response.data.data.id)
                    toast.success('Boursier ajouté avec succès')
                    boursierStore.setOpenAddModal(false)
                    boursierStore.openSuccessAddModal(true)
                  
                    for (let cle in this.boursier) {
                        this.boursier[cle] = '';
                    }
                    this.$refs.image.value=""
                    this.$router.push('/boursiers/liste')
                }
            }).catch(error => {
                console.log(error)
            })

           
        },
        updateEditorData(contenu) {
            this.initialContent = contenu;
            this.$emit('update:contenu', contenu);
        },
        fileChange(event){
            this.boursier.coverImage = event.target.files[0]
        },
        getCommune(){
            const code = this.departements.find(element=> element.departement===this.boursier.departement).codedep
            this.communes = localisation.communes.filter(element => element.codedep===code)
        },
        displayFiliere(){
            this.filieres = this.ecoles.find(element=> element.nom===this.boursier.ecole).filieres
        },
       closeModal(){
            useBoursierStore().setOpenAddModal(false)
        }
    }
    
}
</script>


<style lang="css" scoped>
   
    input, select{
        font-size: 14px;
    }
    @media (min-width: 576px){
        .modal-dialog{
            min-width:900px !important;
        }
    }
    .form-select{
        background-image: url('@/assets/admin/images/icones/select-arrow.svg');
        background-size: 24px;
    }
    
    
</style>