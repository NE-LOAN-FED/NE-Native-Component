import React from 'react'
import {
  View,
  Text,
  WebView,
  StyleSheet
} from 'react-native'
import {
  SafeAreaView,
  StackNavigator
} from 'react-navigation'

import {
  Button,
  WhiteSpace,
  SideBlank,
  Toast,
  Popup,
  Cells
} from '../../src'
import defaultStyles from '../../src/styles/default'
import TouchID from 'react-native-touch-id'
// import PaySuccess from './subs/PaySuccess'
const URL = 'http://10.242.17.96:9999/#/pay'
const CellItem = Cells.Item
const Brief = CellItem.Brief
const ResultView = {
  success: {
    key: 'PaySuccess',
    desc: 'PaySuccess'
  }
}
export default class Example extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      loading: false,
      uri: 'about:blank'
    }
    this.handleMessage = this.handleMessage.bind(this)
  }
  componentDidMount () {
    this.setState({
      uri: URL
    })
  }

  handleMessage (event) {
    var self = this
    event.persist()
    Toast.loading('', 1, () => {
      self.setState({
        visible: true
      })
      // alert(JSON.stringify(event.nativeEvent.data))

    })
    // alert(JSON.stringify(event.nativeEvent.data))
  }

  goPayResult (navigation, item) {
    return navigation.navigate(item.key, { data: item })
  }
  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          ref={w => this.oWebView = w}
          source={{ uri: this.state.uri }}
          style={{ flex: 1 }}
          onMessage={this.handleMessage}
        />
        <Popup
          visible={this.state.visible}
          title={'确认付款'}
          dismissText={`取消`}
          okText={``}
          onDismiss={() => {
            this.setState({
              visible: false
            })
          }}
          getContent={() => {
            return (
              <View>
                <WhiteSpace size='lg' />
                <Text style={styles.text}>￥2899.00</Text>
                <WhiteSpace size='lg' />
                <Cells>
                  <CellItem
                    bordered={false}
                    extra="epaytest@163.com"
                  >支付账号</CellItem>
                  <CellItem
                    bordered={false}
                    extra="[网易考拉海购]20171130JY343424"
                  >订单信息</CellItem>
                  <CellItem
                    bordered={false}
                    extra="网易白条"
                  >支付方式</CellItem>

                </Cells>
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <WhiteSpace size='lg' />
                <SideBlank>
                  <Button
                    type='primary'
                    loading={this.state.loading}
                    disabled={this.state.loading}
                    onClick={() => {
                      var self = this
                      self.setState({
                        loading: true
                      })

                      setTimeout(() => {
                        self.setState({
                          loading: false
                        })
                        TouchID.authenticate('请确认您的指纹用于白条支付')
                          .then(success => {
                            self.setState({
                              visible: false
                            })
                            self.goPayResult(self.props.navigation, ResultView.success)
                          })
                          .catch(err => {
                            alert(err)
                          })
                        // self.goPayResult(self.props.navigation, ResultView.success)
                      }, 500)
                    }}
                  >立即付款</Button>
                </SideBlank>
                <WhiteSpace size='lg' />

              </View>
            )
          }}
        />
        {/* <Button>谢谢</Button> */}

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: defaultStyles.icon_size_lg,
    color: defaultStyles.color_text_base,
    textAlign: 'center'
  }
})

// export default StackNavigator({
//   Example: {
//     screen: Example
//   },
//   PaySuccess: {
//     screen: PaySuccess
//   }
// })