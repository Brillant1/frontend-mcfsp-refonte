<template >
        <h1 class="text-center pb-4 font-bold">Bienvenue</h1>
        <p class="text-center pb-4">
            Veuillez  procéder à la création d'un compte pour continuer 
        </p>
        <form class="auth-form" @submit.prevent="store">
            <div class="col-sm-auto">
                <label class="" for="autoSizingInputGroup">Nom et prénom(s)</label>
                <div class="input-group border">
                    <input type="text" v-model="form_data.name" class="form-control py-3 " required id="autoSizingInputGroup" placeholder="John DOE">
                </div>
            </div>
            <div class="col-sm-auto mt-4">
                <label class="" for="autoSizingInputGroup">Adresse email</label>
                <div class="input-group border">
                    <input type="email" v-model="form_data.email" required class="form-control py-3 " id="autoSizingInputGroup" placeholder="Ex: john.doe@gmail.com">
                </div>
            </div>

            <div class="col-sm-auto mt-4">
                <label class="" for="autoSizingInputGroup">Mot de passe</label>
                <div class="input-group" :class="{'border border-success':form_data.password!=='' && this.isCorrectFormat, 'border border-danger':form_data.password!=='' && !this.isCorrectFormat}">
                    <input type="password" v-model="form_data.password" required class="form-control py-3 border-0 " id="autoSizingInputGroup" ref="password" placeholder=".........................."
                    @input="verifyPasswordFormat">
                    <div class="input-group-text bg-white border-0 border border-danger input-group-password-show"  @click="showPassword">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16" v-if="!display_eye_close_password">
                            <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"/>
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" v-else>
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="col-sm-auto mt-4">
                <label class="" for="autoSizingInputGroup">Confirmer le mot de passe</label>
                <div class="input-group" :class="{'border border-success': this.form_data.password_confirmation!=='' && isCorrectPasswordConfirmFormat, 'border border-danger': this.form_data.password_confirmation!=='' && !isCorrectPasswordConfirmFormat}">
                    <input type="password" required v-model="form_data.password_confirmation" ref="password_confirmation" class="form-control py-3 border-0 " id="autoSizingInputGroup" placeholder=".........................." 
                    @input="verifyPassswordConfirmationFormat">
                    <div class="input-group-text bg-white border-0 border border-danger input-group-password-show" @click="showPasswordConfirmation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16" v-if="!display_eye_close_password_confirmation">
                            <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.027 7.027 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.088z"/>
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.707z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16" v-else>
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between py-3">
                <p>Vous avez déjà un compte ?</p>
                <router-link to="/login" class="text-decoration-underline">Connectez-vous ici</router-link>
            </div>
            <button class=" btn-add w-100" type="submit" :disabled="!ok_form">S'inscrire</button>

        </form>
  
</template>

<script>
import { useToast } from "vue-toastification";
export default {
    name:'Register',
    components: {},
    data(){
        return {
            form_data: {
                name: '',
                email: '',
                user_type: 'user',
                password: '',
                password_confirmation: ''
            },
            display_eye_close_password : false,
            display_eye_close_password_confirmation : false,
            isCorrectPasswordConfirmFormat: false,
            isCorrectFormat: false,
        }
    },
    methods: {
        store(){
            const toast = useToast()
            this.$url.post('register', this.form_data).then(response=> {
                if(response.data.status){
                    localStorage.setItem('register_email', this.form_data.email)
                    toast.success('Inscription effectuée avec succès')
                    this.$router.push('/validate_code/register')
                }
            }).catch(error=>{
                toast.error(error.response.data.message)
            })
        },
        showPassword(){
            const password = this.$refs.password;
            if(password.type==="password"){
                password.type="text"
                this.display_eye_close_password=true
            }else{
                password.type="password"
                this.display_eye_close_password=false
            }
        },
        showPasswordConfirmation(){
            const password = this.$refs.password_confirmation;
            if(password.type==="password"){
                password.type="text"
                this.display_eye_close_password_confirmation=true
            }else{
                password.type="password"
                this.display_eye_close_password_confirmation=false
            }
        },
        verifyPasswordFormat(){
            const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/;
            
            if (regex.test(this.form_data.password)) {
            this.isCorrectFormat = true;
            } else {
            this.isCorrectFormat = false;
            }
            this.isCorrectPasswordConfirmFormat = false;
        },
        verifyPassswordConfirmationFormat(){
            if (this.form_data.password!==this.form_data.password_confirmation){
            this.isCorrectPasswordConfirmFormat = false;
            } else {
            this.isCorrectPasswordConfirmFormat = true;
            }
        }
    },
    computed: {
        ok_form(){
            if(this.isCorrectPasswordConfirmFormat && this.isCorrectFormat && this.form_data.email!=='' && this.form_data.name!==''){
                return true
            }
            return false  
        }
    }
}
</script>


<style lang="css" scoped>
   
    .input-group,input{
        border: 1px solid #858C94;
        border-radius: 8px;
        font-size: 14px;
    }
    input::placeholder, input::placeholder{
        font-size: 14px;
        font-weight: 500;
        line-height: 20;
    }

</style>