import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeTabsScreenProps } from '/Users/clintononuoha/RiseCLI/src/navigation/src/navigation/navigation.tsx';

export default function FeedScreen({ navigation }: HomeTabsScreenProps<'Feed'>) {
  return (
    <View>
      <Text>Feed Screen</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile' as never)} />
    </View>
  );
}