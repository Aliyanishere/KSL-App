import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from '../Navigator/Firebase';


export default function Signin({ navigation }) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const Login = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Form')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/kahana.png')} style={styles.image} />
      <TextInput style={styles.input} onChangeText={(email) => { setemail(email) }} placeholder="Enter your email" />
      <TextInput secureTextEntry={true} style={styles.input} onChangeText={(password) => { setpassword(password) }} placeholder="Enter password" />
      <Pressable style={styles.button} onPress={Login} >
        <Text style={styles.text}>Login</Text>
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
    marginBottom: 130
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(93, 183, 67)",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    width: 260
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