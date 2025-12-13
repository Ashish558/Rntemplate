import { ApiResponse, User } from '../../types/entities';
import axiosInstance from '../axios';

export const userApi = {
  getProfile: async (): Promise<User> => {
    const { data } = await axiosInstance.get<ApiResponse<User>>('/profile');
    return data.data;
  },
};
