<template>
  <div v-bar class="el1full">
    <div>
      <div class="search_contain">
        <div class="filter_title">
          所有项目
        </div>
        <div v-for="item in messageList">
          <Card style="margin-bottom: 10px">
            <p slot="title" class="title_name">
              <Icon size="16" state="android-calendar"></Icon>
              {{item.name}}
            </p>
            <ul class="message_list">
              <li>
                <div style="display: inline-block">
                  <div class="">
                    所属公司:&nbsp;{{item.company}}
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div class="">
                    推荐信息:&nbsp;{{item.msg}}
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div class="">
                    发布时间:&nbsp;{{item.time}}
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    项目前景:&nbsp;<Rate allow-half v-model="item.prospect"></Rate>
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div>
                    公司实力:&nbsp;<Rate allow-half v-model="item.strength"></Rate>
                  </div>
                </div>
              </li>
              <li>
                <div style="display: inline-block">
                  <div class="">
                    状态:&nbsp;{{item.state}}
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
            name:'信息一',
            company:'google',
            msg:'前景好,有发展',
            time:'2016-05-12',
            prospect:4.0,
            strength:2.5,
            state:'A'
          },
          {
            name:'信息二',
            company:'JD',
            msg:'开发有保证',
            time:'2016-02-03',
            prospect:3.5,
            strength:4.0,
            state:'B'
          },
          {
            name:'信息三',
            company:'Baidu',
            msg:'前沿科技支撑',
            time:'2016-03-13',
            prospect:4.0,
            strength:3.0,
            state:'C'
          }
        ]
      }
    },
    methods: {
      loadMore:function (){
        this.messageList.push({
          name:'信息n',
          company:'TMALL',
          msg:'前景好,有市场',
          time:'2016-04-04',
          prospect:3.0,
          strength:3.5,
          state:'C'
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
