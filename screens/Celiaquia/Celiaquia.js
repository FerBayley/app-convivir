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

class Celiaquia extends React.Component {

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
            <Title style={styles.textoBotones}>Celiaquia</Title>
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
          source={require('../../assets/images/celiaquia.jpg')} 
        />


          <List>
            <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/04/leche-de-almendras-tratenfu-larga-vida-D_NQ_NP_706011-MLA27085540255_032018-F-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CeliaquiaArticulo1')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Lanzamiento: TRATENFU</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>

            <View>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/Captura-de-pantalla-2018-03-14-a-las-12.06.09-150x150.png' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CeliaquiaArticulo2')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>“Los clientes necesitan que sepas y seas generoso con la información”</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/sin-tazz-marzo-1-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('CeliaquiaArticulo3')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Talleres de capacitación en cocina libre de gluten en el Normal N°6</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <View style={{ backgroundColor: '#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/09/adiccion-alimentaria-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CeliaquiaArticulo4')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Adicción alimentaria</Text>
                    </TouchableOpacity>
                  </Body>
              </ListItem>
            </View>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/09/viamonte-foto-oscar-y-escalera-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('CeliaquiaArticulo5')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dietetica Viamonte, 50 años – Algo que se llama vocación…</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <View style={{ backgroundColor:'#dfe6e9' }}>
              <ListItem>
                  <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/08/new-garden-150x150.jpg' }}
                    style={{ marginRight: 20 }}
                  />
                  <Body>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CeliaquiaArticulo6')}>
                      <Text style={{ fontSize: 13, fontWeight: 'bold' }}>New Garden, capacitar es la clave</Text>
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

export default Celiaquia;