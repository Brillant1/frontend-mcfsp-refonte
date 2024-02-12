<template>
        
       <header id="page-topbar">
            <div class="bg-white py-3 px-5 d-flex justify-content-between">
                <img src="@/assets/admin/images/MastercardFoundation.png" alt="logo mastercard" width="50">
                <img src="@/assets/admin/images/logo_uac_used_with_mcfsp.png" alt="logo UAC" width="120" height="">
            </div>
            <div class="navbar-header d-flex justify-content-end m-bg-success align-items-center">
                <div class="">
                    <div class="dropdown d-inline-block">
                        <div class="header-item d-flex align-items-center" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                            <img class="rounded-circle header-profile-user me-2" src="@/assets/admin/images/avatar-user.png"
                                alt="Header Avatar">
                                <div class="text-white ">
                                    <span class="font-bold">  {{ this.user.name }} </span> <br>
                                    <span>   {{ this.user.email }}   </span>
                                </div>
                            <span class="d-none d-xl-inline-block ms-1 text-white" key="t-henry">
                                
                            </span>
                            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </div>
                        <div class="dropdown-menu dropdown-menu-end">
                            <!-- item-->
                            <a class="dropdown-item" href="#"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                            <a class="dropdown-item" href="#"><i class="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                            <a class="dropdown-item d-block" href="#"><span class="badge bg-success float-end">11</span><i class="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                            <a class="dropdown-item" href="#"><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-danger" href="#"><i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>

</template>

<script>
import { authStore } from '@/store';

export default {
 
    data() {
        return {
            user: '',
        }
    },

    mounted() {
      const store = authStore();
      this.user = store.getUser;
    }
};
</script>

<style lang="css" scoped>
    .navbar-header .dropdown .show.header-item{
        background: transparent;
    }
    #page-header-user-dropdown{
        cursor: pointer;
    }
</style>