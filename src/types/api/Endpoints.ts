const domain = import.meta.env.VITE_BASE_URL;
export const ApiEndpoints = {
  User: `${domain}/user/:userId`,
  UserActivity: `${domain}/user/:userId/activity`,
  UserAverageSessions: `${domain}/user/:userId/average-sessions`,
  UserPerformance: `${domain}/user/:userId/performance`,
};

export type Endpoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];
