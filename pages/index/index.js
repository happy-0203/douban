//index.js
//获取应用实例
const app = getApp()
import { network } from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },



  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    var that = this;
    //本周
    network.getWeeklyList({
      success:function(data){
        var weeklySubjects = data.subjects;
        var weeklyTitle =data.title;
        that.setData({
          weeklySubjects: weeklySubjects,
          weeklyTitle: weeklyTitle
        });
      },
      fail:function(data){
        console.log(data);
      }
    });
    //北美
    network.getUsList({
      success:function(data){
        var usSubjects = data.subjects;
        var usTitle = data.title;
        that.setData({
          usSubjects: usSubjects,
          usTitle: usTitle,
        });
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