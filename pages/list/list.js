// pages/list/list.js
import {
  network
} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options);
    var type = options.type;
    var title = '豆瓣评分';
    if(type === 'weekly'){
      title = '本周口碑榜'
    }else{
     title = '北美票房'
    }

    wx.setNavigationBarTitle({
      title: title,
    })

    network.getItemList({
      count:1000,
      type:type,
      success: function (data) {
        console.log("===========================");
        var items = data.subjects;
        var weeklyTitle = data.title;
        if(items.length %3 ==2){
          items.push(null);
        }
        that.setData({
          items: items
        });
      },
      fail: function (res) {
        console.log(res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})