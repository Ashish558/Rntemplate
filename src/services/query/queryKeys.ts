export const queryKeys = {
  users: {
    all: ['users'],
    profile: () => [...queryKeys.users.all, 'profile'],
  },
};
