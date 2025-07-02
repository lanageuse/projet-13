export type FetchState<T> = {
  data: T | null;
  status: string;
  error: string | null;
};

export type FetchAction<T> =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_FAILURE'; error: string };

export const InitialFetchState = {
  data: null,
  status: 'idle',
  error: null,
};
