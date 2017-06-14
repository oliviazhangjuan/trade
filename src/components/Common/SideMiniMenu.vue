<template>
  <div class="sm">
    <div class="sm-list">
      <Tooltip class="custom" content="事件分析" placement="right">
        <div class="sm-item"
             :class="{active: curRoute === '/analysis/event'}"
             @click="routeJump('/analysis/event')">
          <Icon size="18" type="stats-bars"></Icon>
        </div>
      </Tooltip>
      <Tooltip class="custom" content="漏斗分析" placement="right">
        <div class="sm-item"
             :class="{active: curRoute === '/analysis/funnel'}"
             @click="routeJump('/analysis/funnel')">
          <Icon size="18" type="funnel"></Icon>
        </div>
      </Tooltip>
      <Tooltip class="custom" content="留存分析" placement="right">
        <div class="sm-item"
             :class="{active: curRoute === '/analysis/retained'}"
             @click="routeJump('/analysis/retained')">
          <Icon size="18" type="ionic"></Icon>
        </div>
      </Tooltip>
      <Tooltip class="custom" content="分布分析" placement="right">
        <div class="sm-item"
             :class="{active: curRoute === '/analysis/distributed'}"
             @click="routeJump('/analysis/distributed')">
          <Icon size="18" type="ios-pie"></Icon>
        </div>
      </Tooltip>
    </div>
    <div class="sm-toggle">
      <Button @click="toggleSideMenu" type="text" long>
        <Icon type="chevron-right"></Icon>
      </Button>
    </div>
  </div>
</template>

<script>
  import {filterRoute} from '../../utils/index'
  export default{
    data(){
      return {
        curRoute: ''
      }
    },
    computed: {
      isAdmin(){
        return this.$store.state.uid === 'admin'
      }
    },
    methods: {
      routeJump(name){
        this.$router.push({path: name});
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
  .sm {
    position: relative;
    height: 100%;
    &-list {

    }
    &-group {
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-top: 1px dashed #ddd;
    }
    &-item {
      padding: 14px 11px;
      cursor: pointer;
      &:hover {
        background: #384459;
      }
      &.active {
        background: #00b27a;
        color: #fff;
        box-shadow: inset 2px 0 0 0 #00e59d;
      }
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
</style>
