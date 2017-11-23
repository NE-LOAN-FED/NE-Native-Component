import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {
  Button,
  WhiteSpace,
  SideBlank
} from '../../src'
export default class ButtonScreen extends React.Component {
  render () {
    return (
      <SafeAreaView style={style.container}>
        <SideBlank>
          <Text>这是button的页面</Text>
          <View>
            <WhiteSpace />
            <Button>default</Button><WhiteSpace />
            <Button disabled>default disabled</Button><WhiteSpace />

            <Button type="primary">primary</Button><WhiteSpace />
            <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

            <Button type="warning">warning</Button><WhiteSpace />
            <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

            <Button loading>loading button</Button>

          </View>
        </SideBlank>
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
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})