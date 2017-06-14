<template>
  <div v-bar class="ellfull">
    <div>
      <div>
      <div class="board_card">
        <!--<div class="banner_img"></div>-->
        <Card >
          <p slot="title" class="title_name">
            <Icon size="16" state="android-calendar"></Icon>
            这是公司名
          </p>
          <ul>
            <li>
              <div style="display: inline-block">
                <div>
                  这是简介
                </div>
              </div>
              <span style="float: right">这是创建人</span>
            </li>
          </ul>
        </Card>
      </div>
      <div class="board_card">
        <!--<div class="banner_img"></div>-->
        <Card >
          <p slot="title" class="title_name">
            <Icon size="16" state="android-calendar"></Icon>
            这是日程名称
          </p>
          <a href="#" slot="extra" title="有更新啦">
            <Badge dot>
              <Icon state="ios-bell-outline" size="22"></Icon>
            </Badge>
          </a>
          <ul>
            <li>
              <div style="display: inline-block">
                <div>
                  这是日程类型
                </div>
                <div>
                  这是日程类型
                </div>
              </div>
              <span style="float: right">这是日程时间</span>
              <span style="float: right;margin-right: 5px">这是负责人</span>
            </li>
          </ul>
        </Card>
      </div>
      <div class="board_card">
        <!--<div class="banner_img"></div>-->
        <Card >
          <p slot="title" class="title_name">
            <Icon size="16" state="android-calendar"></Icon>
            这是团队
          </p>
          <ul>
            <li>
              <div style="display: inline-block">
                <div>
                  这是团队简介
                </div>
              </div>
            </li>
          </ul>
        </Card>
      </div>
      <div class="board_card">
        <carousel :indicators="true" :auto="3000">
          <div v-for="activicty in activictyObj" class="banner_guide">
            <div class="ivu-card ivu-card-bordered">
              <div class="ivu-card-head">
                <p slot="title" class="title_name">
                  <Icon size="16" state="ios-paperplane"></Icon>
                  {{activicty.name}}
                </p>
              </div>
              <div class="ivu-card-body">
                <ul>
                  <li>
                    <div style="display: inline-block">
                      <div>
                        {{activicty.type}}
                      </div>
                    </div>
                    <span style="float: right">{{activicty.date}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </carousel>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Carousel from 'vue-m-carousel';
  export default{
    components: {
      Carousel
    },
    data: function() {
      return {
        activictyObj:[
          {
            name:'这是最新动态A',
            date:'2017-06-08',
            type:'类型A'
          },
          {
            name:'这是最新动态B',
            date:'2017-06-08',
            type:'类型B'
          },
          {
            name:'这是最新动态C',
            date:'2017-06-08',
            type:'类型C'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

  .ellfull  {
    display: block;
    width: auto;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .board_card {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;

    .title_name {
      font-size: 16px;
      font-weight: 300;
    }

    .banner_guide {
      width: 100%;
      height: 100%;
    }

    .card_contain {
      background: #fff;
      border-radius: 4px;
      font-size: 14px;
      position: relative;
      transition: all .2s ease-in-out;
      border: 1px solid #dddee1;
      border-color: #e9eaec;
      height: 100%;
    }
  }
</style>
