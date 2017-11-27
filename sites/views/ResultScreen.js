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
  Button,
  WhiteSpace,
  SideBlank,
  Result
} from '../../src'

export default class ResultScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <SafeAreaView>
        <WhiteSpace />
        <Result
          title='还款成功'
          desc='99.00元'
          type='success'
        />
        <WhiteSpace />
        <Result
          title='还款处理中'
          desc='99.00元'
          type='processing'
        />
        <WhiteSpace />
        <Result
          title='还款失败'
          desc='99.00元'
          type='failure'
        />
      </SafeAreaView>
    )
  }
}
ResultScreen.navigationOptions = {
  title: 'Result'
}