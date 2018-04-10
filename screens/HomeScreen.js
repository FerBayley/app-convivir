import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Tab, Tabs, TabHeading, Icon, Left, Body, Right, Card, CardItem, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity
    
} from 'react-native';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title : 'Convivir Press App',
    headerStyle: {
      backgroundColor: '#052040',
    },
    headerTintColor: '#fff'
  };

  render() {
    return (

      <Container style={styles.container}>

          
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

            <View style={styles.vistas}>
                <Text>Inside</Text>
            </View>  

             <View style={styles.vistas}>
              <Text>Alimentación</Text>
            </View>

             <View style={styles.vistas}>
              <Text>Alimentación</Text>
            </View>

            <View style={styles.vistas}>
               <Text>Nombre de la sección</Text>
            </View>
          </Col>

          <Col style={{ height: 1000, padding: 7 }}>
            <View style={styles.vistas}>
               <Text>Nombre de la sección</Text>
            </View>

            <View style={styles.vistas}>
               <Text>Nombre de la sección</Text>
            </View>

            <View style={styles.vistas}>
               <Text>Nombre de la sección</Text>
            </View>

            <View style={styles.vistas}>
               <Text>Nombre de la sección</Text>
            </View>
          </Col>
        </Grid>

        <View style={styles.separata}></View>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button>
              <Text style={styles.textoBotones}>INICIO</Text>
            </Button>
            <Button>
              <Text style={styles.textoBotones}>LANZAMIENTOS</Text>
            </Button>
            <Button>
              <Text style={styles.textoBotones}>NOVEDADES</Text>
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
    color: 'white'
  },
  advisor: {
    flex: 1,
    backgroundColor: 'red',
    height: 60
  },
  textNovedades: {
    color: '#333', 
    fontSize: 16, 
    paddingLeft: 15, 
    marginTop: 15
  },
  novedadesContainer: {
    backgroundColor: '#DDD',
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
    marginTop: 50,
    marginBottom: 50
  }
});

export default HomeScreen;