/**
 * Liste des endpoints de l'API pour les différentes ressources utilisateur.
 * Les valeurs contiennent le placeholder :userId à remplacer dynamiquement.
 */
const domain = import.meta.env.VITE_BASE_URL;
export const ApiEndpoints = {
  User: `${domain}/user/:userId`,
  UserActivity: `${domain}/user/:userId/activity`,
  UserAverageSessions: `${domain}/user/:userId/average-sessions`,
  UserPerformance: `${domain}/user/:userId/performance`,
};

/**
 * Type représentant une URL d'endpoint de l'API utilisateur.
 */
export type Endpoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];
