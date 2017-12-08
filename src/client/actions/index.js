import axios from 'axios'
export const FETCH_USERS = 'fetch_users';

// by defauilt when we use async/await babel assumes thres a 'regenerator runtime' in our envirnment
// to get async await working correctly, we need to use the babel polyfill
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users')
  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}


