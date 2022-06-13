/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeView from './src/views/HomeView/HomeView';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
<View style={{flex: 1}} >
<ScrollView>


    <HomeView />
</ScrollView>
</View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:30
  }
})

export default App;
