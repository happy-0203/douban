// pages/comment/comment.js
import {
  network
} from '../../utils/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:1,
    count:10,
    isShowBottom:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var id = options.id;
    this.setData({
      id:id
    });

    this.getCommentData(1);


  },
  //请求数据
  getCommentData:function(start){
    var that = this;
    var id = that.data.id;
    var count = that.data.count;

    network.getMoiveComments({
      success: function (subject, comments, total) {
        that.setData({
          subject: subject,
          comments: comments,
          total: total,
          isShowBottom:true,
          start:start
        });
        wx.pageScrollTo({
          scrollTop: 0,
        })
      },
      fail: function (error) {

      },
      id: id,
      start: start,
      count: count
    });
  },

  //返回电影详情界面
  goBackMovice:function(){
    wx.navigateBack({
    });
  },
  //上一页
  gotoPrePage:function(event){
    var that = this;
    var oldStart = that.data.start;
    var count = that.data.count;
    if(oldStart-count>0){
      var start = oldStart - count;
      console.log("=========Pre=start========");
      console.log(start);
      this.getCommentData(start);
    }else{
      wx.showToast({
        title: '已经是第一页了',
        icon: 'none'
      })
    }
   
  },
  //下一页
  gotoNextPage:function(event){
    var that = this;
    var start = that.data.count + that.data.start;

    console.log("=========Next=start========");
    console.log(start);

    this.getCommentData(start);
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