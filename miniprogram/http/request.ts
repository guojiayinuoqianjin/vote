interface Config {
  // 是否带token
  auth?: boolean
  // 根路径
  baseUrl?: string
}

interface RequestOption {
  success?: (res: {
    data: {
      code: number
      data: any
      description: string
    }
  }) => void
}

export default function request (options: wx.RequestOption & RequestOption, {
  auth = true,
  baseUrl = 'http://192.168.0.100:8080/vote',
}: Config) {
  const initOptions: wx.RequestOption = {
    url: '',
    header: {},
  }
  options = {
    ...initOptions,
    ...options,
  }
  if (auth) options.header!.Authorization = `Bear ${wx.getStorageSync('_auth')}`
  options.url = baseUrl + options.url
  wx.request(options as wx.RequestOption)
}
