import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, Routes } from './routes';
import Sample from 'src/screens/sample';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.SAMPLE} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.SAMPLE} component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
