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

class Homeopatia extends React.Component {

  static navigationOptions = {
    header: null,
    headerLeft: null,
    gesturesEnabled: true,
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
            <Button transparent>
              <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('HomeScreen')}
                style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Homeopatia</Title>
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
          <Image style={styles.vidriera}          
            source={require('../../assets/images/homeopatia-big.png')} 
          />

          <List>
            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/homeopatia-porque-no-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeopatiaArticulo')}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/11/homeopatia-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/06/homeopatia-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/homeopatia-porque-no-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/11/homeopatia-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2017/06/homeopatia-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/slider-cantera-1500x630-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>

            <ListItem>
                <Thumbnail square size={90} source={{ uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/el-cuerpo-grita-150x150.jpg' }}
                  style={{ marginRight: 20 }}
                />
                <Body>
                  <TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Titulo de este articulo</Text>
                    <Text>200cc de leche de almendras 1 banana chica 1 cdita.</Text>
                  </TouchableOpacity>
                </Body>
            </ListItem>
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
  },
  vidriera: {
    height: 250,
    width: '100%'
  }
});

export default Homeopatia;