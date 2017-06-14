<template>
  <ul class="head-menu">
    <li @click="jumpRoute('/Push/NotifyPush')">
      <Icon size="20" type="stats-bars"></Icon>
      <span>推送营销</span>
    </li>
    <li @click="jumpRoute('/Tool')">
      <Icon size="20" type="ios-medkit"></Icon>
      <span>开发助手</span>
    </li>
    <li @click="jumpRoute('/Manage/UserManage')">
      <Icon size="20" type="ios-gear"></Icon>
      <span>应用管理</span>
    </li>
  </ul>
</template>

<script>
export default{
  methods:{
    jumpRoute: function (name) {
      const appID = this.$route.params.appID;
      let path = this.$route;
      const newR = name + '?appID=' + appID;
      this.$router.push({path: newR});
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .head-menu {
    float: left;
    margin-left: 20px;
  }

  li {
    display: inline-block;
    margin-right: 40px;
    position: relative;
    height: 72px;
    line-height: 72px;
    font-size: 14px;
    padding: 0 4px;
    cursor: pointer;
    color: #fff;
    opacity: .69;
    transition: all .2s ease-in-out;
    &.on, &:hover {
      color: #fff;
      opacity: 1;
    }
    &.on:after {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background-color: #4fe3c1;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    span {
      vertical-align: middle;
    }
  }
</style>
