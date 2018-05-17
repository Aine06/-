const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

var appkey = "8yg63x94ddqam5f9imex5nmljbcgg8uk";

const mylist = success =>{
  var mylistlll;
  wx.request({
     url: 'https://api.wxappclub.com/get', //仅为示例，并非真实的接口地址
    data: {
      appkey: appkey,
        key: "data",
        type:"string"
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: success
  })
}
const index = success=>{
  wx.request({
    url: 'https://api.wxappclub.com/get',
    data: {
      appkey: '8yg63x94ddqam5f9imex5nmljbcgg8uk',
      key: "indexDetal",
      type: "string"
    }, 
    header: {
      'Content-Type': 'application/json'
    },
    success: success
  });
}

module.exports = {
  formatTime: formatTime,
  mylist: mylist,
  index: index
}


function fetch(key,success) {

}

// function getdata(keyname, success) {
//   var value = ''
//   wx.request({
//     url: 'https://api.wxappclub.com/get',
//     data: {
//       appkey: '8ate68s9tyyk8bswng9xfnfaf01bchs5',
//       key: keyname
//     },
//     header: {
//       'Content-Type': 'application/json'
//     },
//     success: success,

//   });
// }

// module.exports = {
//   getdata: getdata
// }