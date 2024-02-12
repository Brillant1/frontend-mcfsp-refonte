<template>
	<admin-layout>
		<!-- <router-link to="/dashboard" class="fs-16">Aller au dashboard</router-link> -->

		<div class="row">
            <div class="col-12">
            <div class="page-title-box d-sm-flex align-items-center justify-content-start">
            </div>
            </div>
        </div>
		<div class="row">
            <div class="card d-flex justify-content-center align-items-center">
                <div >
                    <img src="@/assets/admin/images/404.png">
                </div>
            </div>
        </div>
</admin-layout>
</template>

<script>
import adminLayout from '@/layouts/admin/AdminLayout.vue'
import AdminLayout from '../layouts/admin/AdminLayout.vue'
export default {
  components: { AdminLayout },
	name: 'pageNotFound',

}
</script>
