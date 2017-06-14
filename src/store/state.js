let DEV_API;
if (process.env.NODE_ENV == "production") {
  DEV_API = '';
} else {
  DEV_API = '';
  // DEV_API = 'https://pushmanage.journeyui.com';
}

let uid = $.cookie('UID');
export default {
  DEV_API,
  uid,
  toggleSideMenu: false,
  currentModal: ''
}
