import axios from 'axios'

export const getUsers = () => {
  console.log('getUsers api called')
  return axios.get('/users', {
    params: {
      limit: 1000
    }
  })
}

