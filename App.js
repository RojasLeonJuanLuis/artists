import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.box1}>
          Hi every one
        </Text>
        <Text style={styles.box2}>
          Hi every one
        </Text>
        <Text style={styles.box3}>
          Hi every one
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  box1: {
    backgroundColor: 'green'
  },
  box2: {
    backgroundColor: 'blue'
  },
  box3: {
    backgroundColor: 'purple'
  }
});
