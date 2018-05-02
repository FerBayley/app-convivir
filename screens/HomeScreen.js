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
    ImageBackground,
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

  componentDidMount() {
    Font.loadAsync({
      'DoHyeon': require('../assets/fonts/DoHyeon-Regular.ttf')
    }).then(() => {
      this.setState({
        isFontLoaded: true,
      });
    })
  }


  render() {
    const { isFontLoaded } = this.state;
    return (
      <Container style={styles.container}>
        <Header style={styles.head}>        
          <Body>
            <View>
              <Image style={{ width: 40, height: 40, marginTop: 15 }}
                 source={require('../assets/images/loguito.png')} />
            </View>
            <Title style={styles.textoBotones}>Convivir Press</Title>
          </Body>          
        </Header>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductoDestacado')}>
          <View style={styles.novedadesContainer}>
          <Icon name="md-arrow-forward" style={styles.advisor}>
            <Text> Leche de almendras Tratenfu</Text>
          </Icon>
          </View>
        </TouchableOpacity>

        <Content showsVerticalScrollIndicator={false}>
          <StatusBar
              barStyle="light-content"
          />


        <Grid>
          <Col style={{ height: 700, padding: 7 }}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Alimentacion')}>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
                <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                  Alimentación
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Homeopatia')}>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/homeopatia.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Homeopatia
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('SinInformacion')}>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/celiacos.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Celiaquia
              </Text>
            </TouchableOpacity>
          </Col>

          <Col style={{ height: 700, padding: 7 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('VidaSana')}>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/salud.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Vida Sana
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbiente')}>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/medioambiente.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Medio Ambiente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('SinInformacion')}>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/herboristeria-thumb.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Herboristeria
              </Text>
            </TouchableOpacity>
          </Col>
        </Grid>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button onPress={() => this.props.navigation.navigate('Noticias')}>
              <Icon name="paper" style={{ color: '#fff' }} />
              <Text style={styles.textoBotones}>Noticias</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Lanzamientos')}>
              <Icon name="send" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Lanzamientos</Text>
            </Button>

            <Button onPress={this.onShare}>
              <Icon name="share" style={{ color: '#fff' }} />
              <Text style={styles.textoBotones}>Compartir</Text>
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
    backgroundColor: '#000',
    height: 80
  },
  textoBotones: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  textoBotonesActive: {
    color: 'skyblue',
    fontWeight: 'bold'
  },
  advisor: {
    flex: 1,
    fontSize: 17, 
    textAlign: 'center', 
    marginTop: 17
  },
  textNovedades: {
    color: '#333', 
    fontSize: 15, 
    textAlign: 'center',
    padding: 15,
  },
  novedadesContainer: {
    backgroundColor: '#00cec9',
    height: 50
  },
  vistas: {
    height: 170,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },
  head: {
    backgroundColor: '#000',
    height: 'auto'
  },
  accesos: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 10
  }
});

export default HomeScreen;