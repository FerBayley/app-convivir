import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Tab, Tabs, TabHeading, Icon, Left, Body, Right, Card, CardItem, Thumbnail, Title, List, ListItem } from 'native-base';
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
    Share,
    Alert
    
} from 'react-native';

class Noticias extends React.Component {

  state = {
    isFontLoaded: false
  }

  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }
  }

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: false,
  };   

  onShare(){
    Share.share({
        title: 'ConvivirPress App',
        uuri:'http://convivirpress.com/',
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
            <Title style={styles.textoBotones}>Noticias</Title>
          </Body>          
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <StatusBar
              barStyle="light-content"
          />

          <List>
            <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/villares-marzo-324x235.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/ensalada-armenti--324x235.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/santa-hildegarda-marzo-218x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/corazoon-armenti-218x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/mijo-218x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/enfermedades-marzo-218x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/homeopatia-marzo-324x235.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/snacks-marzo-324x160.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/pseudocereales-marzo-324x160.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/newborn-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/champin%CC%83ones_rellenos_destacada-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NoticiasProducto')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                      <Text>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
          </List>

        <View style={styles.separata}></View>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="home" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotonesActive}>Inicio</Text>
            </Button>

            <Button>
              <Icon name="paper" style={{ color: '#fff' }} />
              <Text style={styles.textoBotones}>Noticias</Text>
            </Button>


            <Button onPress={() => this.props.navigation.navigate('Lanzamientos')}>
              <Icon name="send" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Lanzamientos</Text>
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
    backgroundColor: '#000000'
  },
  accesos: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 10
  }
});

export default Noticias;