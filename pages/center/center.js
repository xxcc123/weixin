// pages/center/center.js

var config = require("../../utils/config.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: config.host+'backend/Api/center',
      data: {
        name: "admin2019"
      },
      header: {
        'Content-Type': "application/json"
      },
      method: "POST",
      success: function (data) {
        that.setData({
          user: data.data
        }),
        console.log(data.data)
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