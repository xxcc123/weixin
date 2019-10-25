// pages/productdetail/productdetail.js

var config = require("../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options.id);
    wx.request({
      url: config.host+'backend/Api/goods_detail',
      data: {
        id: options.id
      },
      header: {
        'Content-Type': "application/json"
      },
      method: "GET",
      success: function (data) {
        console.log(data)
        that.setData({
          list: data.data.res
        }),
          console.log(data.data.res)
      },
      fail: function (error) {
        console.log(22)
      }
    });
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