import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
// import PopupMixin from './PopupMixin';
import Modal from 'rmc-dialog/lib/Modal';
import popupStyle from './style'
export default class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visible || false,
    }
    this.setVisibleState = this.setVisibleState.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if ('visible' in nextProps) {
      this.setVisibleState(nextProps.visible);
    }
  }

  setVisibleState (visible) {
    this.setState({
      visible
    })
  }
  render () {
    const {
      styles,
      title,
      okText,
      dismissText,
      getContent,
      onDismiss,
      onOk,
      hide
    } = this.props
    const {
      visible
    } = this.state
    const titleEl = typeof title === 'string' ?
      <Text style={[styles.title]}>{title}</Text> :
      title;
    const okEl = typeof okText === 'string' ?
      <Text style={[styles.actionText, styles.okText]}>{okText}</Text> :
      okText;
    const dismissEl = typeof dismissText === 'string' ?
      <Text style={[styles.actionText, styles.dismissText]}>{dismissText}</Text> :
      dismissText;
    return (
      <Modal
        animationType="slide-up"
        wrapStyle={styles.modal}
        visible={visible}
        onClose={hide}
      >
        <View style={[styles.header]}>
          <TouchableHighlight
            onPress={onDismiss}
            style={[styles.headerItem]}
            activeOpacity={1}
            underlayColor='#ddd'
          >
            {dismissEl}
          </TouchableHighlight>
          <View style={[styles.headerItem]}>
            {titleEl}
          </View>
          <TouchableHighlight
            onPress={onOk}
            style={[styles.headerItem]}
            activeOpacity={1}
            underlayColor='#ddd'
          >
            {okEl}
          </TouchableHighlight>
        </View>
        {getContent()}
      </Modal>
    )
  }
}

Popup.defaultProps = {
  onVisibleChange () { },
  okText: 'Ok',
  dismissText: 'Dismiss',
  title: '',
  onOk () { },
  onDismiss () { },
  hide () { },
  styles: popupStyle
}