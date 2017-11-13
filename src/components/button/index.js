import React from 'react'
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  View,
  Text,
  Dimensions,
  Platform
} from 'react-native'
import style from './style'
const log = () => {
  console.log('please attach method to this component')
}
export default class Button extends React.Component {

  getTouchComponent() {
    switch (Platform.OS) {
      case 'ios':
        return TouchableHighlight
      case 'android':
        return TouchableNativeFeedback
      default:
        return TouchableHighlight
    }
  }

  render() {
    const TouchComponent = this.getTouchComponent()
    const {
      onClick,
      underlayColor,
      disabled,
      role,
      size
     } = this.props

    return (
      <TouchComponent
        activeOpacity={1}
        onPress={onClick || log}
        disabled={disabled || false}
        underlayColor={underlayColor || 'transparent'}
      >
        <View
          style={[
            style.main,
            role === 'primary' && style.role.primary,
            role === 'secondary' && style.role.secondary
          ]}
        >
          <Text style={style.text}>{this.props.children}</Text>
        </View>
      </TouchComponent>
    )
  }
}

Button.defaultProps = {
  onClick: () => { },
  disabled: false,

  role: 'primary',
  type: '',
  size: 'normal',
  style: 'normal',
  underlayColor: 'transparent'
}