<template >
     <main>
          <header class="login">
          用户登陆
          </header>
          <ul class="boxs">
				<li>
					<div class="title">
						<p><label for="numder">手机号码：</label><input type="numder" placeholder="手机号码"></p>
					</div>
				</li>
				<li>
					<div class="title">
						<p><label for="password">密码：</label><input type="password" placeholder="密码"></p>
					</div>
				</li>
			</ul>
			<div class="log">
				<button>登陆</button>
			</div>
			<div class="reg">
			
<button><router-link to="/reg">去注册</router-link></button>
				
			</div>
     </main>
</template>
<style>
.login{
	background:#0097ff;
	color: white;
    font-size: 5vw;
	text-align: center;
	line-height: 14vw;
}
.boxs li{
    padding: 4vw 3vw 0 3vw;
}
label{
    width: 80px;
	height: 5vw;
	font-size: 3vw;
	font-weight: 700;
	color: #666;
    display: inline-block;
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
    text-align: center;
}
.boxs input{
	border: none;
	outline: none;
	line-height: 4vw;
	font-size: 3vw;
}
.log button{
	box-sizing: border-box;
	padding: 4vw 3vw  3vw;
	line-height: 5vw;
    width: 95vw;
	font-size: 4vw;
	font-weight: 700;
	color: #fff;
	background-color: #38CA73;
	border-radius: 4px;
	border: none;
	outline: none;
    margin: 10px;
}
.reg button{
	box-sizing: border-box;
	padding: 4vw 3vw  3vw;
    width: 95vw;
	line-height: 5vw;
	font-size: 4vw;
	font-weight: 700;
	background-color: #EEE;
	border:1px solid #DDD;
    border: none;
	border-radius: 4px;
    margin: 10px;
}
.reg a{
    color: #666;
    text-decoration: none;
}
</style>