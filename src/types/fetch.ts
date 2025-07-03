export type Status = 'idle' | 'loading' | 'done' | 'fail';

export type FetchState<T> = {
  data: T | null;
  status: Status;
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
