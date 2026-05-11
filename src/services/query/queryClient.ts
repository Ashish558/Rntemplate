// import { persistQueryClient } from '@tanstack/react-query-persist-client';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { QueryClient } from '@tanstack/react-query'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'

const getErrorStatus = (error: Error): number | undefined => {
   if ('statusCode' in error && typeof error.statusCode === 'number') {
      return error.statusCode;
   }

   if (
      'response' in error &&
      error.response &&
      typeof error.response === 'object' &&
      'status' in error.response &&
      typeof error.response.status === 'number'
   ) {
      return error.response.status;
   }

   return undefined;
};

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 24 * 60 * 60 * 1000,
         retry: (failureCount, error) => {
            const status = getErrorStatus(error);

            if (status === 401 || status === 403) {
               return false;
            }
            return failureCount < 3;
         },
         refetchOnWindowFocus: false,
      },
      mutations: {
         retry: 1,
      },
   },
});

export const asyncStoragePersistor = createAsyncStoragePersister({
   storage: AsyncStorage,
});

