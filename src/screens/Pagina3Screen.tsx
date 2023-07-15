import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {Text, View, Button} from 'react-native';
import { styles } from '../theme/appTheme';

interface Pagina3Props extends StackScreenProps<any,any>{
  id?:string
}

const Pagina3Screen: React.FC<Pagina3Props> = ({
  navigation,
}) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 3</Text>
      <Button
        title="Regresar atras"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Regresar 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Pagina3Screen;
