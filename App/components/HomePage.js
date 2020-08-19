import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  styles = StyleSheet.create({
      container: {
          padding: 24
      }
  });

  render() {
    return (
      <View style={this.styles.container}>
        <Text> HomePage </Text>
      </View>
    );
  }
}
