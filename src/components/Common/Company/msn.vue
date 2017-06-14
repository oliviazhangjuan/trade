<template>
  <div v-bar class="el1full">
    <div>
      <div class="message_contain">
        <div class="message_bar">
          <div class="opt_btn">
          <Row>
            <Col span="8">
            <div class="opt_btn_item" @click="checkModule(0)"><Button size="large" long type="warning">企业</Button></div>
            </Col>
            <Col span="8">
            <div class="opt_btn_item" @click="checkModule(1)"><Button size="large" long type="info">个人</Button></div>
            </Col>
            <Col span="8">
            <div class="opt_btn_item" @click="checkModule(2)"><Button size="large" long type="success">系统</Button></div>
            </Col>
          </Row>
        </div>
        </div>
        <div class="message_box">
          <div v-for="item in messageList">
            <Card style="margin-bottom: 10px">
              <ul class="message_list">
                <li class="clearfix">
                  <div class="message_img">
                    <img :src="item.src" alt="item.name">
                  </div>
                  <div class="message_body">
                    <div>
                      企业名:&nbsp;{{item.name}}
                    </div>
                    <div>
                      最后一条信息:&nbsp;{{item.msg}}
                    </div>
                    <div style="textAlign: right">
                      {{item.time}}
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
          <div class="load_more">
            <Button @click="loadMore" type="success" style="width: 80%">加载更多</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    components: {

    },
    data () {
      return {
        module:0,
        companyMsg:[
          {
            src:'/static/img/tools10.png',
            name:'百度',
            msg:'亲爱的百度用户...',
            time:'2017-02-23'
          },
          {
            src:'/static/img/tools11.png',
            name:'阿里',
            msg:'亲爱的阿里用户...',
            time:'2017-05-06'
          },
          {
            src:'/static/img/tools12.png',
            name:'腾讯',
            msg:'亲爱的腾讯用户...',
            time:'2017-06-06'
          }
        ],
        personMsg:[
          {
            src:'/static/img/tools4.png',
            name:'peter',
            msg:'明天吃个饭吧...',
            time:'2017-06-23'
          },
          {
            src:'/static/img/tools8.png',
            name:'richard',
            msg:'周一吃个饭吧...',
            time:'2017-02-06'
          },
          {
            src:'/static/img/tools9.png',
            name:'kally',
            msg:'周三吃个饭吧...',
            time:'2017-12-06'
          }
        ],
        systemMsg:[
          {
            src:'/static/img/tools1.png',
            name:'助手一',
            msg:'告诉你一个快捷方式...',
            time:'2017-02-22'
          },
          {
            src:'/static/img/tools14.png',
            name:'助手一',
            msg:'再告诉你一个快捷方式...',
            time:'2017-05-15'
          },
          {
            src:'/static/img/tools7.png',
            name:'助手一',
            msg:'还告诉你一个快捷方式...',
            time:'2017-06-26'
          }
        ]
      }
    },
    computed:{
      messageList:function () {
        if(this.module == 1){
          return this.personMsg
        }else if(this.module == 2){
          return this.systemMsg
        }else{
            return this.companyMsg
        }
      }
    },
    methods: {
      checkModule:function (module) {
        this.module = module;
      },
      loadMore:function (){
        this.messageList.push({
          src:'/static/img/tools13.png',
          name:'新信息来源',
          msg:'这是加载的新信息...',
          time:'2017-06-06'
        });
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .message_contain{
    .filter_title{
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #dddddd;
      text-align: center;
      font-size: 14px;
    }
    .message_list{
      li{
        /*height: 30px;*/
        /*line-height:30px;*/
        height: 80px;
      }
    }
    .load_more{
      text-align: center;
      margin-top: 10px;
    }
    .message_box{
      box-sizing: border-box;
      position: relative;
      top:46px;
      .message_img{
        float: left;
        width:30%;
        height: 100%;
        img{
          width:100%;
          height: 100%;
        }
      }
      .message_body{
        float: right;
        width:68%;
      }
    }
    .message_bar{
      position: fixed;
      z-index: 1;
      width: 100%;
      .ivu-btn-large,.ivu-btn{
        border-radius: 0;
      }
    }
  }
</style>
