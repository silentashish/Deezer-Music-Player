import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchPage from './components/SearchBar/searchbar';
import AlbumDetail from './components/AlbumDetail/albumdetail';
import MusicPlayer from './components/MusicPlayer/musicplayer';

const AppNavigator = createStackNavigator({
  Home: {
    screen: SearchPage,
  },
  AlbumDetail: {
    screen: AlbumDetail,
  },
  MusicPlayer: {
    screen: MusicPlayer,
  },
});

MusicPlayer.navigationOptions = {
  header: null,
};

SearchPage.navigationOptions = {
  header: null,
};

AlbumDetail.navigationOptions = {
  header: null,
};



export default createAppContainer(AppNavigator);