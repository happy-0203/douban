// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate: {
      type: Number,
      value: 0,
      observer(newVal, oldVal, changePath) {
        //newVal新数据 oldVal是旧数据
        this.updateRate();
      }
    },
    starsSize: {
      type: Number,
      value: 30
    },
    fontSize: {
      type: Number,
      value: 20,
    },
    fontColor: {
      type: String,
      value: "#CCC"
    },

    isShowText: {
      type: Boolean,
      value: true
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateRate: function() {
      var that = this;
      console.log("===============")
      console.log(that.properties.rate);
      console.log("===============")
      var rate = that.properties.rate;
      var intRate = parseInt(rate);
      var light = parseInt(intRate / 2);
      var halfLight = intRate % 2;
      var gray = 5 - light - halfLight;
      var lights = [];
      var halfLights = [];
      var grays = [];
      for (var i = 1; i <= light; i++) {
        lights.push(i);
      }
      for (var i = 1; i <= halfLight; i++) {
        halfLights.push(i);
      }

      for (var i = 1; i <= gray; i++) {
        grays.push(i);
      }

      var rateText = rate && rate > 0 ? rate.toFixed(1) : "暂未评分";

      that.setData({
        lights: lights,
        halfLights: halfLights,
        grays: grays,
        rateText: rateText
      });

    }
  },

  lifetimes: {
    attached: function() {
      this.updateRate();
    }
  }

})