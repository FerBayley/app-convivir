import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

class Medicina extends React.Component {

  static navigationOptions = {
    title : 'Medicina',
    headerStyle: {
      backgroundColor: '#052040',
    },
    headerTintColor: '#fff'
  };


  render() {
    return (

      <Container style={styles.container}>
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

            <Button onPress={() => this.props.navigation.navigate('Noticias')}>
              <Icon name="send" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotones}>Lanzamientos</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Lanzamientos')}>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#052040'
  },
  textoBotones: {
    color: 'white'
  }
});

export default Medicina;