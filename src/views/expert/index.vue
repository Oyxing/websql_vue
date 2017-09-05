<template>
  <div class="expertt">
    <expert/>
  </div>
</template>

<script>
    import Expert from '@/components/Expert'
    export default {
      name: 'expertt',
      data() {
        return {
            username: 'stark'
        }
      },
      components: {
        expert:Expert
      }
    }
</script>