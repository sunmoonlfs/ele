<template >
     <main>
          <header class="shoplist">
          商品列表
          </header>
          <ul class="busines">
			<li>
				 <p><router-link to="/info"><img src="img/sj01.png"></router-link>
				<span>3</span></p>
				<div class="info">
					<div class="nam">
						<h3>万家饺子(软件园E18店)</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>各种饺子炒菜</div>
					</div>
				</div>
			</li>
			<li>
				<p><img src="img/sj02.png">
				<span>2</span></p>
				<div class="info">
					<div class="nam">
						<h3>小锅饭豆腐馆（全运店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>特色美食</div>
					</div>
				</div>
			</li>
			<li>
				<p><img src="img/sj03.png">
				<span>1</span></p>
				<div class="info">
					<div class="nam">
						<h3>麦当劳麦乐送（全运路店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>汉堡薯条</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj04.png">
				<div class="info">
					<div class="nam">
						<h3>米村拌饭（浑南店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>各种炒菜拌饭</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj05.png">
				<div class="info">
					<div class="nam">
						<h3>申记串道（中海康城店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>烤串炸串</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj06.png">
				<div class="info">
					<div class="nam">
						<h3>半亩良田排骨米饭</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>排骨米饭套餐</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj07.png">
				<div class="info">
					<div class="nam">
						<h3>茶兮鲜果饮品（国际软件园店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>甜品饮品</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj08.png">
				<div class="info">
					<div class="nam">
						<h3>唯一水果捞（软件园E18店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>新鲜水果</div>
					</div>
				</div>
			</li>
			<li>
				<img src="img/sj09.png">
				<div class="info">
					<div class="nam">
						<h3>满园春饼（全运路店）</h3>
					</div>
					<div class="very">
                              <div class="lfte">
							<p>&#165;15起送 | &#165;3配送</p>
						</div>
					</div>
					<div class="end">
						<div>各种春饼</div>
					</div>
				</div>
			</li>
          </ul>
     </main>
</template>
<style>
.busines{
     width: 100%;
	 margin-bottom: 14vw;
}
.busines li{
	width: 100%;
	box-sizing: border-box;
	padding: 2.5vw;
	border-bottom: 1px solid #ddd;
	display: flex;
}
.busines p{
	position: relative;
}
.busines img{
      width: 18vw;
     height: 18vw;
}
.busines span{
    position:absolute;
    left: 85%;
    top: -5px;
	border-radius: 50%;
    background: red;
	color: white;
	width: 15px;
	height: 15px;
	text-align: center;
	line-height: 15px;
}
.busines .info{
	margin-left: 3vw;
}
.busines li .very{
     display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2vw;
	color: #888;
	font-size: 3vw;
}
.lfte{
	display: flex;
	align-items: center;
}
.busines .lfte p{
	color: #888;
	font-size: 3vw;
}
.end{
	color: #888;
	font-size: 3vw;
}
.shoplist{
	background:#0097ff;
	color: white;
    font-size: 4.8vw;
	height: 12vw;
	width: 100%;
	line-height: 12vw;
	justify-content: center;
	display: flex;
}
</style>