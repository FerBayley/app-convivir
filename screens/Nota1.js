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

class Nota1 extends React.Component {

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

    const logo = 'http://ideaswhite.com/convivir/loguito.png';
    const nota1 = 'http://www.convivirpress.com/wp-content/uploads/2018/03/snacks-marzo.jpg';
    const nota2 = 'http://www.convivirpress.com/wp-content/uploads/2018/06/300-pelicula.jpeg';
    const nota3 = 'http://www.convivirpress.com/wp-content/uploads/2018/06/migran%CC%83a.jpg';
    const nota4 = 'http://www.convivirpress.com/wp-content/uploads/2018/04/homeopatia-familia.jpg';


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
                    <Image style={{ width: '100%', height: 300 }} source={{ uri: nota1 }} />
                  </BlurView>
                  <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>Comienzan las clases: viandas y snack saludables Sin TACC</Text>
                  <View style={styles.cajaText}>
                  <Text style={styles.textSup}>Comienzan las clases. Todo es algarabía y emoción.  El uniforme, los útiles, los libros para la nueva 
                    etapa que se inicia.
                  </Text>

                  <Text style={styles.textSup}>
                    Para las mamás que tienen hij@s con intolerancia al gluten o son celíacos se agrega una preocupación: la búsqueda de soluciones 
                    para la vianda de todos los días Sin TACC.  Y más aún si pensamos en preparaciones veganas, sin lácteos ni huevos.
                  </Text>

                  <Text style={styles.textSup}>
                    Trataremos en esta nota de aportar algunas propuestas partiendo de la idea de que un niñ@ celíac@ o con intolerancia intestinal 
                    no tiene que renunciar a una dieta saludable, rica, variada y, por qué no, divertida.
                  </Text>

                  <Text style={styles.textSup}>
                    Es importante entonces encontrar recetas prácticas y fáciles de preparar, sin dejar de lado que puedan compartirse con los otros 
                    miembros de la familia.
                    Cocinar hoy Sin TACC ya no es algo que se diferencie en sabores y colores de la comida tradicional.  Varían, claro, los modos de 
                    preparación y los ingredientes.
                    Para lograr opciones que sean saludables se requiere un tiempo más de planificación, que incluye la búsqueda de recetas teniendo en 
                    cuenta el gusto l@s pequeñ@s.
                    Siempre sugerimos que las viandas tengan ingredientes ya conocidos y probados. No es el momento de innovar y sí prestar atención 
                    a que sea una comida equilibrada para evitar que el niñ@ quede con hambre.
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

export default Nota1;