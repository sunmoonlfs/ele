<template >
     <main>
          <header class="ordlt">
				<p>我的订单</p>
			</header>
			<h3 class="nopd">未支付订单信息：</h3>
			<ul class="order">
				<li>
					<div class="oinfo">
						<p>
							万家饺子（软件园E18店）
							<i v-on:click="change"><img src="img/dx.png" alt=""></i>
						</p>
						<div class="oright">
							<p>&#165;49</p>
							<div class="oicon">去支付</div>
						</div>
					</div>
					<ul class="oret" v-if="show">
						<li>
							<p>纯肉鲜肉（水饺） x 2</p>
							<p>&#165;15</p>
						</li>
						<li>
							<p>玉米鲜肉（水饺） x 1</p>
							<p>&#165;16</p>
						</li>
						<li>
							<p>配送费</p>
							<p>&#165;3</p>
						</li>
					</ul>
				</li>
				<li>
					<div class="oinfo">
						<p>
							小锅饭豆腐馆（全运店）
							<i v-on:click="change"><img src="img/dx.png" alt=""></i>
						</p>
						<div class="oright">
							<p>&#165;55</p>
							<div class="oicon">去支付</div>
						</div>
					</div>
					<ul class="oret" v-if="show">
						<li>
							<p>纯肉鲜肉（水饺） x 2</p>
							<p>&#165;15</p>
						</li>
						<li>
							<p>玉米鲜肉（水饺） x 1</p>
							<p>&#165;16</p>
						</li>
						<li>
							<p>配送费</p>
							<p>&#165;3</p>
						</li>
					</ul>
				</li>
			</ul>
			<h3 class="nopd">已支付订单信息：</h3>
			<ul class="order">
				<li>
					<div class="oinfo">
						<p>
							万家饺子（软件园E18店）
							<i v-on:click="change"><img src="img/dx.png" alt=""></i>
						</p>
						<div class="oright">
							<p>&#165;49</p>
						</div>
					</div>
					<ul class="oret" v-if="show">
						<li>
							<p>纯肉鲜肉（水饺） x 2</p>
							<p>&#165;15</p>
						</li>
						<li>
							<p>玉米鲜肉（水饺） x 1</p>
							<p>&#165;16</p>
						</li>
						<li>
							<p>配送费</p>
							<p>&#165;3</p>
						</li>
					</ul>
				</li>
				<li>
					<div class="oinfo">
						<p>
							小锅饭豆腐馆（全运店）
							<i v-on:click="change"><img src="img/dx.png" alt=""></i>
						</p>
						<div class="oright">
							<p>&#165;55</p>
						</div>
					</div>
					<ul class="oret" v-if="show">
						<li>
							<p>纯肉鲜肉（水饺） x 2</p>
							<p>&#165;15</p>
						</li>
						<li>
							<p>玉米鲜肉（水饺） x 1</p>
							<p>&#165;16</p>
						</li>
						<li>
							<p>配送费</p>
							<p>&#165;3</p>
						</li>
					</ul>
				</li>
			</ul>
     </main>
</template>
<script>
   export default{
        data(){
            return{
				show:false
			}
        },
        methods:{
            change:function(){
                this.show=!this.show;
            }
        }
    }
</script>
<style>
.ordlt{
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
.nopd{
	margin-top: 12vw;
	box-sizing: border-box;
	padding: 4vw;
	font-size: 4vw;
	font-weight: 300;
	color: #999;
}
.order{
	width: 100%;
}
.order li{
	width: 100%;
}
.order li .oinfo{
	box-sizing: border-box;
	padding: 2vw 4vw;
	font-size: 4vw;
	color: #666;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.order li .oinfo img{
    width: 2vw;
    height: 2vw;
}
.order li .oinfo .oright{
	display: flex;
}
.order li .oinfo .oright .oicon{
	background-color: #f90;
	color: #fff;
	border-radius: 3px;
	margin-left: 2vw;
	user-select: none;
	cursor: pointer;
}
.order li .oret{
	width: 100%;
}
.order li .oret li{
	width: 100%;
	box-sizing: border-box;
	padding: 1vw 4vw;
	color: #666;
	font-size: 3vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>