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

class Nota3 extends React.Component {

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
    const nota3 = 'http://www.convivirpress.com/wp-content/uploads/2018/06/migran%CC%83a.jpg';

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
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota3 }} />
                  </BlurView>
                  <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>Las MIGRAÑAS son un dolor de cabeza!!</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>La migraña común se caracteriza por la aparición violenta de dolores intensos en un lado de la 
                  cabeza, a menudo acompañados de náuseas y vómitos, que pueden durar algunas horas a varios días. Puede presentarse precedida de 
                  trastornos visuales.
                  </Text>

                  <Text style={styles.textSup}>
                  Es muy común en la persona migrañosa el sentimiento de no estar haciendo lo que realmente desea, son personas muy influenciables 
                  que no quieren decepcionar a nadie y siguen con un trabajo, una carrera o una pareja que los agobia. No pueden concederse el 
                  derecho de ser quienes quieren ser y mucho menos a cuestionar a aquellos que tienen mucha influencia sobre ellos. La migraña 
                  muestra que la persona no puede ver o digerir lo que le sucede, hay mucha frustración.
                  </Text>

                  <Text style={styles.textSup}>
                  Al ser los dolores tan intensos que hasta la luz y cualquier sonido es intolerable, la cabeza “se apaga” por unas horas o unos 
                  días, así puede estar consigo misma y esta es una oportunidad de darse amor.
                  </Text>

                  <Text style={styles.textSup}>
                  Para aliviar los dolores existen dentro de la fitoterapia varios antiinflamatorios:
                  Extracto seco de Boswellia serrata, es una planta de la India, muy usada en medicina ayurveda con una gran capacidad 
                  antiinflamatoria.
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
  },
  secContainerCard: {
    backgroundColor: 'white',
    paddingBottom: 20,
    shadowOffset:{  width: 4,  height: 4,  },
    shadowColor: '#C2C2C2',
    shadowOpacity: 1.5,
    marginBottom: 20,
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

export default Nota3;