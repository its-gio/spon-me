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
const REQUEST_REGISTER = "REQUEST_REGISTER";
const REQUEST_LOGIN = "REQUEST_LOGIN";
const GET_SESSION = "GET_SESSION";
const GET_LOGOUT = "GET_LOGOUT";
const PUT_USER_EDIT = "PUT_USER_EDIT";

// Export Functions
export function requestRegister(first_name, last_name, email, password) {
  const data = axios.post('/auth/register', {first_name, last_name, email, password});

  return {
    type: REQUEST_LOGIN,
    payload: data
  }
}

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

export function logout() {
  const data = axios.get('/auth/logout').catch(err => console.error(err));

  return {
    type: GET_LOGOUT,
    payload: data
  }
}

export function editUser({ user_id, first_name, last_name, email }) {
  const data = axios.put(`/auth/edit/user/${user_id}`, { first_name, last_name, email }).catch(err => console.error(err));

  return {
    type: PUT_USER_EDIT,
    payload: data
  }
}

// Reducer
export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${REQUEST_REGISTER}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${REQUEST_REGISTER}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
        loading: false
      }

    case `${REQUEST_LOGIN}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${REQUEST_LOGIN}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
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
        user_id: payload.data.user_id,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
        loading: false
      }

    case `${GET_LOGOUT}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${GET_LOGOUT}_FULFILLED`:
      return {
        ...state,
        user_id: null,
        first_name: null,
        last_name: null,
        email: null,
        loading: false
      }

    case `${PUT_USER_EDIT}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${PUT_USER_EDIT}_FULFILLED`:
      return {
        ...state,
        user_id: payload.data.user_id,
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        email: payload.data.email,
        loading: false
      }

    default: return state;
  }
}