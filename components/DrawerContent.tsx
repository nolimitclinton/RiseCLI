import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = props.navigation;

  const drawerItems = [
    { label: 'Home', route: 'Home' },
    { label: 'Profile', route: 'Profile' },
    { label: 'Bookmarks', route: 'Bookmarks' },
    { label: 'Join Marketplace', route: 'Join Marketplace' },
    { label: 'Settings', route: 'Settings' },
  ];

  const profileImageUri = 'https://lh3.googleusercontent.com/a/ACg8ocL3jU0uGIkyqTMZdcYAKegzoBkoRP7yic3hMQrZvRThPTnoEbv3=s576-c-no'; 

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: profileImageUri }} 
          style={styles.profileImage}
        />
        <Text style={styles.username}>Clinton Onuoha</Text>
        <Text style={styles.handle}>@Nolimitclinton</Text>
        <TouchableOpacity>
          <Text style={styles.editProfile}>Edit profile picture</Text>
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      {drawerItems.map((item, index) => (
        <DrawerItem
          key={index}
          label={item.label}
          onPress={() => navigation.navigate(item.route)}
        />
      ))}

      {/* Logout Button at the Bottom */}
      <View style={styles.logoutContainer}>
        <DrawerItem
          label="Logout"
          onPress={() => console.log('Logout')}
          labelStyle={styles.logoutText}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, 
    marginBottom: 10,
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
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginBottom: 20, 
  },
  logoutText: {
    color: 'red', 
  },
});

export default DrawerContent;