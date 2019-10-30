import request from './http/request'

export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  globalData: {
    userInfo?: wx.UserInfo
  }
}

App<IMyApp>({
  onLaunch() {
    const _auth = wx.getStorageSync('_auth')
    if (!_auth) {
      // 登录
      wx.login({
        success({code}) {
          request({
            url: '/login',
            method: 'GET',
            data: {
              code,
            },
            success (res: any) {
              if (res.data.code === 200) wx.setStorageSync('_auth', res.data.data)
              else {
                console.error(res.data.description)
              }
            },
          }, {
            auth: false,
          })
          // 发送 _res.code 到后台换取 openId, sessionKey, unionId
        }
      })
    }
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: data => {
              request({
                url: '/perfectUserInfo',
                method: 'POST',
                data,
                success (res: any) {
                  console.log(res)
                }
              }, {})
            }
          })
        }
      }
    })
  },
  globalData: {
    
  }
})