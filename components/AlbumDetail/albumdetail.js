import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { APIKEY } from '../KeyAndRoute/APIKEY';
import SongListGrid from './songlistgrid';

export default class AlbumDetail extends Component {
  state = {
    data: { tracks: [] },
    loading: true,
  };

  _fetchServer = () => {
    console.log(this.props.navigation.state.params.data.album.id);
    console.log(APIKEY);
    fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/album/${
        this.props.navigation.state.params.data.album.id
      }`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': APIKEY,
        },
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ data: responseJson, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this._fetchServer();
  }

  render() {
    const data = this.props.navigation.state.params.data;
    return (
      <ScrollView>
        <Image
          source={{ uri: data.album.cover_big }}
          style={{ width: '100%', height: 300 }}
        />
        {this.state.loading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: 35,
            }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View>
            <Text style={styles.titletext}>{this.state.data.title}</Text>
            {this.state.data.tracks.data.map(item => {
              return (
                <SongListGrid
                  navigation={this.props.navigation}
                  data={item}
                  photo={this.state.data.artist.picture_medium}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titletext: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
