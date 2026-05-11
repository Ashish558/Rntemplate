import { create } from 'zustand';

// Define types for user and store
export interface User {
  id: string;
  name: string;
  email: string;
  loading?: boolean;
}

export interface AuthState {
  accessToken: string | null;
  loggedIn: boolean;
  user: User;
  loginUser: () => void;
  setUser: (data: Partial<User>) => void;
  setAccessToken: (token: string | null) => void;
  logoutUser: () => void;
  updateUserLoading: (value: boolean) => void;
  getId: () => string | null;
}

// Initial user state
const initialUser: User = {
  id: '',
  email: '',
  name: ''
};

// Zustand store
export const useUserStore = create<AuthState>((set, get) => ({
  accessToken: null,
  loggedIn: false,
  user: { ...initialUser },

  setUser: data =>
    set(prev => ({
      user: { ...prev.user, ...data },
    })),

  setAccessToken: token =>
    set(() => ({
      accessToken: token,
    })),

  logoutUser: () =>
    set(() => ({
      accessToken: null,
      loggedIn: false,
      user: { ...initialUser },
    })),

  loginUser: () =>
    set(() => ({
      loggedIn: true,
    })),

  updateUserLoading: value =>
    set(prev => ({
      user: { ...prev.user, loading: value },
    })),

  getId: () => get().user?.id ?? null,
}));
