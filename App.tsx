import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FeedScreen from './screens/FeedScreen';
import MessagesScreen from './screens/MessagesScreen';
import ProfileScreen from './screens/ProfileScreen';
import { RootStackParamList, HomeTabsParamList } from '/Users/clintononuoha/RiseCLI/src/navigation/src/navigation/navigation.tsx';

//main commit
const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();


const HomeTabsNavigator = () => {
  return (
    <HomeTabs.Navigator>
      <HomeTabs.Screen name="Feed" component={FeedScreen} />
      <HomeTabs.Screen name="Messages" component={MessagesScreen} />
    </HomeTabs.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="HomeTabs" component={HomeTabsNavigator} options={{ headerShown: false }} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}