<template >
     <main>
          <header class="hinfo">
				<p>商家信息</p>
			</header>
			<div class="blogo">
				<img src="img/sj01.png">
			</div>
			<div class="binfo">
				<h1>万家饺子（软件园E18店）</h1>
				<p>&#165;15起送 &#165;3配送</p>
				<p>各种饺子炒菜</p>
			</div>
			<ul class="food">
				<li>
					<div class="fleft">
						<img src="img/sp01.png">
						<div class="finfo">
							<h3>纯肉鲜肉（水饺）</h3>
							<p>新鲜猪肉</p>
							<p>&#165;15</p>
						</div>
					</div>
					<div class="fright">
						<div>
							<img src="img/jh.png">
						</div>
						<p><span>3</span></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
				<li>
					<div class="fleft">
						<img src="img/sp02.png">
						<div class="finfo">
							<h3>玉米鲜肉（水饺）</h3>
							<p>玉米鲜肉</p>
							<p>&#165;16</p>
						</div>
					</div>
					<div class="fright">
						<div>
							<img src="img/jh.png">
						</div>
						<p><span>2</span></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
				<li>
					<div class="fleft">
						<img src="img/sp03.png">
						<div class="finfo">
							<h3>虾仁三鲜（蒸饺）</h3>
							<p>虾仁三鲜</p>
							<p>&#165;22</p>
						</div>
					</div>
					<div class="fright">
						<div>
						</div>
						<p></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
				<li>
					<div class="fleft">
						<img src="img/sp04.png">
						<div class="finfo">
							<h3>素三鲜（蒸饺）</h3>
							<p>素三鲜</p>
							<p>&#165;15</p>
						</div>
					</div>
					<div class="fright">
						<div>
						</div>
						<p></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
				<li>
					<div class="fleft">
						<img src="img/sp05.png">
						<div class="finfo">
							<h3>角瓜鸡蛋（蒸饺）</h3>
							<p>角瓜鸡蛋</p>
							<p>&#165;16</p>
						</div>
					</div>
					<div class="fright">
						<div>
						</div>
						<p></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
				<li>
					<div class="fleft">
						<img src="img/sp06.png">
						<div class="finfo">
							<h3>小白菜肉（水饺）</h3>
							<p>小白菜肉</p>
							<p>&#165;18</p>
						</div>
					</div>
					<div class="fright">
						<div>
						</div>
						<p></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
				<li>
					<div class="fleft">
						<img src="img/sp07.png">
						<div class="finfo">
							<h3>芹菜牛肉（水饺）</h3>
							<p>芹菜牛肉</p>
							<p>&#165;18</p>
						</div>
					</div>
					<div class="fright">
						<div>
						</div>
						<p></p>
						<div>
							<img src="img/jjh.png">
						</div>
					</div>
				</li>
			</ul>
			<div class="cart">
				<div class="cleft">
					<div class="cicon">
						<img src="img/gwc.png" alt="">
						<div class="cquantity">3</div>
					</div>
					<div class="cinfo">
						<p>&#165;12.88</p>
						<p>另需配送费3元</p>
					</div>
				</div>
				<div class="cright">
					<div class="citem">
					    <router-link to="/ord">去结算</router-link>
					</div>
				</div>
			</div>
     </main>
</template>
<style>
.hinfo{
	width: 100%;
	height: 12vw;
	background-color: #0097FF;
	color: #fff;
	font-size: 4.8vw;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
}
.blogo{
	width: 100%;
	height: 35vw;
	margin-top: 12vw;
	
	display: flex;
	justify-content: center;
	align-items: center;
}
.blogo img{
	width: 40vw;
	height: 30vw;
	border-radius: 5px;
}

.binfo{
	width: 100%;
	height: 20vw;
	
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.binfo h1{
	font-size: 5vw;
}
.binfo p{
	font-size: 3vw;
	color: #666;
	margin-top: 1vw;
}

.food{
	width: 100%;
	margin-bottom: 14vw;
}
.food li{
	width: 100%;
	box-sizing: border-box;
	padding: 2.5vw;
	user-select: none;
	
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.food li .fleft{
	display: flex;
	align-items: center;
}
.food li .fleft img{
	width: 20vw;
	height: 20vw;
}
.food li .fleft .finfo{
	margin-left: 3vw;
}
.food li .fleft .finfo h3{
	font-size: 3.8vw;
	color: #555;
}
.food li .fleft .finfo p{
	font-size: 3vw;
	color: #888;
	margin-top: 2vw;
}
.food li .fright{
	width: 16vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.food li .fright img{
	width: 4.1vw;
    height: 4.1vw;
	cursor: pointer;
}
.food li .fright p{
	font-size: 3.6vw;
	color: #333;
}
.cart{
	width: 100%;
	height: 14vw;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
}
.cart .cleft{
	flex: 2;
	background-color: #505051;
	display: flex;
}
.cart .cleft .cicon{
	width: 16vw;
	height: 16vw;
	box-sizing: border-box;
	border: solid 1.6vw #444;
	border-radius: 8vw;
	background-color: #3190E8;
	font-size: 7vw;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -4vw;
	margin-left: 3vw;
	position: relative;
}
.cart .cleft .cicon img{
    width: 7vw;
    height: 7vw;
}
.cart .cleft .cquantity{
	width: 5vw;
	height: 5vw;
	border-radius: 2.5vw;
	background-color: red;
	color: #fff;
	font-size: 3.6vw;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: -1.5vw;
	top: -1.5vw;
}
.cart .cleft .cinfo p:first-child{
	font-size: 4.5vw;
	color: #fff;
	margin-top: 1vw;
}
.cart .cleft .cinfo p:last-child{
	font-size: 2.8vw;
	color: #AAA;
}
.cart .cright{
	flex: 1;
}
.cart .cright .citem{
	width: 100%;
	height: 100%;
	background-color: #38CA73;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cart .cright .citem a{
    color: #fff;
    font-weight: 700;
	font-size: 4.5vw;
    text-decoration: none;
}
</style>