<template>
  <div v-bar class="el1full">
    <div>
      <div class="search_contain">
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
                    所属领域:&nbsp;
                    <span v-for="tag in item.domain">
                    <Tag>{{tag}}</Tag>
                  </span>
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    阶段:&nbsp;{{item.prefreStage}}
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    负责人:&nbsp;{{item.manage}}
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
</template>

<script>
  export default{
    components: {

    },
    data () {
      return {
        settings: {
          maxScrollbarLength: 60
        },
        messageList:[
          {
            domain:['教育'],
            prefreStage:'B',
            manage:'张三',
          },
          {
            domain:['IT'],
            prefreStage:'A',
            manage:'李四'
          },
          {
            domain:['教育','购物'],
            prefreStage:'C',
            manage:'王五'
          }
        ]
      }
    },
    methods: {
      loadMore:function (){
        this.messageList.push({
          domain:['图书'],
          prefreStage:'A',
          manage:'peter'
        });
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .search_contain{
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
