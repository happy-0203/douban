// pages/detail/detail.js
import {
  network
} from '../../utils/network.js'
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
    console.log(options);
    var that = this;
    var id = options.id;
    network.getItemDetail({
      success: function(data) {
        console.log(data);
        var title = data.title;
        var average = data.rating.average;
        console.log(average);
        
        var commoentPersons = data.ratings_count;
        // 时长
        var durations = data.durations;
        //	影片类型
        var genres = data.genres;
        var itemSubType = durations[0] + " " + genres.join('/');
        //上映时间
        var pubdates = data.pubdates;

        //导演
        var directors = data.directors;
        //主演
        var casts = data.casts;

        var directorNames = [];
        var castNames = [];
        if (directors && directors.length > 0) {
          for (var i = 0; i < directors.length; i++) {
            directorNames.push(directors[i].name + '(导演)');
          }
        }

        if (casts && casts.length > 0) {
          for (var i = 0; i < casts.length; i++) {
            castNames.push(casts[i].name);
          }
        }

        var item_actor = directorNames.join('/') + "/" + castNames.join('/');

        //电影图片
        var imageUrl = data.images.medium;

        //短评标签
        var tags = data.tags;

        //短评
        var popular_comments = data.popular_comments;
        //短评数量
        var comments_count = data.comments_count;

        that.setData({
          title: title,
          average: average,
          itemSubType: itemSubType,
          commoentPersons: commoentPersons,
          pubdate: pubdates[0],
          item_actor: item_actor,
          imageUrl: imageUrl,
          tags: tags,
          popular_comments: popular_comments,
          comments_count: comments_count,
          id: id
        });

      },
      fail: function(error) {
        console.log(error);
      },
      id: id,
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
    wx.pageScrollTo({
      scrollTop: 0,
    })
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