import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft, togglePointsFilter}) => {
    return (
      <View style={styles.panel}>
          <Button onPress={onPressLeft} title={textLeft} style={styles.botonList}/>
          <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} style={styles.botonMost}/>
      </View>
    )
}

const styles = StyleSheet.create({
    botonList:{
        backgroundColor: '#000'
    },
    botonMost:
    {
        backgroundColor: '#000'
    },
    panel:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});