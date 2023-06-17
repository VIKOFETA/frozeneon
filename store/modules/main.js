export default {
  namespaced: true,
  state: () => {
    return {
      searchQuery: '',
      limit: 10,
      page: 1,
      maxPages: null,
      packages: null,
      selectedPackage: null,
      isLoading: false,
      isModalOpen: false,
    }
  },
  mutations: {
    setSearchQuery(state, payload) {
      state.searchQuery = payload
    },
    setPackages(state, payload) {
      state.packages = [...payload]
    },
    setSelectedPackage(state, payload) {
      state.selectedPackage = payload
    },
    setTotalPages(state, payload) {
      state.maxPages = Math.ceil(payload / state.limit) - 1
    },
    setPage(state, payload) {
      state.page = payload
    },
    setIsLoading(state, payload) {
      state.isLoading = payload
    },
    setIsModalOpen(state, payload) {
      state.isModalOpen = payload
    },
  },
  actions: {
    searchPackages({ commit, getters, state }) {
      const result = new Promise((resolve, reject) => {
        fetch(
          `https://registry.npmjs.org/-/v1/search?text=${
            state.searchQuery
          }&size=${state.limit}&from=${state.page * state.limit - 1}`
        )
          .then((response) => {
            if (response.ok) {
              resolve(response.json())
            } else {
              reject(
                new Error(`Request failed with status code ${response.status}`)
              )
            }
          })
          .catch((error) => {
            reject(error)
          })
      })

      result
        .then((data) => {
          commit('setPackages', data.objects)
          commit('setTotalPages', data.total)
          commit('setIsLoading', false)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  getters: {
    getSearchQuery(state) {
      return state.searchQuery
    },
    getPage(state) {
      return state.page
    },
    getIsLoading(state) {
      return state.isLoading
    },
    getPackages(state) {
      return state.packages
    },
    getSelectedPackage(state) {
      return state.selectedPackage
    },
  },
}
