import axiosInstance from '../../../services/axios/apiClient';
import { LoginPayload, LoginResponse, RegisterPayload } from '../types/auth.types';

export const authApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>('/auth/login', payload);

    return response.data;
  },

  register: async (payload: RegisterPayload): Promise<LoginResponse> => {
    const response = await axiosInstance.post<LoginResponse>('/auth/register', payload);

    return response.data;
  },
};
