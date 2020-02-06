// pages/channels/channels.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 0,
    currentChannel: 0,
    channelsList: ["频道-子频道A", "频道-子频道B", "频道-子频道C", "频道-子频道D", "频道-子频道E", "频道-子频道F"],
    channelsContentData: {
      channelItemList: [
        {
          title: "频道-子频道A",
          itemList: [
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            },
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            },
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            },
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            },
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            },
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            },
            {
              itemName: "音乐",
              itemImg: "../resource/music01.png"
            }
          ]
        },
        {
          title: "频道-子频道B",
          itemList: [
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            },
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            },
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            },
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            },
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            },
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            },
            {
              itemName: "装备",
              itemImg: "../resource/hy_03.png"
            }
          ]
        },
        {
          title: "频道-子频道C",
          itemList: [
            {
              itemName: "运动",
              itemImg: "../resource/b04.png"
            },
            {
              itemName: "运动",
              itemImg: "../resource/b04.png"
            },
            {
              itemName: "运动",
              itemImg: "../resource/b04.png"
            },
            {
              itemName: "运动",
              itemImg: "../resource/b04.png"
            },
            {
              itemName: "运动",
              itemImg: "../resource/b04.png"
            },
            {
              itemName: "运动",
              itemImg: "../resource/b04.png"
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

  channelTapped: function (e) {
    this.setData({
      currentChannel: e.currentTarget.dataset.index,
      toView: e.currentTarget.dataset.index
    })
  }
})