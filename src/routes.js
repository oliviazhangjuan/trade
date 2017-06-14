// 用户
import Login from './components/Account/Login.vue';
import LoginRole from './components/Account/Login_role.vue';
import Register from './components/Account/Register.vue'
import NotFound from './components/Error/NotFound.vue'

//common
import Homepage from './components/Common/Company/homepage.vue';
import Scm from './components/Common/Company/scm.vue';
import Msn from './components/Common/Company/msn.vue';
//投资方
import home from './components/Investor/homepage.vue';//公司主页
import Schedule from './components/Investor/schedule.vue';//日程
import Search from './components/Investor/search.vue';//投资项目检索
import Publish from './components/Investor/publish.vue';//投资信息发布
import Manage from './components/Investor/manage.vue';//已投项目管理
import Financial from './components/Investor/financial.vue';//财务管理
//项目方
import Fund from './components/Developer/fund.vue'; //募资信息发布投递
import DevManage from './components/Developer/manage.vue'; //项目管理
import DevFinancial from './components/Developer/financial.vue'; //财务管理

//供应链
import ScmPublish from './components/Scm/publish.vue'; //产品/服务发布
import ScmManage from './components/Scm/publish.vue';  //订单/物流管理
// 全部应用
import Dashboard from './components/Dashboard/Dashboard.vue';

// Layout
import Layout from './components/Common/Layout.vue';

// Routes
const routes = [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard'
  },
  {
    path: '/Dashboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: Dashboard,
        name: 'Dashboard'
      }
    ]
  },
  {
    path: '/Company',
    component: Layout,
    children: [
      {
        path: 'homepage',
        component: Homepage,
        name: '主页信息'
      },
      {
        path: 'scm',
        component: Scm,
        name: '供应链'
      },
      {
        path: 'msn',
        component: Msn,
        name: '消息'
      }
    ]
  },
  {
    path: '/Investor',
    component: Layout,
    children: [
      {
        path: 'homepage',
        component: home,
        name: '公司主页'
      },
      {
        path: 'schedule',
        component: Schedule,
        name: '日程'
      },
      {
        path: 'search',
        component: Search,
        name: '募资信息检索'
      },
      {
        path: 'publish',
        component: Publish,
        name: '投资信息发布'
      },
      {
        path: 'manage',
        component: Manage,
        name: '已投项目管理'
      },
      {
        path: 'financial',
        component: Financial,
        name: '财务管理'
      }
    ]
  },
  {
    path: '/Developer',
    component: Layout,
    children: [
      {
        path: 'fund',
        component: Fund,
        name: '募资信息发布'
      },
      {
        path: 'manage',
        component: DevManage,
        name: '项目管理'
      },
      {
        path: 'financial',
        component: DevFinancial,
        name: '财务管理'
      }
    ]
  },
  {
    path: '/Scm',
    component: Layout,
    children: [
      {
        path: 'publish',
        component: ScmPublish,
        name: '产品/服务发布'
      },
      {
        path: 'manage',
        component: ScmManage,
        name: '订单/物流管理'
      }
    ]
  },
  {
    path: '/Login',
    component: Login,
    name: '登录'
  },
  {
    path:'/LoginRole',
    component:LoginRole,
    name:'登录'
  },
  {
    path: '/Register',
    component: Register,
    name: '注册'
  },
  {
    path: '*',
    component: NotFound,
    name: '404'
  }
]

export default routes
