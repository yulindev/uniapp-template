// 全部环境域名
const domains = {
  development: 'http://development.com',
  testing: 'http://testing.com',
  production: 'https://production.com'
}

const domainsFile = {
  development: 'http://development.com',
  testing: 'http://testing.com',
  production: 'https://production.com'
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
