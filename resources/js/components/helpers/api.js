import axios from 'axios';
import auth from './auth'

export function post(url,data) {
  return  axios  ({
          method : 'POST',
          url    : url,
          data   : data,
          headers:{
              'Authorization': `Bearer ${auth.state.api_token}`
          }
    });
}

export function get(url) {
   return axios  ({
          method : 'GET',
          url    : url,
          headers:{
           'Authorization': `Bearer ${auth.state.api_token}`
          }
    });
}

export function del(url) {
    return axios  ({
           method : 'DELETE',
           url    : url,
           headers:{
                'Authorization': `Bearer ${auth.state.api_token}`
           }
    });
}
