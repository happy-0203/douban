import {
  golbalUrls
} from "urlConst.js"

const network = {
  getWeeklyList: function(params) {
    params.type = 'weekly';
    this.getItemList(params);
    // wx.request({
    //   url: golbalUrls.weeklyUrl,
    //   data: {
    //     apikey: "0df993c66c0c636e29ecbb5344252a4a",
    //     count: 10,
    //   },
    //   method: "get",
    //   header: {
    //     "Content-Type": "json"
    //   },
    //   success(res) {
    //     console.log(res);
    //     if (params && params.success) {
    //       params.success(res.data);
    //     }
    //   },
    //   fail(res) {
    //     console.log("==========================");
    //     console.log(res);
    //     if (params && params.fail) {
    //       params.fail(res);
    //     }
    //   }
    // })
  },

  getUsList: function(params) {

    params.type = 'us';
    this.getItemList(params);
    // wx.request({
    //   url: golbalUrls.usUrl,
    //   method: "get",
    //   header: {
    //     "Content-Type": "json"
    //   },
    //   data: {
    //     apikey: "0df993c66c0c636e29ecbb5344252a4a",
    //   },
    //   success(res) {
    //     console.log(res);
    //     if (params && params.success) {
    //       params.success(res.data);
    //     }

    //   },
    //   fail(res) {
    //     console.log("==========================");
    //     console.log(res);
    //   }
    // })
  },

  getItemList: function(params) {
    wx.showLoading({
      title: '正在加载数据......',
    })
    var url = "";
    // 列表title
    console.log("===============network")
    console.log(params.type);
    var type = params.type;
    if (type == 'weekly') {
      //本周口碑
      url = golbalUrls.weeklyUrl;
    } else if(type === "us") {
      url = golbalUrls.usUrl;
    }
  
    var count = params.count ? params.count : 10;

    wx.request({
      url: url,
      method: "get",
      header: {
        "Content-Type": "json"
      },
      data: {
        apikey: "0df993c66c0c636e29ecbb5344252a4a",
        count: count
      },
      success(res) {
        console.log(res);
        if (params && params.success) {
          params.success(res.data);
        }
        wx.hideLoading();

      },
      fail(res) {
        console.log("==========================");
        console.log(res);
      }
    })
  },

  // 获取电影详情
  getItemDetail:function(params){

    wx.showLoading({
      title: '正在加载中......',
    })

    var id = params.id;
    var url = golbalUrls.movieDetailUrl+'/'+id;
    console.log(url);
    wx.request({
      url: url,
      method: "get",
      header: {
        "Content-Type": "json"
      },
      data:{
        apikey: "0df993c66c0c636e29ecbb5344252a4a"
      },
      success:function(res){
          params.success(res.data);
          wx.hideLoading();
      },
      fail:function(res){
        console.log(res);
        wx.hideLoading();
      }
    })
  },
  //获取影评
  getMoiveComments:function(params){
    wx.showLoading({
      title: '正在加载中......',
    });
    var id = params.id;
    var start = params.start;
    var count = params.count;
    var url = golbalUrls.movieCommentUrl + '/' + id +'/comments';
    wx.request({
      url: url,
      method:"get",
      header:{
        "Content-Type": "json"
      },
      data:{
        apikey: "0df993c66c0c636e29ecbb5344252a4a",
        start: start,
        count: count
      },
      success:function(res){
        if(params && params.success){
          console.log(res);
          params.success(res.data.subject,res.data.comments,res.data.total)
          wx.hideLoading();
        }
      },
      fail:function(res){
        if (params && params.fail) {
          console.log(res);
          wx.hideLoading();
        }
      }
    })

  }

}
export {
  network
}