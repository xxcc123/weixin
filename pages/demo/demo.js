// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "text-文档",
    age : 20,
    userName:"",
    password:''
  },

  getdemo:function(e) {
    //设置值
    this.setData({
      name:e.detail.value
    })
    console.log(this.data.name)
  },

  getName:function(name){
    this.setData({
      userName:name.detail.value
    })
  },

  getPassword:function(password) {
    this.setData({
      password:password.detail.value
    })
  },

  formSubmit:function(e){
    var that = this;
    wx.login({
      success:function(res) {
        console.log(res);
        wx.request({
          url: 'http://localhost/tp5/public/index.php/backend/Api/submit',
          data : {
            code: res.code,
            name: that.data.userName,
            password: that.data.password
          },
          header: {
            'Content-Type' : "application/json"
          },
          method: "POST",
          success:function(data){
            that.setData({
              userName: '',
              password: ''
            }),
            console.log(data)
          },
          fail:function(error){
            console.log(22)
          }
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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