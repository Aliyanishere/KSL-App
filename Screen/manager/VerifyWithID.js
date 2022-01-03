import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';


export default function VerifyWithID() {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/kahana.png')} style={styles.image} />
      <TextInput style={styles.input}  placeholder="Enter Serial Number" />
      <Pressable style={styles.button} >
        <Text style={styles.text}>Verify</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  image: {
    height: 100,
    width: 200,
    marginBottom:130,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(93, 183, 67)",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 260,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: "white",
  }
});