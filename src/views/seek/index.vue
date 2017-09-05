<template>
  <div class="seekk">
    <seek></seek>
  </div>
</template>

<script>
    import Seek from '@/components/Seek'
    export default {
      name: 'seekk',
      data() {
        return {
            username: 'stark'
        }
      },
      components: {
        seek:Seek
      }    
    }
</script>