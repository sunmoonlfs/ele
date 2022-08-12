<template >
     <main>
          <header class="rege">
          用户注册
          </header>
          <ul class="box">
				<li>
					<div class="title">
						手机号码：
					</div>
					<div class="conn">
						<input type="numder" placeholder="手机号码">
					</div>
				</li>
				<li>
					<div class="title">
						密码：
					</div>
					<div class="conn">
						<input type="password" placeholder="密码">
					</div>
				</li>
                <li>
					<div class="title">
						确认密码：
					</div>
					<div class="conn">
						<input type="password" placeholder="确认密码">
					</div>
				</li>
                <li>
					<div class="title">
						性别：
					</div>
					<div class="conn">
						<input type="radio" name="sex" checked style="width:6vw;height:3.2vw;">男<input type="radio" name="sex" style="width:6vw;height:3.2vw;">女
					</div>
				</li>
			</ul>
			<div class="reger">
				<button>注册</button>
			</div>
     </main>
</template>
<style>
.rege{
	background:#0097ff;
	color: white;
    font-size: 5vw;
	text-align: center;
	line-height: 12vw;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.box{
	width: 100%;
	margin-top: 12vw;
}
.box li{
	box-sizing: border-box;
    padding: 4vw 3vw 0 3vw;
	display: flex;
	align-items: center;
}
.conn{
	flex: 1;
}
.title{
    flex: 0 0 18vw;
    font-size: 3vw;
	font-weight: 700;
	color: #666;
}
.conn input{
	border: none;
	outline: none;
	width: 100%;
	line-height: 4vw;
	font-size: 3vw;
	
}
.reger button{
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
</style>