<template>
	<component :is="currentLayout">
		<router-view></router-view>
	</component>
</template>

<script>
	import { useRoute } from 'vue-router';

	export default {
		name: 'App',

		data() {
			return {
				currentLayout: '',
			};
		},

    mounted(){
      this.$url.get('user').then(response=>{
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },

    beforeMounted(){
      
      const route = useRoute();
      this.currentLayout = route.meta.layout;

      if(this.currentLayout === '' || this.currentLayout !== 'admin-layout') {
        this.currentLayout === 'website-layout';
      }
    },
    
    watch: {
      $route(to, from) {
				this.currentLayout = to.meta.layout
      }
    },
  }
</script>