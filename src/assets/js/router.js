// 引入组件
// import 文件名字 from 地址
import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import my from '../../components/my.vue'
import reg from '../../components/reg.vue'
import shop from '../../components/shop.vue'
import comp from '../../components/comp.vue'
import ordlt from '../../components/ordlt.vue'
import info from '../../components/info.vue'
import ord from '../../components/ord.vue'
import pay from '../../components/pay.vue'
// export default 导出文件
var router= new VueRouter({
  routes:[
      {
          path:'/',
          component:first,
          children:[
              {
                  path:'/index',
                  component:index
              },
              {
                path:'/shop',
                component:shop
              },
              {
              path:'/my',
              component:my
              },
              {
                path:'/reg',
                component:reg
              },
              {
                path:'/ordlt',
                component:ordlt
              },
              {
                path:'/pay',
                component:pay
              }
          ],
          redirect:'/index'
          
          
      },
      {
        path:"/comp",
        component:comp
      },
      {
       path:"/info",
       component:info
      },
      {
        path:"/ord",
        component:ord
       },
      {
          path:"/*",
          redirect:'/index'
      }
      
  ]
})
export default router;