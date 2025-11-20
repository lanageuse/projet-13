import { useCallback, useEffect, useReducer, useMemo } from 'react';
import fetchReducer from './reducers/fetchReducer';
import { buildEndpoint, buildMockEndpoint } from '../utils/utils';
import { InitialFetchState, type FetchState } from '../types/fetch';
import type { Endpoint } from '../types/apis';
import { mockData } from '../mock/mockData';

/**
 * Récupére les données mockés à partir d'un endpoint mock.
 * @param endpoint Endpoint à vérifier
 * @returns Les données mockées si elles existent, null sinon
 */

function getMockedData<T>(endpoint: Endpoint): T | null {
  const mockEndpoint = buildMockEndpoint(endpoint);

  // Vérifie si les données existent et retourne les donnéees mockés
  if (mockEndpoint in mockData) {
    const rawData = (mockData as Record<string, unknown>)[mockEndpoint];
    return rawData as T;
  }
  //sinon retourne null
  return null;
}

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

  // Mémorisation de l'endpoint construit pour éviter les recalculs
  const builtEndpoint = useMemo(() => buildEndpoint(endPoint), [endPoint]);

  // Détermine si on utilise les données mockés ou le fetch api
  const useMocks = import.meta.env.VITE_USE_MOCK === 'true';

  const fetchUserData = useCallback(async () => {
    dispatch({ type: 'FETCH_INIT' });
    // Fetch des données mockées si en DEV
    if (useMocks) {
      const mockedData = getMockedData<T>(endPoint);
      if (mockedData) {
        console.log(`Utilisation des données mockées pour ${endPoint}`);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: mockedData,
        });
      } else {
        dispatch({
          type: 'FETCH_FAILURE',
          error: `Aucune donnée mockée disponible pour ${endPoint}`,
        });
      }
      return;
    }

    try {
      const res = await fetch(builtEndpoint);
      if (!res.ok) {
        throw new Error(`Erreur serveur: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      // Vérification que la réponse contient bien des données
      if (!data || data.data === undefined) {
        throw new Error('Réponse serveur invalide');
      }

      dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erreur inconnue';
      dispatch({
        type: 'FETCH_FAILURE',
        error: errorMessage,
      });
    }
  }, [builtEndpoint, endPoint, useMocks]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { state };
}

export default useFetch;
