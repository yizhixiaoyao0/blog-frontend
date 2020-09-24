import request, { serviceStrapi }from '../utils/request'
import store from '../store/index'

export default {
    getToken: function (info) {
        return serviceStrapi({
            url: '/auth/local',
            method: 'POST',
            data: info
        })
    },
    getStrapi() {
      let githubUsername = store.state.configuration.git
      return serviceStrapi({
          url: '/users/' + githubUsername
      })
    },
    getInfo: function () {
        let githubUsername = store.state.configuration.githubUsername
        return request({
            url: '/users/' + githubUsername
        })
    },
    followers: function (query) {
        let githubUsername = store.state.configuration.githubUsername
        return request({
            url: `/users/${githubUsername}/followers?page=${query.page}&per_page=${query.pageSize}`
        })
    },
    following: function (query) {
        let githubUsername = store.state.configuration.githubUsername
        return request({
            url: `/users/${githubUsername}/following?page=${query.page}&per_page=${query.pageSize}`
        })
    },
    info:function (githubUsername) {
        return request({
            url: `/users/${githubUsername}`
        })
    },
}