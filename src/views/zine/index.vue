<template>
  <div class="zinee">
    <zine/>
  </div>
</template>

<script>
    import Zine from '@/components/Zine'
    export default {
      name: 'zinee',
      data() {
        return {
            username: 'stark'
        }
      },
      components: {
        zine:Zine
      }
    }
</script>