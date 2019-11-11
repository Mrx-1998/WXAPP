// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['北京市', '北京市', '东城区'],
    now:'',
    src:'../../images/01.png',
  },
  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getWeather();//更新天气
  },
  getWeather: function() {
    var that = this//this不可以直接在微信api函数内部使用
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data:{
        location:that.data.region[1],
        key:'3dbf4336ab1740ceb056c8e4b5ccbb3c'
      },
      success:function (res) {
        console.log(res.data)
        that.setData({now:res.data.HeWeather6[0].now})
      }
    })
  },
  getMyInfo:function(e) {
    console.log(e)
    let info = e.detail.userInfo
    this.setData({
      name:info.nickName,
      src:info.avatarUrl,
      region: [info.province,info.city]
    })
    this.getWeather()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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

  }
})