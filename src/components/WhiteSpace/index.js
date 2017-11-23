import React from 'react';
import { View } from 'react-native';
import varibles from '../../styles/default';
class WhiteSpace extends React.Component {
  render () {
    const { size, style } = this.props;
    return (
      <View style={[{ height: varibles[`v_spacing_${size}`] }, style]} />
    );
  }
}
WhiteSpace.defaultProps = {
  size: 'md',
};
export default WhiteSpace;
