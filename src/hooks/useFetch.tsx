import { useCallback, useEffect, useReducer } from 'react';
import fetchReducer from './reducers/fetchReducer';
import { buildEndpoint } from '../utils/utils';
import { InitialFetchState, type FetchState } from '../types/fetch';
import type { Endpoint } from '../types/api/endpoints';

/**
 * Hook personnalisé pour effectuer une requête fetch et gérer les états associés.
 * @template T Type des données attendues
 * @param {Endpoint} endPoint URL ou identifiant de l'endpoint à interroger
 * @returns {{ state: FetchState<T> }} Objet contenant l'état de la requête (chargement, données, erreur)
 */
function useFetch<T>(endPoint: Endpoint): { state: FetchState<T> } {
  const [state, dispatch] = useReducer(
    fetchReducer<T>,
    InitialFetchState as FetchState<T>
  );
  const fetchUserData = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' });
    try {
      const res = await fetch(buildEndpoint(endPoint));
      if (!res.ok) {
        throw new Error('erreur serveur');
      }
      const data = await res.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
    } catch (e) {
      dispatch({ type: 'FETCH_FAILURE', error: (e as Error).message });
    }
  }, [endPoint]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { state };
}

export default useFetch;
