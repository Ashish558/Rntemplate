import { useTheme } from '@react-navigation/native';
import { ExtendedTheme } from './theme';

export const useAppTheme = (): ExtendedTheme => {
  return useTheme() as unknown as ExtendedTheme;
};
