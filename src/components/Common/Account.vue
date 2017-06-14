<template>
  <div class="side-account">
    <div class="account-header">
      <div class="account-avatar-box">
        <img class="account-avatar clearfix" src="https://avatars0.githubusercontent.com/u/11735533?v=3&amp;u=02b515725d0e52cdf5f02e2dbdc98c1de3ddbcc2&amp;s=400"
             alt="">
      </div>
      <div v-if="isLogin" class="account-title-box">
        <div class="account-title">
          <p>{{role}}，欢迎使用</p>
          <a href="#" @click.prevent="logout()">退出</a>
          <!--<span class="menu-text">投资者</span>-->
        </div>
      </div>
      <div v-else class="account-title-box">
        <div class="account-title">
          <p>请登录/注册</p>
          <router-link :to="'/Login'">登录</router-link> 或 <router-link :to="'/Login'">注册</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
        return {

        }
    },
    computed: {
      isLogin(){
        let uid = $.cookie('UID');
        return uid && (uid == 0 || uid == 1|| uid == 2);
      },
      role(){
        let uid = $.cookie('UID');
        let role = '无组织用户';
        if(uid){
          role = uid == 0 ? '投资方' : uid == 1 ? '项目方' : uid == 2 ? '供应链' : '无组织用户';
        }
        return role
      }
    },
    methods:{
      logout:function () {
        for (let i in $.cookie()) {
          $.removeCookie(i, {path: '/'});
          $.removeCookie(i);
        }
        this.$router.push({path: '/LoginRole'});
        this.$store.commit('SET_UID', ''); // 清空uid
        this.$store.commit('TOGGLE_SIDE_MENU', false)
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .side-account{
    height:130px;
    width:100%;
    .account-header{
      width:100%;
      height:100%;
      .account-avatar-box{
        height: 60px;
        padding-top: 5px;
        .account-avatar{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          text-align: center;
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
      .account-title-box{
        height: 70px;
        position: relative;
        .account-title{
          line-height: 18px;
          border-radius: 50%;
          text-align: center;
          font-size: 14px;
          position: absolute;
          top: 16px;
          left: 0;
          right: 0;
          margin: 0 auto;
        }
      }
    }
  }
</style>
