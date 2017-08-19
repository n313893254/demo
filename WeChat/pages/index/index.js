var Api = require('../../utils/api.js')

Page({
  data: {
    title: '最新话题',
    latest: [],
    hidden: false
  },
  fetchData: function () {
    var that = this
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getLatestTopic({
        p: 1
      }),
      success: function (res) {
        console.log(res)
        that.setData({
          latest: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function () {
    this.fetchData()
  }
})
