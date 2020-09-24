import { serviceStrapi }from '../utils/request'

export default {
  getGeneral() {
    return serviceStrapi({
        url: '/general'
    })
  },
}