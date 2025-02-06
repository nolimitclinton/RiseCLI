import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Define the Root Stack Navigator Types
export type RootStackParamList = {
  HomeTabs: undefined;
  Profile: undefined;
};

// Define the Bottom Tab Navigator Types
export type HomeTabsParamList = {
  Feed: undefined;
  Messages: undefined;
};

// Define Props for Stack Screens
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabsScreenProps<T extends keyof HomeTabsParamList> =
  BottomTabScreenProps<HomeTabsParamList, T>;