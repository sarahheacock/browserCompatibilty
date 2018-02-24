import axios from 'axios';

// const getKeywords = () => {
export function getKeywords(){
  const request = axios.post('http://localhost:3000/keywords', {'snippet': 'const let'})
  .then(response => {
    return response.data;
  })
  return {
    type: 'GET_KEYWORDS',
    payload: request
  }
}


// export default getKeywords;
