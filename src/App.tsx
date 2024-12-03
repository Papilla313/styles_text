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
  View,
} from 'react-native';
import { Home } from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./global.css"

function App(): React.JSX.Element {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);

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
            <RouterProvider router={router} />
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
