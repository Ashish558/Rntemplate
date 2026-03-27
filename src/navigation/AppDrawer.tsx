import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserStore } from '../store/useAccountStore';
import { AppDrawerParamList } from '../types/navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Settings from '../features/Settings/screens/Settings';

const Stack = createNativeStackNavigator<AppDrawerParamList>();
const Drawer = createDrawerNavigator<AppDrawerParamList>()


const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {/* Optional screen */}
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
