<template>
    <div>
        <register />
    </div>
</template>

<script>
  import Register from '@/views/registration/Register'
  export default {
    name: 'app',
    data() {
      return {
          username: 'stark'
      }
      },
      components:{
        register: Register
      }
    }
</script>

<style>

</style>