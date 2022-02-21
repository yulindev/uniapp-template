import env from '@/env'

const header = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json'
}

const instance = ({ url, data, method, responseType }) => {
  const token = uni.getStorageSync('token')

  if (token) {
    header.Authorization = `Bearer ${token}`
  }

  return new Promise((resolve, reject) => {
    uni.request({
      url: `${env.apiURL}${url}`,
      data,
      method,
      header,
      responseType,
      dataType: 'json',
      success: ({ data }) => {
        if (data.status === 401) {
          uni.clearStorageSync()
          uni.reLaunch({ url: '/pages/login/index' })
          return reject(data)
        }
        return resolve(data)
      },
      fail: err => {
        return reject(err)
      }
    })
  })
}

export default instance
