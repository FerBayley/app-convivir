import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import Lanzamientos from './screens/Lanzamientos'
import Noticias from './screens/Noticias'


import VidaSana from './screens/VidaSana/VidaSana'
import ProductoDestacado from './screens/ProductoDestacado'
import VidaSanaArticulo from './screens/VidaSanaArticulo'
import LanzamientoProducto from './screens/LanzamientoProducto'
import NoticiasProducto from './screens/NoticiasProducto'


//MedioAmbiente
import MedioAmbiente from './screens/MedioAmbiente/MedioAmbiente'
import MedioAmbienteArticulo1 from './screens/MedioAmbiente/MedioAmbienteArticulo1'
import MedioAmbienteArticulo2 from './screens/MedioAmbiente/MedioAmbienteArticulo2'
import MedioAmbienteArticulo3 from './screens/MedioAmbiente/MedioAmbienteArticulo3'
import MedioAmbienteArticulo4 from './screens/MedioAmbiente/MedioAmbienteArticulo4'
import MedioAmbienteArticulo5 from './screens/MedioAmbiente/MedioAmbienteArticulo5'
import MedioAmbienteArticulo6 from './screens/MedioAmbiente/MedioAmbienteArticulo6'
//MedioAmbiente


//Homeopatia
import Homeopatia from './screens/Homeopatia/Homeopatia'
import HomeopatiaArticulo1 from './screens/Homeopatia/HomeopatiaArticulo1'
import HomeopatiaArticulo2 from './screens/Homeopatia/HomeopatiaArticulo2'
import HomeopatiaArticulo3 from './screens/Homeopatia/HomeopatiaArticulo3'
import HomeopatiaArticulo4 from './screens/Homeopatia/HomeopatiaArticulo4'
import HomeopatiaArticulo5 from './screens/Homeopatia/HomeopatiaArticulo5'
import HomeopatiaArticulo6 from './screens/Homeopatia/HomeopatiaArticulo6'
//Homeopatia


//Celiaquia
import Celiaquia from './screens/Celiaquia/Celiaquia'
import CeliaquiaArticulo1 from './screens/Celiaquia/CeliaquiaArticulo1'
import CeliaquiaArticulo2 from './screens/Celiaquia/CeliaquiaArticulo2'
import CeliaquiaArticulo3 from './screens/Celiaquia/CeliaquiaArticulo3'
import CeliaquiaArticulo4 from './screens/Celiaquia/CeliaquiaArticulo4'
import CeliaquiaArticulo5 from './screens/Celiaquia/CeliaquiaArticulo5'
import CeliaquiaArticulo6 from './screens/Celiaquia/CeliaquiaArticulo6'
//Celiaquia

//Herboristeria
import Herboristeria from './screens/Herboristeria/Herboristeria'
import HerboristeriaArticulo1 from './screens/Herboristeria/HerboristeriaArticulo1'
import HerboristeriaArticulo2 from './screens/Herboristeria/HerboristeriaArticulo2'
import HerboristeriaArticulo3 from './screens/Herboristeria/HerboristeriaArticulo3'
import HerboristeriaArticulo4 from './screens/Herboristeria/HerboristeriaArticulo4'
import HerboristeriaArticulo5 from './screens/Herboristeria/HerboristeriaArticulo5'
import HerboristeriaArticulo6 from './screens/Herboristeria/HerboristeriaArticulo6'
//Herboristeria

//Alimentacion
import Alimentacion from './screens/Alimentacion/Alimentacion'
import AlimentacionArticulo from './screens/Alimentacion/AlimentacionArticulo'
import AlimentacionArticulo2 from './screens/Alimentacion/AlimentacionArticulo2'
import AlimentacionArticulo3 from './screens/Alimentacion/AlimentacionArticulo3'
import AlimentacionArticulo4 from './screens/Alimentacion/AlimentacionArticulo4'
import AlimentacionArticulo5 from './screens/Alimentacion/AlimentacionArticulo5'
import AlimentacionArticulo6 from './screens/Alimentacion/AlimentacionArticulo6'
//Alimentacion

