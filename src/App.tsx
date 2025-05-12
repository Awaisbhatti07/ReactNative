import React from 'react';
import {
  View, // The View component is used to create a container for the text, and the Text component is used to display the "Hello, World!" message.
  Text,
  SafeAreaView, // The app uses the SafeAreaView component to ensure that the content is displayed within the safe area boundaries of a device.
} from 'react-native';

/*
JSX (JavaScript XML) is a syntax extension for JavaScript commonly used in React to describe what the UI should look like.
It allows you to write HTML-like code within JavaScript, making the code more readable and declarative.
React components are typically written in JSX to define what the component's UI should render.
*/

function App() {
  // The function now returns JSX that renders the SafeAreaView component with some text inside it
  return (
    <SafeAreaView>
      <View>
        <Text>Hello, World!</Text>
        <Text>Hello, World!</Text>
        <Text>Hello, World!</Text>
        <Text>Hello, World!</Text>
      </View>
    </SafeAreaView>
  );
}

// This is a simple React Native app that displays "Hello, World!" on the screen.

export default App;
// The app is exported as the default export of the module, allowing it to be used in other parts of the application.
