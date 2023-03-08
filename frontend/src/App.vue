<template>
  <SideBar/>
  <TopBar/>
  <router-view/>
  <FooTer/>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
import FooTer from '@/components/FooTer.vue'


export default {
  
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SideBar , TopBar, FooTer,
  }
}


</script>

<style>
.body{margin-left: 196px ;}
</style>

