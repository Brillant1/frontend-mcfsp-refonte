<template class="">
 
    <h1 class="text-center pb-2 font-bold">Réinitialisation du mot de passe</h1>
    <p class="text-center">
        Veuillez renseigner l'adresse mail que vous avez utilisé lors de l'inscription
    </p>
    <form class="auth-form" @submit.prevent="save">

        <div class="col-sm-auto">
            <label class="mt-3" for="autoSizingInputGroup">Email</label>
            <div class="input-group border">
                <input type="email" v-model="form_data.email" required class="form-control py-3 " id="autoSizingInputGroup" placeholder="Ex: email@gmail.com">
            </div>
        </div>
        <button class=" btn-add w-100 mt-4" type="submit">Soumettre</button>
        <div class="d-flex justify-content-center py-3"><router-link to="/" class=" text-decoration-underline m-text-success">Aller à la connexion</router-link></div>
    </form>

</template>

<script>
import {useToast} from 'vue-toastification'
export default {
    name:'ForgotPassword',
    data(){
        return {
            form_data : {
                email : '',
                navigateur: 'navigateur'
            }
        }
    },
    methods: {
        save(){
            const toast = useToast()

            this.$url.post('/password/forgot',this.form_data).then(response=>{
                if(response.data.status){
                    localStorage.setItem('forgot_email', this.form_data.email)
                    this.$router.push('/validate_code/forgot_password')
                }
            }).catch(error => {
                toast.error(error.response.data.message)
            })
        }
    }
}
</script>

<style lang="css" scoped>
   
    .input-group,input[type="email"]{
        border: 1px solid #858C94;
        border-radius: 8px;
        font-size: 14px;
    }
    input[type="email"]::placeholder, input[type="password"]::placeholder{
        font-size: 14px;
        font-weight: 500;
        line-height: 20;
    }

</style>