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
                    募资方式:&nbsp;
                    <span v-for="tag in item.domain">
                    <Tag>{{tag}}</Tag>
                  </span>
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    公司所属阶段:&nbsp;{{item.prefreStage}}
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    募资规模:&nbsp;&yen;{{item.preferRange}}
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
            domain:['股份直投'],
            prefreStage:'B',
            preferRange:'300万 - 400万',
          },
          {
            domain:['合资公司'],
            prefreStage:'A',
            preferRange:'300万 - 400万'
          },
          {
            domain:['项目转让'],
            prefreStage:'C',
            preferRange:'300万 - 400万'
          }
        ]
      }
    },
    methods: {
      loadMore:function (){console.log(1111,this.$store.state);
        this.messageList.push({
          domain:['合资公司'],
          prefreStage:'A',
          preferRange:'300万 - 400万'
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
