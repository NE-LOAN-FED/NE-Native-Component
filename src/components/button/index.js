import React from 'react'
import {
  TouchableHighlight,
  View,
  Text,
  Dimensions
} from 'react-native'
import style from './style'
export default class Button extends React.Component {

  render() {
    console.log(1)
    return (
      <TouchableHighlight
        activeOpacity={1}

      >
        <View style={style.main}>
          <Text style={style.text}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}