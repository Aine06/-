// pages/orders/orders.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    carts: [{
      id: 1,
      mode: 'scaleToFill',
      image: '../resources/cat.png',
      title: '福建名产：长汀豆腐干越嚼越香，非遗工艺制作',
      text: "豆香浓郁、有弹性、有嚼劲，天然无添加！",
      price: "39",
      num: 1,
      selected: true,

    }, {
      id: 2,
      mode: 'scaleToFill',
      image: '../resources/cat.png',
      title: '小白鞋清洁剂+增白剂不用沾水，自带刷头',
      text: "对着污渍擦一擦，抹一抹，擦完马上能穿出门",
      price: "36",
      num: 2,
      selected: true
    }, {
      id: 3,
      mode: 'scaleToFill',
      image: '../resources/cat.png',
      title: '美白抗雾霾水感防晒霜晒不黑还能美白',
      text: "水感质地 清爽无油 含有特殊抗雾霾科技 保护皮肤",
      price: "228",
      num: 3,
      selected: true
    },
    {
      id: 4,
      mode: 'scaleToFill',
      image: '../resources/cat.png',
      title: '美白抗雾霾水感防晒霜晒不黑还能美白',
      text: "水感质地 清爽无油 含有特殊抗雾霾科技 保护皮肤",
      price: "228",
      num: 4,
      selected: true
    },
    {
      id: 5,
      mode: 'scaleToFill',
      image: '../resources/cat.png',
      title: '美白抗雾霾水感防晒霜晒不黑还能美白',
      text: "水感质地 清爽无油 含有特殊抗雾霾科技 保护皮肤",
      price: "228",
      num: 5,
      selected: true
    }

    ]
  },

  onReady() {
    this.getTotalPrice();
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
  }
})