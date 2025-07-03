/**
 * Statut d'une requête .
 */
export type Status = 'idle' | 'loading' | 'done' | 'fail';

/**
 * Structure dus state pour une requête fetch.
 * @template T Type des données attendues
 * @property {T|null} data Données récupérées
 * @property {Status} status Statut de la requête
 * @property {string|null} error Message d'erreur éventuel
 */
export type FetchState<T> = {
  data: T | null;
  status: Status;
  error: string | null;
};

/**
 * Actions possibles pour le reducer de fetch.
 * @template T Type des données attendues
 */
export type FetchAction<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; error: string };

/**
 * Valeur initiale de l'état fetch.
 */
export const InitialFetchState = {
  data: null,
  status: 'idle',
  error: null,
};
