import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Title, Right, Icon, List, ListItem, Thumbnail } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Share,
    Image
} from 'react-native';

class Alimentacion extends React.Component {

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
            <Title style={styles.textoBotones}>Alimentación</Title>
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
            <Text> Leche de almendras Tratenfu</Text>
          </Icon>
          </View>
        </TouchableOpacity>

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>

        <Image style={styles.vidriera}          
          source={require('../../assets/images/alimentacion-big.png')} 
        />


          <List>
            <View style={{ backgroundColor: '#333' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/te-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AlimentacionArticulo')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#fff' }}>Té verde vs. Té negro: ¿qué sabés de ellos?</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>


            <View style={{ backgroundColor: '#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/teff-2000x1180-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AlimentacionArticulo2')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Teff, el exótico grano Etíope gluten free</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>


            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/macrobio-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('AlimentacionArticulo3')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Macrobiótica: comer según las leyes de la naturaleza</Text>
                    <Text></Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <View style={{ backgroundColor: '#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/microbioma-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AlimentacionArticulo4')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Sembrando un intestino saludable: Microbioma</Text>
                      <Text></Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/despues-de-las-fiestas-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('AlimentacionArticulo5')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Alimentación después de navidad</Text>
                    <Text></Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <View style={{ backgroundColor:'#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/champin%CC%83ones_rellenos_destacada-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AlimentacionArticulo6')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Champiñones rellenos con ensaladita de rúcula, nueces y duraznos</Text>
                      <Text></Text>
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
    backgroundColor: '#000'
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
  },
  note: {
    padding: 10, 
    fontSize: 13
  }
});

export default Alimentacion;