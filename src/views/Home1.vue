<template>
    <div>
        <enroll />
    </div>
</template>

<script>
  import Enroll from '@/views/registration/Enroll'
  export default {
    name: 'app',
    data() {
      return {
          username: 'stark'
      }
      },
      components:{
        enroll: Enroll
      }
    }
</script>

<style>

</style>