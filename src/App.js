import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import HomeView from './home-view'

import { Scene, Router, Stack } from 'react-native-router-flux'

export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomeView}></Scene>
        </Stack>
      </Router>
    )
  }
}
