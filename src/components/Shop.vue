<template>
  <div>
      商店
       <div v-for="item in data"> {{item.goods_name}}</div> 
  </div>
</template>
<script>
  export default {
    name: 'Shop',
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.getGoods()
    },
    methods: {
      getGoods () {
        this.$http.get('http://lc.shudong.wang/api_goods.php?search_text=' + search)
          .then((res) => {
            this.data = res.data.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>
