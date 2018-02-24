import axios from 'axios';

export function init(){
  return {
    type: 'INIT'
  }
}

export function reinitialize(){
  return (dispatch) => {
    dispatch(init())
  }
}

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
    axios.get(`http://localhost:3000/db/${word}`).then((res) => {
      dispatch(updateData(res.data));
    })
  }
}
