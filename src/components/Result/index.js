import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import ResultStyle from './style';

const ResultStyles = StyleSheet.create(ResultStyle)

function Icon ({ type }) {
  let imageUrl
  switch (type) {
    case 'success':
      imageUrl = require('./images/success.png')
      break
    case 'failure':
      imageUrl = require('./images/failure.png')
      break
    case 'processing':
      imageUrl = require('./images/process.png')
      break
    default:
      imageUrl = require('./images/success.png')
      break
  }

  return (
    <View style={ResultStyle.imgWrap}>
      <Image source={imageUrl} style={ResultStyle.img} />
    </View>
  )
}
export default class Result extends React.PureComponent {
  render () {
    const { styles, title, desc, type } = this.props
    return (
      <View style={[styles.result]}>
        <Icon type={type} />
        {title ? <View style={styles.title}>{typeof title === 'string' ?
          <Text style={styles.titleText}>{title}</Text> : title}</View> : null}
        {desc ? <View style={styles.message}>{typeof desc === 'string' ?
          <Text style={styles.messageText}>{desc}</Text> : desc}</View> : null}
      </View>
    )
  }
}
Result.defaultProps = {
  styles: ResultStyles,
  type: 'success'
}