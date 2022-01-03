import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

export default function Selection({ navigation }) {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/kahana.png')} style={styles.image} />
      <Pressable style={styles.button} onPress={() => navigation.navigate("VerifyWithQR")}>
        <Text style={styles.text}> Verify from QR Code</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate("VerifyWithID")}>
        <Text style={styles.text}>Verify from serial number</Text>
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
    marginBottom: 130,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(93, 183, 67)",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 260,
  },
  text: {
    color: "white",
  }
});