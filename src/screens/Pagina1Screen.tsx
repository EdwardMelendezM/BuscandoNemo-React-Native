import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Pagina1Props extends StackScreenProps<any,any>{
  id?:string;
  nombre?:string;
}

const Pagina1Screen: React.FC<Pagina1Props> = ({
  navigation,
}) => {


  return (
    <View style={styles.globalMargin} >
      <Text>Pagina uno gaaaaaaaaaaa</Text>
      <Button
        title="Ir al pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <TouchableOpacity onPress={()=>navigation.navigate('PersonaScreen',{
        id:1,
        nombre:'Pedro',
      })}>
        <Text> Ir a persona</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagina1Screen;
