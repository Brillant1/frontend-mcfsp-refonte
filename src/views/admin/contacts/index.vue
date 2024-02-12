<template>
     <admin-layout>
    <div class="row">
        <div class="col-12">
        <div
            class="page-title-box d-sm-flex align-items-center justify-content-start"
          >
            <h4 class="mb-sm-0 title">Contacts & Newsletters</h4>
        </div>
        </div>
    </div>
    <div class="tab-section d-flex position-relative">
        <router-link to="/contacts" class="tab-section-item p-3 mt-1">Contacts</router-link>
        <router-link to="/newsletters" class="p-3 mt-1 text-dark">Newsletters </router-link>
    </div>
    <div class="row ">
        <router-view></router-view>
    </div>
  </admin-layout>
</template>

<script>
import adminLayout from '@/layouts/admin/AdminLayout.vue';
export default {
    name: 'Contacts',
    components: {adminLayout}
}
</script>

<style lang="css" scoped>
    .tab-section{
        border-bottom: 4px solid #A4A4A44D;
        border-radius: 4px
    }
    .tab-section-item{
        border-bottom: 4px solid #498371;
        color: #000;
        font-weight: bold;
    }
</style>