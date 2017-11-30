import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
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

export default class WebviewScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      loading: false
    }
    // this.handleOnMessage = this.handleOnMessage.bind(this)
    // this.state = {
    //   visible: false
    // }
    this.state = {
      visible: false
    }
  }

  handleOnMessage(event)  {
    var self = this
    alert(JSON.stringify(event.nativeEvent.data))
    // Toast.loading('', 1000, () => {
    //   // self.setState({
    //   //   visible: true
    //   // })
    // })
  }
  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <WhiteSpace /> */}
        {/* <Button>click</Button> */}
        {/* <WebView
          ref={w => this.webview = w}
          source={{ uri: 'http://10.242.17.96:9999/#/pay' }}
          style={{ flex: 1 }}
          onMessage={this.handleOnMessage}
        /> */}
        {/* <Button
          onClick={() => {
            console.log(this.webview)
            this.webview.postMessage('send message')
          }}
        >向webview发消息</Button> */}
      </SafeAreaView>
    )
  }
}
WebviewScreen.navigationOptions = {
  title: 'Webview'
}