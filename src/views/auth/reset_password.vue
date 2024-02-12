<template class="">

    <h1 class="text-center pb-4 font-bold">Nouveau mot de passe</h1>
    <p class="text-center">
        Veuillez définir et confirmer votre nouveau mot de passe
    </p>
    <form class="auth-form" @submit.prevent="reset">
        <div class="col-sm-auto mt-4">
            <label class="" for="autoSizingInputGroup">Mot de passe</label>
            <div class="input-group" :class="{'border border-success':form_data.password!=='' && this.isCorrectFormat, 'border border-danger':form_data.password!=='' && !this.isCorrectFormat}">
                <input type="password" class="form-control py-3 border-0" ref="password" v-model="form_data.password" id="autoSizingInputGroup" placeholder=".........................." 
                @input="verifyPasswordFormat" required>
                <div class="input-group-text bg-white border-0 input-group-password-show" @click="showPassword">
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
            <div class="input-group" :class="{'border border-success': this.form_data.password_confirmation!=='' && isCorrectPasswordConfirmFormat, 'border border-danger': this.form_data.password_confirmation!=='' && !isCorrectPasswordConfirmFormat}" style="border-radius: 3px;">
                <input type="password" ref="password_confirmation" class="form-control py-3 border-0" v-model="form_data.password_confirmation" id="autoSizingInputGroup" placeholder=".........................." 
                @input="verifyPassswordConfirmationFormat" required>
                <div class=" input-group-text bg-white border-0 pe-3 input-group-password-show " @click="showPasswordConfirmation">
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
        <button class="btn-add w-100 mt-4" type="submit" :disabled="!ok_form">Enregistrer</button>
        <div class="d-flex justify-content-center py-3"><router-link to="/" class=" text-decoration-underline m-text-success">Aller à la connexion</router-link></div>

    </form>

</template>
<script>
import {useToast} from 'vue-toastification'
export default {
    name:'Login',
    data(){
        return {
            form_data: {
                password : '',
                email: localStorage.getItem('forgot_email'),
                password_confirmation: ''
            },
            display_eye_close_password : false,
            display_eye_close_password_confirmation : false,
            isCorrectPasswordConfirmFormat: false,
            isCorrectFormat: false,
        }
    },
    methods: {
        reset(){
            const toast = useToast()
            this.$url.post('password/reset', this.form_data).then(response=>{
                console.log(response)
                if(response.data.status){
                    toast.success('Mot de passe réinitialisé avec succès, connectez-vous maintenant')
                    this.$router.push('/')
                }
            }).catch(error => {
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
            if(this.isCorrectPasswordConfirmFormat && this.isCorrectFormat){
                return true
            }
            return false  
        }
    }
}
</script>

<style lang="css" scoped>
   
    .input-group,input[type="email"]{
        border: 1px solid #858C94;
        border-radius: 8px !important;
    }
    input{
        font-size: 14px;
    }
    input[type="email"]::placeholder, input[type="password"]::placeholder{
        font-size: 14px;
        font-weight: 500;
        line-height: 20;
    }
</style>