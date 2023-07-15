import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';

import { View, Text} from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';




interface PersonaProps extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

const PersonaScreen: React.FC<PersonaProps> = ({
  route,
}) => {
  const { id, nombre } = route.params;
  return (
    <View>
      <Text style={{ fontSize:50 }}>
        Esto es persona screen {id} y {nombre}
      </Text>
    </View>
   );
};

export default PersonaScreen;
