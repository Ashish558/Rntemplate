import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../config/config';
import { ApiError } from '../../types/entities';
import { useAuthStore } from '../../features/Auth/store/useAuthStore';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(config => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Normalize errors
axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError<any>) => {
    const normalizedError: ApiError = {
      message:
        error.response?.data?.message ||
        error.message ||
        'Something went wrong',
      statusCode: error.response?.status,
    };

    return Promise.reject(normalizedError);
  },
);
export default axiosInstance;
