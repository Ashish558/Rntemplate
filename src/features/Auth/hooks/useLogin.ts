import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query';
import { ApiError } from '../../../types/entities';
import { queryKeys } from '../../../services/query/queryKeys';
import { userApi } from '../../User/api/userApi';
import { authApi } from '../api/authApi';
import { LoginPayload, LoginResponse } from '../types/auth.types';
import { useAuthStore } from '../store/useAuthStore';
import { useUserStore } from '../../User/store/useUserStore';

type UseLoginOptions = UseMutationOptions<LoginResponse, ApiError, LoginPayload>;

export const useLogin = (options?: UseLoginOptions) => {
  const queryClient = useQueryClient();
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const setUser = useUserStore(state => state.setUser);
  const loginUser = useAuthStore(state => state.loginUser);

  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: authApi.login,
    ...options,
    onSuccess: async (data, variables, onMutateResult, context) => {
      setAccessToken(data.accessToken);

      if (data.user) {
        setUser(data.user);
        queryClient.setQueryData(queryKeys.users.profile(), data.user);
      } else {
        const userProfile = await queryClient.fetchQuery({
          queryKey: queryKeys.users.profile(),
          queryFn: userApi.getUserProfile,
        });

        setUser(userProfile);
      }

      loginUser();
      options?.onSuccess?.(data, variables, onMutateResult, context);
    },
  });
};
