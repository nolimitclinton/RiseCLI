import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
  HomeTabs: undefined;
  Profile: undefined;
};


export type HomeTabsParamList = {
  Feed: undefined;
  Messages: undefined;
};


export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabsScreenProps<T extends keyof HomeTabsParamList> =
  BottomTabScreenProps<HomeTabsParamList, T>;