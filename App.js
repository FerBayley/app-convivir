import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import Lanzamientos from './screens/Lanzamientos'
import Noticias from './screens/Noticias'

import Ecologia from './screens/Ecologia/Ecologia'
import Homeopatia from './screens/Homeopatia/Homeopatia'
import Medicina from './screens/Medicina/Medicina'
import MedioAmbiente from './screens/MedioAmbiente/MedioAmbiente'
import VidaSana from './screens/VidaSana/VidaSana'
import Alimentacion from './screens/Alimentacion/Alimentacion'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  Noticias: { screen: Noticias },
  Lanzamientos: { screen: Lanzamientos },
  Ecologia: { screen: Ecologia },
  Homeopatia: { screen: Homeopatia },
  Medicina: { screen: Medicina },
  MedioAmbiente: { screen: MedioAmbiente },
  VidaSana: { screen: VidaSana },
  Alimentacion: { screen: Alimentacion },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
