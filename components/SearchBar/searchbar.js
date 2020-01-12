import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { APIKEY } from '../KeyAndRoute/APIKEY';
import SearchGrid from './searchgrid';
import Constants from 'expo-constants';

class SearchBar extends Component {
  state = {
    firstQuery: '',
    data: [],
  };

  _fetchServer = value => {
    if (value !== '') {
      fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': APIKEY,
        },
      })
        .then(response => response.json())
        .then(responseJson => this.setState({ data: responseJson.data }))
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <View>
        <View style={{ height: Constants.statusBarHeight }} />

        <Searchbar
          placeholder="Search"
          onChangeText={query => {
            this._fetchServer(query);
            this.setState({ firstQuery: query });
          }}
          value={this.state.firstQuery}
        />

        <ScrollView>
          {this.state.data.length > 0
            ? this.state.data.map(item => <SearchGrid data={item} navigation={this.props.navigation}/>)
            : null}
        </ScrollView>
      </View>
    );
  }
}

export default SearchBar;
