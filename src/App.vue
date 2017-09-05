<template>
    <div>
        <navbar> </navbar>
        <!--显示路由切换后的页面  -->
         <router-view class="text-center"></router-view> 
        <footers></footers>
    </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Footers from '@/components/Footers'
  // import oldModule  from './assets/js/app.js'    
  // oldModule() 
  export default {
    name: 'app',
    data() {
      return {
          username: 'stark'
      }
      },
      components:{
        navbar: Navbar,
        footers: Footers
      }
    }
</script>

<style>

</style>