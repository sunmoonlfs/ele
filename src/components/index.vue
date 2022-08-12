 <template >
     <main>
          <header class="index">
			<div class="dw"><img src="img/dw.png" alt=""></div>
          <div class="sy">沈阳市规划大厦<i class="dow"><img src="img/dsj.png" alt=""></i></div>
		  <router-link to="/comp">投诉</router-link>
          </header>
		  <div class="search">
			<div class="sear">
				<div class="sea"><i class="se"><img src="img/ss.png" alt=""></i>搜索饿了么商家、商品名称</div>
			</div>
		  </div>
          <ul class="list">
               <li v-for="(item,index) in list" :key="index">
                    <router-link to="/shop">
					<img :src="item.src" alt="">
                    <span>{{item.title}}</span>
					</router-link>
               </li>
          </ul>
          <div class="ban">
			<h3>品质套餐</h3>
			<p>搭配齐全吃得好</p>
			<a>立即抢购 ></a>
		</div>
          <div class="super">
			<div class="left">
				<img src="img/super_member.png">
				<h3>超级会员</h3>
				<p>&#8226; 每月享超值权益</p>
			</div>
			<div class="right">
				立即开通 >
			</div>
		</div>
          <div class="recom">
			<div class="recomd"></div>
			<p>推荐商家</p>
			<div class="recomd"></div>
		</div>
          <ul class="recomm">
			<li>综合排序<img src="img/dx.png" alt=""></li>
			<li>距离最近</li>
			<li>销量最高</li>
			<li>筛选<img src="img/ld.png" alt=""></li>
		</ul>
          <ul class="business">
			<li>
				<img src="img/sj01.png">
				<div class="info">
					<div class="nam">
						<h3>万家饺子（软件园E18店）</h3>
						<div class="like">&#8226;</div>
					</div>
					<div class="star">
						<div class="lefted">
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="righe">
							蜂鸟专送
						</div>
					</div>
					<div class="very">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="lefter">
						<div>各种饺子</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="right">
							<p>2个活动<img src="img/dx.png" alt=""></p>
						</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon" style="background-color: #F1884F;">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj02.png">
				<div class="info">
					<div class="nam">
						<h3>小锅饭豆腐馆（全运店）</h3>
						<div class="like">&#8226;</div>
					</div>
					<div class="star">
						<div class="lefted">
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="righe">
							蜂鸟专送
						</div>
					</div>
					<div class="very">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="lefter">
						<div>各种饺子</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="right">
							<p>2个活动<img src="img/dx.png" alt=""></p>
						</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj03.png">
				<div class="info">
					<div class="nam">
						<h3>麦当劳麦乐送（全运路店）</h3>
						<div class="like">&#8226;</div>
					</div>
					<div class="star">
						<div class="lefted">
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="righe">
							蜂鸟专送
						</div>
					</div>
					<div class="very">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="lefter">
						<div>各种饺子</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="right">
							<p>2个活动<img src="img/dx.png" alt=""></p>
						</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj04.png">
				<div class="info">
					<div class="nam">
						<h3>米村拌饭（浑南店）</h3>
						<div class="like">&#8226;</div>
					</div>
					<div class="star">
						<div class="lefted">
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="righe">
							蜂鸟专送
						</div>
					</div>
					<div class="very">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="lefter">
						<div>各种饺子</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="right">
							<p>2个活动<img src="img/dx.png" alt=""></p>
						</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj05.png">
				<div class="info">
					<div class="nam">
						<h3>申记串道（中海康城店）</h3>
						<div class="like">&#8226;</div>
					</div>
					<div class="star">
						<div class="lefted">
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<i class="fa"><img src="img/xx.png" alt=""></i>
							<p>4.9 月售345单</p>
						</div>
						<div class="righe">
							蜂鸟专送
						</div>
					</div>
					<div class="very">
						<p>&#165;15起送 | &#165;3配送</p>
						<p>3.22km | 30分钟</p>
					</div>
					<div class="lefter">
						<div>各种饺子</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">新</div>
							<p>饿了么新用户首单立减9元</p>
						</div>
						<div class="right">
							<p>2个活动<img src="img/dx.png" alt=""></p>
						</div>
					</div>
					<div class="tion">
						<div class="lefte">
							<div class="incon">特</div>
							<p>特价商品5元起</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
     </main>
</template>
<script>
import $ from 'jquery'
export default {
     data(){
          return {
               list:[
                    {
                         src:'img/dcfl01.png',
                         title:'美食'
                    },
                     {
                         src:'img/dcfl02.png',
                         title:'早餐'
                    },
                     {
                         src:'img/dcfl03.png',
                         title:'跑腿代购'
                    },
                     {
                         src:'img/dcfl04.png',
                         title:'汉堡披萨'
                    },
                     {
                         src:'img/dcfl05.png',
                         title:'甜品饮品'
                    },
                     {
                         src:'img/dcfl06.png',
                         title:'速食简餐'
                    },
                     {
                         src:'img/dcfl07.png',
                         title:'地方小吃'
                    },
                     {
                         src:'img/dcfl08.png',
                         title:'米粉面馆'
                    },
                    {
                         src:'img/dcfl09.png',
                         title:'包子粥铺'
                    },
                    {
                         src:'img/dcfl10.png',
                         title:'炸鸡炸串'
                    }
                    
               ]
          }
     },
	 mounted(){
		$(window).scroll(function(){
         // 每滚动一次，执行一次
         console.log($(window).scrollTop())
         // $(window).scrollTop()滚动距离
         if($(window).scrollTop()>100){
             $('.search').addClass('one')
         }else{
             $('.search').removeClass('one')
         }
 })
	 }
}

