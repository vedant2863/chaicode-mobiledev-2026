import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const UserNameScreen = () => {
    const {username}  =  useLocalSearchParams();
  return (
    <View>
      <Text>{username} username page</Text>
    </View>
  )
}

export default UserNameScreen

const styles = StyleSheet.create({})