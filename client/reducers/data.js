export default function (state={}, action) {
  switch(action.type) {
    case 'GET_KEYWORDS':
      return {...state, data: action.payload};
    default:
    return state;
  }
}
