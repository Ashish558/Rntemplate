import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserStore } from '../../store/useAccountStore';
import { AuthStackParamList } from '../../types/navigation';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const HomeStack = () => {

  return (
   <>
   </>
  );
};

export default HomeStack