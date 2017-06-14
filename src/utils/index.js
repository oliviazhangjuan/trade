/**
 * Created by go_songs on 2017/4/21.
 */

/**
 * 格式化时间
 * @param format
 * @returns yyyy-MM-dd h:m:s
 */
Date.prototype.format = function (format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}

/**
 * 判断变量是否为 Array
 * @param a
 * @returns {boolean}
 */
export const isArr = (a) => {
  return Object.prototype.toString.call(a) === '[object Array]';
}

/**
 * 判断变量是否为 null
 * @param a
 * @returns {boolean}
 */
export const isNull = (a) => {
  return Object.prototype.toString.call(a) === '[object Null]';
}

/**
 * 判断变量是否为 Object
 * @param a
 * @returns {boolean}
 */
export const isObj = (a) => {
  return Object.prototype.toString.call(a) === '[object Object]';
}

/**
 * 格式化10位时间戳为 2017-3-2 格式
 * @param timestamp 10 位
 * @returns {string} 2017-3-2
 */
export const formatTime = (timestamp) => {
  var d = new Date(timestamp * 1000);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var date = d.getDate();
  if (year == '1' || year == '1970') {
    return '无';
  } else {
    return year + '-' + month + '-' + date;
  }
}

// 获取当天零点的时间戳
const getNowZeroTimeStamp = () => {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return parseInt(date.getTime() / 1000);
}

/**
 * 获取 N 天前零点的时间戳
 * @param num
 * @returns {number}
 */
export const beforeDays = (num) => {
  return getNowZeroTimeStamp() - num * 24 * 3600;
}

export const filterRoute = (curR, appID) => {
  let newR;
  if (curR.indexOf('/Tags/TagMember') !== -1) {
    newR = '/Tags/TagsList/' + appID;
  } else {
    let curRArr = curR.split('/');
    curRArr.splice(0, 1);
    curRArr.splice(curRArr.length - 1, 1);
    newR = curRArr.join('/');
    newR = "/" + newR + '/' + appID;
  }
  return newR;
}

export const getArrSum = (arr) => {
  const getSum = (preValue, curValue, index, array) => {
    return Number(preValue) + Number(curValue);
  }

  let sum;
  for (let i = 0; i < arr.length; i++) {
    sum = arr.reduce(getSum, 0)
  }
  return sum;
}

/**
 * 计算百分比
 * @param n1 分子
 * @param n2 分母
 * @returns '0.03%'
 */
export const getDivision = (n1, n2) => {
  let res;
  if (n2 === 0 || n1 === 0) {
    res = '0.00%'
  } else {
    res = (n1 / n2).toFixed(2) + '%'
  }
  return res;
}