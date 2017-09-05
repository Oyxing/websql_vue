<template>
  <div class="shopp">
    <shop/>
  </div>
</template>

<script>
    import Shop from '@/components/Shop'
    export default {
      name: 'shopp',
      data() {
        return {
            username: 'stark'
        }
      },
      components: {
        shop:Shop
      }
    }
</script>