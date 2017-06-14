<template>
  <div class="calendar">
    <div class="calendar__header">
      <!-- 年份 月份 -->
      <div class="calendar__control" :class="{'calendar__control_center': centerHeaderJson}">
        <div class="calendar__arrow left" @click="prevView"></div>
        <div class="calendar__indicator">
          <span class="calendar__indicator-title">{{shownIndicator.title}}</span>
          <span class="calendar__indicator-detail">{{shownIndicator.detail}}</span>
        </div>
        <div class="calendar__arrow right" @click="nextView"></div>
      </div>
      <div class="calendar__action">
        <slot name="action"></slot>
      </div>
    </div>
    <div class="calendar__main">
      <div class="calendar__today" @click="goToday">
        今天
      </div>
      <div class="calendar__date">
        <!-- 星期 -->
        <div class="calendar__weekdays">
          <div v-for="weekDay in weekDays" class="calendar__weekday">{{weekDay}}</div>
        </div>
        <!-- 日期 -->
        <div class="calendar__days">
          <div class="calendar__day" v-for="day in days"
               :class="{'calendar__day_now': checkToday(day), 'calendar__day_selected': checkSelected(day), 'calendar__day_othermonth': checkOtherMonth(day), 'calendar__day_decorate': checkDecorate(day)}"
               @click="select(day)">
            <span>{{day.getDate()}}
              <i class="sub" v-if="checkSub(day)">
                <Badge :count="checkSub(day).count"></Badge>
              </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" type="text/scss">
  .calendar {
    font-size: 14px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    background: #fff;

  & .calendar__header {
      position: relative;
      padding: 25px 0;
    }
  & .calendar__action {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
  & .calendar__control {
      width: 240px;
      padding: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #1e2329;
  &.calendar__control_center {
     margin: 0 auto;
   }

  & .calendar__indicator {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-weight: bold;
    }
    & .calendar__indicator-title {
      color: #31b29c;
    }
  & .calendar__indicator-detail {
      color: #31b29c;
      margin-left: 10px;
    }
  & .calendar__arrow {
      width: 44px;
      text-align: center;

  &.right {
  &:after {
     display: inline-block;
     content: '';
     width: 0;
     height: 0;
     border-top: 5px solid transparent;
     border-bottom: 5px solid transparent;
     border-left: 5px solid #c7d2d0;
   }
  }
  &.left {
  &:after {
     display: inline-block;
     content: '';
     width: 0;
     height: 0;
     border-top: 5px solid transparent;
     border-bottom: 5px solid transparent;
     border-right: 5px solid #c7d2d0;
   }
  }
  }
  }
  & .calendar__main {
      display: flex;
    }
  & .calendar__today {
      flex: none;
      width: 20px;
      padding: 5px 0;
      margin-left: 8px;
      border-radius: 10px;
      align-self: flex-start;
      background: #31b29c;
      font-size: 11px;
      text-align: center;
      color: #fff;
    }
  & .calendar__date {
      width: 100px;
      flex: 1 0 auto;
    }
  & .calendar__weekdays {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      font-size: 11px;
      color: #1e2329;
  & .calendar__weekday {
      width: 14.2%;
      flex: 1 0 auto;
      text-align: center;
    }
  }
  & .calendar__days{
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10px;

  & .calendar__day {
      position: relative;
      flex: 0 0 auto;
      display: inline-block;
      width: 14.2%;
      margin: 3px 0;
      text-align: center;
      font-size: 12px;
      color: #000;
  & .sub {
      font-style: inherit;
      font-size: 10px;
      line-height: 14px;
      position: absolute;
      top: -5px;
      left: 20px;
      text-align: center;
      width: 14px;
      height: 14px;
      background: #fff;
      border-radius: 14px;
    }
  &>span {
      position: relative;
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  &.calendar__day_now {
  & span {
      border-radius: 50%;
      background: #f5a781;
      color: #fff !important;
    }
  }
  &.calendar__day_selected {
  & span {
      border-radius: 50%;
      background: #eb4f04;
      color: #fff !important;
    }
  }
  &.calendar__day_othermonth {
  & span {
      border-radius: 50%;
      color: #ccc;
    }
  }
  &.calendar__day_decorate {
     position: relative;
    &:after {
       content: '';
       position: absolute;
       bottom: 2px;
       left: 0;
       right: 0;
       margin: auto;
       width: 6px;
       height: 6px;
       border-radius: 50%;
       background: #eb4f04;
     }
    }
  }
  }
  }
</style>

<script>
  const I18N = {
    'zh-cn': ['日', '一', '二', '三', '四', '五', '六'],
    'en': ['SUN', 'MON', 'TUN', 'WED', 'THU', 'FRI', 'SAT']
  };
  export default {
    props: {
      currentView: {
        type: Object,
        twoWay: true,
        'default'() {
          return {}
        }
      },
      decorate: {
        type: Object,
        'default'() {
          return {}
        }
      },
      sub: {
        type: Object,
        'default'() {
          return {}
        }
      },
      i18n: {
        type: String,
        'default': 'zh-cn'
      },
      indicator: {
        type: Object,
        'default'() {
          return {}
        }
      },
      selected: {
        type: Date,
        twoWay: true,
        'default'() {
          return new Date()
        }
      },
      startMonday: {
        type: Boolean,
        'default': false
      },
      startDate: {
        type: Date,
        twoWay: true,
        'default'() {
          return new Date()
        }
      },
      view: {
        type: String,
        'default': 'month'
      },
      centerHeader: {
        type: Boolean,
        'default': true
      }
    },
    data:function(){
        return {
//          currentViewJson:this.currentView,
//          decorateJson:JSON.parse(JSON.stringify(this.decorate)),
//          subJson:this.sub,
//          i18nJson:this.i18n,
//          indicatorJson:this.indicator,
          selectedJson:this.selected,
//          startMondayJson:this.startMonday,
          startDateJson:this.startDate,
//          viewJson:this.view,
//          centerHeaderJson:this.centerHeader
        }
    },
    computed: {
      currentViewJson(){
        return JSON.parse(JSON.stringify(this.currentView))
      },
      decorateJson(){
        return JSON.parse(JSON.stringify(this.decorate))
      },
      subJson(){
        return JSON.parse(JSON.stringify(this.sub))
      },
      i18nJson(){
        return this.i18n
      },
      indicatorJson(){
        return this.indicator
      },
//      selectedJson(){
//          return this.selected
//      },
      startMondayJson(){
        return this.startMonday
      },
//      startDateJson(){
//          return this.startDate
//      },
      viewJson(){
        return this.view
      },
      centerHeaderJson(){
        return this.centerHeader
      },
      shownIndicator: {
        get() {
          let indicator = {};
//          if (this.indicatorJson.title) {
//            indicator.title = this.indicatorJson.title
//          } else {
            indicator.title = this.startDateJson.getFullYear();
//          }

          if (this.indicatorJson.detail) {
            indicator.detail = this.indicatorJson.detail
          } else {
            indicator.detail = this.startDateJson.getMonth() + 1 + '月'
          }
          return indicator
        }
      },
      days: {
        get() {
          let days = [];
          let dayslength;
          let startDay;
          let leftPadding;
          let startDate;
          if (this.viewJson === 'month') {
            dayslength = 35;
            startDate = new Date(this.startDateJson.getFullYear(), this.startDateJson.getMonth())
            startDay = startDate.getDay()
          } else {
            dayslength = 7;
            startDate = this.startDateJson;
            startDay = startDate.getDay()
          }
          if (this.startMondayJson) {
            leftPadding = startDay ? startDay - 1 : 6
          } else {
            leftPadding = startDay
          }

          Array.from({length: leftPadding}, (v, k) => -(k + 1)).reverse().forEach((minus) => {
            days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + minus))
          });
          days.push(startDate);
          Array.from({length: dayslength - days.length}, (v, k) => k + 1).forEach((plus) => {
            days.push(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + plus))
          });
          return days
        }
      },
      weekDays: {
        get() {
          let weekDayNames = JSON.parse(JSON.stringify(I18N[this.i18nJson]))

          if (this.startMondayJson) {
            let sunday = weekDayNames.shift()
            weekDayNames.push(sunday)
          }
          return weekDayNames
        }
      }
    },
    watch: {
      days() {
        this.currentViewJson = {
          start: this.days[0],
          end: this.days[this.days.length - 1]
        }
      }
    },
    methods: {
      checkToday(day) {
        let now = new Date();
        return !!(
          day.getFullYear() === now.getFullYear() &&
          day.getMonth() === now.getMonth() &&
          day.getDate() === now.getDate()
        )
      },
      checkSelected(day) {
        return !!(
          day.getFullYear() === this.selectedJson.getFullYear() &&
          day.getMonth() === this.selectedJson.getMonth() &&
          day.getDate() === this.selectedJson.getDate()
        )
      },
      checkOtherMonth(day) {
        return day.getMonth() !== this.startDateJson.getMonth()
      },
      checkDecorate(day) {
        let dateFormat = day.getFullYear() + '-' + ('0' + (day.getMonth() + 1)).slice(-2) + '-' + ('0' + (day.getDate())).slice(-2);
        return !!this.decorateJson[dateFormat]
      },
      checkSub(day) {
        let dateFormat = day.getFullYear() + '-' + ('0' + (day.getMonth() + 1)).slice(-2) + '-' + ('0' + (day.getDate())).slice(-2);
        return this.subJson[dateFormat]
      },
      prevView() {
        if (this.viewJson === 'month') {
          this.startDateJson = new Date(this.startDateJson.getFullYear(), this.startDateJson.getMonth() - 1, this.startDateJson.getDate())
        } else {
          this.startDateJson = new Date(this.startDateJson.getFullYear(), this.startDateJson.getMonth(), this.startDateJson.getDate() - 7)
        }
        this.$nextTick(() => {
          this.$emit('prev')
        })
      },
      nextView() {
        if (this.viewJson === 'month') {
          this.startDateJson = new Date(this.startDateJson.getFullYear(), this.startDateJson.getMonth() + 1, this.startDateJson.getDate())
        } else {
          this.startDateJson = new Date(this.startDateJson.getFullYear(), this.startDateJson.getMonth(), this.startDateJson.getDate() + 7)
        }
        this.$nextTick(() => {
          this.$emit('next')
        })
      },
      select(day) {
        this.$nextTick(() => {
          this.$emit('checkSelected',day)
        });
        this.selectedJson = day
      },
      goToday() {
        this.startDateJson = new Date;
        this.selectedJson = new Date;
        this.$nextTick(() => {
          this.$emit('today')
        })
      }
    },
    ready() {
      this.currentViewJson = {
        start: this.days[0],
        end: this.days[this.days.length - 1]
      }
    }
  }
</script>
