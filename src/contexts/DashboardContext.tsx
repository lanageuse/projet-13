import { createContext, useContext, useMemo } from 'react';
import useFetch from '../hooks/useFetch';
import {ApiEndpoints} from '../types/apis'
import type { ActivityData, PerformanceData, AverageSessionData, UserData } from '../types/apis';

// Import des models
import { User } from '../models/User';
import { Session } from '../models/Session';
import { Performance } from '../models/Performance';
import { Kpis } from '../models/Kpis';

/**
 * Interface définissant la structure des données exposées par le contexte Dashboard.
 * Contient les données formatées prêtes à l'emploi ainsi que les états de chargement.
 */
interface DashboardContextValue {
  user: User | null;
  activitySessions: ActivityData['sessions'] | null;
  formattedSessions: ReturnType<Session['formatSessions']> | null;
  formattedPerformance: ReturnType<Performance['adaptPerformanceData']> | null;
  kpis: Kpis | null;
  isLoading: boolean;
  hasError: boolean;
  errors: string[];
}

/**
 * Contexte React pour centraliser l'accès aux données du tableau de bord.
 * Undefined par défaut pour forcer l'utilisation dans le Provider.
 */
const DashboardContext = createContext<DashboardContextValue | undefined>(undefined);

/**
 * Provider du contexte Dashboard qui gère le fetching des données et leur formatage.
 * Centralise tous les appels API nécessaires au tableau de bord et applique les modèles
 * de données pour formater les réponses.
 * 
 * @param {React.PropsWithChildren} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les composants enfants qui auront accès au contexte
 * @returns {JSX.Element} Le provider avec les données du contexte
 * 
 */
export const DashboardProvider = ({ children }: React.PropsWithChildren) => {
  // Fetches centralisés vers les différents endpoints
  const userData = useFetch<UserData>(ApiEndpoints.User);
  const activityData = useFetch<ActivityData>(ApiEndpoints.UserActivity);
  const sessionsData = useFetch<AverageSessionData>(ApiEndpoints.UserAverageSessions);
  const performanceData = useFetch<PerformanceData>(ApiEndpoints.UserPerformance);

  /*Application des modèles pour transformer les données de l'API avec mémoisation */
  
  const user = useMemo(
    () => userData.state.data ? new User(userData.state.data) : null,
    [userData.state.data]
  );
  
  const formattedSessions = useMemo(
    () => sessionsData.state.data?.sessions 
      ? new Session(sessionsData.state.data.sessions).formatSessions() 
      : null,
    [sessionsData.state.data?.sessions]
  );
  
  const formattedPerformance = useMemo(
    () => performanceData.state.data
      ? new Performance(performanceData.state.data).adaptPerformanceData()
      : null,
    [performanceData.state.data]
  );
  
  const kpis = useMemo(
    () => user ? new Kpis(user.kpis) : null,
    [user]
  );

  /**
   * Calcul des états pour chaque fetch
   */
  const isLoading = [userData, activityData, sessionsData, performanceData]
    .some(({ state }) => state.status === 'loading');
  
  const hasError = [userData, activityData, sessionsData, performanceData]
    .some(({ state }) => state.status === 'fail');
  
  const errors = [userData, activityData, sessionsData, performanceData]
    .map(({ state }) => state.error)
    .filter((error): error is string => error !== null);

  const value: DashboardContextValue = useMemo(
    () => ({
      // Données formatées
      user,
      activitySessions: activityData.state.data?.sessions || null,
      formattedSessions,
      formattedPerformance,
      kpis,
      // États
      isLoading,
      hasError,
      errors,
    }),
    [user, activityData.state.data?.sessions, formattedSessions, formattedPerformance, kpis, isLoading, hasError, errors]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

/**
 * Hook personnalisé pour accéder aux données du contexte Dashboard.
 * Vérifie que le hook est utilisé dans le bon contexte et retourne les données.
 * 
 * @throws {Error} Lance une erreur si utilisé en dehors du DashboardProvider
 * @returns {DashboardContextValue} Les données et états du tableau de bord
 * 
 */
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard ne peut être utilisé que dans le DashboardProvider');
  }
  return context;
};