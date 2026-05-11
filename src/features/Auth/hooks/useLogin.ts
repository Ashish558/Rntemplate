import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from '@tanstack/react-query';
import { ApiError } from '../../../types/entities';
import { queryKeys } from '../../../services/query/queryKeys';
import { authApi } from '../api/authApi';
import { useUserStore } from '../store/useAuthStore';
import { LoginPayload, LoginResponse } from '../types/auth.types';

type UseLoginOptions = UseMutationOptions<LoginResponse, ApiError, LoginPayload>;

export const useLogin = (options?: UseLoginOptions) => {
  const queryClient = useQueryClient();
  const setAccessToken = useUserStore(state => state.setAccessToken);
  const setUser = useUserStore(state => state.setUser);
  const loginUser = useUserStore(state => state.loginUser);

  return useMutation<LoginResponse, ApiError, LoginPayload>({
    mutationFn: authApi.login,
    ...options,
    onSuccess: async (data, variables, onMutateResult, context) => {
      setAccessToken(data.accessToken);

      if (data.user) {
        setUser(data.user);
        queryClient.setQueryData(queryKeys.users.profile(), data.user);
      } else {
        await queryClient.invalidateQueries({
          queryKey: queryKeys.users.profile(),
        });
      }

      loginUser();
      options?.onSuccess?.(data, variables, onMutateResult, context);
    },
  });
};
