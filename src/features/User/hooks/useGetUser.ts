import { useQuery } from '@tanstack/react-query';
import { useUserStore } from '../../Auth/store/useAuthStore';
import { queryKeys } from '../../../services/query/queryKeys';
import { userApi } from '../api/userApi';


export const useGetUserProfile = ( options = {}) => {
  const accessToken = useUserStore(state => state.accessToken);

  return useQuery({
    queryKey: queryKeys.users.profile(),
    queryFn: userApi.getUserProfile,
    enabled: Boolean(accessToken),
    staleTime: 30 * 60 * 1000,
    ...options,
  });
};
