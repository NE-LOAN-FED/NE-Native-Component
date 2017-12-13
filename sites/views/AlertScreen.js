import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  AlertIOS,
  ALERT
} from 'react-native'
import {
  SafeAreaView
} from 'react-navigation'
import {
  Button,
  WhiteSpace,
  SideBlank

} from '../../src'
// } from 'ne-native-rc'
export default class AlertScreen extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      clicked: 'none',
      text: ''
    }
  }
  showAlert () {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  showPrompt () {
    AlertIOS.prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      'secure-text'
    );
  }

  render () {
    return (
      <View style={style.container}>
        <SideBlank>

          <Button type='primary' onClick={() => {
            AlertIOS.alert('标题', '我是提醒Message')
          }}>弹出一个带有标题和信息默认弹出框</Button>
          <WhiteSpace />

          <Button onClick={() => AlertIOS.alert('标题', '我是提醒Message', [
            { text: '取消', onPress: () => console.log('点击了取消'), style: 'cancel' },
            { text: '确定', onPress: () => console.log('点击了确定'), style: 'default' }
          ])}>弹出两个按钮的弹出框</Button>
          <WhiteSpace />
          <Button onClick={() => {
            AlertIOS.prompt('温馨提醒', '请输入相关信息')
          }}> 弹出默认提醒框</Button>
          <WhiteSpace />
          <Button onClick={() =>
            AlertIOS.prompt('温馨提醒', '请输入密码', [
              {
                text:
                  '取消',
                onPress: () => console.log('点击了取消'),
                style: 'cancel'
              },
              {
                text: '确定',
                onPress: () => console.log('点击了确定'),
                style: 'default'
              }
            ], 'secure-text')}>弹出两个按钮的弹出框-密码输入框</Button>
          <WhiteSpace />
          <Button onClick={() =>
            AlertIOS.prompt('温馨提醒', '请输入相关信息', [
              {
                text: '取消',
                onPress: () => console.log('点击了取消'), style: 'cancel'
              },
              {
                text: '确定',
                onPress: () => console.log('点击了确定'),
                style: 'default'
              }
            ], 'plain-text', '我是默认信息')}>
            弹出两个按钮的弹出框-输入框存在默认信息
          </Button>
          <WhiteSpace />
          
          <Button onClick={this.showAlert}>点击显示弹窗</Button>
          <WhiteSpace />
          <Button onClick={this.showPrompt}>显示prompt</Button>
        </SideBlank>
      </View>
    )
  }
}
AlertScreen.navigationOptions = {
  title: 'Alert'

}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center'
  }
})