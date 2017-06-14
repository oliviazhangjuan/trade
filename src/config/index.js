export default {
  serverURI: '',
  fixedLayout: false,
  hideLogoOnMobile: false,
  MenuTitle:{'/Company/homepage':'主页信息','/Investor/homepage':'公司主页','/Investor/schedule':'日程','/Investor/search':'投资项目检索','/Investor/publish':'投资信息发布','/Investor/manage':'已投项目管理','/Investor/financial':'财务管理','/Company/scm':'供应链','/Company/msn':'消息'},
  MenuList:[[
    {'title':'公司主页','path':'/Investor/homepage','iconType':'ribbon-a'},
    {'title':'日程','path':'/Investor/schedule','iconType':'android-calendar'},
    {'title':'募资信息检索','path':'/Investor/search','iconType':'search'},
    {'title':'投资信息发布','path':'/Investor/publish','iconType':'share'},
    {'title':'已投项目管理','path':'/Investor/manage','iconType':'android-folder-open'},
    {'title':'财务管理','path':'/Investor/financial','iconType':'android-options'},
    {'title':'供应链','path':'/Company/scm','iconType':'android-map'},
  ],[
    {'title':'公司主页','path':'/Investor/homepage','iconType':'ribbon-a'},
    {'title':'日程','path':'/Investor/schedule','iconType':'android-calendar'},
    {'title':'投资信息检索','path':'/Investor/search','iconType':'search'},
    {'title':'募资信息发布','path':'/Developer/fund','iconType':'share'},
    {'title':'项目管理','path':'/Developer/manage','iconType':'android-folder-open'},
    {'title':'财务管理','path':'/Developer/financial','iconType':'android-options'},
    {'title':'供应链','path':'/Company/scm','iconType':'android-map'},
  ],[
    {'title':'公司主页','path':'/Investor/homepage','iconType':'ribbon-a'},
    {'title':'日程','path':'/Investor/schedule','iconType':'android-calendar'},
    {'title':'产品/服务发布','path':'/Scm/publish','iconType':'share'},
    {'title':'订单/物流管理','path':'/Scm/manage','iconType':'android-folder-open'},
    {'title':'财务管理','path':'/Investor/financial','iconType':'android-options'},
    {'title':'供应链','path':'/Company/scm','iconType':'android-map'},
  ]]
}
