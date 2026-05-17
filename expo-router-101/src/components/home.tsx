import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View>
       <Text>Edit src/app/index.tsx to edit this screen.</Text>
       <Link href={"/profile/details"}>About</Link>
       <Link href={"/user/1234"}>Go to userId page</Link>
       <Link href={"/username/suraj"}>Go to username page</Link>
       <Link href={"/docs/suraj/kumar/jha"}> Go to Docs</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})