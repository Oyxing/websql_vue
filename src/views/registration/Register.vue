<template>
    <div>  登录
        <div class="wrap">
			<div class="content">
				<div>  
					<label>用户名</label>
					<input type="text" name="username" id="username" value="" placeholder="请输入您的用户名" />
				</div>
				<div>
					<label>密码</label>
					<input type="password" name="" id="password" value="" placeholder="请输入您的密码" />
				</div>
				<input type="button" name="loginbtn" id="loginbtn" value="登录" @click="Regin()"/>

			</div>
		</div>
    </div>
</template>

<script>
var config = { //初始化websql数据库的参数信息
			name: 'mf7me',
			version: '2.0',
			desc: 'manage my mysql',
			size: 10 * 20 * 1024,
		};
var db = window.openDatabase(config.name, config.version, config.desc, config.size);
	var sql = 'create table if not exists LOGS(id INTEGER PRIMARY KEY ASC, name TEXT, password TEXT, note_date TEXT)';
			db.transaction(function(tx) {
				tx.executeSql(sql, null, function(tx, rs) {
					console.log('执行sql成功');
				});
			});
  export default {
    name: 'register',
     methods:{
      Regin(){
         var name, passoword
            name = document.getElementById("username").value;
            passoword = document.getElementById("password").value;
            var values = [name, passoword];
            if(values[0].length != 0 || values[1].length != 0 || values[2].length != 0 ){
             	db.transaction(function(tx) {
                tx.executeSql('SELECT * FROM LOGS WHERE NAME='+name, [], function(tx, results) {
             if(passoword == results.rows[0].password){
                      alert("登陆成功")
                    }else{
                      alert("密码错误")
                    }
                });
                
              })
            }
     }
     
  }}
</script>