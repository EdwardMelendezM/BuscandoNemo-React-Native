import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';


export type RootStackParams = {
  Pagina1Screen: undefined
  Pagina2Screen: undefined
  Pagina3Screen: undefined
  PersonaScreen: { id:number, nombre:string }
}


const Stack = createStackNavigator <RootStackParams>();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor:'white',
        },
        headerStyle:{
          elevation:0,
        },
      }}
    >
      <Stack.Screen
        name="Pagina1Screen"
        component={Pagina1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pagina2Screen"
        component={Pagina2Screen}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name="Pagina3Screen"
        component={Pagina3Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonaScreen"
        component={PersonaScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
