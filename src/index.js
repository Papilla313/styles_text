// // index.js
// import { AppRegistry } from 'react-native';
// import App from './App'; // Your main React Native app
// import name from './app.json';

// // Import react-native-web and configure AppRegistry
// import * as ReactNativeWeb from 'react-native-web';

// // Register the app for both web and native platforms
// AppRegistry.registerComponent(name, () => App);

// AppRegistry.runApplication(name, {
//   initialProps: {},
//   rootTag: document.getElementById('app-root'), // The div where your app will mount
// });


import { AppRegistry } from 'react-native';
import App from './App';  // Ensure your App.js is used
import appConfig from './app.json';

const { name: appName } = appConfig;  // Destructure 'name' from the default export

AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'), // This element will be in your index.html
});