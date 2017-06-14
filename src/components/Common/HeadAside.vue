<template>
  <div class="hs">
    <div class="hs-user">
      <Dropdown trigger="click" style="margin-left: 20px" placement="bottom-end">
        <a class="hs-uid" href="javascript:void(0)">
          <Icon class="hs-avatar" size="20" color="#007f57" type="android-person"></Icon>
          {{uid}}
        </a>
        <Dropdown-menu slot="list">
          <li class="dp-item" @click="logout">退出</li>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    computed: {
      uid: function () {
        return this.$store.state.uid
      }
    },
    methods: {
      logout(){
        for (let i in $.cookie()) {
          $.removeCookie(i, {path: '/'});
          $.removeCookie(i);
        }
        this.$router.push({path: '/Login'});
        this.$store.commit('SET_UID', ''); // 清空uid
        this.$store.commit('RECEIVE_APP_LIST', null);
      },
      resetPsw(){
        this.$router.push({path: '/ResetPsw'})
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .hs {
    float: right;
    &-user {
      position: relative;
      float: right;
      margin-right: 24px;
      padding-left: 8px;
    }
    &-uid {
      position: relative;
      font-size: 14px;
      font-weight: 500;
      color: #d7dee6;
      &:hover {
        color: white;
        -webkit-transition: color .15s ease;
        transition: color .15s ease;
      }
    }
    &-avatar {
      position: absolute;
      top: 0;
      left: -25px;
    }
  }

  .dp-item {
    margin: 0;
    line-height: 1.5;
    padding: 7px 16px;
    clear: both;
    color: #657180;
    font-size: 12px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
    &:hover {
      background: #f3f3f3;
    }
  }
</style>
