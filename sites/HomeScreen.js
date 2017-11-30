import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { SafeAreaView, StackNavigator } from 'react-navigation';

import ButtonScreen from './views/ButtonScreen'
import ActionSheetScreen from './views/ActionSheetScreen'
import AlertScreen from './views/AlertScreen'
import ToastScreen from './views/ToastScreen'
import CellsScreen from './views/CellsScreen'
import TabsScreen from './views/TabsScreen'
import NoticeBarScreen from './views/NoticeBarScreen'
import ResultScreen from './views/ResultScreen'
import PopupScreen from './views/PopupScreen'

const data = [{
  desc: 'Button',
  key: 'Button'
}, {
  desc: 'ActionSheet',
  key: 'ActionSheet'
}, {
  desc: 'Alert',
  key: 'Alert'
}, {
  desc: 'Toast',
  key: 'Toast'
}, {
  desc: 'Cells',
  key: 'Cells'
}, {
  desc: 'Tabs',
  key: 'Tabs'
}, {
  desc: 'NoticeBar',
  key: 'NoticeBar'
}, {
  desc: 'Result',
  key: 'Result'
}, {
  desc: 'Popup',
  key: 'Popup'
}]

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CED0CE'
    // width: '88%'
  }
});

class HomeScreen extends Component {
  render () {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        {data.map((item) => {
          return (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                return navigation.navigate(item.key, { data: item })
              }}
            >
              <View style={styles.item}>
                <Text>{item.key}</Text>
                <Icon name='chevron-right' />
              </View>
            </TouchableOpacity>
          )
        })}

        {/* <FlatList
          data={list}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.key}</Text>
              <Icon name='chevron-right' />
            </View>
          )}
        /> */}
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'react-native 组件'
}

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Button: {
    screen: ButtonScreen
  },
  ActionSheet: {
    screen: ActionSheetScreen
  },
  Alert: {
    screen: AlertScreen
  },
  Toast: {
    screen: ToastScreen
  },
  Cells: {
    screen: CellsScreen
  },
  Tabs: {
    screen: TabsScreen
  },
  NoticeBar: {
    screen: NoticeBarScreen
  },
  Result: {
    screen: ResultScreen
  },
  Popup: {
    screen: PopupScreen
  }
})