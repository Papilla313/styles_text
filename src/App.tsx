/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import "../global.css"
import NativeWindView from './components/NativeWindView';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{...styles.mainContainer}}>
      <StatusBar 
        barStyle={'light-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{...styles.mainContainer}}
        style={{...styles.mainContainer}}>
        <View
          style={{...styles.mainContainer}}>
            <NativeWindView navBarOptions={["Default A", "Default B"]}></NativeWindView>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%"
  },
});

export default App;
