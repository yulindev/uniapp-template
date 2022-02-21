export default {
  navigateBack(params = {}, duration = 0) {
    setTimeout(() => uni.navigateBack({ delta: 1, ...params }), duration)
  }
}
