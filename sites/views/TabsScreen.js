import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'
import {
  SafeAreaView
} from 'react-navigation'
import {
  Button,
  WhiteSpace,
  Tabs
} from '../../src'

// const renderContent = (tab, index) => {
//   const style = {
//     paddingVertical: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//     backgroundColor: '#ddd',
//   };
//   const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
//     return <View key={`${index}_${i}`} style={style}>
//       <Text>
//         {tab.title} - {i}
//       </Text>
//     </View>;
//   });
//   return <ScrollView style={{ backgroundColor: '#fff' }}>
//     {content}
//   </ScrollView>;
// };

export default class TabsScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    };
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WhiteSpace size='lg' />
        <Tabs tabs={tabs} initialPage={1}>
          <View style={style}>
            <Text>
              Content of First Tab
        </Text>
          </View>
          <View style={style}>
            <Text>
              Content of Second Tab
        </Text>
          </View>
          <View style={style}>
            <Text>
              Content of Third Tab
        </Text>
          </View>
        </Tabs>
        {/* <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {renderContent}
          </Tabs>
        </View> */}
      </SafeAreaView>
    )
  }
}
TabsScreen.navigationOptions = {
  title: 'Tab'
}