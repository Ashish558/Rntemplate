import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '../../../api/queryKeys';
import { useUserStore } from '../../../store/useAccountStore';
import { userApi } from '../../../api/user/userApi';

export const useGetProfile = (options = {}) => {
  const token = useUserStore(state => state.accessToken);

  return useQuery({
    queryKey: queryKeys.users.profile(),
    queryFn: () => userApi.getProfile(),
    enabled: !!token,
    staleTime: 30 * 60 * 1000,
    ...options,
  });
};
