// const util = require('../../utils/util.js')

// console.log(util.mylist({}))
// Page({
//   data: {
//      text:{},
//     // text: '我的个人中心',
//     array: [{ msg: '1' }, { msg: '2' }]
//   },
//   onLoad: function () {
//     var that= this;
//     util.mylist(function(res){
//       console.log(res.data.result.value.value)
//       if(res.data.success){
//         that.setData({
//           text: res.data.result.value.value
//         })

//       }
      
//     })
//   }
// })


Page({
  data: {
    thumb: '',
    nickname: '',
    orders: [],
    hasAddress: false,
    address: {}
  },
  onLoad() {
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function (res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    }),

      /**
       * 发起请求获取订单列表信息
       */
      wx.request({
        url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
        success(res) {
          self.setData({
            orders: res.data
          })
        }
      })
  },
  onShow() {
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },
  /**
   * 发起支付请求
   */
  payOrders() {
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        wx.showModal({
          title: '支付提示',
          content: '<text>',
          showCancel: false
        })
      }
    })
  }
})