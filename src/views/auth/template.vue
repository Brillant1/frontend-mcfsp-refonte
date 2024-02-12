<template class="">
    <simple-layout>
    <div class="main-container d-flex justify-content-center align-items-center">
        <div class="d-flex justify-content-center align-items-center ">
            <div class="form-content">
                <div class=" d-flex justify-content-between mb-3">
                    <img src="@/assets/admin/images/MastercardFoundation.png" alt="logo mastercard" width="50">
                    <img src="@/assets/admin/images/logo_uac_used_with_mcfsp.png" alt="logo UAC" width="120" height="">
                </div>
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</simple-layout>
</template>

<script>
import simpleLayout from '@/layouts/others/SimpleLayout.vue'
export default {
    name: 'template',
    components: {simpleLayout}
}
</script>

<style lang="css" scoped>

    .main-container{
        background-image: url('@/assets/admin/images/bg-img-authe.png');
        min-height:100vh;
        background-repeat: no-repeat;
        background-size: 100%;
        width: 100%;
    }
    .form-content{
        width: 700px;
        padding: 40px;
        border-radius: 16px;
        background-color: white;
    }
    

</style>