import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View>
      <Text>index</Text>
      <Link href={"/login"}>Login</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})