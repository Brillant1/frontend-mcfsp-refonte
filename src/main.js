import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.css';
import App from './App.vue';
import router from '@/router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createHead } from '@unhead/vue';
const head = createHead();


// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import axiosInstance from './axios';
// import AdminLayout from '@/layouts/admin/AdminLayout.vue';
// import WebsiteLayout from '@/layouts/website/WebsiteLayout.vue';
import SimpleLayout from '@/layouts/others/SimpleLayout.vue';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
const toastOptions = {position: "bottom-left",timeout: 3000,closeOnClick: true,pauseOnFocusLoss: true,pauseOnHover: true,draggable: true,draggablePercent: 0.6,showCloseButtonOnHover: false,hideProgressBar: true,closeButton: "button",icon: true,rtl: false}


// app.component('admin-layout', AdminLayout)
// app.component('website-layout', WebsiteLayout)
app.component('simple-layout', SimpleLayout)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$url = axiosInstance;

app.use(router).use(pinia).use(head).use(Toast, toastOptions)

app.mount('#app');