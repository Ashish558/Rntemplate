import axiosInstance from '../../../services/axios/apiClient';
import { UserProfile } from '../types/user.types';

export const userApi = {
  getUserProfile: async (): Promise<UserProfile> => {
    const response = await axiosInstance.get<UserProfile>('/users/me');

    return response.data;
  },
};
