<template>
  <div class="scroll_contain">
    <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
      <div class="side-menu">
        <div class="side-menu-list">
          <Row>
            <Menu theme="primary" :active-name="curRoute" @on-select="routeJump">
              <Menu-item name="/Company/homepage" >
                <Icon size="20" type="home"></Icon>
                主页信息
              </Menu-item>
              <div v-for="item in menuList">
                <Menu-item :name="item.path" >
                  <Icon size="20" :type="item.iconType"></Icon>
                  {{item.title}}
                </Menu-item>
              </div>
              <!--<Menu-item name="/Investor/homepage">-->
                <!--<Icon size="20"  type="ribbon-a"></Icon>-->
                <!--公司主页-->
              <!--</Menu-item>-->
              <!--<Menu-item name="/Investor/schedule">-->
                <!--<Icon size="20"  type="android-calendar"></Icon>-->
                <!--日程-->
              <!--</Menu-item>-->
              <!--<Menu-item name="/Investor/search">-->
                <!--<Icon size="20"  type="search"></Icon>-->
                <!--投资项目检索-->
              <!--</Menu-item>-->
              <!--<Menu-item name="/Investor/publish">-->
                <!--<Icon size="20"  type="share"></Icon>-->
                <!--投资信息发布-->
              <!--</Menu-item>-->
              <!--<Menu-item name="/Investor/manage">-->
                <!--<Icon size="20"  type="android-folder-open"></Icon>-->
                <!--已投项目管理-->
              <!--</Menu-item>-->
              <!--<Menu-item name="/Investor/financial">-->
                <!--<Icon size="20"  type="android-options"></Icon>-->
                <!--财务管理-->
              <!--</Menu-item>-->
              <!--<Menu-item name="/Company/scm">-->
                <!--<Icon size="20"  type="android-map"></Icon>-->
                <!--供应链-->
              <!--</Menu-item>-->
              <Menu-item name="/Company/msn"><span>
                <Icon size="20"  type="ios-email-outline"></Icon>
                <a href="#">
                <Badge dot>
                <Icon state="ios-bell-outline" size="22"></Icon>
                </Badge>
                </a>
              </span>
                消息
              </Menu-item>
            </Menu>
          </Row>
        </div>
      </div>
    </VuePerfectScrollbar>
  </div>
</template>
<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import  * as config  from '../../config';
  export default {
    components: {
      VuePerfectScrollbar
    },
    data () {
      return {
        curRoute: '',
//        menuList:[
//          {'title':'公司主页','path':'/Investor/homepage','iconType':'ribbon-a'},
//          {'title':'日程','path':'/Investor/schedule','iconType':'android-calendar'},
//          {'title':'投资项目检索','path':'/Investor/search','iconType':'search'},
//          {'title':'投资信息发布','path':'/Investor/publish','iconType':'share'},
//          {'title':'已投项目管理','path':'/Investor/manage','iconType':'android-folder-open'},
//          {'title':'财务管理','path':'/Investor/financial','iconType':'android-options'},
//          {'title':'供应链','path':'/Investor/scm','iconType':'android-map'},
//        ]
      }
    },
    computed: {
      isAdmin(){
        return this.$store.state.uid === 'admin'
      },
      menuList(){
          return config.default.MenuList[$.cookie('UID')];
      }
    },
    methods: {
      routeJump(name){
        this.$router.push({path: name});
        this.$store.commit('TOGGLE_SIDE_MENU', false)
      },
      toggleSideMenu() {
        this.$store.commit('TOGGLE_SIDE_MENU', this.$store.state.toggleSideMenu == 0 ? 1 : 0)
      },
      listenRoute(){
        let curR = this.$route.path;
        this.curRoute = curR;
      }
    },
    created(){
      this.listenRoute();
    },
    watch: {
      '$route': function () {
        this.listenRoute();
      }
    }
  }
</script>
<style scoped lang="scss" type="text/scss">
  .scroll_contain{
    height:calc(100% - 130px);
  }
  .side-menu {
    position: relative;
    /*height: 100%;*/
    .ivu-icon {
      margin-right: 6px;
      vertical-align: middle;
      font-size: 14px;
    }
    &-list {

    }
    .ivu-menu-item {
      &.active {
        color: #0288d1;
        border-right: 2px solid #0288d1;
      }
    }
    .active {
      color: #fff !important;
      background-color: #00b27a;
      box-shadow: inset 2px 0 0 0 #00e59d;
    }
    &-toggle {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 44px;
      button {
        height: 100%;
        width: 100%;
        text-align: right;
      }
    }
  }

  .bold-txt {
    font-size: 12px;
    color: #98aabf;
    font-weight: 400;
  }

  .ivu-menu {
    width: 100% !important;
  }

  .ivu-menu-submenu-title {
    border-top: 1px dashed #ddd;
  }

  .ivu-menu-vertical.ivu-menu-light:after {
    display: none;
  }
</style>
