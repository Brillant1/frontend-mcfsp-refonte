<template>
    <admin-layout>
        <div class="p-5">
            <div class="col">
                <router-link to="/boursiers/liste" class="back-link">
                    <i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#498371" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </i>
                    &nbsp;
                    <span class="m-text-success font-bold f-16">Retour</span>
                </router-link>
            </div>
            <h5 class="modal-title mt-5">Modifier {{ current_scholar.nom }}</h5>
            <form enctype="multipart/form-data" class="add-form" @submit.prevent="update">
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
                        <option :value="commune.commune" v-if="communes.length>0" v-for="commune in communes" :key="commune.codecom" :selected="boursier.commune===commune.commune">{{ commune.commune }}</option>
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

                    <select name="" id="" class=" form-control form-select" v-model="boursier.cohorte_id" required>
                        <option value="">Sélectionnez la cohorte</option>

                        <option :value="cohorte.id" :selected="cohorte.id===boursier_cohorte.id" v-if="cohortes.length>0" v-for="cohorte in cohortes" :key="cohorte.id">{{ cohorte.nom }}</option>
                        
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
                        <select name="" id="" class=" form-control form-select" v-model="boursier.ecole" @change="displayFiliere()" required>
                            <option value="">Sélectionnez l'école</option>
                            <option :value="ecole.nom" v-if="ecoles.length>0" v-for="ecole in ecoles" :key="ecole.id">{{ ecole.nom }}</option>
                        </select>
                    </div>
                    <div class="col-6 mt-3">
                        <label>Filière</label>
                        <select name="" id="" class="form-control form-select" v-model="boursier.filiere_id" required>
                            <option value="">Sélectionnez la filière</option>
                            <option :value="filiere.id" v-if="filieres.length>0" v-for="filiere in filieres" :key="filiere.id">{{ filiere.nom }}</option>
                        </select>
                    </div>


                    <div class="col-6 mt-3">
                        <label>Secteur</label>
                        <select class="form-control form-select" v-model="boursier.secteur_id" required>
                            <option value="Agnonomie">Sélectionnez le secteur</option>
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
                    <input type="file" class="form-control" @input="fileChange" accept=".png,.jpg,.jpeg,.gif,.avif" ref="image">
                </div>
                <div class="">
                    <img :src="boursier_media.url" width="150" height="150" style="object-fit: cover;">
                </div>
            
                <div class="pt-4">
                    <label class="font-bold mt-4">Histoire</label>
                    <ckeditor v-model="boursier.histoire"></ckeditor>
                </div>
            
            </div>
            <div>
            <div class="">
                <button class="btn-add w-100 mt-4" type="submit">Ajouter</button>
            </div>
        </div>
    </form>
        </div>
    </admin-layout>
</template>

<script>
import axios from '@/axios'
import ckeditor from '@/components/admin/ckeditor.vue'
import { useToast } from 'vue-toastification'
import localisation from '@/components/admin/localisation.json'
import adminLayout from '@/layouts/admin/AdminLayout.vue';
import { useBoursierStore } from '@/store/boursier';

export default {
    name:'Edit',
    components: {
        ckeditor,adminLayout
    },
    data(){
        return {
            cohortes: '',
            boursier_cohorte: '',
            boursier_media: '',
            communes: '',
            departements: '',
            ecoles: '',
            cycles: '',
            secteurs: '',
            filieres: '',
            boursier_commune: '',
            current_scholar: '',
            boursier : {
                nom: '',
                prenom: '',
                cohorte_id: '',
                cycle_id: '',
                ecole: '',
                filiere_id: '',
                commune:'',
                departement: '',
                secteur_id: '',
                sexe: '',
                date_naissance: '',
                lieu_naissance: '',
                coverImage: '',
                histoire: ' ',
            },
            form: new FormData()
       
        }
    },
    mounted(){
        this.current_scholar = useBoursierStore().getBoursier;
        this.boursier_cohorte = this.current_scholar.cohorte
        this.boursier_media = this.current_scholar.media
        for(let cle in this.boursier){
            this.boursier[cle] = this.current_scholar[cle]
        }
        // this.boursier.cycle = this.current_scholar.cycle.id
        // this.boursier.cohorte_id = this.boursier_cohorte.id
        

        this.$url.get('cohortes').then(response=> {
            this.cohortes = response.data.data
        }).catch(error => {
            console.log(error)
        })

        this.$url.get('entites').then(response=> {
            this.ecoles = response.data.data
            this.filieres = this.ecoles.find(element=> element.nom===this.boursier.ecole).filieres
            
        }).catch(error => {
            console.log(error)
        })

        this.$url.get('cycles').then(response=> {
            this.cycles = response.data.data
          
        }).catch(error => {
            console.log(error)
        })

        this.$url.get('secteurs').then(response=> {
            this.secteurs = response.data.data
        }).catch(error => {
            console.log(error)
        })

        this.departements = localisation.departements

        const code = this.departements.find(element=> element.departement===this.boursier.departement).codedep
        this.communes = localisation.communes.filter(element => element.codedep===code)

    },
    methods: {
        update(){
            const toast = useToast();

            for(let cle in this.boursier){
                this.form.append(cle, this.boursier[cle])
            }
            
            this.form.append('boursier_id', this.current_scholar.id)

            this.$url.post('boursiers/update', this.form).then(response=>{
                console.log(response)
                toast.success('Boursier modifié avec succès')
                this.$router.push({ name: 'boursiers/liste' });
            }).catch(error=> {
                console.log(error)
                toast.error('Une erreur s\'est produite lors de la mise à jour')
            })
        },
        fileChange(event){
            this.boursier.coverImage = event.target.files[0]
        },
        updateEditorData(contenu) {
            this.boursier.histoire = contenu;
            this.$emit('update:contenu', contenu);
        },

        getCommune(){
            const code = this.departements.find(element=> element.departement===this.boursier.departement).codedep
            this.communes = localisation.communes.filter(element => element.codedep===code)
        },

        displayFiliere(){
            this.filieres = this.ecoles.find(element=> element.nom===this.boursier.ecole).filieres
        }
    }
}
</script>

<style lang="css" scoped>
    .form-select{
        background-image: url('@/assets/admin/images/icones/select-arrow.svg');
        background-size: 24px;
    }
    input, select{
        font-size: 14px;
    }
</style>