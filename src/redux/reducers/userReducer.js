import axios from 'axios';

const initialState = {
  user_id: null,
  first_name: null,
  last_name: null,
  email: null,
  event_id: null,
  discussion_leader: null,
  available: null,
  has_arrived: null,
  loading: false
}

// Actions
const REQUEST_LOGIN = "REQUEST_LOGIN";

// Export Functions
export function requestLogin(email, password) {
  const data = axios.post('/auth/login', {email, password});

  return {
    type: REQUEST_LOGIN,
    payload: data
  }
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${REQUEST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${REQUEST_LOGIN}_FULFILLED`:
      const { id, first_name, last_name } = action.payload.data;
      console.log(action.payload);
      return {
        ...state,
        user_id: id,
        first_name,
        last_name,
        loading: false
      }

    default: return state;
  }
}