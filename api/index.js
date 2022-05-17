import request from '@/utils/request'
import modules from './modules'

function Api() {
  Object.keys(modules).forEach(key => {
    Object.defineProperty(this, key, {
      enumerable: true,
      value: (data = {}) => {
        const options = modules[key]

        const url = options.path

        const method = options.method.toUpperCase()

        const responseType = options.responseType ?? 'text'

        if (method === 'GET') {
          data['v'] = new Date().valueOf()
        }
        return request({
          url,
          data,
          method,
          responseType
        })
      }
    })
  })
}

export default new Api()
