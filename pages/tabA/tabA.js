Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemlist: [
      {
        "tit":"商品列表",
        "target":"productlist"
      },
      {
        "tit": "地图",
        "target": "map"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      },
      {
        "tit": "商品列表",
        "target": "jdlist"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showToast({
    //   title: '已发送',
    //   icon: 'success',
    //   duration: 1500
    // }),
    // wx.showModal({
    //   title: '标题',
    //   content: '告知用户操作状态',
    //   confirmText: '主要操作',
    //   cancelText: '次要操作',
    //   success: function(res) {
    //     if (res.confirm) {
    //       console.log('点击了主要操作')
    //     } else if (res.cancel) {
    //       console.log('点击了次要操作')
    //     }
    //   }
    // })
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
   * 自定义函数
   */ 
  goPageA: function () {
    wx.navigateTo({url: '../pageA/pageA?flag=12&other=aaa'})
  },

  goNext: function (e) {
    var item = e.currentTarget.dataset.item;
    var pageurl = '';
    if (item.target == "productlist") {
      pageurl = '../productlist/productlist';
    } else if (item.target == "map") {
      pageurl = '../map/map';
    } else {
      return;
    }

    wx.navigateTo({
      url: pageurl,
    })
  }
})