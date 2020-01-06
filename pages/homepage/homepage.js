// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: [
      { "tit": "text1", "col": "#EE82EE"},
      { "tit": "text2", "col": "#8A2BE2" },
      { "tit": "text3", "col": "#4169E1" }
      ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,

    bannerlist: ["../resource/fj_001.png", "../resource/fj_002.png","../resource/fj_003.png"],

    itemlist: [
      [
        {
          "section": "0",
          "row": "0",
          "img": "../resource/f_22.png",
          "tit": "F-22",
          "subtit": "攻击性强",
          "pri": "¥ 11111$",
          "sal": "已销售10架",
          "intr": "F-22战斗机（英文：F-22 fighter，编号：F-22，代号/绰号：Raptor，译文：猛禽，通称：洛克希德·马丁F-22“猛禽”），是美国一型单座双发高隐身性第五代战斗机，是世界上第一种进入服役的第五代战斗机" 
        },
        {
          "section": "0",
          "row": "1",
          "img": "../resource/apq_02.png",
          "tit": "阿帕奇",
          "subtit": "机动灵活",
          "pri": "¥ 100000$",
          "sal": "已销售5架",
          "intr": "AH-64武装直升机（英文：AH-64 helicopter gunships，绰号：Apache，译文：阿帕奇，通称：波音AH-64“阿帕奇”），是美国陆军主力武装直升机"
        }],
      [
        {
          "section": "1",
          "row": "0",
          "img": "../resource/hy_03.png",
          "tit": "黑鹰",
          "subtit": "适应性强",
          "pri": "¥ 20000$",
          "sal": "已销售10架",
          "intr": "UH-60通用直升机（编号：UH-60 Utility Helicopter，代号：Black Hawk，译文：黑鹰，通称：西科斯基“黑鹰”），是美国一型四旋翼、双发通用直升机"
        },
        {
          "section": "1",
          "row": "1",
          "img": "../resource/yy_04.png",
          "tit": "鱼鹰",
          "subtit": "大载重量",
          "pri": "¥ 22000$",
          "sal": "已销售10架",
          "intr": "V-22“鱼鹰”倾转旋翼机指的是由美国波音公司和贝尔直升机公司联合研制的一款倾转旋翼机，该机后来于1989年3月19日首飞成功"
        }],
      [
        {
          "section": "2",
          "row": "0",
          "img": "../resource/hm_05.png",
          "tit": "航母",
          "subtit": "移动军事基地",
          "pri": "¥ 22220000$",
          "sal": "已销售2艘",
          "intr": "航空母舰（简称：航舰/航母，被称为“海上霸主”）是以舰载机为主要武器并作为其海上活动基地的大型水面战斗舰艇、海军水面战斗舰艇的最大舰种。主要用于攻击水面舰艇、潜艇和运输舰船，袭击海岸设施和陆上战略目标，夺取作战海区的制空权和制海权，支援登陆和抗登陆作战"
        },
        {
          "section": "2",
          "row": "1",
          "img": "../resource/qzj_06.png",
          "tit": "驱逐舰",
          "subtit": "航母保姆",
          "pri": "¥ 222000$",
          "sal": "已销售5艘",
          "intr": "现代驱逐舰装备有防空、反潜、对海等多种武器，既能在海军舰艇编队担任进攻性的突击任务，又能承担作战编队的防空、反潜护卫任务，还可在登陆、抗登陆作战中担任支援兵力，担任巡逻、警戒、侦察、海上封锁和海上救援任务以及提供无人舰载机的起飞和降落"
        }]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 自定义方法
   */
  checkDetail: function (e) {
    var item = e.currentTarget.dataset.item;
    item = JSON.stringify(item);
    wx.navigateTo({
      url: '../detail/detail?data='+item,
    })
  }
})