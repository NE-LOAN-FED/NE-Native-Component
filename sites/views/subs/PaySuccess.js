import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native'

import {
  Result,
  Button,
  WhiteSpace,
  SideBlank
} from '../../../src'

export default class PaySuccess extends React.PureComponent {
  render () {
    return (
      <SafeAreaView>
        <Result
          title='还款成功'
          desc='99.00元'
          type='success'
        />
        <WhiteSpace />
        <SideBlank>
          <Button
            onClick={() => {
              this.props.navigation.goBack(null)
            }}
          >完成</Button>
        </SideBlank>
      </SafeAreaView>
    )
  }
}
PaySuccess.navigationOptions = {
  title: '支付结果'
}