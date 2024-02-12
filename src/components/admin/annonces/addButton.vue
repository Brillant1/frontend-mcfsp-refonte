<template>
    <div class="d-flex justify-content-center py-3"><button class="btn btn-danger fs-16 fw-bold px-5 btn-annonce" @click="openModal">Créer une annonce</button></div>
</template>

<script>
import {useAnnonceStore} from '@/store/annonce'
export default {
    name: 'addButton',
    methods: {
        openModal(){
            useAnnonceStore().setOpenAddModal(true)
        }
    }
}
</script>

<style lang="css" scoped>
    .btn-annonce{
        padding: 14px 18px;
        border-radius: 8px;
      }
</style>