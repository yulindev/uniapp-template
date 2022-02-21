export default {
  toast(argument) {
    const params = typeof argument === 'string' ? { title: argument } : argument
    uni.showToast({
      duration: 1500,
      icon: 'none',
      mask: true,
      ...params
    })
  }
}
