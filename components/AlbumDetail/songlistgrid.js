import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class SongListGrid extends Component {
  render() {
    const data = this.props.data;
    return (
      <Card
        style={{
          marginTop: 20,
          marginRight: 10,
          marginLeft: 10,
          marginBottom: 20,
          flexDirection: 'row',
        }}>
        <Card.Title
          title={data.title}
          subtitle={data.artist.name}
          left={props => (
            <Avatar.Image
              size={50}
              source={{
                uri: this.props.photo,
              }}
            />
          )}
          right={props => (
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => this.props.navigation.navigate('MusicPlayer',{music:data, photo:this.props.photo})}>
              <Avatar.Icon size={40} icon="play" />
            </TouchableOpacity>
          )}
        />
      </Card>
    );
  }
}
