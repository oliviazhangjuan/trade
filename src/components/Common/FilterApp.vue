<template>
  <Select v-model="curApp" @on-change="changeApp" style="width:150px">
    <Option
      v-for="item in list"
      filterable
      :value="item.AppID"
      :key="item">{{ item.AppName }}
    </Option>
  </Select>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {filterRoute} from '../../utils/index'
  export default {
    data () {
      return {
        curApp: ''
      }
    },
    computed: {
      list(){
        return this.$store.getters.allApp;
      },
      uid(){
        return this.$store.state.uid;
      }
    },
    methods: {
      changeApp: function (appID) {
        let curR = this.$route.path;
        let newR = filterRoute(curR, appID);
        this.$router.push({path: newR});
      }
    },
    created: function () {
      if (!this.$store.state.appList.length) {
        this.$store.dispatch('getAppList', this.uid)
      }
    },
    beforeUpdate: function () {
      this.curApp = this.$route.params.appID;
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

</style>