</script>
<style>
.one{
    position: fixed; 
    top: 0px;
}
.index .dw{
	width: 5.3vw;
	height: 4.5vw;
	margin: 0 1vw 0 3vw;
}
.index .dw img{
	position: relative;
	width: 100%;
	height: 100%;
}
.index .sy{
    font-size: 4.5vw;
	font-weight: 700;
	color: #fff;
}
.index .sy .dow{
	margin-left: 1vw;
}
.index .sy .dow img{
	width: 3vw;
	height: 3vw;
}
.index{
     height: 100%;
	 height: 12vw;
     background:#0097ff;
	 display: flex;
     align-items: center;
}
.index a{
	position: absolute;
	right: 20px;
	text-decoration: none;
	color: #fff;
	font-weight: bold;
	font-size: 14px;
	line-height: 14px;
	padding: 5px 10px;
}
.search{
	width: 100%;
	height: 13vw;
}
.search .sear{
	width: 100%;
	height: 13vw;
	background: #0097ff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.search .sear .sea{
	width: 90%;
	height: 9vw;
	color: #aeaeae;
	justify-content: center;
	align-items: center;
	display: flex;
	font-size: 3.5vw;
	background: white;
	font-family: 宋体;
	border-radius: 2px;
}
.sear .sea .se{
	margin-top: 1vw;
	margin-right: 0.4vw;
}
.sea .se img{
	width: 4.3vw;
	height: 4.3vw;
}
.index input{
     width:100%;
     border:none;
     outline: none;
     background:white;
     height: 40px;
     text-align:center;
}
.list{
     width:100%;
	 height: 48vw;
	 display: flex;
	 flex-wrap: wrap;
     justify-content: space-around;
	 align-content: center;
}
.list li img{
     height: 10.3vw;
     width:12vw;
}
.list li{
     width:18vw;
     display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
     height: 20vw;
     cursor: pointer;
}
.list li a{
    text-decoration: none;
}
.list li span{
     font-size: 3.2vw;
	 color: #666;
	 display: block;
	 text-align: center;
}
.ban{
     background:url(/img/index_banner.png) no-repeat;
     background-size: cover;
	 box-sizing: border-box;
     height: 29vw;
	 width: 95%;
     padding: 2vw 6vw;
     margin: 0 auto;
}
.ban h3{
    font-size: 4.2vw;
	margin-bottom: 1.2vw;
}
.ban p{
     margin-bottom: 2.4vw;
	 font-size: 3.4vw;
     color: #666666;
}
.ban a{
     color: #c79060;
     font-size: 3vw;
     font-weight: 700;
}
.super{
	width: 95%;
    background: #feedc1;
    margin: 0 auto;
    height: 11.5vw;
	margin-top: 1.3vw;
	border-radius: 2px;
	color: #644f1b;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.left{
    display: flex;
	align-items: center;
	margin-left: 4vw;
}
.left img{
    width: 6vw;
	height: 6vw;
	margin-right: 2vw;
}
.left h3{
    font-size: 4vw;
	margin-right: 2vw;
}
.left p{
    font-size: 3vw;
}
.right{
    font-size: 3vw;
	margin-right: 4vw;
	cursor: pointer;
}
.recom{
     width: 100%;
	 height: 14vw;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
.recom .recomd{
	width: 6vw;
	height: 0.2vw;
	background: #888;
}
.recom p{
	font-size: 4vw;
	margin: 0 4vw;
}
.recomm{
     width: 100%;
	 height: 5vw;
	 margin-bottom: 5vw;
	 display: flex;
	 justify-content: space-around;
	 align-items: center;
}
.recomm li{
     font-size: 3.5vw;
	 color: #555;
}
.recomm li img{
	width: 3vw;
	height: 3vw;
}
.business{
     width: 100%;
	 margin-bottom: 14vw;
}
.business li{
	width: 100%;
	box-sizing: border-box;
	padding: 2.5vw;
	border-bottom: 1px solid #ddd;
	display: flex;
}
.business li img{
     width: 18vw;
     height: 18vw;
}
.business li .info{
	width: 100%;
	padding-left: 3vw;
}
.nam{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2vw;
}
.nam h3{
	font-size: 4vw;
	color: #333;
}
.nam .like{
	width: 1.6vw;
	height: 3.4vw;
	background: #666666;
	color: #fff;
	font-size: 4vw;
	display: flex;
	justify-content: center;
	align-items: center;
}
.info .star{
	display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2vw;
	font-size: 3.1vw;
}
.star .lefted{
	display: flex;
	align-items: center;
}
.lefted .fa img{
	margin-right: 0.5vw;
	display: inline-block;
	width: 3vw;
	height: 3vw;
}
.lefted p{
     color: #666;
	 margin-left: 1vw;
}
.righe{
     background: #0097ff;
     color: white;
	 font-size: 2.4vw;
	 border-radius: 2px;
	 padding: 0 0.6vw;
}
.very{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2vw;
	color: #666;
	font-size: 3.1vw;
}
.lefter {
     display: flex;
	 align-items: center;
	 margin-bottom: 3vw;
}
.lefter div{
	border: 1px solid #ddd;
	font-size: 2.8vw;
	color: #666;
	border-radius: 3px;
	padding: 0 0.1vw;
}
.tion{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.8vw;
}
.tion .lefte{
	display: flex;
	align-items: center;
}
.lefte .incon{
	width: 4vw;
	height: 4vw;
	background: #70bc46;
	border-left: 3px;
	font-size: 3vw;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.lefte p{
	color: #666;
	font-size: 3vw;
	margin-left: 2vw;
}
.right p{
	display: flex;
	align-items: center;
	font-size: 2.5vw;
	color: #999;
}
.right{
	align-items: center;
	color: #999;
}
.right p img{
	width: 3vw;
	height: 3vw;
}
</style>

