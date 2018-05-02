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

class MedioAmbienteArticulo3 extends React.Component {

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

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>
          <Image style={{ width: '100%', height: 150 }}
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/01/jardin-vertical-con-palets-recuperados-696x462.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Jardines verticales, una manera de mejorar la ciudad</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Vivir en la ciudad sin duda tiene sus beneficios, pero el cemento y asfalto crean un entorno poco natural que afecta nuestro bienestar diario. El calor y ruido excesivo, la contaminación auditiva y ambiental se podrían mejorar integrando la naturaleza en el ambiente urbano. Es por eso que podemos observar un creciente auge por los jardines verticales. ¿Qué es un Jardín Vertical? Podríamos decir que cualquier estructura vertical que haya sido cubierta por vegetación podría llamarse “jardín vertical”, por ejemplo la famosa “Enamorada del Muro” (Parthenocissus tricuspidata). En la naturaleza, existen muchas plantas que recubren árboles, plantas que crecen en acantilados, y más. Otro tipo de jardines verticales con aquellos en donde creamos una estructura para contener el sustrato (a lo que normalmente llamamos “tierra”) de una forma vertical. ¿Cuál es la diferencia? En el primer caso las raíces de la planta se encuentran en un terreno cuyo plano es plano horizontal y en el segundo caso el terreno es en plano vertical. ¿Para qué sirve? Las plantas aportan belleza a nuestro ambiente urbano y nos ayudan a ahorrar espacio. Pero también cumplen impotantes funciones ambientales, como por ejemplo ayudar con la producción de oxígeno y absorción de CO2, limpian el aire, ayudan a controlar la temperatura ambiental y ofrecen aislamiento térmico. Otra función importante es la de amortiguar los ruidos. Además las plantas son seres vivos que limpian la energía del ambiente. ¿Qué debo tener en cuenta para hacer uno? El diseño del jardín vertical debe estar adaptado a la forma, tamaño y factores ambientales del espacio disponible. También dependerá de la inversión económica que cada uno disponga para el mismo. Estructura: El objetivo de la estructura es que pueda sostener al sustrato, y que tenga la capacidad suficiente para permitir el buen desarrollo de las raíces. También es importante que tenga una protección contra la humedad para que esta no pase a las paredes. Otro aspecto importante es contemplar cuál será el peso final del jardín vertical y asegurarse que nuestro espacio pueda soportarlo. Sustrato: El sustrato es la mezcla de componentes que vamos a usar de soporte para las raíces, normalmente le llamamos “tierra” a eso con lo que rellenamos las macetas, pero la tierra es solo uno de los componentes que utilizaremos para armar un sustrato. Las claves para un sustrato vertical es que tenga una buena estructura para que con el tiempo no se comprima, debe contener muchos nutrientes, buen drenaje y ser lo más liviano posible. Plantas: Para elegir plantas debemos conocer el microclima del espacio, es decir cuantas horas de sol, qué nivel de humedad y cuánto viento tiene. También debemos tener en cuenta que las plantas que seleccionemos tengan un requerimiento de agua similar, de lo contrario algunas estarán secas mientras otras van a requerir más agua. En caso de hacer estructurar en el exterior, es recomendable el uso de plantas nativas, ya que su adaptación natural hace que requieran menor cuidado. Un buen manual es el libro “Muros y Fachadas verdes, jardines verticales” de Gernot Minke que tiene una buena selección de plantas y sus características. Riego: El tipo de riego está estrictamente relacionado al tamaño y diseño del jardín vertical. Un jardín en una fachada de una tienda va a necesitar un sistema de riego, mientras que un jardín vertical pequeño en nuestro hogar puede manejarse con riego manual. El sistema de riego consiste en tubos con perforaciones que permiten la salida del agua de manera lenta. Se pueden poner reguladores para que el goteo sea mayor o menor. Estos tubos van conectados a una canilla la cual puede ser accionada de forma manual o bien con un temporizador de riego, que es un aparato electrónico con el cual puedo regula la apertura y cierre de una válvula controlando así la frecuencia y cantidad de riego. En conclusión, podría afirmar que es fácil tener un jardín vertical. Con una pizca de ingenio y maña para la construcción lo podes hacer vos mismo, incluso con poco presupuesto reutilizan- do materiales como pallets o tachos de pintura apilados. Si te interesa profundizar el tema seguimos en Facebook o escribinos a: inscripciones@elbroteurbano.com www.elbroteurbano.com.

Por Joy Sapoznik
Fundadora y Directora en El Brote Urbano
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

export default MedioAmbienteArticulo3;