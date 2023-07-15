import * as React from 'react';
import {Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';



const Pagina2Screen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 2</Text>
      <Button
        title="Ir al pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};

export default Pagina2Screen;
