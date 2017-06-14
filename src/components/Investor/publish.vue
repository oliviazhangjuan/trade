<template>
  <div v-bar class="el1full">
    <div>
    <div class="publish_contain">
      <div>
        <div v-for="item in messageList">
          <Card style="margin-bottom: 10px">
            <p slot="title" class="title_name">
              <Icon size="16" state="android-calendar"></Icon>
              这是标题
            </p>
            <ul class="message_list">
              <li>
                <div style="display: inline-block">
                  <div>
                    目标领域:&nbsp;
                    <span v-for="tag in item.domain">
                    <Tag>{{tag}}</Tag>
                  </span>
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    资金规模:&nbsp;&yen;{{item.scale}}
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    偏好阶段:&nbsp;{{item.prefreStage}}
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
          }
        ]
      }
    },
    methods: {
      loadMore:function (){
        this.messageList.push({
          domain:['医疗'],
          scale:'600万',
          prefreStage:'C'
        });
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .publish_contain{
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
    .load_more{
      text-align: center;
      margin-top: 10px;
    }
  }
</style>
