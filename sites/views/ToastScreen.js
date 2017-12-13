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
  SideBlank,
  Toast

} from '../../src'

export default class ToastScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView>
        <SideBlank>
          <WhiteSpace />

          <Button
            type='primary'
            onClick={() => {
              Toast.loading('加载中')
            }}
          >显示加载中</Button>
          <WhiteSpace />
          <Button
            onClick={() => {
              Toast.show('请输入正确的手机号')
            }}
          >显示正常提示</Button>
          <WhiteSpace />
          <Button
            onClick={() => {
              Toast.loading('')
            }}
          >只显示加载中图标</Button>
        </SideBlank>
      </SafeAreaView>
    )
  }
}
ToastScreen.navigationOptions = {
  title: 'Toast'
}