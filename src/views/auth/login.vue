<template class="">
  
        <h1 class="text-center pb-4 font-bold">Bienvenue</h1>
        <p class="text-center pb-4">
            Veuillez  vous connecter en renseignant votre 
            adresse  gmail et votre mot de passe
        </p>
        <form class="auth-form" @submit.prevent="login">
            <div class="col-sm-auto">
                <label class="" for="email">Adresse email</label>
                <div class="input-group border">
                    <input type="email" v-model="form_data.email" class="form-control py-3 " id="email" placeholder="Ex: email@gmail.com" required>
                </div>
            </div>

            <div class="col-sm-auto mt-4">
                <label class="" for="password">Mot de passe</label>
                <div class="input-group">
                    <input type="password" v-model="form_data.password" class="form-control py-3 border-0 " id="password" ref="password" placeholder=".........................." required>
                    <div class="input-group-text bg-white border-0 input-group-password-show "  @click="showPassword">
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
            <div class="d-flex justify-content-end py-3"><router-link to="/forgot_password" class=" text-decoration-underline">Mot de passe oublié ?</router-link></div>
            <div class="d-flex justify-content-between py-2">
                <p>Vous n'avez pas encore un compte ?</p>
                <router-link to="/register" class="text-decoration-underline">Inscrivez-vous ici</router-link>
            </div>
            <button class=" btn-add w-100" type="submit">Se connecter</button>

        </form>
   
</template>

<script>
import {authStore} from '@/store';
import { useToast } from "vue-toastification";

export default {
    
    name:'Login',
    data(){
        return {
            form_data: {
                email: '',
                password: ''
            },
            display_eye_close_password : false,
        }
    },
    methods: {
        login(){
            const store = authStore();
            const toast = useToast()
            this.$url.post('login', this.form_data).then(response=>{
                console.log(response)
                let user = response.data.user
                if(response.data.status){
                    // localStorage.setItem('token', response.data.token)
                    store.setUser(user)
                    store.setToken(response.data.token)
                    toast.success('Connection effectuée avec succès')
                    this.$router.push('/dashboard')
                }
            }).catch(error=>{
                console.log(error)
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
    }
}
</script>

<style lang="css" scoped>
   
    .input-group,input[type="email"], input[type="password"]{
        border: 1px solid #858C94;
        border-radius: 8px;
   
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