import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  // WebView
} from 'react-native'
import {
  SafeAreaView
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

const CellItem = Cells.Item
const Brief = CellItem.Brief
export default class PopupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      loading: false
    }
  }

  render () {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WhiteSpace />
        <Button onClick={() => {
          this.setState({
            visible: true
          })
        }}>显示Popup</Button>
        <Popup
          visible={this.state.visible}
          title={'确认付款'}
          dismissText={`取消`}
          okText={``}
          onDismiss={() => {
            this.setState({
            visible: false
          })}}
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
                      this.setState({
                        loading: true
                      })
                    }}
                  >立即付款</Button>  
                </SideBlank>  
                <WhiteSpace size='lg' />
                
              </View>
            )
          }}
        />
        {/* <WhiteSpace /> */}
        {/* <Button>click</Button> */}
        {/* <WebView
          source={{ uri: 'http://10.242.17.96:9999/#/pay' }}
          style={{ flex: 1 }}
        /> */}
      </SafeAreaView>
    )
  }
}
PopupScreen.navigationOptions = {
  title: 'Popup'
}
const styles = StyleSheet.create({
  text: {
    fontSize: defaultStyles.icon_size_lg,
    color: defaultStyles.color_text_base,
    textAlign: 'center'
  }
})