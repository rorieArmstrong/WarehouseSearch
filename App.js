import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [querry, setQuerry] = useState('')

  const search = () => {

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={{ height: 40,width: 80, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setQuerry(text)}
        value={querry}
      />
      <Button
        onPress={search}
        title="Search"
        color="#841584"
        accessibilityLabel="Start Search"
      />
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
});
