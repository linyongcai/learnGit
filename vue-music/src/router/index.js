import Vue from 'vue'
import Router from 'vue-router'
// import Rank from 'components/rank/rank'
// import Recommend from 'components/recommend/recommend'
// import Search from 'components/search/search'
// import UserCenter from 'components/user-center/user-center'
// import Singer from 'components/singer/singer'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import Disc from 'components/disc/disc'
// import TopList from 'components/top-list/top-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend',
    },
    {
      path: '/user',
      component: resolve => require(['components/user-center/user-center'],resolve)
    },
    {
      path: '/recommend',
      component: resolve => require(['components/recommend/recommend'],resolve),
      children: [
        {
          path: ':id',
          component: resolve => require(['components/disc/disc'],resolve)
        }
      ]
    },
    {
      path: '/singer',
      component: resolve => require(['components/singer/singer'],resolve),
      children: [
        {
          path: ':id',
          component: resolve => require(['components/singer-detail/singer-detail'],resolve)
        }
      ]
    },
    {
      path: '/rank',
      component: resolve => require(['components/rank/rank'],resolve),
      children: [
        {
          path: ':id',
          component: resolve => require(['components/top-list/top-list'],resolve)
        }
      ]
    },
    {
      path: '/search',
      component: resolve => require(['components/search/search'],resolve),
      children: [
        {
          path: ':id',
          component: resolve => require(['components/singer-detail/singer-detail'],resolve)
        }
      ]
    }
  ]
})
