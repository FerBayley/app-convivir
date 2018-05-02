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

class MedioAmbienteArticulo1 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/03/basura-cero-marzo-696x465.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>¿Cómo vivir de forma ecológica y no morir en el intento?</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          i sos de esas personas que se levantan preocupadas por las mañanas pensando ¿Qué clase de mundo le estamos dejando a las próximas generaciones? Te vengo a traer un pequeño consuelo. Hay una nueva tendencia en estilo de vida sustentable que nos permite aportar más que un granito de arena al cuidado ambiental.

Estoy hablando del Zero Waste Lifestyle, un concepto acuñado por Bea Johnson, autora del libro “Zero Waste Home”, en donde cuenta su experiencia sobre llevar una vida generando la menor cantidad de basura posible. Me imagino que estás pensado: Buenísimo, pero debe ser casi imposible. Pues lo imposible solo demora un poco más (¿Autor desconocido?)

Bien, enumeremos algunas pequeñas cositas que serán un gran cambio si cada uno de nosotros lo empezara a aplicar.

1. No te sobre exijas, cada día podes ir incorporando una cosita más hasta ir formando nuevos hábitos. Si querés hacer todo junto seguramente termines por mandar todo al diablo.

2. Analizá cual es la basura que estás generando. Durante este período que puede ser desde una semana o más, vamos a ir separando todo por un lado todo lo que sea orgánico, es decir restos de comidas (desde la cascara de papa hasta el arroz que queda en la bacha después de lavar los platos), lo vamos a ir guardando en la heladera en un tupper bien grande. (Para quienes no quieren guardarlo pueden sacarle una foto a la producción de cada día).

Por el otro lado, todo lo demás: vidrio, cartón, papel, aluminio, etc lo vamos a limpiar y dejar secar para ir guardándolo. Si estás fuera de tu casa, ya sea en la calle, trabajo o demás, no tires nada a la basura, guardalo.

3. Cumplida esa primera semana vamos a analizar la basura generada, recomiendo hacer una lista de las cosas que se fueron descartando. Entonces nos planteamos lo siguiente: ¿Qué cosas podría haber comprado sin envases? ¿Qué residuo es el que más generé? ¿Es vital para mi vida seguir consumiendo ese producto? ¿Con qué podría reemplazarlo que sea más sustentable?

Básicamente lo que hacemos en este paso es analizar las 5Rs: rechazar lo que no necesito, reducir lo que no puedo rechazar, reutilizar lo que no pude rechazar ni reducir, reciclar como última instancia y rot (es que las R’s las pensaron en inglés…) que sería compostar.

Mi recomendación es no abrumarse respecto a los cambios, sino hacerlo desde el amor y la positividad de encarar un cambio positivo para uno y el planeta. En el camino de generar menos basura vamos a encontrarnos con que nos alimentamos mejor, ya que los productos ultra procesados que tan mal hacen a nuestro organismo y que vienen en envases los vamos a ir reemplazando por alimentos naturales o caseros.

Por otro lado, para quienes no quieran preparar sus propios productos existe una inmensa red de pequeños productores independientes que ofrecen todo tipo de soluciones. Y no sé ustedes pero yo soy muchísimo más feliz sin la insoportable cola de la caja del supermercado 😉

Reciclar, un desafío barrial

Hoy en día en de la Ciudad de Buenos Aires existen varios puntos verdes donde se pueden llevar los residuos y en algunos barrios se encuentran los tachos verdes, muchos de ellos recolectados por cooperativas. Por suerte, tengo uno de estos tachos muy cerca de mi espacio de trabajo y en el edificio donde vivo pusieron los tachos para separar la basura.

Si es tu barrio o localidad todavía no se encuentran, deberías intentar contactarte con las autoridades locales para consultar si existe algún plan.

¿Qué tenemos que tener en cuenta a la hora de reciclar?

Idealmente todos los residuos deben estar limpios y secos. Aquellos que no les gusta lavar sepan que tan solo con enjuagarlos con agua es suficiente.

Para dudas sobre reciclaje les recomiendo googlear “Reciclario” un sitio web que explica cómo separar los residuos domésticos y qué cosas son reciclables o no en Argentina.

Compostaje, de la tierra venimos y hacia la tierra vamos

En este proceso vamos a convertir todos los desechos de materia orgánica en abono para plantas. La razón principal para hacerlo es que todos estos desechos en los basureros donde son desechados contaminan el suelo, las napas de agua y traen vectores de enfermedad, además afecta muy de cerca a la población con menos recursos que muchas veces viven sobre estos basureros o lo tienen enfrente de sus casas.

¿Cómo usar la compostera?

Al igual que una lasagna, la compostera se va armando por capas de lo que denominamos “material seco” y “material húmedo”. Las capas deben ser iguales entre sí. Cuando armamos la 

compostera por primera vez vos a inocular con bacterias, para eso voy poner una capa de tierra que tiene los microorganismos que van a ayudar a descomponer.

Es muy importante tapar la compostera para evitar que entre agua cuando llueve y para que no atraiga moscas u otros animales. La tapa no debe ser hermética, sino algo apoyado por encima.

Material Húmedo

Para no estar poniendo pequeñas capas todo el tiempo dentro de la compostera, recomendamos guardarlo en un tupper en la heladera, el mismo debe ser del volumen igual a 1 capa de nuestra compostera.

• Restos de la cocina (frutas, cáscaras, posos de café, bolsas de té, etc.)
• Restos de la cosecha o poda
• Estiércol de herbívoros (también mezclado con paja)
• Maleza (cuidado con las malas hierbas, muchas semillas aguantan el proceso)
• Yogures caducados, jugos caducados.
• Restos de infusiones: café, té, yerba mate.

Material Seco

• Cartón: rollo de cartón del papel higienico o del rollo de cocina, cartón de huevos, cajas de corrugado sirven pero son difíciles de cortar en pedacitos.
• Pelos de animales.
• Cortes de césped secos
• Restos de podas si tenemos un jardín
• Polvo que barremos del piso
• Hojas secas de plantas
• Servilletas de papel
• Hojas de diario
• Corcho
• Cáscaras secas como cebolla, ajo o maní

Conclusión:

En cierto punto, tirar las cosas a la basura es muy similar a esconder la mugre debajo de la alfombra: Puede ser que no la veas, pero sigue ahí. Creo que para construir un mundo mejor cada uno debe hacerse cargo de su parte y de su impacto, dejar de poner lo urgente por encima de lo importante y aportar al cambio.

Cualquier consulta que tengan pueden escribirme a joy@elbroteurbano.com, y si les interesa profundizar por el tema de compostaje voy a estar dando un taller Jueves 15 y 22 de Marzo de 19 a 21hs en Palermo, pueden encontrar toda la info de este o más talleres en:

www.elbroteurbano.com

Saludos!

Por Joy Sapoznik
Fundadora y directora de El Brote Urbano
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

export default MedioAmbienteArticulo1;