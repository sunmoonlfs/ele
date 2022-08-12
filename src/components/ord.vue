<template >
     <main>
          <div class="aper">
			<header>
				<p>确认订单</p>
			</header>
		
			<div class="order-info">
				<h5>订单配送至：</h5>
				<div class="order-info-address">
					<p>沈阳市浑南区智慧四街1-121号</p>
					<i class="fa fa-angle-right"></i>
				</div>
				<p>习近平先生 13656785432</p>
			</div>
			
			<h3>万家饺子（软件园E18店）</h3>

			<ul class="order-detailed">
				<li>
					<div class="order-detailed-left">
						<img src="img/sp01.png">
						<p>纯肉鲜肉（水饺） x 2</p>
					</div>
					<p>&#165;15</p>
				</li>
				<li>
					<div class="order-detailed-left">
						<img src="img/sp02.png">
						<p>玉米鲜肉（水饺） x 1</p>
					</div>
					<p>&#165;16</p>
				</li>
			</ul>
			<div class="order-deliveryfee">
				<p>配送费</p>
				<p>&#165;3</p>
			</div>
	
			<div class="total">
				<div class="total-left">
					&#165;49
				</div>
				<div class="total-right">
					<router-link to="/pay">去支付</router-link>
				</div>
			</div>
		</div>	
     </main>
</template>
<style>
.aper{
	width: 100%;
	height: 100%;
}
.aper header{
	width: 100%;
	height: 12vw;
	background-color: #0097FF;
	color: #fff;
	font-size: 4.8vw;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.aper .order-info{
	width: 100%;
	margin-top: 12vw;
	background-color: #0097EF;
	box-sizing: border-box;
	padding: 2vw;
	color: #fff;
}
.aper .order-info h5{
	font-size: 3vw;
	font-weight: 300;
}
.aper .order-info .order-info-address{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
	cursor: pointer;
	margin: 1vw 0;
}
.aper .order-info .order-info-address p{
	width: 90%;
	font-size: 5vw;
}
.wrapper .order-info .order-info-address i{
	font-size: 6vw;
}
.aper .order-info p{
	font-size: 3vw;
}

.aper h3{
	box-sizing: border-box;
	padding: 3vw;
	font-size: 4vw;
	color: #666;
	border-bottom: solid 1px #DDD;
}

.aper .order-detailed{
	width: 100%;
}
.aper .order-detailed li{
	width: 100%;
	height: 16vw;
	box-sizing: border-box;
	padding: 3vw;
	color: #666;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.aper .order-detailed li .order-detailed-left{
	display: flex;
	align-items: center;
}
.aper .order-detailed li .order-detailed-left img{
	width: 10vw;
	height: 10vw;
}
.aper .order-detailed li .order-detailed-left p{
	font-size: 3.5vw;
	margin-left: 3vw;
}
.aper .order-detailed li p{
	font-size: 3.5vw;
}
.aper .order-deliveryfee{
	width: 100%;
	height: 16vw;
	box-sizing: border-box;
	padding: 3vw;
	color: #666;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 3.5vw;
}
.aper .total{
	width: 100%;
	height: 14vw;
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
}
.aper .total .total-left{
	flex: 2;
	background-color: #505051;
	color: #fff;
	font-size: 4.5vw;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
}
.aper .total .total-right{
	flex: 1;
	background: #38CA73;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
}
.aper .total .total-right a{
    font-size: 4.5vw;
	font-weight: 700;
    text-decoration: none;
    color: #fff;
}
</style>