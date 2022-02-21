export default {
  navigateTo(argument) {
    const params = typeof argument === 'string' ? { url: argument } : argument
    uni.navigateTo({
      ...params
    })
  }
}
