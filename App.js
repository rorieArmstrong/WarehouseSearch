import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './App/components/Header';

export default function App() {
  // const [querry, setQuerry] = useState('')

  // const search = () => {

  // }

  return (
    <View style={styles.container}>
      <Header/>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={text => setQuerry(text)}
        value={querry}
      />
      <Button
        style={styles.button}
        onPress={search}
        disabled={this.state.querry.length == 0}
        title="Search"
        color="#841584"
        accessibilityLabel="Start Search"
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { 
    height: 40,
    borderColor: 'gray', 
    borderWidth: 2,
  },
  button : {

  },
});
