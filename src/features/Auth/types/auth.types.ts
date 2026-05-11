import { UserProfile } from '../../User/types/user.types';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user?: UserProfile;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
