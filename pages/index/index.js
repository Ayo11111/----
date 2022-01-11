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
  // 页面的初始化数据
  data:{
    msg: '咕咕唧唧'
  },
  onLoad: function (options) {
    console.log(this) //this代表当前页面的实例对象
    this.setData({
      msg :'修改后的咕咕唧唧'
    })
    console.log(this.data.msg) //因为底层没有实现数据代理，所以需要this.data才能取到data中的数据
  }
})