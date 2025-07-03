export const buildEndpoint = (path: string) => {
  const user_id = import.meta.env.VITE_USER_ID;
  return path.replace(':userId', user_id);
};
