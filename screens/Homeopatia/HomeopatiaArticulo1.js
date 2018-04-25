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

class HomeopatiaArticulo1 extends React.Component {

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
              <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Alimentacion')}
                style={{ color: 'white' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.textoBotones}>Matcha</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/te-696x464.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Té verde vs. Té negro: ¿qué sabés de ellos?</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Esta planta milenaria proveniente de Oriente, tuvo que recorrer varios kilómetros para llegar a 
            nuestras tazas. Originaria de China, se trasladó a otros países como Japón y con el tiempo llegó 
            a tierras Occidentales. Europa lo tomó como propio siendo hoy en día una verdadera costumbre… la 
            hora del té (five o’clock tea). Pronto el té conquistó el mundo y actualmente es luego del agua, 
            la segunda bebida más consumida.
            El té proviene de un arbusto cuyo nombre científico es Camellia Sinensis. Su sabor, intensidad y 
            nta, pero la diferencia es que el primero se obtiene de las primeras hojas, las más próximas y lo 
            más importante es que carece del proceso de fermentación y oxidación. Al no sufrir dicho 
            procedimiento tiene un alto poder antioxidante, polifenoles y flavonoides abundan en él, 
            principalmente las famosas “catequinas”. Las mismas tienen infinidades de beneficios en el 
            organismo: previenen el envejecimiento celular y cada vez hay más estudios que las relacionan 
            con la reducción de hipercolesterolemia, hipertensión, capacidad de nivelar la glucemia, evitar 
            caries y hasta como un gran aliado para prevenir la aparición de infecciones y enfermedades 
            degenerativas.
            El té verde presenta varias vitaminas y minerales siendo relevantes: Las Vitaminas A, E, C y 
            B2 y minerales como calcio, cobre, cromo, hierro, fluor, magnesio, potasio, selenio, fosforo 
            como también aminoácidos y aceites aromáticos. Por lo que no solo es agua, contiene un montón 
            de nutrientes que ayudan no solo a depurar, detoxificar y nutrir el organismo sino a contribuir a 
            un buen estado de ánimo. Contiene un componente llamado “teanina” que posee efectos relajantes y 
            colabora a la disminución de ansiedad y el estrés.
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

export default HomeopatiaArticulo1;