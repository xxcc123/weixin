// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  imageredirect:function(e) {
    console.log(e);
    console.log(e.currentTarget.dataset.index)
    
    wx.navigateTo({
      url: '../../pages/productdetail/productdetail?id='+e.currentTarget.dataset.index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost/tp5/public/index.php/backend/Api/goods',
      data: {
        
      },
      header: {
        'Content-Type': "application/json"
      },
      method: "GET",
      success: function (data) {
        that.setData({
          list:data.data.res
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