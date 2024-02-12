<template class="">

  <h1 class="text-center pb-4 font-bold">Confirmation de code </h1>
  <p class="text-center pb-4">
     Réinitialisation du mot de passe
  </p>
  <p class="text-center">Entrez le code à 5 chiffres envoyé à votre boîte mail <br> <span class="font-bold">livreur@door.com</span></p>
  <p class="text-center py-3">Code de vérification</p>
  <form class="auth-form" @submit.prevent="save">
      <div class="otp-field mb-4">
          <input v-model="input1" type="number" />
          <input v-model="input2" type="number" disabled />
          <input v-model="input3" type="number" disabled />
          <input v-model="input4" type="number" disabled />
          <input v-model="input5" type="number" disabled />
      </div>
      <button class="btn-add w-100 mt-2" type="submit">Confirmer</button>
      <div class="d-flex justify-content-center py-4"><router-link to="/" class=" text-decoration-underline m-text-success">Aller à la connexion</router-link></div>
  </form>

</template>

<script>
  
$(document).ready(function(){

const inputs = document.querySelectorAll(".otp-field > input");
const button = document.querySelector(".btn-add");


window.addEventListener("load", () => inputs[0].focus());
button.setAttribute("disabled", "disabled");

inputs[0].addEventListener("paste", function (event) {
  event.preventDefault();

  const pastedValue = (event.clipboardData || window.clipboardData).getData(
      "text"
  );
  const otpLength = inputs.length;

for (let i = 0; i < otpLength; i++) {
  if (i < pastedValue.length) {
    inputs[i].value = pastedValue[i];
    inputs[i].removeAttribute("disabled");
    inputs[i].focus;
  } else {
    inputs[i].value = ""; // Clear any remaining inputs
    inputs[i].focus;
  }
}
});

inputs.forEach((input, index1) => {
input.addEventListener("keyup", (e) => {
  const currentInput = input;
  const nextInput = input.nextElementSibling;
  const prevInput = input.previousElementSibling;

  if (currentInput.value.length > 1) {
    currentInput.value = "";
    return;
  }

  if (
    nextInput &&
    nextInput.hasAttribute("disabled") &&
    currentInput.value !== ""
  ) {
    nextInput.removeAttribute("disabled");
    nextInput.focus();
  }

  if (e.key === "Backspace") {
    inputs.forEach((input, index2) => {
      if (index1 <= index2 && prevInput) {
        input.setAttribute("disabled", true);
        input.value = "";
        prevInput.focus();
      }
    });
  }

  button.classList.remove("active");
  button.setAttribute("disabled", "disabled");

  const inputsNo = inputs.length;
  if (!inputs[inputsNo - 1].disabled && inputs[inputsNo - 1].value !== "") {
    button.classList.add("active");
    button.removeAttribute("disabled");

    return;
  }
});
});
});
import { useToast } from 'vue-toastification'

export default {
  name:'Login',
  components: {simpleLayout},
  data(){
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
    }
  },
  
  methods: {
    save(){
      const toast = useToast()
      let code = this.input1.toString()+this.input2.toString()+this.input3.toString()+this.input4.toString()+this.input5.toString();
      if(this.$route.params.from=="register"){
          this.$url.post('validate_account', {
            email: localStorage.getItem('register_email'),
            code: code
          }).then(response=>{
            console.log(response)
            if(response.data.status){
              toast.success('Code vérifié avec succès')
              this.$router.push('/')
            }
          }).catch(error => {
            toast.error(error.response.data.message)
          })
      }else {
        this.$url.post('validate_forgot_password_code', {
            email: localStorage.getItem('forgot_email'),
            code: code
          }).then(response=>{
            console.log(response)
            if(response.data.status){
              toast.success('Code vérifié avec succès')
              this.$router.push('/reset_password')
            }
          }).catch(error => {
            toast.error(error.response.data.message)
          })
      }
    },
  }
}
</script>

<style lang="css" scoped>
  .otp-field {
      flex-direction: row;
      column-gap: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .otp-field input {
      height: 45px;
      width: 42px;
      /* border-radius: 6px; */
      outline: none;
      font-size: 1.125rem;
      border: none;
      text-align: center;
      border-bottom: 2px solid#4D4D4D;
      background: none;
  }
  .otp-field input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  .otp-field input::-webkit-inner-spin-button,
  .otp-field input::-webkit-outer-spin-button {
      display: none;
  }

</style>