// --- Type générique pour toutes les réponses API ---
export type ApiResponse<T> = {
  data: T;
};

// --- User ---
export type UserData = {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  score?: number;
  todayScore?: number;
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
};

// --- Activity ---
export type ActivitySession = {
  day: string;
  kilogram: number;
  calories: number;
};

export type ActivityData = {
  userId: number;
  sessions: ActivitySession[];
};

// --- Performance ---
export type PerformanceKind = Record<string, string>;

export type PerformanceItem = {
  value: number;
  kind: number;
};

export type PerformanceData = {
  userId: number;
  kind: PerformanceKind;
  data: PerformanceItem[];
};

// --- Kpi ---
export type KpiData = {
  calories: string;
  proteines: string;
  glucides: string;
  lipides: string;
};

// ---- endPoints ---
const domain = import.meta.env.VITE_BASE_URL;
export const ApiEndpoints = {
  User: `${domain}/user/:userId`,
  UserActivity: `${domain}/user/:userId/activity`,
  UserAverageSessions: `${domain}/user/:userId/average-sessions`,
  UserPerformance: `${domain}/user/:userId/performance`,
};


// --- Sessions ---
export type SessionItem = {
  day: string | number;
  sessionLength: number;
};

export type SessionData = {
  userId: number;
  sessions: SessionItem[];
};

export type RawSessionData = {
  day: number;
  sessionLength: number;
};

export type FormattedSessionData = {
  day: string;
  sessionLength: number;
};
export type AverageSessionData = SessionData;

export type UserResponse = ApiResponse<UserData>;
export type ActivityResponse = ApiResponse<ActivityData>;
export type PerformanceResponse = ApiResponse<PerformanceData>;
export type SessionResponse = ApiResponse<SessionData>;

export type Endpoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];
