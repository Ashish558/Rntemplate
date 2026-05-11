import { create } from 'zustand';
import { UserProfile } from '../types/user.types';

export interface UserState {
  user: UserProfile | null;
  setUser: (data: UserProfile) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: user => set({ user }),
  resetUser: () => set({ user: null }),
}));
