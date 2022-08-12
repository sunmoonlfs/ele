<template >
     <main>
			<header class="py">
				<p>在线支付</p>
			</header>
			<h3 class="apple">订单信息：</h3>
			<div class="orfo">
				<p>
					万家饺子（软件园E18店）
					<i v-on:click="change"><img src="img/dx.png" alt=""></i>
				</p>
				<p>&#165;49</p>
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
		
			<ul class="pape">
				<li>
					<img src="img/alipay.png">
					<img src="img/zq.png" alt="" class="zq">
				</li>
				<li>
					<img src="img/wechat.png">
				</li>
			</ul>
			<div class="paon">
				<button>确认支付</button>
			</div>
          
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
.py{
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
.apple{
	margin-top: 12vw;
	box-sizing: border-box;
	padding: 4vw 4vw 0;
	font-size: 4vw;
	font-weight: 300;
	color: #999;
}
.orfo{
	box-sizing: border-box;
	padding: 4vw;
	font-size: 4vw;
	color: #666;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.orfo img{
    width: 3vw;
    height: 3vw;
}
.orfo p:last-child{
	color: orangered;
}
.oret{
	width: 100%;
}
.oret li{
	width: 100%;
	box-sizing: border-box;
	padding: 1vw 4vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.oret li p{
	font-size: 3vw;
	color: #666;
}
.pape{
	width: 100%;
}
.pape li{
	width: 100%;
	box-sizing: border-box;
	padding: 4vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.pape li img{
	width: 33vw;
	height: 8.9vw;
}
.pape li .zq{
	width: 6vw;
    height: 6vw;
}
.paon{
	width: 100%;
	box-sizing: border-box;
	padding: 4vw;
}
.paon button{
	width: 100%;
	height: 10vw;
	border: none;
	/*去掉外轮廓线*/
	outline: none;
	border-radius: 4px;
	background-color: #38CA73;
	color: #fff;
}
</style>