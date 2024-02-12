<template>
    <div id="layout-wrapper">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <slot/>
                </div>
            </div>
        <Footer></Footer>
        </div>
        
    </div>
</template>
<script>



import('@/assets/admin/libs/jquery/jquery.min.js')
import('@/assets/admin/libs/bootstrap/js/bootstrap.bundle.min.js')
import('@/assets/admin/libs/metismenu/metisMenu.min.js')
import('@/assets/admin/libs/simplebar/simplebar.min.js')
import('@/assets/admin/libs/node-waves/waves.min.js')
import('@/assets/admin/libs/apexcharts/apexcharts.min.js')
import('@/assets/admin/js/pages/dashboard.init.js')
import('@/assets/admin/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js')
// import('@/assets/admin/libs/select2/js/select2.min.js')
import('@/assets/admin/js/app.js')
import('@/assets/admin/libs/dropzone/min/dropzone.min.js')

import('@/assets/admin/libs/datatables.net/js/jquery.dataTables.min.js')
import('@/assets/admin/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js')
 

import('@/assets/admin/libs/datatables.net-buttons/js/dataTables.buttons.min.js')
import('@/assets/admin/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js')

import('@/assets/admin/libs/jszip/jszip.min.js')
import('@/assets/admin/libs/pdfmake/build/pdfmake.min.js')
import('@/assets/admin/libs/pdfmake/build/vfs_fonts.js')
import('@/assets/admin/libs/datatables.net-buttons/js/buttons.colVis.min.js')
import('@/assets/admin/libs/datatables.net-buttons/js/buttons.print.min.js')
import('@/assets/admin/libs/datatables.net-buttons/js/buttons.html5.min.js')

import('@/assets/admin/libs/datatables.net-responsive/js/dataTables.responsive.min.js')
import('@/assets/admin/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js')






import Header from './Header.vue'
import Footer from './Footer.vue'
import Sidebar from './Sidebar.vue'


export default {
    name: 'AdminLayout',
    components: {
        Header, Footer, Sidebar
    },
}
</script>

<style lang="css">
    @import url('@/assets/admin/css/style.css');
    @import url('@/assets/admin/css/bootstrap.min.css');
    @import url('@/assets/admin/css/icons.min.css');
    @import url('@/assets/admin/css/app.min.css');
    @import url('@/assets/admin/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css');
    @import url('@/assets/admin/libs/select2/css/select2.min.css');
    @import url('@/assets/admin/css/icons.min.css');
    @import url('@/assets/admin/libs/dropzone/min/dropzone.min.css');
    @import url('@/assets/admin/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css');
    @import url('@/assets/admin/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css');
    @import url('@/assets/admin/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css');



    #layout-wrapper{
        margin-top:70px;
    }
</style>