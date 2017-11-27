import React from 'react'
import {
  View,
  Text,
  ViewStyle,
  StyleSheet
} from 'react-native';
import CellItem from './CellItem'
import cellsStyle from './style'

export default class Cells extends React.Component {
  static defaultProps = {
    styles: cellsStyle
  }
  constructor(props) {
    super(props)
  }

  render () {
    const {
      children,
      style,
      renderHeader,
      renderFooter,
      styles,
      ...restProps
    } = this.props

    let headerDom = null
    let footerDom = null

    if (renderHeader) {
      let content = typeof renderHeader === 'function' ? renderHeader() : renderHeader;
      if (typeof content === 'string') {
        content = <Text style={styles.Header}>{content}</Text>;
      }
      headerDom = <View>{content}</View>;
    }
    if (renderFooter) {
      let content = typeof renderFooter === 'function' ? renderFooter() : renderFooter;
      if (typeof content === 'string') {
        content = <Text style={styles.Footer}>{content}</Text>;
      }
      footerDom = <View>{content}</View>;
    }
    return (
      <View {...restProps} style={style}>
        {headerDom}
        <View style={styles.Body}>
          {children}
          <View style={[styles.BodyBottomLine]} />
        </View>
        {footerDom}
      </View>
    )

  }
}

Cells.Item = CellItem