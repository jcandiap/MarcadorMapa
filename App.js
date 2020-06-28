import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const cancelar = () =>{
    setVisibility(false);
  }

  const handleSubmit = () =>{
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () =>{
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}>
        {
          visibilityFilter === 'new_punto'
          ?
          <View style={styles.form}>
            <Input title="Nombre del punto" onChangeText={handleChangeText}/>
            <Button title="Aceptar" onPress={handleSubmit}/>
            <Button title="Cancelar" onPress={cancelar}/>
          </View>
          :<List puntos={puntos} closeModal={() => setVisibility(false)}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form:{
    padding: 20,
  }
  ,container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
