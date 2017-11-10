import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export default {
  main: {
    marginLeft: 40,
    marginRight: 40
  },
  text: {
    color: 'white',
    backgroundColor: '#cdcdcd',
    textAlign: 'center',
    padding: 8,
    width: parseInt(0.91 * width),
    flexDirection: 'row',
    fontSize: 28,
  },
  primary: {
    backgroundColor: '#cdcdcd',
    color: 'white',
  }
}