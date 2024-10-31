import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from 'src/navigation/appNavigator';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    // Hide the splash screen after the app component is mounted
    SplashScreen.hide();
  }, []);

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
