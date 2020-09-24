import UserApi from '@/api/user'

const user = {
    state: {
        userName: null,
        email: null,
        img: null,
        roll: null,
        avatarUrl: null,
        name: null,
        location: null,
        blog: null,
        followers: 0,
        following: 0
    },

    mutations: {
        SET_USER_NAME: (state, value) => {
            state.userName = value
        },
        SET_EMAIL: (state, value) => {
            state.email = value
        },
        SET_IMG: (state, value) => {
            state.img = value
        },
        SET_AVATAR_URL: (state, value) => {
            state.avatarUrl = value
        },
        SET_NAME: (state, value) => {
            state.name = value
        },
        SET_LOCATION: (state, value) => {
            state.location = value
        },
        SET_BLOG: (state, value) => {
            state.blog = value
        },
        SET_FOLLOWERS: (state, value) => {
            state.followers = value
        },
        SET_FOLLOWING: (state, value) => {
            state.following = value
        }
    },

    actions: {
        GetInfo({ commit }) {
            UserApi.getToken({ 
              "identifier": "yizhixiaoyao0",
              "password": "chen13185182908"}).then((response) => {
              let result = response.data;
              let user = result.user;
              commit('SET_STR_TOKEN', result['jwt'])
              commit('SET_USER_NAME', user['username'])
              commit('SET_EMAIL', user['email'])
              commit('SET_IMG', user.img.url)
            })

            UserApi.getInfo().then((response) => {
                let result = response.data
                commit('SET_AVATAR_URL', result['avatar_url'])
                commit('SET_NAME', result['name'])
                commit('SET_LOCATION', result['location'])
                commit('SET_BLOG', result['blog'])
                commit('SET_FOLLOWERS', result['followers'])
                commit('SET_FOLLOWING', result['following'])
            })

        }
    }
}

export default user