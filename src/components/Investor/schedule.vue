<template>
  <div v-bar class="el1full">
    <div>
      <div class="__vev_calendar-wrapper">
        <div class="schedule_contain">
          <calendar :view="view" :decorate="decorate" :sub="sub" :current-view.sync="currentView" :start-date.sync="startDate" :indicator="indicator" :start-monday="true" @prev="prev" @next="next" @today="today" @checkSelected="checkSelected">
            <!--<div class="actions" slot="action">-->
            <!--<div class="action" @click="changeView">{{viewName}}</div>-->
            <!--<div class="action" @click="addEvent">加</div>-->
            <!--</div>-->
          </calendar>
        </div>
        <div class="tool_bar clearfix">
          <span class="plus" @click="addEvent"><Button type="success" shape="circle" icon="plus-round">添加 </Button></span>
          <span class="funnel" @click="funnelEvent"><Button type="success" shape="circle" icon="funnel">筛选</Button></span>
        </div>
        <div class="event_contain">
          <div class="events-wrapper">
            <h2 class="date">
              {{funnelTime == '' ? '所有' : funnelTime}}事件
            </h2>
            <div class="cal-events" v-for="item in allEvents">
              <div class="event-item" v-if="funnelTime == '' || item.time == funnelTime">
                <div class="wrapper">
                  <h3 class="title">
                    {{item.title}}
                  </h3>
                  <p class="time">
                    {{item.time}}
                  </p>
                  <p class="desc">
                    {{item.manger}}
                  </p>
                  <p class="desc" style="textAlign: right">
                    {{item.state}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import Calendar from '../../assets/libs/calendar.vue';
  import moment from 'moment'
  export default{
    components: {
      VuePerfectScrollbar,
      Calendar
    },
    data() {
      return {
        view: 'month',
        decorate: {'2017-08-22':true,'2017-06-27':true},
        sub: {},
        currentView: {},
        indicator: {},
        startDate: new Date,
        allEvents:[
          {'title':'事件一','time':'2017-08-22','manger':'张三','state':'doing'},
          {'title':'事件二','time':'2017-06-27','manger':'李四','state':'finish'}
        ],
        funnelTime:''
      }
    },
    computed: {
      viewName: {
        get() {
          if (this.view === 'week') {
            return '月'
          } else if (this.view === 'month') {
            return '周'
          }
        }
      }
    },
    watch: {
      startDate(startDate) {
        this.dealWithIndicator(startDate)
      }
    },
    methods: {
      dealWithIndicator(startDate) {
        let indicator = {};
        indicator.title = startDate.getFullYear();
        this.indicator = indicator
      },
      addEvent() {
//        let flag = window.confirm('是否给明天添加一条事件');
//        let today = new Date();
//        if (flag) {
//          this.decorate = Object.assign({}, this.decorate, {
//            [moment(new Date()).add(1, 'day').format('YYYY-MM-DD')]: true
//          })
//        }
          let time = this.funnelTime ? this.funnelTime : moment(new Date()).format('YYYY-MM-DD');
          this.allEvents.push({'title':'事件n','time':time,'manger':'王五','state':'undo'})
      },
      funnelEvent(){

      },
      checkSelected(Day){
          this.funnelTime = moment(Day).format('YYYY-MM-DD');
      },
      prev() {
        console.log('prev clicked')
      },
      next() {
        console.log('next clicked')
      },
      today() {
        this.funnelTime = moment(new Date()).format('YYYY-MM-DD')
      }
    },
    created() {
      this.dealWithIndicator(this.startDate)
    },
  }
</script>

<style scoped lang="scss" type="text/scss">
  .__vev_calendar-wrapper{
    .schedule_contain{
      height: 100%;
    }
    .events-wrapper {
      width: 100%;
      padding: 10px;
      border-radius: 10px;
      background-color: rgb(242, 149, 67);
    }
    .date {
      width: 40%;
      min-width: 200px;
      text-align: center;
      color: #fff;
      background-color: rgba(0,0,0,.2);
      border-radius: 20px;
      margin: 0 auto;
      font-size: 22px;
    }
    .cal-events {
      height: 100%;
    }
    .event-item {
      padding: 5px 20px;
      margin-top: 15px;
      box-shadow: 0 3px 11px 2px rgba(0,0,0,.1);
      background-color: #fff;
      border-radius: 5px;
      color: #323232;
      position: relative;
      .title {
        height: 40px;
        line-height: 40px;
        color: #323232;
        font-size: 16px;
        border-bottom: 1px solid #f2f2f2;
      }
      .time {
        position: absolute;
        right: 30px;
        top: 17px;
        color: #9b9b9b;
        font-size: 14px;
      }
      .desc {
        color: #9b9b9b;
        font-size: 14px;
        padding: 7px 0;
      }
    }
    .tool_bar{
      height:40px;
      line-height: 40px;
      .plus{
        float: left;
      }
      .funnel{
        float:right;
      }
    }
  }
</style>
