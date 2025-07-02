/**
 * Structure d'erreur retournée par l'API
 */
export type ApiError = {
  /** Code de statut HTTP de l'erreur (ex: 404, 500, 401) */
  status: number;
  /** Message d'erreur descriptif */
  message: string;
};
