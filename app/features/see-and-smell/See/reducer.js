import * as types from './actionTypes'

export default function see (state = { errors: null,
  isReady: false}, action) {
  switch (action.type) {
    case types.CHECK_GOOGLE_MAP_API_READY_FAILED:
      return {...state,
        isReady: false,
        message: action.message,
        errors: action.err,
        isRequesting: false
      }
    case types.CHECK_GOOGLE_MAP_API_READY_SUCCESS:
      return {...state,
        isRequesting: false,
        message: null,
        errors: null,
        isReady: action.loaded
      }
    case types.CHECK_GOOGLE_MAP_API_READY_REQUEST:
      return {...state,
        isRequesting: true,
        isReady: false
      }
    default:
      return state
  }
}
