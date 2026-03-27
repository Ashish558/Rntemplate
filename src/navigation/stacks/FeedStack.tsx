import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedStackParamList } from '../../types/navigation';
import FeedScreen from '../../features/Feed/screens/Feed';
import FeedDetailScreen from '../../features/Feed/screens/FeedDetail';


const Stack = createNativeStackNavigator<FeedStackParamList>();

const FeedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="FeedList"
        component={FeedScreen}
        options={{
          title: 'Feed',
        }}
      />

      <Stack.Screen
        name="FeedDetail"
        component={FeedDetailScreen}
        options={{
          title: 'Post',
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;