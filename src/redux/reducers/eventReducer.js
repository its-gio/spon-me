import axios from 'axios';

const initialState = {
  loading: false
}

// Actions
const POST_EVENT = 'POST_EVENT';
const GET_EVENT = 'GET_EVENT';

// Export Functions
export function postEvent(category, description, long, lati, start_time, end_time) {
  const data = axios.post('/api/event/', {category, description, long, lati, start_time, end_time})

  return {
    type: POST_EVENT,
    payload: data
  }
}

export function getEvents() {
  const data = axios.get('/api/event/')

  return {
    type: GET_EVENT,
    payload: data
  }
}

export default function reducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case `${POST_EVENT}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${POST_EVENT}_FULFILLED`:
      return {
        ...state,
        loading: false
      }

    case `${GET_EVENT}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${GET_EVENT}_FULFILLED`:
      return {
        ...state,
        events: payload.data,
        loading: false
      }

    default: return state;
  }
}