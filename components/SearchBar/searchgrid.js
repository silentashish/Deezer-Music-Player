import React, { Component } from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, TouchableOpacity } from 'react-native';

class MyComponent extends Component {
  render() {
    const data = this.props.data;
    return (
      <Card
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginRight: 8,
          marginLeft: 8,
        }}>
        <Card.Title
          title={data.title}
          subtitle={data.artist.name}
          left={props => (
            <Avatar.Image
              size={50}
              source={{ uri: data.artist.picture_medium }}
            />
          )}
        />
        <Card.Content>
          <Title style={{ marginTop: 3, marginBottom: 10 }}>
            {data.album.title}
          </Title>
        </Card.Content>
        <Card.Cover source={{ uri: data.album.cover_big }} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <TouchableOpacity  onPress={() => console.log('Hello world')}>
            <Avatar.Icon
              size={35}
              icon="play"
             
            />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => this.props.navigation.navigate('AlbumDetail',{data:data})}>
            <Avatar.Icon
              size={35}
              icon="like"
             
            />
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => console.log('Hello world')}>
            <Avatar.Icon
              size={35}
              icon="cards-heart"
            />
          </TouchableOpacity>
        </View>
      </Card>
    );
  }
}

export default MyComponent;
