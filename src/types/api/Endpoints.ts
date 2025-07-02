export const ApiEndpoints = {
  User: 'http://localhost:3000/user/:userId',
  UserActivity: 'http://localhost:3000/user/:userId/activity',
  UserAverageSessions: 'http://localhost:3000/user/:userId/average-sessions',
  UserPerformance: 'http://localhost:3000/user/:userId/performance',
};

export type Endpoint = (typeof ApiEndpoints)[keyof typeof ApiEndpoints];
