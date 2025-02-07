import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import ShipmentsScreen from './screens/ShipmentsScreen';
import ScanScreen from './screens/ScanScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';
import { RootStackParamList, HomeTabsParamList } from '/Users/clintononuoha/RiseCLI/src/navigation/src/navigation/navigation.tsx';


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
      <BottomTabs />
    </NavigationContainer>
  );
}