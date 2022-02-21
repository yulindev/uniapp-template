export default {
  getLocation() {
    const that = this
    return new Promise((resolve, reject) => {
      uni.getLocation({
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          if (err.errMsg === 'getLocation:fail auth deny') {
            that.Toast('获取定位失败，请前往设置授权')
          }
          reject(err)
        }
      })
    })
  }
}
