import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Title, Right, Icon } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Share
} from 'react-native';

class MedioAmbiente extends React.Component {

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

  render() {
    return (

      <Container style={styles.container}>
        <Header style={styles.head}>
          <Left>
            <Button transparent></Button>
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

        <TouchableOpacity>
          <View style={styles.novedadesContainer}>
          <Icon name="md-arrow-forward" style={styles.advisor}>
            <Text> Nuevos productos de Garden Angels</Text>
          </Icon>
          </View>
        </TouchableOpacity>

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>

        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

            <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
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
    backgroundColor: '#052040'
  },
  accesos: {
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.5,
    paddingTop: 10
  }
});

export default MedioAmbiente;