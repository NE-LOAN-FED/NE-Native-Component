import React from 'react';
import { View } from 'react-native';
import varibles from '../../styles/default';
class SideBlank extends React.Component {
  render () {
    const { size, style, children } = this.props;
    const margin = varibles[`h_spacing_${size}`];
    return (
      <View
        style={[{
          marginLeft: margin, marginRight: margin
        }, style
        ]}>
        {children}
      </View>)
      ;
  }
}
SideBlank.defaultProps = {
  size: 'lg',
};
export default SideBlank;
