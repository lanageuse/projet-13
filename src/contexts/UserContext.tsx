import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { ApiEndpoints } from '../types/api/endpoints';
import { type UserData } from '../types/api/user';

const UserContext = createContext<UserData | null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const { state } = useFetch<UserData>(ApiEndpoints.User);
  const { data } = state;
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('le composant doit être dans le userProvider');
  }
  return context;
};
