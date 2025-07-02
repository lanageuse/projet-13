import type { UserAction, UserState } from '../../types/api/user';

function fetchReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'FETCH_INIT': {
      return { ...state, status: 'loading', data: null, error: null };
    }
    case 'FETCH_SUCCESS': {
      return { ...state, status: 'done', data: action.payload, error: null };
    }
    case 'FETCH_FAILURE': {
      return { ...state, status: 'fail', data: null, error: action.error };
    }
    default:
      return state;
  }
}

export default fetchReducer;
