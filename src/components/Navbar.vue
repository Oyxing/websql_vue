<template>
  <div>
      <nav class="navbar navbar-default navber-success">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <!--当你切换到移动端或屏幕比较小的时候显示的logo-->
             <div class="navbar-header">
                <!--显示在页面的logo--> 
               <a class="navbar-brand" href="/"><img style="height:100%" src="../assets/image/01.png"/></a>
             </div> 
             <!-- Collect the nav links, forms, and other content for toggling  --> 
            <div class="navbar-collapse" >
                <ul class="nav navbar-nav navbar-right">
                  <router-link to="/register" tag="li"> <a> 登录 </a> </router-link>
                  <router-link to="/enroll" tag="li"> <a> 注册 </a> </router-link>
                </ul>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-default navber-success1">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-left">
        <router-link to="/home" tag="li"> <a> 首页 </a> </router-link>
        <router-link to="/shop" tag="li"> <a> 商店 </a> </router-link>
        <router-link to="/zine" tag="li"> <a> 头条 </a> </router-link>
        <router-link to="/expert" tag="li"> <a> 达人 </a> </router-link>
      </ul>
      <form class="navbar-form navbar-right" action="/seek">
        <div class="form-group" id="app">
          <input type="text" name="search" class="form-control" placeholder="Search">
        </div>
        <button id="seach" class="btn btn-default">seek</button>
        <!-- <router-link to="/seek" tag="button" >seek</button></router-link> -->
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
 import longin from "../views/registration/Register";
  console.log(name)

</script>
