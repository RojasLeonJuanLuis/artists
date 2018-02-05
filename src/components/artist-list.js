import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import ArtistsBox from './artists-box'

export default class ArtistList extends Component<{}> {
  render() {
    const artist = {
      name: 'Juan Luis Rojas',
      image: 'https://static.platzi.com/media/files/bowie_a927fdf3-b321-4a5c-99ca-239cc86c57bc.png',
      likes: 200,
      comments: 10
    }
    return (
      <FlatList
        data={Array(500).fill(artist)}
        renderItem={({item}) => <ArtistsBox artist={artist} />}
      />
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
