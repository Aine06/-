//index.js
//获取应用实例

const util = require('../../utils/util.js')
Page({
  data: {
    imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
    indexlist:[],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
  },
  onLoad() {
    var that= this;
    util.index(function (res) {
      console.log(res.data.result.value)
        if (res.data.success) {
          that.setData({
            indexlist: res.data.result.value
          })
        }

      })
  }
})
// Page({
//   data: {
//     imgUrls: [
//       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
//       'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
//       'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
//     ],
//     indicatorDots: true,
//     autoplay: true,
//     interval: 5000,
//     duration: 1000,
//     motto: 'Hello World',

//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     imglist:[{
//       mode: 'scaleToFill',
//       src: '../resources/cat.png',
//       title: '福建名产：长汀豆腐干越嚼越香，非遗工艺制作',
//       text:"豆香浓郁、有弹性、有嚼劲，天然无添加！",
//       price:"39"

//     },{
//         mode: 'scaleToFill',
//         src: '../resources/cat.png',
//         title: '小白鞋清洁剂+增白剂不用沾水，自带刷头',
//         text: "对着污渍擦一擦，抹一抹，擦完马上能穿出门",
//          price: "36"
//     },{
//         mode: 'scaleToFill',
//         src: '../resources/cat.png',
//         title: '美白抗雾霾水感防晒霜晒不黑还能美白',
//         text: "水感质地 清爽无油 含有特殊抗雾霾科技 保护皮肤",
//         price: "228"
//     },
//     {
//       mode: 'scaleToFill',
//       src: '../resources/cat.png',
//       title: '美白抗雾霾水感防晒霜晒不黑还能美白',
//       text: "水感质地 清爽无油 含有特殊抗雾霾科技 保护皮肤",
//       price: "228"
//     },
//     {
//       mode: 'scaleToFill',
//       src: '../resources/cat.png',
//       title: '美白抗雾霾水感防晒霜晒不黑还能美白',
//       text: "水感质地 清爽无油 含有特殊抗雾霾科技 保护皮肤",
//       price: "228"
//     }

//     ],
    
//     imageError: function (e) {
//       console.log('image3发生error事件，携带值为', e.detail.errMsg)
//     }
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   }
// })