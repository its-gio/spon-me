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
const GET_SESSION = "GET_SESSION";

// Export Functions
export function requestLogin(email, password) {
  const data = axios.post('/auth/login', {email, password});

  return {
    type: REQUEST_LOGIN,
    payload: data
  }
}

export function getSession() {
  const data = axios.get('/auth/session').catch(err => console.error(err));

  return {
    type: GET_SESSION,
    payload: data
  }
}

// Reducer
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${REQUEST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${REQUEST_LOGIN}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.id,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        loading: false
      }

    case `${GET_SESSION}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.id,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        loading: false
      }

    default: return state;
  }
}