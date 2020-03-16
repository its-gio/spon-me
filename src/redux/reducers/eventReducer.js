import axios from 'axios';

const initialState = {
  loading: false
}

// Actions
const POST_EVENT = 'POST_EVENT';
const GET_EVENT = 'GET_EVENT';
const JOIN_EVENT = 'JOIN_EVENT';
const ARRIVED_EVENT = 'ARRIVED_EVENT';

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

export function joinEvent(event_id) {
  const data = axios.post('/api/attendee/', {event_id})

  return {
    type: JOIN_EVENT,
    payload: data
  }
}

export function arrivedEvents(bool) {
  const data = axios.put(`/api/attendee/`, {bool})

  return {
    type: ARRIVED_EVENT,
    payload: data
  }
}

// Reducer export default
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

    case `${JOIN_EVENT}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${JOIN_EVENT}_FULFILLED`:
      return {
        ...state,
        loading: false
      }

    case `${ARRIVED_EVENT}_PENDING`:
      return {
        ...state,
        loading: true
      }

    case `${ARRIVED_EVENT}_FULFILLED`:
      return {
        ...state,
        loading: false
      }

    default: return state;
  }
}