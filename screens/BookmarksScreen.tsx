import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

type Props = DrawerScreenProps<any, 'Bookmarks'>;

export default function BookmarksScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bookmarks Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('BottomTabs')} />
    </View>
  );
}