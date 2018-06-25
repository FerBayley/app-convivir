import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Tab, Tabs, TabHeading, Icon, Left, Body, Right, Card, CardItem, Thumbnail, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font } from 'expo';
import {
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    Share
    
} from 'react-native';
import ListSecciones from '../screens/ListSecciones';

class Secciones extends React.Component {

  state = {
    isFontLoaded: false
  }

  static navigationOptions = {
    title: 'Secciones',
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


  render() {
    const { isFontLoaded } = this.state;
    return (
      <Container style={styles.container}>
        <Content showsVerticalScrollIndicator={false}>
          <StatusBar
              barStyle="light-content"
          />

          <ListSecciones />

        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="md-paper" style={{ color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Noticias</Text>
            </Button>

            <Button>
              <Icon name="md-albums" style={{ color: 'orange' }} />
              <Text style={{ color: 'orange' }}>Secciones</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Favoritos')}>
              <Icon name="md-star" style={{ color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Favoritos</Text>
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
    backgroundColor: '#c2c2c2'
  },
  footer: {
    backgroundColor: '#000'
  },
  textoBotones: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10
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
    backgroundColor: '#000'
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
  }
});

export default Secciones;