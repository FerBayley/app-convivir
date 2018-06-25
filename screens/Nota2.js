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

class Nota2 extends React.Component {

  state = {
    isFontLoaded: false
  }

  static navigationOptions = {
    title: 'ConvivirPress',
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
    const nota2 = 'http://www.convivirpress.com/wp-content/uploads/2018/06/300-pelicula.jpeg';

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

            <View style={styles.firstContainerCard}>
                <BlurView tint="light" intensity={50}>
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota2 }} />
                  </BlurView>
                  <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>El cuerpo espartano</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>Seres humanos… Seres marcados por gestos, sensaciones, gustos, aromas, vivencias físicas que sellan 
                    su cotidianeidad, que posibilitan cambiar ambientes, realizar intercambios con el medio, fabricar cosas, imponer formas diferentes 
                    de experimentar lo sensible, de utilizarlo y construir cultura, la cual impondrá el modo de andar, de jugar, de dar a luz, de 
                    dormir o de comer.
                  </Text>

                  <Text style={styles.textSup}>
                    Y también, es esa cultura la que nos marca, nos impone, nos seduce a reproducir, a demostrar un modo de ser cuerpo, de ser 
                    físico.
                  </Text>

                  <Text style={styles.textSup}>
                    Y esto no es un tema actual. Somos resabios de años de manejos y de directrices sobe cómo ser perfect@s. Actualmente se observa 
                    un gran desarrollo que tiene su objetivo en la búsqueda de la perfección corporal, a la aproximación de una serie de ideales 
                    culturales que se constituyeron del cuerpo perfecto y que, supuestamente, garantiza el acceso al mercado laboral y a una 
                    valoración alta en relación a su belleza y sus posibilidades de acceso a la vivencia de la sexualidad.
                  </Text>

                  <Text style={styles.textSup}>
                    Pero, ¿viste la película 300? Más allá de la síntesis argumental de ella que escapa al interés de este análisis, te invito a 
                    que recuerdes, o busques una imagen para observar los cuerpos de las personas en aquella película ¿sabés a quiénes representan? 
                    A los espartanos. Y aquí, vamos a hablar un poco de historia.
                  </Text>
                  </View>
            </View>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button>
              <Icon name="md-paper" style={{ color: 'orange' }} />
              <Text style={{ color: 'orange' }}>Noticias</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Secciones')}>
              <Icon name="md-albums" style={{ color: '#fff' }} />
              <Text style={{ color: '#fff' }}>Secciones</Text>
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
    fontSize: 40,
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
    shadowColor: '#C2C2C2',
    shadowOpacity: 1.5,
    marginBottom: 20,
    zIndex: 100
  },
  secContainerCard: {
    backgroundColor: 'white',
    paddingBottom: 20
  },
  bordeFinal: {
    height: 1,
    marginTop: 15,
    backgroundColor: '#c2c2c2'
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

export default Nota2;