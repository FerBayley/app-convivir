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

class HomeScreen extends React.Component {

  state = {
    isFontLoaded: false
  }

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
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
    const nota1 = 'http://www.convivirpress.com/wp-content/uploads/2018/03/snacks-marzo.jpg';
    const nota2 = 'http://www.convivirpress.com/wp-content/uploads/2018/06/300-pelicula.jpeg';
    const nota3 = 'http://www.convivirpress.com/wp-content/uploads/2018/06/migran%CC%83a.jpg';
    const nota4 = 'http://www.convivirpress.com/wp-content/uploads/2018/04/homeopatia-familia.jpg';


    const { isFontLoaded } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={styles.head}>        
          <Body>
            <View>
              <BlurView tint="dark" intensity={50}>
                <Image style={{ width: 40, height: 40, marginTop: 25 }} source={{ uri: logo }} />
              </BlurView>
            </View>
            <Title style={styles.textoBotones}>ConvivirPress</Title>
          </Body>          
        </Header>

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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Nota1')}>
                  <BlurView tint="light" intensity={50}>
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota1 }} />
                  </BlurView>
                  <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>Comienzan las clases: viandas y snack saludables Sin TACC</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>Comienzan las clases. Todo es algarabía y emoción.  El uniforme, los útiles, los libros para la nueva 
                    etapa que se inicia.
                  </Text>
                  </View>
                  <View style={styles.bordeFinal}></View>
            </TouchableOpacity>   
            <Text style={styles.textoVermas}><Icon name="ios-share-outline" style={{ color: '#000' }} />    <Icon name="ios-star-outline" style={{ color: '#000' }} /></Text>
            </View>

            <View style={styles.secContainerCard}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Nota2')}>
                  <BlurView tint="light" intensity={50}>
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota2 }} />
                  </BlurView>
                  <Text style={[styles.titulosSec, isFontLoaded && { fontFamily: 'DoHyeon' }]}>El cuerpo espartano</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>Seres humanos… Seres marcados por gestos, sensaciones, gustos, aromas, vivencias físicas que sellan 
                    su cotidianeidad, que posibilitan cambiar ambientes, realizar intercambios..</Text>
                  </View>
                  <View style={styles.bordeFinal}></View>
            </TouchableOpacity>    
            <Text style={styles.textoVermas}><Icon name="ios-share-outline" style={{ color: '#000' }} />    <Icon name="ios-star-outline" style={{ color: '#000' }} /></Text>
            </View>

            <View style={styles.secContainerCard}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Nota3')}>
                  <BlurView tint="light" intensity={50}>
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota3 }} />
                  </BlurView>
                  <Text style={[styles.titulosSec, isFontLoaded && { fontFamily: 'DoHyeon' }]}>Las MIGRAÑAS son un dolor de cabeza!!</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>La migraña común se caracteriza por la aparición violenta de dolores intensos en un lado de la 
                    cabeza, a menudo acompañados de náuseas y vómitos, que pueden durar algunas horas a varios días. Puede presentarse precedida 
                    de trastornos visuales.
                  </Text>
                  </View>
                  <View style={styles.bordeFinal}></View>
            </TouchableOpacity>  
            <Text style={styles.textoVermas}><Icon name="ios-share-outline" style={{ color: '#000' }} />    <Icon name="ios-star-outline" style={{ color: '#000' }} /></Text>
            </View>  

          <View style={styles.secContainerCard} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Nota4')}>
                  <BlurView tint="light" intensity={50}>
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota4 }} />
                  </BlurView>
                  <Text style={[styles.titulosSec, isFontLoaded && { fontFamily: 'DoHyeon' }]}>Homeopatía para todos</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>Un pediatra homeópata amigo me contaba que cada día tiene más pacientes adultos. Son los padres, tíos, 
                  abuelos de los nenes tratados con homeopatía.</Text>
                  </View>
                  <View style={styles.bordeFinal}></View>
            </TouchableOpacity>       
            <Text style={styles.textoVermas}><Icon name="ios-share-outline" style={{ color: '#000' }} />    <Icon name="ios-star-outline" style={{ color: '#000' }} /></Text>
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
    fontSize: 50,
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

export default HomeScreen;