<template>
  <div v-bar class="el1full">
    <div>
    <div>
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
              </li>
            </ul>
          </Card>
        </div>
        <div class="board_card">
          <Card >
            <p slot="title" class="title_name">
              <Icon size="16" state="android-calendar"></Icon>
              这是广告
            </p>
            <carousel :indicators="true" :auto="3000" :responsive="35">
              <div v-for="img in image" class="banner_guide">
                <img class="banner_guide" :src="img" alt="">
              </div>
            </carousel>
          </Card>
        </div>
        <div class="board_card">
          <carousel :indicators="true" :auto="3000" >
            <div v-for="request in requestObj" class="banner_guide">
              <div class="ivu-card ivu-card-bordered">
                <div class="ivu-card-head">
                  <p slot="title" class="title_name">
                    <Icon size="16" state="ios-paperplane"></Icon>
                    {{request.name}}
                  </p>
                </div>
                <div class="ivu-card-extra">
                  <a href="#" slot="extra">
                    {{request.role}}
                  </a>
                </div>
                <div class="ivu-card-body">
                  <ul>
                    <li>
                      <div style="display: inline-block">
                        <div>
                          {{request.date}}
                        </div>
                      </div>
                      <span style="float: right">{{request.state}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="board_card">
          <carousel :indicators="true" :auto="3000" >
            <div v-for="distributed in distributedObj" class="banner_guide">
              <div class="ivu-card ivu-card-bordered">
                <div class="ivu-card-head">
                  <p slot="title" class="title_name">
                    <Icon size="16" state="ios-paperplane"></Icon>
                    {{distributed.name}}
                  </p>
                </div>
                <div class="ivu-card-extra">
                  <a href="#" slot="extra">
                    {{distributed.role}}
                  </a>
                </div>
                <div class="ivu-card-body">
                  <ul>
                    <li>
                      <div style="display: inline-block">
                        <div>
                          {{distributed.date}}
                        </div>
                      </div>
                      <span style="float: right">{{distributed.state}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="board_card">
          <carousel :indicators="true" :auto="3000">
            <div v-for="scm in scmObj" class="banner_guide">
              <div class="ivu-card ivu-card-bordered">
                <div class="ivu-card-head">
                  <p slot="title" class="title_name">
                    <Icon size="16" state="ios-paperplane"></Icon>
                    {{scm.name}}
                  </p>
                </div>
                <div class="ivu-card-extra">
                  <a href="#" slot="extra">
                    {{scm.role}}
                  </a>
                </div>
                <div class="ivu-card-body">
                  <ul>
                    <li>
                      <div style="display: inline-block">
                        <div>
                          {{scm.date}}
                        </div>
                      </div>
                      <span style="float: right">{{scm.state}}</span>
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
  import Carousel from 'vue-m-carousel'
  import VBar from 'v-bar';
  export default{
    components: {
      VBar,
      Carousel
    },
    data: function() {
      return {
        image: ['/static/img/tools1.png','/static/img/tools2.png','/static/img/tools3.png','/static/img/tools4.png'],
        requestObj:[
          {
            name:'这是最新项目需求A',
            date:'2017-06-08',
            state:'finish',
            role:'A公司'
          },
          {
            name:'这是最新项目需求B',
            date:'2017-12-08',
            state:'undo',
            role:'B公司'
          },
          {
            name:'这是最新项目需求C',
            date:'2017-05-08',
            state:'doing',
            role:'C公司'
          }
        ],
        distributedObj:[
          {
            name:'这是最新募资信息A',
            date:'2017-06-08',
            state:'finish',
            role:'A公司'
          },
          {
            name:'这是最新募资信息B',
            date:'2017-06-08',
            state:'doing',
            role:'B公司'
          },
          {
            name:'这是最新募资信息C',
            date:'2017-06-08',
            state:'undo',
            role:'C公司'
          }
        ],
        scmObj:[
          {
            name:'这是最新商品/服务信息名称A',
            date:'2017-06-08',
            state:'undo',
            role:'A公司'
          },
          {
            name:'这是最新商品/服务信息名称B',
            date:'2017-06-08',
            state:'finish',
            role:'B公司'
          },
          {
            name:'这是最新商品/服务信息名称C',
            date:'2017-06-08',
            state:'doing',
            role:'C公司'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss" state="text/scss">
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
