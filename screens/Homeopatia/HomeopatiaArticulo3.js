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

class HomeopatiaArticulo3 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/09/gatos-cola-levantada-2-696x580.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Las señales del gato</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Los gatos son animales semi domesticados, conviven con el hombre desde la antigüedad, dicen que desde que se asentaron los primeros grupos y practicaron la agricultura. Junto con el acopio de granos vinieron las plagas y los gatos se encargaron de cuidar los granos cazando alimañas. En Egipto fueron sagrados. Hoy en día conviven con nosotros en nuestras casas, pero jamás perdieron su espíritu salvaje e independiente. Algunos etólogos piensan que tienen dos cerebros: el salvaje y el doméstico. Son como bipolares.  Muchos de los problemas que vemos a diario se deben a la falta de comunicación, a la ignorancia de los humanos en entenderlos. Un gato incomprendido es generalmente un gato estresado, ansioso, con problemas de comportamiento y enfermedades diversas: cistitis, diarreas, vómitos, dermatitis, etc.

Las señales que nos dan son muy importantes. Si maúllan en exceso es porque no comprendemos que es lo que quieren. El gato no para de maullar hasta que es comprendido y satisfecho su reclamo. Son muy pacientes y perseverantes: no paran hasta conseguir su objetivo.

Si el gato orina o defeca fuera de su bandeja, salvo que esta esté llena y sucia, probablemente nos está avisando que el tipo está ansioso y estresado. Algo le pasa.

Los gatos en general son auto limpiantes, el acicalamiento es parte de su rutina. Si era un gato limpito y de repente deja de lavarse, es una alarma que se enciende. Si es un gato que aumenta el lamerse para limpiarse y lo hace tanto que se lastima, si le salen granitos o pierde el pelo por el exceso de lamido. Es una señal de estrés.

Un gato feliz, es aquel que viene con la cola levantada, seguro de sí mismo, que se deja acariciar, que le gusta que lo cepillen diariamente, que se refriega contra nosotros dejando su huella de alegría que son las feromonas que elabora en las glándulas de su cara.

Un gato estresado, se esconde, tiene la cola baja, se acicala en exceso, deja de comer, orina por todos lados, tiene diarrea  o constipación.  Las causas del estrés pueden ser muy variadas: llegó otro gato u otro miembro de la familia: un bebé, sobrinos, novios, obreros, ruidos molestos, la muerte de otro animal, etc.  La agresividad de los gatos muchas veces se da por un mal manejo, por no respetar su intimidad, porque no tiene lugares seguros para esconderse, porque no le han enseñado a jugar y a interactuar con el medio desde chico, por exceso o mal uso del reto, etc.

Todas estas señales que nos da nuestro gato son alarmas que se encienden. Nos indican que algo anda mal y debemos consultar con un veterinario. Un etólogo o un homeópata son los más indicados, ya que el problema principal generalmente es emocional. Hay otras actitudes que tienen nuestros gatitos que son perfectamente normales aunque a nosotros viéndolos con ojos humanos nos parezcan extrañas. Hay que ponerse el chip de gato para entenderlos. Tomar agua de una canilla, jugar con el inodoro, salir corriendo como loco sin motivo aparente, refregarse contra nosotros o algunos lugares, hacer la mímica de tapar la comida, chuparnos la ropa y amasar con sus manitos, perseguir un rayito de luz reflejada, venir a despertarnos a las 6 de la mañana como invitándonos a jugar. Todo esto es sumamente curioso, parecería que nuestro gatito se volvió loco, pero en realidad visto desde su lugar es algo totalmente normal. Debemos informarnos, leer sobre su conducta, consultar con su veterinario de confianza sobre estas y otras actitudes. Debemos diferenciar cuales son normales y cuales son avisos de que algo está funcionando mal.

Les recuerdo que la homeopatía funciona perfectamente en los gatos, son muy sensibles a la energía de los remedios, incluso les gusta mucho tomarlos, tienen un poco de alcohol y parece que eso les agrada. Es maravilloso ver como con unos consejos de manejo y unas gotitas pueden cambiar totalmente en cuestión de días. La vida junto a un gato es toda una experiencia. Son totalmente diferentes a los perros, por lo tanto hay que tratarlos en forma diferente. “mientras los perros conviven con nosotros, los gatos nos dejan vivir con ellos” frase leída en un libro sobre gatos.

Hasta la próxima. Salud y alegría.


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

export default HomeopatiaArticulo3;