import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native'

function App() {

  return (
    <SafeAreaView>
    <View>

    <Image 
    source={require('./assets/images/react.png')}
    style={{ width: 200, height: 200 }}
    />

    <Text>Hello World! </Text>
    <Text>Hello World! </Text>
    <Text>Hello World! </Text>
    <Text>Hello World! </Text>
    </View>
    </SafeAreaView> 
  )
}

export default App;