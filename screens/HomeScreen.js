import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Tab, Tabs, TabHeading, Icon, Left, Body, Right, Card, CardItem, Thumbnail, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
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

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };   

  onShare(){
    Share.share({
        title: 'Mi Pediatra Trivias',
        uri:'https://www.mipediatra.com.ar',
        message: 'Descargate la app Mi Pediatra Trivias. Jugá y participá por muchos premios. Descargala en https://www.mipediatra.com.ar'
    });
}

  render() {
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
            <Text style={styles.textNovedades}>Mira los nuevos productos de Garden Angels</Text>
          </View>
        </TouchableOpacity>

        <Content showsVerticalScrollIndicator={false}>
          <StatusBar
              barStyle="light-content"
          />


        <Grid>
          <Col style={{ height: 1000, padding: 7 }}>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text>Alimentación</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>
          </Col>

          <Col style={{ height: 1000, padding: 7 }}>
            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/salud.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/convivir1.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image 
                style={styles.vistas}
                source={require('../assets/images/alimenta1.png')} />
              <Text>Nombre</Text>
            </TouchableOpacity>
          </Col>
        </Grid>

        <View style={styles.separata}></View>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button>
              <Icon name="home" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Inicio</Text>
            </Button>
            <Button>
              <Icon name="send" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Lanzamientos</Text>
            </Button>
            <Button>
              <Icon name="paper" style={{ color: '#fff' }} />
              <Text style={styles.textoBotones}>Novedades</Text>
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
  advisor: {
    flex: 1,
    backgroundColor: 'red',
    height: 60
  },
  textNovedades: {
    color: '#333', 
    fontSize: 16, 
    textAlign: 'center',
    marginTop: 15
  },
  novedadesContainer: {
    backgroundColor: '#00cec9',
    height: 50
  },
  vistas: {
    backgroundColor: 'grey',
    height: 250,
    width: '100%',
    borderRadius: 10,
    marginTop: 20
  },
  separata: {
    marginTop: 100,
    marginBottom: 100
  },
  head: {
    backgroundColor: '#052040'
  }
});

export default HomeScreen;