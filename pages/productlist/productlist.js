// pages/productlist/productlist.js
const utils = require('../template_js/utils.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    prolistheight: 0,
    classifyID: 0,
    currentTab: 0,
    scrollTop: 0,
    toView: 0,
    classifyList: [
      {
        classifyID: 1,
        className: '好吃的'
      },
      {
        classifyID: 2,
        className: '好玩的'
      },
      {
        classifyID: 3,
        className: '好听的'
      },
      {
        classifyID: 4,
        className: '菜单4'
      },
      {
        classifyID: 5,
        className: '菜单5'
      },
      {
        classifyID: 6,
        className: '菜单6'
      }
    ],
    contentData: {
      contentList: [
        {
          className: '好吃的',
          contentItems: [
            {
              classifyID: 1,
              itemImg: '../resource/a01.png',
              itemName: '苹果'
            },
            {
              classifyID: 1,
              itemImg: '../resource/b02.png',
              itemName: '香蕉'
            },
            {
              classifyID: 1,
              itemImg: '../resource/a01.png',
              itemName: '苹果'
            },
            {
              classifyID: 1,
              itemImg: '../resource/b02.png',
              itemName: '香蕉'
            }
          ]
        },
        {
          className: '好玩的',
          contentItems: [
            {
              classifyID: 2,
              itemImg: '../resource/f03.png',
              itemName: '足球'
            },
            {
              classifyID: 2,
              itemImg: '../resource/b04.png',
              itemName: '篮球'
            },
            {
              classifyID: 2,
              itemImg: '../resource/f03.png',
              itemName: '足球'
            },
            {
              classifyID: 2,
              itemImg: '../resource/b04.png',
              itemName: '篮球'
            }
          ]
        },
        {
          className: '好听的',
          contentItems: [
            {
              classifyID: 3,
              itemImg: '../resource/music01.png',
              itemName: '稻香'
            },
            {
              classifyID: 3,
              itemImg: '../resource/music01.png',
              itemName: '青花瓷'
            },
            {
              classifyID: 3,
              itemImg: '../resource/music01.png',
              itemName: '听妈妈的话'
            },
            {
              classifyID: 3,
              itemImg: '../resource/music01.png',
              itemName: '晴天'
            }
          ]
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var wh = wx.getSystemInfoSync().windowHeight;
    var whrpx = utils.getElementRPX(wh);
    console.log("px -> rpx : "+ whrpx);
    this.setData({
      prolistheight: whrpx - 750,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  tabTapped: function (e) {
    this.setData({
      currentTab: e.currentTarget.id,
      classifyID: e.currentTarget.dataset.classifyid,
      toView: e.currentTarget.dataset.index
    })
  }
})