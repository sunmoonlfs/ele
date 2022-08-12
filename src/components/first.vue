<template >
    <main>
            <!-- router-view放置跳转以后渲染的内容 -->
        <router-view></router-view>
        <ul class="bot">
            <li>

                <!-- <router-link>实现页面跳转 to跳转路径  router-link最终渲染成了a标签-->
                <router-link to="/index">
                    <img src="img/sy.png" alt="">
                   <br>
                    首页
                </router-link>
            </li>
            <li>
                <router-link to="/find">
                    <img src="img/fx.png" alt="">
                   <br>
                    发现
                </router-link>
            </li>
            <li>
               <router-link to="/ordlt">
                    <img src="img/dd.png" alt="">
                   <br>
                    订单
                </router-link>
            </li>
            <li>
               <router-link to="/my">
                    <img src="img/wd.png" alt="">
                   <br>
                    我的
                </router-link>
            </li>
        </ul>
    </main>
</template>
<!-- 写在此处的css是全局的 加 scoped变成局部-->
<style>
*{
    margin:0px;
    padding:0px;
    list-style:none;
}
</style>

<style scoped>

.bot{
    position: fixed;
    bottom:0px;
    left: 0px;
    width:100%;
    border: 1px solid #dddddd;
    background: white;
}
.bot li{
    width:25%;
    float: left;
    text-align: center;
}
.bot a{
    text-decoration: none;
    color:black;
}
 .bot img{
    width: 20%;
 }
.bot .router-link-active{
    color:#999999;
}
/* .bot .router-link-active img:nth-of-type(1){
    display: inline-block;
    width: 5%;
}
.bot .router-link-active img:nth-of-type(2){
    display: none;
    width: 5%;
} */
/* .bot a img:nth-of-type(3){
    display: none;
    width: 5%;
}
.bot a img:nth-of-type(4){
    display: inline-block;
    width: 5%;
} */
</style>
