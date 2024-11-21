import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from 'src/navigation/appNavigator';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { I18nextProvider } from 'react-i18next';
import i18n from './integrations/localization/i18n';

const App = () => {
  useEffect(() => {
    // Hide the splash screen after the app component is mounted
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <I18nextProvider i18n={i18n}>
        <AppNavigator />
      </I18nextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
