import Cookie from '@/utils/cookie'
import store from '../index'
import Vue from 'vue'
import UserApi from '@/api/user'

const TOKEN_KEY = "TOKEN_KEY"
const STR_TOKEN_KEY = "STR_TOKEN_KEY"
const token = {
    state: {
      github_token: 'd020b5b917b001f12dda30e6066d953f8d03352a',
      strapi_token: Cookie.getAttribute(STR_TOKEN_KEY),
    },

    mutations: {
        SET_TOKEN: (state, value) => {
            state.github_token = value
            Cookie.setAttribute(TOKEN_KEY, value, 30)
        },
        SET_STR_TOKEN: (state, value) => {
            state.strapi_token = value
            Cookie.setAttribute(STR_TOKEN_KEY, value, 30)
        },
        REMOVE_TOKEN: (state) => {
            state.github_token = null
            Cookie.remove(TOKEN_KEY)
        }
    },

    actions: {
    }
}

export default token