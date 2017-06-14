<template>
  <div class="main clearfix">
    <div v-bind:class="{'mainSide':true,'show':toggleMenu}">
      <Account></Account>
      <SideMenu></SideMenu>
      <div class="toggle_arrow" @click="clickToggleMenu">
        <div class="toggle_arrow_contain">
          <Icon type="chevron-right" size="20"></Icon>
        </div>
        <div class="top_line"></div>
        <div class="middle_line"></div>
        <div class="bottom_line"></div>
      </div>
    </div>
    <div :class="{'mainHeader':true,'prefixLeft':toggleMenu}">
      <MyHead></MyHead>
    </div>
    <div class="main-content">
      <div class="main-inner">
        <transition name="fade" mode="out-in" appear>
          <router-view keep-alive></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Account from './Account.vue';
  import SideMenu from './SideMenu.vue';
  import MyHead from './Head.vue';
  export default{
    data(){
      return {
        breadcrumb: this.$route.name
      }
    },
    components: {
      Account,
      SideMenu,
      MyHead
    },
    methods: {
      clickToggleMenu:function () {
        let toggleSideMenu = this.$store.state.toggleSideMenu;
        this.$store.commit('TOGGLE_SIDE_MENU', !toggleSideMenu)
      }
    },
    computed: {
      spinShow(){
        return this.$store.state.spinShow
      },
      toggleMenu(){
        return this.$store.state.toggleSideMenu;
      },

    },
    watch: {
      '$route' (to, from) {
        this.breadcrumb = this.$route.name;
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .main{
    height: 100%;
    .mainSide{
      position: fixed;
      top: 0;
      bottom: 0;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 250px;
      flex: 0 0 250px;
      left: -200px;
      width: 200px;
      background-color: #f7f7f7;
      color: #313131;
      transition: all 0.3s ease;
      z-index: 99;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      &.show{
        left: 0px;
      }
      .toggle_arrow{
        position: absolute;
        top:50%;
        right :-25px;
        margin-top: -30px;
        padding:5px 5px 5px 0;
        .toggle_arrow_contain{
          position: absolute;
          top: 36px;
          left: 4px;
          z-index: 1;
        }
        .top_line{
          position:relative;
          border:10px solid transparent;
          border-left:10px solid #f7f7f7;
          border-bottom:10px solid #f7f7f7;

        }
        .middle_line{
          position:relative;
          width:20px;
          height:40px;
          box-sizing:border-box;
          background-color: #f7f7f7;
        }
        .bottom_line{
          position:relative;
          border:10px solid transparent;
          border-top:10px solid #f7f7f7;
          border-left:10px solid #f7f7f7;
        }
      }
    }
    .mainHeader{
      height:50px;
      width:100%;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      position: fixed;
      top:0px;
      left:0px;
      transition: all 0.3s ease;
      z-index: 11;
      background-color: #fff;
      &.prefixLeft{
        left:200px;
      }
    }
    .main-inner{
      height:100%;
    }
    .main-content{
      position: absolute;
      top:50px;
      left:0px;
      width:100%;
      height:calc(100% - 50px);
      margin:4px 8px;
    }
    @media screen and (max-width: 768px) {
      .main-content{
        margin:0 2px;
        padding-bottom: 10px;
      }
    }
  }
</style>
