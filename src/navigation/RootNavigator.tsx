import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import { useAuthStore } from '../features/Auth/store/useAuthStore';
import AppDrawer from './AppDrawer';
import AuthStack from './stacks/AuthStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isLoggedIn = useAuthStore(state => state.loggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator
