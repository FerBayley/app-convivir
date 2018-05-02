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

        <StatusBar
            barStyle="light-content"
        />
        <Content showsVerticalScrollIndicator={false}>
          <Image style={{ width: '100%', height: 150 }}
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/11/perro-pirotecnia-696x260.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Mi perro tiene terror a las tormentas y petardos</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          –Hola doctor. Quiero que me prepare esas gotitas que me dio el año pasado para mi perro que le tiene terror a las tormentas y también a los petardos.

-La Fórmula Homeopática de Tormentas, ya se las preparo.

-Es la primera vez que paso unas navidades tranquila, sin ver a mi perro temblar como una hoja o drogado que se caía a cada paso, no sé qué tienen las gotas pero son mágicas. Pasó las fiestas lo más bien, sólo se sobresaltaba un poco con los petardos y venía a buscar mimos, que como usted me aconsejó no se los daba. Todo bien.

Esta conversación se repite mucho en estos días. Es que se viene el fin de año a pasos acelerados y hay que prepararse. Además parece que las tormentas fuertes están de moda y son muchos los animales que sufren de terror por estos acontecimientos.

Los perros presentan con bastante frecuencia un miedo irracional a los ruidos fuertes (truenos, petardos, golpes), la mayoría de los casos es un problema de difícil solución. Sea por genética (perros tímidos o muy sensibles), por una socialización deficiente o simplemente por algún susto por ruido, nuestro perro entra en pánico. En estas situaciones pierde el control, esto produce un estado emocional de bloqueo, donde no nos conoce, tiembla, quiere esconderse o huir desesperadamente, está totalmente fuera de sí. Los tratamientos convencionales, con tranquilizantes muchas veces no solucionan el problema e incluso lo empeoran por su efecto ataráxico y narcótico, muchos de ustedes ya pasaron por esa mala experiencia. La homeopatía junto con consejos sobre cómo manejarnos puede ayudar en algunos casos. El veterinario homeópata luego de un estudio profundo puede indicar un tratamiento individual que lo mejore. También se pueden usar fórmulas homeopáticas (FORMULA TORMENTAS) ya preparadas con un tropismo hacia esos miedos irracionales para tratar la urgencia y luego hacer el estudio individual. Es de destacar que algunos perros además tienen mucho miedo a las tormentas, al punto que las predicen, comienzan a esconderse y temblar antes que suene el primer trueno, con como meteorólogos y más preciso que los de la tele. Para esos casos también la homeopatía ayuda mucho. El animal tratado disminuye su ansiedad y su miedo paralizante y si bien continua con su ansiedad nerviosa, la pasa mucho mejor. Es importante en estos casos no mimarlos o acariciarlos, ni tampoco retarlos, ya que reforzaríamos su temor. La indiferencia y el tratar de cambiar su atención, con juguetes que les gusten mucho, como una pelota o poniendo música fuerte para tapar un poco los ruidos, son parte de nuestros consejos. Busquen a un buen veterinario homeópata o recurran a las gotitas de Tormenta para los días de fin de año o durante los truenos recordando que los remedios homeopáticos o funcionan por semejanza con nuestro perro (la mayoría de las veces) o a lo sumo no hacen nada. Son estímulos energéticos que se dan en forma de gotitas bebibles.

Salud y alegría. Hasta la próxima.
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