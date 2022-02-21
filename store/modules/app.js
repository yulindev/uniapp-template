const app = {
  state: {
    /** 司机信息 */
    userInfo: {
      id: null,
      name: null
    },
    /**返回上一页用于更新的key value */
    refreshData: {
      key: null,
      value: null
    }
  },
  mutations: {
    /**
     * 设置state
     * commit('SET_STATE', { key: 'userInfo', data })
     */

    SET_STATE(state, { key, data }) {
      if (!key || (!data && typeof data !== 'object')) return
      if (state[key] instanceof Array) {
        state[key] = data
      } else {
        const values = Object.keys(data)
        values.forEach(k => (state[key][k] = data[k]))
      }
    },
    /**
     * 清除state
     * commit('CLEAR_STATE', { key: 'userInfo' })
     */
    CLEAR_STATE(state, { key, data = [] }) {
      if (!key) return
      if (state[key] instanceof Array) {
        state[key] = []
      } else {
        const values = data.length ? data : Object.keys(state[key])
        values.forEach(k => {
          if (state[key][k] instanceof Array) {
            state[key][k] = []
          } else {
            state[key][k] = null
          }
        })
      }
    }
  },
  actions: {}
}

export default app
