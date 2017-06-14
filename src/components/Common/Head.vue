<template>
  <div class="head clearfix">
    <!--<div class="toggle-icon" @click="toggleMenu">-->
      <!--<Icon type="navicon-round" size="24"></Icon>-->
    <!--</div>-->
    <div class="page-title">
      {{title}}
    </div>
    <div class="filter_contain toggle-icon" v-if="currentRoute == '/Investor/search'">
      <Icon type="funnel" size="20"></Icon>
      <!--<Poptip placement="bottom-end" width="200">-->
        <!--<Button shape="circle" type="ghost" icon="funnel"></Button>-->
        <!--<div class="filter_content" slot="content">-->
          <!--<div>类型</div>-->
          <!--<Checkbox-group v-model="type">-->
            <!--<Checkbox label="A类型"></Checkbox>-->
            <!--<Checkbox label="B类型"></Checkbox>-->
            <!--<Checkbox label="C类型A类型A类型A类型A类型A类型A类型A类型A类型"></Checkbox>-->
          <!--</Checkbox-group>-->
          <!--<div>状态 </div>-->
          <!--<Checkbox-group v-model="state">-->
            <!--<Checkbox label="undo"></Checkbox>-->
            <!--<Checkbox label="doing"></Checkbox>-->
            <!--<Checkbox label="finish"></Checkbox>-->
          <!--</Checkbox-group>-->
          <!--<div>实力</div>-->
          <!--<Rate allow-half v-model="valueHalf"></Rate>-->
        <!--</div>-->
      <!--</Poptip>-->
    </div>
    <div class="filter_contain toggle-icon" v-else-if="currentRoute == '/Investor/publish'">
      <Icon type="plus-round" size="20"></Icon>
    </div>
    <div class="filter_contain toggle-icon" v-else-if="currentRoute == '/Developer/manage'">
      <Icon type="plus-round" size="20"></Icon>
    </div>
    <div class="filter_contain toggle-icon" v-else-if="currentRoute == '/Developer/fund'">
      <Icon type="plus-round" size="20"></Icon>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
  import config from '../../config/index';
  export default{
    data(){
      return {
        currentRoute:false,
        title: '主页信息',
        valueHalf: 2.5,
        state:['doing'],
        type:['A类型']
      }
    },
    methods: {
      listenRoute: function () {
        let curR = this.$route.path;
        this.title = this.$route.name;
        this.currentRoute = curR;
      },
      toggleMenu:function () {
        let toggleSideMenu = this.$store.state.toggleSideMenu;
        this.$store.commit('TOGGLE_SIDE_MENU', !toggleSideMenu)
      }
    },
    computed: {

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
  .head {
    width:100%;
    line-height: 50px;
    .toggle-icon{
      line-height: 50px;
      float: left;
      padding:0 10px;
      cursor: pointer;
      i{
        display: block;
        line-height: 50px;
      }
    }
    .page-title{
      line-height: 50px;
      text-align: center;
      color: #474B48;
      font-size: 16px;
      font-weight: bold;
      position: absolute;
      white-space: nowrap;
      right: 100px;
      left: 100px;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .filter_contain{
      float: right;
    }
  }
</style>

