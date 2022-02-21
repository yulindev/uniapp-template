/**
 * 正则数据对象
 */
export const rule = {
  positiveInt: /^\d+$/, // 正整数
  nonzeroInt: /^\+?[1-9][0-9]*$/, // 非零的正整数
  twoDecimal: /^\d+(\.\d{0,2})?$/, // 保留俩位小数
  threeDecimal: /^\d+(\.\d{0,3})?$/, // 保留三位小数
  landline: /^0\d{2,3}-?\d{7,8}$/, // 座机号
  mobile: /^[1][3,5,7,8,9][0-9]{9}$/, // 手机号检验
  alphanumeric: /^[0-9a-zA-Z]+$/, // 字母数字
  zhAlphanumeric: /^[0-9a-zA-Z\u4e00-\u9fa5]+$/, // 汉字字母数字
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //邮箱
  url: /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/, // URL检验
  password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,25}$/ // 密码检验
}

/**
 * 正则校验
 * @param {String} type 正则类型
 * @param {String} value 正则数据
 */
export function validate(type, value) {
  if (!rule[type]) return false
  return rule[type].test(value)
}

/**
 * 深度克隆
 * @param {Object} obj
 */
export function deepClone(obj) {
  if ([null, undefined, NaN, false].includes(obj)) return obj
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 获取对象类型
 * @param {any} argument
 */
export function getType(argument) {
  const string = Object.prototype.toString.call(argument)
  const start = string.indexOf(' ')
  const end = string.indexOf(']')
  return string.substring(start + 1, end)
}

/**
 *  函数防抖
 * @method search
 * @param {Function} fn 触发函数
 * @param {int} wait 延时时间  毫秒
 * @return {undefined}
 */
export function debounce(fn, wait) {
  let timer = null
  return function () {
    const arg = arguments
    const ctx = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(ctx, arg) //改变this指向,并且传入参数
    }, wait)
  }
}

/**
 *  获取设备类型
 * @return {res}
 */
export function getSystemInfo() {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: res => {
        if (res.errMsg === 'getSystemInfo:ok') {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail: err => reject(err)
    })
  })
}
