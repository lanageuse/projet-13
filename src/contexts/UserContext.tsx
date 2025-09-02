import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { ApiEndpoints } from '../types/api/endpoints';
import { type UserData } from '../types/api/user';
import { User } from '../models/User';

const UserContext = createContext<User | null>(null);

/**
 * Fournit les données utilisateur à tous les composants enfants via le contexte React.
 * @param {React.PropsWithChildren} props Composants enfants à englober
 * @returns {JSX.Element} Provider du contexte utilisateur
 */
export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const { state } = useFetch<UserData>(ApiEndpoints.User, true);
  const { data } = state;
  const formattedUserData = data ? new User(data) : null;
  return (
    <UserContext.Provider value={formattedUserData}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Hook personnalisé pour accéder au contexte utilisateur.
 * @returns {User|null} Données utilisateur ou null si non chargées
 * @throws {Error} Si utilisé en dehors du UserProvider
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('le composant doit être dans le userProvider');
  }
  return context;
};
