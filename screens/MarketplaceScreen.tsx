import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

type Props = DrawerScreenProps<any, 'Join Marketplace'>;

export default function MarketplaceScreen({ navigation }: Props) {
  // return (
  //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //     <Text>Marketplace Screen</Text>
  //     <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
  //   </View>
  // );
}