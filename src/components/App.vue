<template>
  <div id="app">
    <!--<MyHead v-if="!hideHead"></MyHead>-->

    <transition>
      <router-view></router-view>
    </transition>

    <!--<MyFoot></MyFoot>-->
  </div>
</template>

<script>
//import MyHead from './Common/Head.vue'
//import MyFoot from './Common/Foot.vue'
export default {
  name: 'App',
  components: {
//    MyHead,
//    MyFoot
  },
  data() {
    return {
      hideHead: false
    }
  },
  methods: {
    listenRoute() {
      const path = this.$route.path;
      if (path === '/Login' || path === '/Register') {
        this.hideHead = true;
      } else {
        this.hideHead = false;
      }
    }
  },
  created: function () {
    const uid = $.cookie('UID');
    this.$store.commit('SET_UID', uid);
    this.listenRoute();

    const tSideMenu = $.cookie('tSideMenu');
    if (tSideMenu !== undefined) {
      this.$store.commit('TOGGLE_SIDE_MENU', Number(tSideMenu));
    }

    this.$Loading.config({
      color: '#5cb85c',
      failedColor: '#f0ad4e',
      height: 5
    });
  },
  watch: {
    '$route': function () {
      this.listenRoute()
    }
  }
}
</script>

<style lang="scss" type="text/scss">
  @import "../assets/scss/hack-ivew";
  @import "../assets/scss/reset";
  html {
    font-size: 62.5%;
  }

  #app {
    /*max-width: 41.2rem;*/
    margin: 0 auto;
    height: 100%;
  }

  .has-header {
    margin-top: 4.8rem;
  }

  h2 {
    font-size: 1.68rem;
    font-weight: normal;
    color: #111;
  }

  ul, li, a, h2 {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  .header-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 998;
    display: flex;
    align-items: center;
    height: 4.8rem;
    padding: 0 1.8rem;
    background: #fff;
    border-bottom: 0.1rem solid #f3f3f3;
  }
  .container{
    max-width:480px;
    margin:0 auto;
  }
</style>
