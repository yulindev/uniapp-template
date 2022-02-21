import { getType } from '@/utils'

const componentsContext = require.context('./modules', true, /.js$/)
const modules = {
  data: {},
  methods: {}
}
componentsContext.keys().forEach(part => {
  const fileName = part.slice(2, -3)
  const $obj = { ...require(`./modules/${fileName}`).default }
  Object.keys($obj).forEach(item => {
    const type = getType($obj[item])
    if (type === 'Object') {
      modules.data = { ...modules.data, ...$obj }
    } else if (type === 'Function') {
      modules.methods = { ...modules.methods, ...$obj }
    }
  })
})

const Mixin = {
  data() {
    return {
      ...modules.data
    }
  },
  methods: {
    ...modules.methods
  }
}

const install = function (Vue) {
  if (install.installed) return
  Vue.mixin(Mixin)
}

export default {
  install
}
