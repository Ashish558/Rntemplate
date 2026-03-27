import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserStore } from '../../store/useAccountStore';
import { AuthStackParamList } from '../../types/navigation';
import LoginScreen from '../../features/Auth/screens/LoginScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
