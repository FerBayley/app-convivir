import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Title, Right, Icon, List, ListItem, Thumbnail  } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Share, 
    Image
} from 'react-native';

class MedioAmbiente extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: true,
  };  

  onShare(){
    Share.share({
        title: 'ConvivirPress App',
        uri:'http://convivirpress.com/',
        message: 'Descargate la app del periodico Convivir y esta siempre informado sobre todo lo que pasa en el mundo del buen vivir. Descargala en https://www.convivirpress.com'
    });
}

  render() {
    return (

      <Container style={styles.container}>
        <Header style={styles.head}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('HomeScreen')}
                style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Medio Ambiente</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share' onPress={this.onShare}
                style={styles.textoBotones}
              />
            </Button>
          </Right>
        </Header>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductoDestacado')}>
          <View style={styles.novedadesContainer}>
          <Icon name="md-arrow-forward" style={styles.advisor}>
            <Text> Leche de almendras Trtenfu</Text>
          </Icon>
          </View>
        </TouchableOpacity>

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>
          <Image style={styles.vidriera}          
            source={require('../../assets/images/medioambiente-big.png')} 
          />

          <List>
            <View style={{ backgroundColor: '#333' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/basura-cero-marzo-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbienteArticulo1')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#fff' }}>¿Cómo vivir de forma ecológica y no morir en el intento?</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>

            <View style={{ backgroundColor: '#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/oxigeno-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbienteArticulo2')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Inhalamos…¿oxígeno?</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/jardin-vertical-con-palets-recuperados-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbienteArticulo3')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Jardines verticales, una manera de mejorar la ciudad</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

           <View style={{ backgroundColor: '#dfe6e9' }}>
            <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/41227687_303-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbienteArticulo4')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>La acidificación de los océanos: consecuencia directa del cambio climático</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
           </View>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/11/vacas-pedos-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbienteArticulo5')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>¿Pueden las vacas con menos flatulencias ayudar al planeta?</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <View style={{ backgroundColor: '#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/09/huerto-urbano-4-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MedioAmbienteArticulo6')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Huerta urbana primaveral: Cultivo de plantas medicinales</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>

          </List>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

             <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="home" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotonesActive}>Inicio</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Noticias')}>
              <Icon name="paper" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Noticias</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Lanzamientos')}>
              <Icon name="send" style={{ color: '#fff' }} />
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
    color: 'white',
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
  },
  vidriera: {
    height: 100,
    width: '100%'
  }
});

export default MedioAmbiente;