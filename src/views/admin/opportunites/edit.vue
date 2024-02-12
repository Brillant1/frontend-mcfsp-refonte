<template>
    <admin-layout>
    <div class="p-5">
        <div class="col">
            <router-link to="/opportunites/liste" class="back-link">
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#498371" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </i>
                &nbsp;
                <span class="m-text-success font-bold f-16">Retour</span>
            </router-link>
        </div>
        <h5 class="modal-title mt-5">Modifier</h5>
        <form  enctype="multipart/form-data" class="add-form" @submit.prevent="update">
            <div class="row">
                <div class="mt-4 col-6">
                    <label>Titre</label>
                    <input type="text" class="form-control" v-model="opportunite.titre" required>
                </div>
                <div class="mt-4 col-6">
                    <label>Catégorie</label>
                    
                    <select class=" form-control form-select" v-model="opportunite.categorie" required>
                        <option value=""></option>
                        <option value="Bourse" :selected="opportunite.categorie=='Bourse'">Bourse</option>
                        <option value="Volontariat" :selected="opportunite.categorie=='Volontariat'">Volontariat</option>
                        <option value="Formation" :selected="opportunite.categorie=='Formation'">Formation</option>
                    </select>
                </div>
                <div class="col-6 mt-4">
                    <label class="file">Ajouter une image</label>
                    <input type="file" class="form-control" @input="fileChange" accept=".png,.jpg,.jpeg,.gif,.avif" ref="photo">
                </div>
                <div class="">
                    <img :src="opportunite_media.url" width="150" height="150" style="object-fit: cover;">
                </div>
            
                <div class="col-6 mt-4">
                    <label class="">Date de debut</label>
                    <input type="date" class="form-control"  v-model="opportunite.date_debut" required>
                </div>
                <div class="col-6 mt-4">
                    <label class="">Date de fin</label>
                    <input type="date" class="form-control"  v-model="opportunite.date_fin" required>
                </div>

            <div class="form-group col-6 mt-4" >
                <label for="prenom" >Cette opportunité est-elle postulable ?</label>
                <div class="row my-2">
                    <div class="col-md-6 mt-2">
                        <div class="form-check form-check-inline">
                            <label class="form-check-label d-flex align-items-center">
                            <input type="radio" v-model="opportunite.postulable" value="1" class="form-check-input" required>
                            <p class="mb-0"> &nbsp; Oui</p>
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6 mt-2">
                        <div class="form-check form-check-inline">
                            <label class="form-check-label d-flex align-items-center">
                            <input type="radio" v-model="opportunite.postulable" value="0" class="form-check-input" required>
                            <p class="mb-0"> &nbsp; Non</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label class="font-bold mt-4">Contenu</label>
                <ckeditor v-model="opportunite.description" required></ckeditor>
            </div>
            </div>

            <div>
            <div class="">
                <button class="btn-add w-100 mt-4" type="submit">Enrégister les modifications</button>
            </div>
            </div>
        </form>
    </div>
</admin-layout>
</template>

<script>
import ckeditor from '@/components/admin/ckeditor.vue'
import {useToast} from 'vue-toastification'
import { useOpportuniteStore } from '@/store/opportunite';
import moment from 'moment';
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
export default {
    name: 'EditOpportunite',
    components: {
        ckeditor,
        AdminLayout
    },
    data(){
        return {
            current_opportunite: '',
            opportunite_media: '',
            opportunite : {
                titre: '',
                categorie: '',
                description: '',
                file: '',
                date_debut: '',
                date_fin: '',
                postulable: '',
            },
            form: new FormData()
        }
    },
    mounted(){
        this.getOpportunite()
    },
    methods: {
        getOpportunite(){

            this.current_opportunite = useOpportuniteStore().getOpportunite
            console.log(this.current_opportunite)
            for(let cle in this.opportunite){
                this.opportunite[cle] = this.current_opportunite[cle]
            }
            this.opportunite.date_debut = this.formatDate(this.current_opportunite.date_debut)
            this.opportunite.date_fin = this.formatDate(this.current_opportunite.date_fin)
            this.opportunite_media = this.current_opportunite.media

        },
        update(){
            const toast = useToast();
            for(let cle in this.opportunite){
                this.form.append(cle, this.opportunite[cle])
            }
            let id = this.current_opportunite.id
            this.form.append('opportunite_id', id)

            this.$url.post('opportunites/update', this.form).then(response=>{
             
                this.getOpportunite()
                toast.success('Opportunité modifiée avec succès')
                this.$router.push({ name: 'opportunites/liste' });
            }).catch(error=> {
                console.log(error)
                toast.error('Une erreur s\'est produite lors de la mise à jour')
            })
        },
        fileChange(event){
            this.opportunite.file = event.target.files[0]
        },
        formatDate(k) {
            const d = new Date(k);
            return d.toISOString().slice(0,10);
        }
    }
}
</script>

<style lang="css" scoped>
    input, select {
        font-size: 14px;
    }
</style>