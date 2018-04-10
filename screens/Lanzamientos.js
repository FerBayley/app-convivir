import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

class Lanzamientos extends React.Component {

  static navigationOptions = {
    title : 'Lanzamientos',
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
            <Button>
              <Text style={styles.textoBotones}>TAB 1</Text>
            </Button>
            <Button>
              <Text style={styles.textoBotones}>TAB 2</Text>
            </Button>
            <Button>
              <Text style={styles.textoBotones}>TAB 3</Text>
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

export default Lanzamientos;