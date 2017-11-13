import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from '../../src'
export default class ButtonScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={style.container}>
        <Text>这是button的页面</Text>
        <View>
          <Button>Button Primary</Button>
          <Button role='secondary'>Button Secondary</Button>
        </View>
      </SafeAreaView>
    )
  }
}

ButtonScreen.navigationOptions = {
  title: 'Button'

}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})