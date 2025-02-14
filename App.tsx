import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import ShipmentsScreen from './screens/ShipmentsScreen';
import ScanScreen from './screens/ScanScreen';
import WalletScreen from './screens/WalletScreen';
import ProfileScreen from './screens/ProfileScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import SettingsScreen from './screens/SettingsScreen';
import DrawerContent  from './components/DrawerContent';

const ICONS: Record<string, { active: any; inactive: any }> = {
  Shipments: {
    active: require('./assets/icons/shipments_active.png'),
    inactive: require('./assets/icons/shipments.png'),
  },
  Scan: {
    active: require('./assets/icons/scan_active.png'),
    inactive: require('./assets/icons/scan.png'),
  },
  Profile: {
    active: require('./assets/icons/profile_active.png'),
    inactive: require('./assets/icons/profile.png'),
  },
  Wallet: {
    active: require('./assets/icons/wallet_active.png'),
    inactive: require('./assets/icons/wallet.png'),
  },
};
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? ICONS[route.name].active : ICONS[route.name].inactive}
            style={{ width: 24, height: 24, resizeMode: 'contain' }}
          />
        ),
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? '#0057FF' : '#B0B0B0', fontSize: 12 }}>
            {route.name}
          </Text>
        ),
        tabBarStyle: { backgroundColor: 'white', height: 65, paddingBottom: 10 },
      })}
    >
      <Tab.Screen name="Shipments" component={ShipmentsScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabs} options={{headerShown:false}}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
      <Drawer.Screen name="Join Marketplace" component={MarketplaceScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}