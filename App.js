import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorSignUp from './assets/Components/DoctorSignUp';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorInfo from './assets/Components/DoctorInfo';
const App=()=>{
  const Stack = createStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='DoctorSignUp'>
    <Stack.Screen name="DoctorSignUp" component={DoctorSignUp} />
    <Stack.Screen name="DoctorInfo" component={DoctorInfo} />
</Stack.Navigator>
    </NavigationContainer>
  );

}
export default App;