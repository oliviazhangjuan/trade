<template>
  <div v-bar class="el1full">
    <div>
      <div class="publish_contain">
        <div>
          <div v-for="item in messageList">
            <Card style="margin-bottom: 10px">
              <p slot="title" class="title_name">
                <Icon size="16" state="android-calendar"></Icon>
                这是项目名
              </p>
              <ul class="message_list">
                <li>
                  <div style="display: inline-block">
                    <div>
                      投资对象:&nbsp;{{item.company}}
                    </div>
                  </div>
                </li>
                <li>
                  <div style="display: inline-block">
                    <div>
                      投资负责人:&nbsp;{{item.manage}}
                    </div>
                  </div>
                </li>
                <li>
                  <div style="display: inline-block">
                    <div>
                      最新状态:&nbsp;{{item.state}}
                    </div>
                  </div>
                </li>
                <li>
                  <div style="display: inline-block">
                    <div>
                      更新时间:&nbsp;{{item.updateTime}}
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
            company:'百度',
            manage:'张三',
            state:'doing',
            updateTime:'2017-02-23'
          },
          {
            company:'阿里',
            manage:'李四',
            state:'finish',
            updateTime:'2017-05-06'
          },
          {
            company:'腾讯',
            manage:'王五',
            state:'undo',
            updateTime:'2017-06-06'
          }
        ]
      }
    },
    methods: {
      loadMore:function (){
        this.messageList.push({
          company:'苹果',
          manage:'peter',
          state:'undo',
          updateTime:'2017-06-19'
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
