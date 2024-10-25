import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation/appNavigator';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
