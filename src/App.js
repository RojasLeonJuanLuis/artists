import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import getArtists from './api-client'

import ArtistList from './components/artist-list'

export default class App extends Component<{}> {

  state = {
    artists: []
  }

  async componentDidMount() {
    const response = await getArtists()
    const data = response.topartists.artist

    const artists = data.map(a => {
      return {
        name: a.name,
        image: a.image[3]['#text'],
        likes: 200,
        comments: 10
      }
    })
    this.setState({ artists })
  }

  render() {
    const dataArtists = this.state.artists
    return (
      <ArtistList artists={dataArtists} />
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
