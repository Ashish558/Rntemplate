import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

import { useUserStore } from '../store/useAccountStore';
import AppDrawer from './AppDrawer';
import AuthStack from './stacks/AuthStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isLoggedIn = useUserStore(state => state.loggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator