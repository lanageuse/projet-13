import type { FetchAction, FetchState } from '../../types/fetch';

/**
 * Réducteur pour gérer les états de requêtes asynchrones (fetch).
 * @template T Type des données attendues
 * @param {FetchState<T>} state État courant
 * @param {FetchAction<T>} action Action à traiter
 * @returns {FetchState<T>} Nouvel état après traitement de l'action
 */
function fetchReducer<T>(
  state: FetchState<T>,
  action: FetchAction<T>
): FetchState<T> {
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
