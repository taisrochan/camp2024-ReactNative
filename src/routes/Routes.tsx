import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from '../presentational/LoginScreen';
import BMICalculation from '../presentational/BMICalculation';

export type RoutesParamList = {
  LoginScreen: undefined;
  BMICalculation: undefined;
};

const Stack = createNativeStackNavigator<RoutesParamList>();

export type RoutesNavigationProp = NativeStackNavigationProp<RoutesParamList>;

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BMICalculation" component={BMICalculation} />
    </Stack.Navigator>
  );
};

export default Routes;
