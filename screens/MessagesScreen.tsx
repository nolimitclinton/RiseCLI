import React from 'react';
import { View, Text, Button } from 'react-native';
import { HomeTabsScreenProps } from '/Users/clintononuoha/RiseCLI/src/navigation/src/navigation/navigation.tsx';

const MessagesScreen = ({ navigation }: HomeTabsScreenProps<'Messages'>) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages Screen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
      <Button title="Go to Profile" onPress={() => navigation.getParent()?.navigate('Profile')} />
    </View>
  );
};

export default MessagesScreen;