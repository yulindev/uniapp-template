// 全部环境域名
const domains = {
  development: 'http://gw.ztyc-dev.com',
  testing: 'http://gw.ztyc.com',
  production: 'https://gw.ztocwst.com'
}

const domainsFile = {
  development: 'http://files.ztyc-dev.com',
  testing: 'http://files.ztyc.com',
  production: 'https://files.ztocwst.com'
}

const ENV = process.env['APP_API_ENV']

// 当前环境域名，有自定义环境变量先取自定义（package.json 中自定义），没有则取uni-app默认的

/**
 * 新接口域名
 */
const domain = ENV ? domains[ENV] : domains[process.env.NODE_ENV]
/**
 * 文件上传域名
 */
const domainFile = ENV ? domainsFile[ENV] : domainsFile[process.env.NODE_ENV]

export default {
  apiURL: `${domain}/edi/`,
  fileURL: `${domainFile}/`
}
