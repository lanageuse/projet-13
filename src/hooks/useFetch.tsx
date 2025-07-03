import { useCallback, useEffect, useReducer } from 'react';
import fetchReducer from './reducers/fetchReducer';
import { buildEndpoint } from '../utils/utils';
import { InitialFetchState, type FetchState } from '../types/fetch';
import type { Endpoint } from '../types/api/Endpoints';
import type { AuthorizedUserId } from '../types/api/User';

function useFetch<T>(
  userId: AuthorizedUserId,
  endPoint: Endpoint
): { state: FetchState<T> } {
  const [state, dispatch] = useReducer(
    fetchReducer<T>,
    InitialFetchState as FetchState<T>
  );
  const fetchUserData = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' });
    try {
      const res = await fetch(buildEndpoint(endPoint, { userId }));
      if (!res.ok) {
        throw new Error('erreur serveur');
      }
      const data = await res.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
    } catch (e) {
      dispatch({ type: 'FETCH_FAILURE', error: (e as Error).message });
    }
  }, [userId, endPoint]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { state };
}

export default useFetch;
