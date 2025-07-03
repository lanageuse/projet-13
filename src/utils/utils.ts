/**
 * Remplace le placeholder :userId dans l'URL par l'identifiant utilisateur de l'environnement.
 * @param {string} path Chemin d'endpoint contenant :userId
 * @returns {string} Chemin avec l'identifiant utilisateur injecté
 */
export const buildEndpoint = (path: string) => {
  const user_id = import.meta.env.VITE_USER_ID;
  return path.replace(':userId', user_id);
};
