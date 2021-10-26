import Axios from './base'

function login(data) {
  return Axios.post('/user/login', data)
}

export { login }
