import React from 'react'
import {
  Image,
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

import cellStyle from './style'

function Brief ({ children, style, styles, wrap }) {
  let numberOfLines = {};
  if (wrap === false) {
    numberOfLines = {
      numberOfLines: 1,
    };
  }
  return (
    <View style={styles.Brief}>
      <Text
        style={[styles.BriefText, style]}
        {...numberOfLines}
      >
        {children}
      </Text>
    </View>
  )
}
Brief.defaultProps = {
  styles: cellStyle
}
export default class CellItem extends React.Component {
  static defaultProps = {
    multipleLine: false,
    wrap: false,
    styles: cellStyle,
    bordered: true
  }
  static Brief = Brief
  constructor(props) {
    super(props)

  }

  render () {
    const {
      styles,
      children,
      multipleLine,
      bordered,
      thumb,
      extra,
      arrow,
      style,
      onClick,
      onPressIn,
      onPressOut,
      wrap,
      disabled,
      align,
      ...restProps
    } = this.props
    const itemStyles = styles

    let numberOfLines = {};
    if (wrap === false) {
      numberOfLines = {
        numberOfLines: 1,
      };
    }

    let underlayColor = {};

    if (!disabled && onClick) {
      underlayColor = {
        underlayColor: StyleSheet.flatten(itemStyles.underlayColor).backgroundColor,
        activeOpacity: 0.5,
      };
    } else {
      underlayColor = {
        activeOpacity: 1,
      };
    }
    let alignStyle = {};

    if (align === 'top') {
      alignStyle = {
        alignItems: 'flex-start',
      };
    } else if (align === 'bottom') {
      alignStyle = {
        alignItems: 'flex-end',
      };
    }

    let contentDom;
    if (Array.isArray(children)) {
      const tempContentDom = [];
      children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(el);
        }
        else {
          tempContentDom.push(<Text style={[itemStyles.Content]} {...numberOfLines} key={`${index}-children`}>{el}</Text>);
        }
      })
      contentDom = <View style={[itemStyles.column]}>{tempContentDom}</View>;
    }
    else {
      if (React.isValidElement(children)) {
        contentDom = <View style={[itemStyles.column]}>{children}</View>;
      }
      else {
        contentDom = (<View style={[itemStyles.column]}>
          <Text style={[itemStyles.Content]} {...numberOfLines}>{children}</Text>
        </View>);
      }
    }
    let extraDom;
    if (extra) {
      extraDom = (
        <View style={[itemStyles.column]}>
          <Text style={[itemStyles.Extra]} {...numberOfLines}>{extra}</Text>
        </View>
      )
      if (React.isValidElement(extra)) {
        const extraChildren = extra.props.children;
        if (Array.isArray(extraChildren)) {
          const tempExtraDom = [];
          extraChildren.forEach((el, index) => {
            if (typeof el === 'string') {
              tempExtraDom.push(
                <Text
                  {...numberOfLines}
                  style={[itemStyles.Extra]}
                  key={`${index}-children`}>
                  {el}
                </Text>)
            }
            else {
              tempExtraDom.push(el);
            }
          })
          extraDom = (
            <View style={[itemStyles.column]}>
              {tempExtraDom}
            </View>
          )
        }
        else {
          extraDom = extra;
        }
      }
    }
    const arrEnum = {
      horizontal:
        <Image source={require('../../assets/images/arrow.png')} style={itemStyles.Arrow} />,
      down:
        <Image source={require('../../assets/images/arrow-down.png')} style={itemStyles.ArrowV} />,
      up:
        <Image source={require('../../assets/images/arrow-up.png')} style={itemStyles.ArrowV} />,
    };
    const itemView = (
      <View {...restProps} style={[itemStyles.Item, style]}>

        {typeof thumb === 'string' ?
          (
            <Image source={{ uri: thumb }} style={[itemStyles.Thumb, multipleLine && itemStyles.multipleThumb]} />
          ) : thumb}
        <View
          style={[
            bordered && {
              borderBottomWidth: StyleSheet.hairlineWidth
            },
            itemStyles.Line,
            multipleLine && itemStyles.multipleLine,
            multipleLine && alignStyle,

          ]}>
          {contentDom}
          {extraDom}
          {arrow ? (arrEnum[arrow] || <View style={itemStyles.Arrow} />) : null}
        </View>
      </View>)
    return (
      <TouchableHighlight
        {...underlayColor}
        onPress={onClick ? onClick : undefined}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        {itemView}
      </TouchableHighlight>
    );
  }
}