//VidaSana
import VidaSanaArticulo1 from './screens/VidaSana/VidaSanaArticulo1'
import VidaSanaArticulo2 from './screens/VidaSana/VidaSanaArticulo2'
import VidaSanaArticulo3 from './screens/VidaSana/VidaSanaArticulo3'
import VidaSanaArticulo4 from './screens/VidaSana/VidaSanaArticulo4'
import VidaSanaArticulo5 from './screens/VidaSana/VidaSanaArticulo5'
import VidaSanaArticulo6 from './screens/VidaSana/VidaSanaArticulo6'
//VidaSana


import SinInformacion from './screens/SinInformacion'




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

//Homeopatia
  Homeopatia: { screen: Homeopatia },
  HomeopatiaArticulo1: { screen: HomeopatiaArticulo1 },
  HomeopatiaArticulo2: { screen: HomeopatiaArticulo2 },
  HomeopatiaArticulo3: { screen: HomeopatiaArticulo3 },
  HomeopatiaArticulo4: { screen: HomeopatiaArticulo4 },
  HomeopatiaArticulo5: { screen: HomeopatiaArticulo5 },
  HomeopatiaArticulo6: { screen: HomeopatiaArticulo6 },
//Homeopatia

//MedioAmbiente
  MedioAmbiente: { screen: MedioAmbiente },
  MedioAmbienteArticulo1: { screen: MedioAmbienteArticulo1 },
  MedioAmbienteArticulo2: { screen: MedioAmbienteArticulo2 },
  MedioAmbienteArticulo3: { screen: MedioAmbienteArticulo3 },
  MedioAmbienteArticulo4: { screen: MedioAmbienteArticulo4 },
  MedioAmbienteArticulo5: { screen: MedioAmbienteArticulo5 },
  MedioAmbienteArticulo6: { screen: MedioAmbienteArticulo6 },
//MedioAmbiente



  VidaSana: { screen: VidaSana },
  ProductoDestacado: { screen: ProductoDestacado },
  VidaSanaArticulo: { screen: VidaSanaArticulo },
  LanzamientoProducto: { screen: LanzamientoProducto },
  NoticiasProducto: { screen: NoticiasProducto },

//Herboristeria
  Herboristeria: { screen: Herboristeria },
  HerboristeriaArticulo1: { screen: HerboristeriaArticulo1 },
  HerboristeriaArticulo2: { screen: HerboristeriaArticulo2 },
  HerboristeriaArticulo3: { screen: HerboristeriaArticulo3 },
  HerboristeriaArticulo4: { screen: HerboristeriaArticulo4 },
  HerboristeriaArticulo5: { screen: HerboristeriaArticulo5 },
  HerboristeriaArticulo6: { screen: HerboristeriaArticulo6 },
//Herboristeria
  

//Celiaquia
  Celiaquia: { screen: Celiaquia },
  CeliaquiaArticulo1: { screen: CeliaquiaArticulo1 },
  CeliaquiaArticulo2: { screen: CeliaquiaArticulo2 },
  CeliaquiaArticulo3: { screen: CeliaquiaArticulo3 },
  CeliaquiaArticulo4: { screen: CeliaquiaArticulo4 },
  CeliaquiaArticulo5: { screen: CeliaquiaArticulo5 },
  CeliaquiaArticulo6: { screen: CeliaquiaArticulo6 },
//Celiaquia


//Alimentacion
  Alimentacion: { screen: Alimentacion },
  AlimentacionArticulo: { screen: AlimentacionArticulo },
  AlimentacionArticulo2: { screen: AlimentacionArticulo2 },
  AlimentacionArticulo3: { screen: AlimentacionArticulo3 },
  AlimentacionArticulo4: { screen: AlimentacionArticulo4 },
  AlimentacionArticulo5: { screen: AlimentacionArticulo5 },
  AlimentacionArticulo6: { screen: AlimentacionArticulo6 },
//Alimentacion


//VidaSana
  VidaSanaArticulo1: { screen: VidaSanaArticulo1 },
  VidaSanaArticulo2: { screen: VidaSanaArticulo2 },
  VidaSanaArticulo3: { screen: VidaSanaArticulo3 },
  VidaSanaArticulo4: { screen: VidaSanaArticulo4 },
  VidaSanaArticulo5: { screen: VidaSanaArticulo5 },
  VidaSanaArticulo6: { screen: VidaSanaArticulo6 },
//VidaSana


  SinInformacion: { screen: SinInformacion },


})