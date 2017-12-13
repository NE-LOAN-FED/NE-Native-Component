import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  AlertIOS,
  ALERT,
  ScrollView
} from 'react-native'
import {
  SafeAreaView
} from 'react-navigation'
import {
  Button,
  WhiteSpace,
  SideBlank,
  Toast,
  Cells
} from '../../src'

const CellItem = Cells.Item
const Brief = CellItem.Brief

export default class CellsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
      >
        <WhiteSpace size='lg'/>
        <Cells>
          <CellItem data-seed="logId">这是一段</CellItem>
          <CellItem wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</CellItem>
          <CellItem
            extra="箭头向右"
            arrow="horizontal"
            onClick={() => {
              alert('做一些不可描述的事情')
            }}
          >链接项</CellItem>
          <CellItem extra="没有箭头" arrow="empty">普通Item</CellItem>
          <CellItem extra="右边" arrow="empty" multipleLine>
            主标题<Brief>副标题</Brief>
          </CellItem>
          <CellItem
            bordered={false}  
            extra={
              <View>
                主标题
                <Brief style={{ textAlign: 'right' }}>副标题</Brief>
              </View>
            }
            arrow="horizontal" multipleLine>
            左边
          </CellItem>

        </Cells>

      </ScrollView>
    )
  }
}