import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  ViewStyle
} from 'react-native'
import NoticeStyle from './style'

const styles = StyleSheet.create(NoticeStyle)

export default class NoticeBar extends React.PureComponent {
  static defaultProps = {
    mode: '',
    onClick () { },
    styles: NoticeStyle,
    icon:
      (
        <Image source={require('./images/horn.png')} style={{ width: 14, height: 12 }} />
      ),


  }
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick () {
    const { mode, onClick } = this.props
    onClick && onClick()
    if (mode === 'closable') {
      this.setState({
        show: false
      })
    }
  }

  render () {
    const { children, mode, icon, style, action } = this.props
    const styles = this.props.styles;
    let operationDom = null;

    if (mode === 'closable') {
      operationDom = (
        <TouchableWithoutFeedback onPress={this.handleClick}>
          <View style={styles.actionWrap}>
            {action ? action : <Text style={[styles.close]}>×</Text>}
          </View>
        </TouchableWithoutFeedback>
      )
    }

    const main = (
      <View
        style={[styles.notice, style]}>
        {icon && <View style={styles.left15}>{icon}</View>}
        <View
          style={[styles.container, icon ? styles.left6 : styles.left15]}>
          <Text style={styles.content}>{children}</Text>
        </View>
        {operationDom}
      </View>
    )
    return this.state.show ?
      mode === 'closable' ? main : (
        <TouchableWithoutFeedback onPress={this.handleClick}>
          {main}
        </TouchableWithoutFeedback>
      ) : null;
  }
}