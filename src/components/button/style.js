import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')
export default {
  main: {
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    padding: 8,
    flexDirection: 'row',
    fontSize: 18,
  },
  style: {
    normal: {
      borderRadius: 2,
    },
    rightAngle: {
      width: '100%'
    }
  },
  normalStyleWrapper: {
    borderRadius: 2,
  },
  rightAngleStyleWrapper: {
    width: '100%'
  },
  primaryRoleWrapper: {
    backgroundColor: '#f8402f',
  },
  primaryRoleActiveWrapper: {
    backgroundColor: '#e31300'
  },
  secondaryRoleWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  secondaryActiveWrapper: {
    backgroundColor: '#ccc'
  },
  role: {
    primary: {
      backgroundColor: '#f8402f',
    },
    primaryActive: {
      backgroundColor: '#e31300'
    },
    secondary: {
      borderWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff'
    },
    secondaryActive: {
      backgroundColor: '#ccc'
    }
  },
  primary: {
    backgroundColor: '#cdcdcd',
    color: 'white',
  }
}