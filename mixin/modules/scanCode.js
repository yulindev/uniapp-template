export default {
  scanCode() {
    return new Promise((resolve, reject) => {
      uni.scanCode({
        scanType: ['barCode', 'qrCode'],
        success: function (res) {
          if (res.errMsg === 'scanCode:ok') {
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }
}
