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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/06/suen%CC%83os-696x392.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Marzo 17 – La vida es sueño</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Casi mudos nos miramos entre nosotros. Desconfiamos quizás del tiempo transcurrido. ¿Ya es? ¿Seguro son 25? ¿Festejamos entre nosotros o hacemos una gran fiesta? ¿Lo anunciamos en abril? (bueno, nadie dijo que seamos coherentes con nuestros dichos…). Sin más vueltas, 25 años cumple Convivir. Sí, ahora, con esta edición de Marzo. Entre paros, cortes, enojos, escuela… cumplimos. Como hemos cumplido todos los años entre mil dificultades y triunfos, así, como algo vivo que es.
Convivir ha nacido 275 ediciones. Acaso no es un sueño cumplido, en estos 25 años, el llegar en forma gratuita a miles de lectores con buenas noticias (aunque cueste), con información positiva para el mejoramiento humano… (Stop, algo me interrumpe, una imagen es, algo que me es familiar. Es que por primera vez me veo escribiendo a mano, en una hojita, en un bar… como lo hacía ella, mi madre; la imagen de Marta Fleischer se presenta escribiendo la editorial tal y como lo hacia ella, durante los 20 años que dirigió Convivir; a modo de guiño celeste, me veo y la veo, sintiendo su imborrable presencia en todo lo que hacemos. Amorosamente como segunda generación, cumpliendo 5 años en esta posición, siento que pudimos continuar los lineamientos de Convivir, recibiendo todo el aliento, el cariño y respeto que Convivir genera con su trabajo.
El destino nos puso aquí, un lugar de este lado de la hoja, un lugar donde jamás pensé estar o no tan pronto. Mi trabajo es hoy la dirección pero Convivir significa la unión de cientos de voluntades tirando para el mismo lado. Desde aquí el equipo de Convivir agradece a los columnistas, los profesionales, las empresas nos eligen, agradecemos la labor fundamental de difusión que realizan las distribuidoras y por supuesto a las dietéticas que nos reciben y apoyan, todos trabajando en pos de una mejor calidad de vida.
Hace 25 años este concepto era nuevo, y hoy mundialmente se busca implementar una vida más saludable, nuestro granito de arena se suma a las buenas voluntades de todos.

Y revisando viejos escritos encontré este, de Marta que nos gustaría compartir en este aniversario. Esperamos lo disfrutes:

“Con tantos contrastes y vaivenes como los que pasamos en estos días, la sensación que parecemos sentir es la de no entender dónde estamos parados. Y muchos, ante tantas adversidades de todo tipo, nos encontramos preguntándonos: ¿y ahora qué hago?, ¿hacia dónde voy?, ¿cómo salgo de esta?, ¿quién me ayuda? Son estos momentos en que tenemos que acudir a una gran reserva interna de fuerzas (para seguir adelante), y de fe (para seguir con optimismo). Porque, en tiempos como estos que vivimos, cómo podríamos mantenernos parados si no contáramos con una gran dosis de fuerza interior. Cómo podríamos afrontar los esfuerzos diarios, si no tuviéramos fe en que vamos a lograr los objetivos, fe en nosotros mismos. Muchas veces, cuando los padecimientos parecen superarnos, pensamos que ya no tenemos más fuerzas y que somos incapaces de continuar. Incluso nos preguntamos para qué continuar. Y nos sentimos débiles. Pero, pasan los días y continuamos viviendo. Renegamos, pero continuamos en la lucha. Por esto que nos pasa a todos, a quien más a quien menos, tendríamos que hacer un poco más por conocernos, para responder las preguntas y no sentirnos como si camináramos en el desierto. Para lograrlo, comencemos por atesorar todo lo que somos. Por ejemplo, darnos cuenta de que somos tenaces. Que fácilmente no nos desaniman. Que – aunque sea mínimamente- continuamos con nuestro camino. Y reconozcamos que tenemos grandes convicciones. Cada cual tendrá las suyas, pero son las convicciones que nos aferran a la vida y nos impulsan a alcanzar los pequeños o grandes triunfos diarios. También reconozcamos que somos dueños de una fuerte personalidad. Que por algo llegamos hasta aquí y no perecimos en el intento. Y que nuestros ideales, en definitiva, deben ser buenos. Y que somos agradecidos, con un agradecimiento que a la larga nos hará avanzar. Tenemos alguna dosis de sentido común, sentimientos de solidaridad… Sea poco o mucho lo que cada uno de nosotros tenga de estos ingredientes, lo cierto es que están. Porque si no los tuviéramos –en conjunto- ni siquiera un poquito, ya nos hubiéramos destruido por completo. Debe ser eso lo que nos salva como raza, y será lo que nos rescata como seres humanos. En conjunto somos confiables y capaces para seguir adelante con nuestras vidas.
A pesar de lo que se ve en la superficie, a pesar de los padecimientos y de las veces que queremos renunciar al género humano: valemos la pena. Somos los grandes luchadores del universo. No a la manera de un Rambo, con las pequeñas luchas diarias que son las que más engrandecen. La sabiduría popular nos aporta un dicho, justo y actual: “Es lo que hay.” Con eso no quiero significar que debemos contentarnos con lo que somos y quedarnos así estancados, sin avanzar.
Al contrario, creo que con esta base que poseemos, con esta buena pasta que mayoritariamente nos forma, tenemos la oportunidad (y la capacidad) de darnos cuenta que somos competentes para obrar el milagro de mejorar todo lo humanamente mejorable y superar cualquier dificultad. Marta Susana Fleischer”

Cecilia Andrada / Directora

Edición: Marzo 2017

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