export default {
  loadingOpen(params) {
    uni.showLoading({
      mask: true,
      ...params
    })
  },
  loadingClose(params) {
    uni.hideLoading(params)
  }
}
