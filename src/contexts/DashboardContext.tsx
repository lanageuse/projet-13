// src/contexts/DashboardContext.tsx
import { createContext, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import {ApiEndpoints} from '../types/apis'
import type { ActivityData, PerformanceData, AverageSessionData, UserData } from '../types/apis';

// Import des models
import { User } from '../models/User';
import { Session } from '../models/Session';
import { Performance } from '../models/Performance';
import { Kpis } from '../models/Kpis';

// Types pour les données formatées
interface DashboardContextValue {
  // Données formatées uniquement
  user: User | null;
  activitySessions: ActivityData['sessions'] | null;
  formattedSessions: ReturnType<Session['formatSessions']> | null;
  formattedPerformance: ReturnType<Performance['adaptPerformanceData']> | null;
  kpis: Kpis | null;
  
  // États global du state
  isLoading: boolean;
  hasError: boolean;
  errors: string[];
}

const DashboardContext = createContext<DashboardContextValue | undefined>(undefined);

export const DashboardProvider = ({ children }: React.PropsWithChildren) => {
  // Fetches centralisés
  const userData = useFetch<UserData>(ApiEndpoints.User);
  const activityData = useFetch<ActivityData>(ApiEndpoints.UserActivity);
  const sessionsData = useFetch<AverageSessionData>(ApiEndpoints.UserAverageSessions);
  const performanceData = useFetch<PerformanceData>(ApiEndpoints.UserPerformance);

  // Application des models pour formater les données
  const user = userData.state.data ? new User(userData.state.data) : null;
  
  const formattedSessions = sessionsData.state.data?.sessions 
    ? new Session(sessionsData.state.data.sessions).formatSessions() 
    : null;
  
  const formattedPerformance = performanceData.state.data
    ? new Performance(performanceData.state.data).adaptPerformanceData()
    : null;
  
  const kpis = user ? new Kpis(user.kpis) : null;

  // États globaux dérivés
  const isLoading = [userData, activityData, sessionsData, performanceData]
    .some(({ state }) => state.status === 'loading');
  
  const hasError = [userData, activityData, sessionsData, performanceData]
    .some(({ state }) => state.status === 'fail');
  
  const errors = [userData, activityData, sessionsData, performanceData]
    .map(({ state }) => state.error)
    .filter((error): error is string => error !== null);

  const value: DashboardContextValue = {
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
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard ne peut être utilisé que dans le DashboardProvider');
  }
  return context;
};