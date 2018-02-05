import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import ArtistsBox from './components/artists-box'

import Icon from 'react-native-vector-icons/Ionicons';



export default class App extends Component<{}> {
  render() {
    const artist = {
      name: 'Juan Luis Rojas',
      image: 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
      likes: 200,
      comments: 10
    }
    return (
      <View style={styles.container}>
        <ArtistsBox artist={artist} />
        <ArtistsBox artist={artist} />
        <ArtistsBox artist={artist} />
        <ArtistsBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }
});
