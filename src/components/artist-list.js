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
    const artists = this.props.artists
    return (
      <FlatList
        data={artists}
        renderItem={({item}) => <ArtistsBox artist={item} />}
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
