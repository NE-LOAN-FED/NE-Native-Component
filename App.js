/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

// import { Button } from 'ne-native-rc'
import { Button } from './src/index.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const list = [{
  desc: 'Button',
  key: 'Button'
}, {
  desc: 'Cells',
  key: 'Cells'
}, {
  desc: 'Panel',
  key: 'Panel'
}]
export default class App extends Component {
  renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.key}</Text>
              <Icon name='chevron-right' />
            </View>
          )}
        />
        <Button>haha</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    marginLeft: 10,
    marginRight: 10,
    // width: '88%'
  }
});
