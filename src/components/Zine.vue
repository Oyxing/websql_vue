<template>
<div>
    头条
       <div v-for="item in datas"> {{item.abstract}}</div>
</div>
</template>
<!--<script src="js/vue-resource.js"></script>-->
<script>

    export default {
        data() {
            return {
              data: {},
              datas:{}
            }
        },
         created () {
      this.get()
    },
         methods:{
             get(){ 
    var url = this.HOST + '/api/news/feed/v51/'
    this.$http.get(url).then(res => {
      this.data = res.data.data;
      console.log(this.data);      
      // console.log(this.data[0].content);
      console.log(JSON.parse(this.data[0].content))
      var arr=[];
      for(var i=0;i<this.data.length-1;i++){
        //  console.log(this.data[i].content);
        //  this.datas = JSON.parse(this.data[i].content);
         arr.push(JSON.parse(this.data[i].content));
         this.datas = arr;
         console.log(this.datas)
}
    },res => {
      console.info('调用失败');
    });
             }
       }
    }
</script>