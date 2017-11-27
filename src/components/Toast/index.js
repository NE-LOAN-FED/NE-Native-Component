import React from 'react'
import topView from 'rn-topview'

import {
  View,
  Text,
  Image,
  ActivityIndicator,
  Animated,
  StyleSheet,
} from 'react-native';
import toastStyle from './style'

function toast (content, type, duration = 3, onClose = () => { }, mask = true) {
  topView.remove()
  function animationEnd () {
    topView.remove();
  }
  topView.set(
    <Toast
      content={content}
      duration={duration}
      onClose={onClose}
      type={type}
      mask={mask}
      onAnimationEnd={animationEnd}
    />);
}
export default {
  SHORT: 3,
  LONG: 8,
  show (content, duration, mask) {
    return toast(content, 'info', duration, () => { })
  },
  loading (content, duartion, onClose, mask) {
    return toast(content, 'loading', duartion, onClose, mask)
  },
  hide () {
    topView.remove()
  }
}
class Toast extends React.Component {
  static defaultProps = {
    duration: 3,
    mask: true,
    onClose () {

    },
    styles: toastStyle
  }
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount () {
    const {
      onClose,
      onAnimationEnd
    } = this.props;
    const duration = this.props.duration;
    const timing = Animated.timing;
    if (this.anim) {
      this.anim = null;
    }
    const animArr = [
      timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 200
      }),
      Animated.delay(duration * 1000),
    ];
    if (duration > 0) {
      animArr.push(timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 200
      }));
    }
    this.anim = Animated.sequence(animArr);
    this.anim.start(() => {
      if (duration > 0) {
        this.anim = null;
        if (onClose) {
          onClose();
        }
        if (onAnimationEnd) {
          onAnimationEnd();
        }
      }
    });
  }

  componentWillUnmount () {
    if (this.anim) {
      this.anim.stop();
      this.anim = null;
    }
  }
  render () {
    const {
      type = '',
      content,
      mask
    } = this.props;
    const styles = this.props.styles;
    // const iconType = {
    //   success: require('./images/success.png'),
    //   fail: require('./images/fail.png'),
    //   offline: require('./images/offline.png'),
    // };
    let iconDom = null;
    if (type === 'loading') {
      iconDom = <ActivityIndicator animating style={[styles.centering]} color="white" size="large" />;
    }
    else {
      iconDom = null;
    }
    // else {
    //   iconDom = <Image source={iconType[type]} style={styles.image} />;
    // }
    return (
      <View
        style={[styles.container]}
        pointerEvents={mask ? undefined : 'box-none'}>
        <View
          style={[styles.innerContainer]}>
          <Animated.View
            style={{ opacity: this.state.fadeAnim }}>
            <View
              style={[
                styles.innerWrap,
                iconDom ? styles.iconToast : styles.textToast]}>
              {iconDom}
              {!!content && <Text style={styles.content}>{content}</Text>}
            </View>
          </Animated.View>
        </View>
      </View>);
  }
}