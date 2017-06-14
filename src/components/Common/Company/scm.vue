<template>
  <div style="height: 100%">
    <div class="publish_box">
      <div v-bar class="el1full">
        <div>
        <div class="publish_contain">
          <div v-for="item in messageList">
            <Card style="margin-bottom: 5px">
              <p slot="title" class="title_name">
                <Icon size="16" state="android-calendar"></Icon>
                产品一
              </p>
              <ul class="message_list">
                <li>
                  <div style="display: inline-block">
                    <div>
                      产品详情:&nbsp;这里是产品详情
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="opt_btn">
      <Row>
        <Col span="8">
        <div class="opt_btn_item"><Button>分类</Button></div>
        </Col>
        <Col span="8">
        <div class="opt_btn_item"><Button>购物车</Button></div>
        </Col>
        <Col span="8">
        <div class="opt_btn_item"><Button>我的订单</Button></div>
        </Col>
      </Row>
    </div>
  </div>

</template>

<script>
  import VBar from 'v-bar';
  export default{
    components: {
      VBar
    },
    data () {
      return {
        messageList:[
          {
            domain:['IT','教育'],
            scale:'300万',
            prefreStage:'A'
          },
          {
            domain:['金融',],
            scale:'4000万',
            prefreStage:'D'
          },
          {
            domain:['购物'],
            scale:'350万',
            prefreStage:'C'
          },
          {
            domain:['购物'],
            scale:'350万',
            prefreStage:'C'
          },
          {
            domain:['购物'],
            scale:'350万',
            prefreStage:'C'
          },
          {
            domain:['购物'],
            scale:'350万',
            prefreStage:'C'
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .publish_box{
    padding-bottom: 50px;
    height: 100%;
  }
  .publish_contain{
    height: 100%;
    .filter_title{
      height:50px;
      line-height: 50px;
      border-bottom: 1px solid #dddddd;
      text-align: center;
      font-size: 14px;
    }
    .message_list{
      li{
        height: 30px;
        line-height:30px;
      }
    }
  }

  .opt_btn{
    background-color: #eee;
    width: 100%;
    line-height: 50px;
    position: fixed;
    bottom:0px;
    left:0;
    text-align: center;
    border-top:1px solid #dddddd;
  }
</style>
