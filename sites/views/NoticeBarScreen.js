import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  SafeAreaView
} from 'react-navigation'
import {
  NoticeBar,
  WhiteSpace
} from '../../src'

export default class NoticeBarScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView>
        <WhiteSpace />

        <NoticeBar mode="closable" onClick={() => alert('will close')}>
          这是一条可以点击关闭的通告
          </NoticeBar>
        <WhiteSpace />
        <NoticeBar icon={null}>普通的通告</NoticeBar>
        <WhiteSpace />
        
        <NoticeBar
          icon={null}
          onClick={() => {
            alert('你点我了啊')
          }}>点我有回调</NoticeBar>
      </SafeAreaView >
    )
  }
}
NoticeBarScreen.navigationOptions = {
  title: 'NoticeBar'
}