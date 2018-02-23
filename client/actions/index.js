import axios from 'axios';

const getKeywords = () => {
  const request = axios.get('localhost:3000/keywords')
  .then(response => {
    return response.data;
  })
  return {
    type: 'GET_KEYWORDS',
    payload: request
  }
}
export getKeywords;
