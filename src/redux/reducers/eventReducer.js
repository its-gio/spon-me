import axios from 'axios';

const initialState = {
  loading: false
}

// Actions
const POST_EVENT = 'POST_EVENT';

// Export Functions
export function postEvent(category, description, long, lati, start_time, end_time) {
  const data = axios.post('/event/add', {category, description, long, lati, start_time, end_time})

  return {
    type: POST_EVENT,
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

    default: return state;
  }
}