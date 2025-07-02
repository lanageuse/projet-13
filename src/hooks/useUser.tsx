import { useCallback, useEffect, useReducer } from 'react';
import fetchReducer from './reducers/fetchReducer';
import { InitialUserState, type UserState } from '../types/api/user';
import { ApiEndpoints } from '../types/api/endpoints';
import { buildEndpoint } from '../utils/utils';

const useUser = (userId: number): { state: UserState } => {
  const [state, dispatch] = useReducer(fetchReducer, InitialUserState);
  const fetchUserData = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' });
    try {
      console.log(buildEndpoint(ApiEndpoints.User, { userId }));
      const res = await fetch(buildEndpoint(ApiEndpoints.User, { userId }));
      if (!res.ok) {
        throw new Error('erreur serveur');
      }
      const data = await res.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
    } catch (e) {
      dispatch({ type: 'FETCH_FAILURE', error: (e as Error).message });
    }
  }, [userId]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { state };
};

export default useUser;
