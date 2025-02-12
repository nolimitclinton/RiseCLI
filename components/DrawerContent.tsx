import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.username}>Clinton Onuoha</Text>
        <Text style={styles.handle}>@Nolimitclinton</Text>
        <TouchableOpacity>
          <Text style={styles.editProfile}>Edit profile picture</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Profile" onPress={() => props.navigation.navigate('Profile')} />
      <DrawerItem label="Bookmarks" onPress={() => props.navigation.navigate('Bookmarks')} />
      <DrawerItem label="Join Marketplace" onPress={() => props.navigation.navigate('Join Marketplace')} />
      <DrawerItem label="Settings" onPress={() => props.navigation.navigate('Settings')} />
      <DrawerItem label="Logout" onPress={() => console.log('Logout')} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  handle: {
    color: 'gray',
  },
  editProfile: {
    marginTop: 5,
    color: '#0057FF',
  },
});

export default DrawerContent;