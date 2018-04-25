import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Body, Title, Right, Icon, List, ListItem, Thumbnail, Fab  } from 'native-base';
import {
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity,
    Share, 
    Image
} from 'react-native';

class VidaSanaArticulo5 extends React.Component {

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
              <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('VidaSana')}
                style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Vida Sana</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share' onPress={this.onShare}
                style={styles.textoBotones}
              />
            </Button>
          </Right>
        </Header>

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>
          <Image style={{ width: '100%', height: 150 }}
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/04/bienestar-696x506.png'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Sorpresas te da la vida, Ay Dios! – Abril 2018</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          La vida nos pone a prueba constantemente. Un pasito adelante, dos atrás, ay! me tropecé, y me vuelvo a levantar con un salto. ¿O no?

Estos días a algunos nos están resultando difíciles; hoy me pongo del lado de los “días difíciles”, junto con algunos de mis amigos y seres queridos. Y cuando pienso: “pobre de mí…” La vida me da un cachetazo de campo que me hace ver a otro que vuelve mi problema pequeñito… Es que cuando sucede algo difícil, la oportunidad de aprender es enorme. Aprendemos de la generosidad de los que nos rodean, y de los egoísmos también. Aprendemos a ser valientes, y capaces. Aprendemos a esperar, aprendemos a no mirarnos el ombligo. Y por sobre todo aprendés a mirar en perspectiva, a ver al otro, a reconocer sacrificios ajenos. Aprendés a perdonar también. Y todo eso ocurre en un abrir y cerrar de ojos, dura lo que dura la contingencia, pero la sabiduría que deja debe albergarse en el alma, creo yo.

Mi mamá decía: “hay que pedir crecer por la felicidad y no por el sufrimiento, que es una de las tantas maneras de aprender”… Ojalá pudiera ser tan evolucionada, mamá.  Mientras tanto reconocer es el gran paso. Esta edición de abril cuenta con notas interesantísimas, para empezar a hacer pequeños y grandes cambios, y para aprender por la felicidad. Porque prevenir en salud, alimentarte sanamente, pensar en forma positiva, incorporar nuevos conocimientos, leer sobre experiencias de otro, te vuelve más calmo y más feliz. Los dejo adentrarse en las páginas de Convivir abril, yo sigo reflexionando…

Cecilia Andrada / Directora

          </Text>
        </Content>
        
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>

           <Button onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Icon name="home" style={{ color: '#fff', fontWeight: 'bold' }} />
              <Text style={styles.textoBotonesActive}>Inicio</Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate('Noticias')}>
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
    height: 250,
    width: '100%'
  },
  destaque: {
    height: 350,
    width: '100%'
  }
});

export default VidaSanaArticulo5;