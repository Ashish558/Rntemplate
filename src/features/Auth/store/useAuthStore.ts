import { create } from 'zustand';

export interface AuthState {
  accessToken: string | null;
  loggedIn: boolean;
  loginUser: () => void;
  setAccessToken: (token: string | null) => void;
  logoutUser: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  accessToken: null,
  loggedIn: false,

  setAccessToken: token =>
    set(() => ({
      accessToken: token,
    })),

  logoutUser: () =>
    set(() => ({
      accessToken: null,
      loggedIn: false,
    })),

  loginUser: () =>
    set(() => ({
      loggedIn: true,
    })),
}));
