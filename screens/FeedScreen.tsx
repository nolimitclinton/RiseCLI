import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeTabsScreenProps } from '/Users/clintononuoha/RiseCLI/src/navigation/src/navigation/navigation.tsx';

const FeedScreen = ({ navigation }: HomeTabsScreenProps<'Feed'>) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Messages" onPress={() => navigation.navigate('Messages')} />
      <Button title="Go to Profile" onPress={() => navigation.getParent()?.navigate('Profile')} />
    </View>
  );
};

export default FeedScreen;