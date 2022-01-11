/*
 * @Descripttion: 
 * @Company: 思宏科技
 * @version: v1.0
 * @Author: LuoJie
 * @Date: 2022-01-11 09:07:50
 * @LastEditors: LuoJie
 * @LastEditTime: 2022-01-11 09:17:18
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '咕咕唧唧',
    userInfo: {} //用户的基本数据
  },


  // 跳转至logs页面
  toLogs() {
    // navigateTo保留了跳转前页面
    wx.navigateTo({
      url: "/pages/logs/logs",
    })

    // 不保留跳转前页面
    // wx.redirectTo({
    //   url: "/pages/logs/logs",
    // })


    // 不保留跳转前页面
    // wx.reLaunch({
    //   url: "/pages/logs/logs",
    // })
  },

  handleParent() {
    console.log('111')
  },

  handleChild() {
    console.log('222')
  },

  // 获取用户信息的打印
  getUserProfile() {
    wx.getUserProfile({
      desc: '测试',
      lang: 'zh_CN',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
        try {
          wx.setStorageSync('userInfo', res.userInfo)
        } catch (e) { console.log(e); }
      },
      fail: (error) => {
        console.log(error)
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this) //this代表当前页面的实例对象
    this.setData({
      msg: '修改后的咕咕唧唧'
    })
    // console.log(this.data.msg) //因为底层没有实现数据代理，所以需要this.data才能取到data中的数据

    console.log('onLoad()');
  
    try {
     let userInfo = wx.getStorageSync('userInfo')
     this.setData({
       userInfo:userInfo
     })
    } catch (error) {
      console.log(error);
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady()');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow()');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide()');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload()');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh()');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom()');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage()');
  }
})