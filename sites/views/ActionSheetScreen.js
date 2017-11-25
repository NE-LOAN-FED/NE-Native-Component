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
  ActionSheet,
  Button,
  WhiteSpace
} from '../../src'
export default class ActionSheetScreen extends React.Component {

  constructor(props) {
    super(props)

    this.showActionSheet = this.showActionSheet.bind(this)

    this.state = {
      clicked: 'none',
      text: ''
    }
  }

  showActionSheet () {
    const BUTTONS = ['Operation1', 'Operation2', 'Operation3', 'Delete', 'Cancel'];
    console.log(ActionSheet)
    ActionSheet.showActionSheetWithOptions({
      title: 'Title',
      message: 'Description',
      options: BUTTONS,
      cancelButtonIndex: 4,
      destructiveButtonIndex: 3,
    }, (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
      alert(BUTTONS[buttonIndex])
    });
  }

  showShareActionSheet = () => {
    const opts = {
      message: 'Message to go with the shared url',
      title: 'Share Actionsheet',
    };
    if (Platform.OS === 'ios') {
      opts.url = 'https://www.163.com/';
      opts.tintColor = '#ff0000';
      opts.excludedActivityTypes = [
        'com.apple.UIKit.activity.PostToTwitter',
      ];
    }
    ActionSheet.showShareActionSheetWithOptions(opts, (error) => alert(error), (success, method) => {
      let text;
      if (success) {
        text = `Shared with ${method}`;
      }
      else {
        text = 'Did not share';
      }
      alert(text)
      this.setState({ text });
    });
  };
  render () {
    return (
      <View style={style.container}>

        <Button onClick={this.showActionSheet} type='primary'>
          打开ActionSheet
        </Button>
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />
        <WhiteSpace size='lg' />

        <Button onClick={this.showShareActionSheet}>
          打开分享
        </Button>

      </View>
    )
  }
}
ActionSheetScreen.navigationOptions = {
  title: 'ActionSheet'

}
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})