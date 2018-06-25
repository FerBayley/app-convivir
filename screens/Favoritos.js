import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Tab, Tabs, TabHeading, Icon, Left, Body, Right, Card, CardItem, Thumbnail, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';
import { Constants } from 'expo';
import Expo from 'expo';
import { BlurView } from 'expo';
import {
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    Share
    
} from 'react-native';

class Favoritos extends React.Component {

  state = {
    isFontLoaded: false
  }

  static navigationOptions = {
    title: 'Favoritos',
    headerBackTitle: 'Volver',
    headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff'
  };

  onShare(){
    Share.share({
        title: 'ConvivirPress App',
        uri:'http://convivirpress.com/',
        message: 'Descargate la app del periodico Convivir y esta siempre informado sobre todo lo que pasa en el mundo del buen vivir. Descargala en https://www.convivirpress.com'
    });
}

  //componentDidMount() {
  //  Font.loadAsync({
  //    'DoHyeon': require('../assets/fonts/DoHyeon-Regular.ttf')
  //  }).then(() => {
  //    this.setState({
  //      isFontLoaded: true,
  //    });
  //  })
  //}


  render() {

    const logo = 'http://ideaswhite.com/convivir/loguito.png';


    const { isFontLoaded } = this.state;
    return (
      <Container style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductoDestacado')}>
          <View style={styles.novedadesContainer}>
          <Icon name="md-arrow-forward" style={styles.advisor}>
            <Text style={{ fontSize: 20, color: '#fff' }}> Leche de almendras Tratenfu</Text>
          </Icon>
          </View>
        </TouchableOpacity>

        <Content showsVerticalScrollIndicator={false}>
          <StatusBar
              barStyle="light-content"
          />

          <View style={styles.contingencia}>
            <Text style={styles.textContingencia}>Estamos trabajando en esta sección para que puedas guardar tus articulos favoritos</Text>
          </View>
     

        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="md-paper" style={{ color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Noticias</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Secciones')}>
              <Icon name="md-albums" style={{ color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Secciones</Text>
            </Button>

            <Button>
              <Icon name="md-star" style={{ color: 'orange' }} />
              <Text style={{ color: 'orange' }}>Favoritos</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff'
  },
  footer: {
    backgroundColor: '#000'
  },
  textoBotones: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10
  },
  textoBotonesActive: {
    color: 'skyblue',
    fontWeight: 'bold'
  },
  advisor: {
    color: '#fff',
    flex: 1,
    fontSize: 15,
    marginLeft: 15,
    marginTop: 17
  },
  textNovedades: {
    color: '#333', 
    fontSize: 15, 
    textAlign: 'center',
    padding: 15,
  },
  novedadesContainer: {
    backgroundColor: 'red',
    height: 55
  },
  vistas: {
    height: 250,
    width: '100%'
  },
  head: {
    backgroundColor: '#000',
    height: 'auto'
  },
  accesos: {
    fontSize: 55,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 25,
    paddingBottom: 20
  },
  borde: {
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  cajaText: {
    marginLeft: 10,
    marginRight: 5
  },
  textSup: {
    fontSize: 17,
    lineHeight: 24
  },
  firstContainerCard: {
    backgroundColor: 'white',
    paddingBottom: 20,
    shadowOffset:{  width: 4,  height: 4,  },
    shadowColor: 'grey',
    shadowOpacity: 1.5,
    marginBottom: 20,
    zIndex: 100
  },
  secContainerCard: {
    backgroundColor: 'white',
    paddingBottom: 20,
    shadowOffset:{  width: 4,  height: 4,  },
    shadowColor: 'grey',
    shadowOpacity: 1.5,
    marginTop: 20,
    marginBottom: 20,
  },
  bordeFinal: {
    height: 1,
    marginTop: 15,
    backgroundColor: 'grey'
  },
  textoVermas: {
    marginTop: 15,
    marginRight: 15,
    textAlign: 'right'
  },
  titulosSec: {
    fontSize: 35,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 10,
    paddingTop: 25,
    paddingBottom: 20
  },
  contingencia: {
    marginTop: 200
  },
  textContingencia: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30
  }
});

export default Favoritos;