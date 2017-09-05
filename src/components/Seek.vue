<template>
  <div>
      <div v-for="item in data"> {{item.goods_name}}</div>
  </div>
</template>

<script>
  export default {
    name: 'SeeK',
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
        var search = null
        console.log(search)
        if (search !== 'Hi') {
          search = this.$route.query.search
        } else {
          search = this.$route.query.search = 'Hi'
        }
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
