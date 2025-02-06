import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackScreenProps } from '/Users/clintononuoha/RiseCLI/src/navigation/src/navigation/navigation.tsx';

const ProfileScreen = ({ navigation }: RootStackScreenProps<'Profile'>) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate('HomeTabs', { screen: 'Feed' })} />
      <Button title="Go to Messages" onPress={() => navigation.navigate('HomeTabs', { screen: 'Messages' })} />
    </View>
  );
};

export default ProfileScreen;