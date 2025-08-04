/**
 * Remplace  :userId dans l'URL par l'id utilisateur de l'environnement.
 * @param {string} path Chemin d'endpoint contenant :userId
 * @returns {string} Chemin avec l'identifiant utilisateur injecté
 */
export const buildEndpoint = (path: string) => {
  const user_id = import.meta.env.VITE_USER_ID;
  return path.replace(':userId', user_id);
};

export const buildMockEndpoint = (path: string) => {
  const mockPath = buildEndpoint(path);
  return mockPath.replace(import.meta.env.VITE_BASE_URL, '');
};
