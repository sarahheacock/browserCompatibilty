import axios from 'axios';

export function updateData(payload){
  return {
    type: 'UPDATE_DATA',
    payload: payload
  }
}

export function getKeywords(word){
  // actions must be plain objects, therefore we used custom middleware
  // when creating the store to allow for api call first
  return (dispatch) => {
    axios.get(`http://localhost:3000/${word}`).then((res) => {
      dispatch(updateData(res.data));
    })
  }
}
