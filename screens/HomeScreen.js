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
        uri:'https://www.convivirpress.com',
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
          <Left>
            <Button transparent></Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Convivir App</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share' onPress={this.onShare}
                style={styles.textoBotones}
              />
            </Button>
          </Right>
        </Header>

          
        <TouchableOpacity>
          <View style={styles.novedadesContainer}>
          <Icon name="md-arrow-forward" style={styles.advisor}>
            <Text> Nuevos productos de Garden Angels</Text>
          </Icon>
          </View>
        </TouchableOpacity>

        <Content showsVerticalScrollIndicator={false}>
          <StatusBar
              barStyle="light-content"
          />


        <Grid>
          <Col style={{ height: 1000, padding: 7 }}>

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
                source={require('../assets/images/alimenta1.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Homeopatia
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Nombre Sección
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Nombre Sección
              </Text>
            </TouchableOpacity>
          </Col>

          <Col style={{ height: 1000, padding: 7 }}>
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
                source={require('../assets/images/convivir1.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Medio Ambiente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Nombre Sección
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text style={[styles.accesos, isFontLoaded && { fontFamily: 'DoHyeon' }]}>
                Nombre Sección
              </Text>
            </TouchableOpacity>
          </Col>
        </Grid>

        <View style={styles.separata}></View>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button>
              <Icon name="home" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotonesActive}>Inicio</Text>
            </Button>

            <Button>
              <Icon name="send" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Lanzamientos</Text>
            </Button>

            <Button>
              <Icon name="paper" style={{ color: '#fff' }} />
              <Text style={styles.textoBotones}>Noticias</Text>
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
    backgroundColor: '#052040'
  },
  textoBotones: {
    color: 'white',
    fontWeight: 'bold'
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
    height: 250,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },
  separata: {
    marginTop: 130,
    marginBottom: 130
  },
  head: {
    backgroundColor: '#052040'
  },
  accesos: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 10
  }
});

export default HomeScreen;