//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'hahaha',
    time: (new Date()).toString(),
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    conditionTest: false,
    conditionTestContent: 'H~~~~~',
    list: [
      {"msg":"HHH"},
      {"msg":"NNN"}
    ],
    strList: [
      "str1",
      "str2"
    ],
    objArry: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' }
    ],
    numArray: [1,2],
    item: {
      index: 0,
      msg: 'this is a template',
      time: 'Now Time'
    },
    eleColor: 'purple',
    eleFontSize: '48rpx'
  },
  //自定义事件
  switch: function (e) {
    const length = this.data.objArry.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objArry[x]
      this.data.objArry[x] = this.data.objArry[y]
      this.data.objArry[y] = temp
    }
    this.setData({
      objArry: this.data.objArry
    })
  },
  addToFront: function (e) {
    const length = this.data.objArry.length
    this.data.objArry = [{ id: length, unique: 'unique_' + length }].concat(this.data.objArry)
    this.setData({
      objArry: this.data.objArry
    })
  },
  addNumberToFront: function (e) {
    this.data.numArray = [this.data.numArray.length + 1].concat(this.data.numArray)
    this.setData({
      numArray: this.data.numArray
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goPageA: function() {
    wx.navigateTo({url: '../pageA/pageA?flag=12&other=aaa'})
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
