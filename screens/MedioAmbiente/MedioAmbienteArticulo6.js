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

class MedioAmbienteArticulo6 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/09/huerto-urbano-4-696x858.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Huerta urbana primaveral: Cultivo de plantas medicinales</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Si bien no tuvimos un invierno muy “invernal”, espero con ansias la llegada de la primavera. La época del año más deseada por los agricultores ya que se puede sembrar de todo, las plantas crecen con más fuerza y velocidad.

Para esta primavera quiero dedicar una buena porción de la huerta a las plantas medicinales. Para aquellos que todavía no están muy en tema hago una breve introducción:

¿Qué son las plantas medicinales?
El ser humano desde sus orígenes fue usando diferentes preparaciones y combinaciones de plantas como medicina. Muchos de los remedios que hoy podemos encontrar en la farmacia están basados en los principios activos de las plantas que se usaban en la antigüedad.

La fitoterapia es la forma más antigua de tratamiento de enfermedades, tanto que ni siquiera existen datos de cuando nació. Para darles una idea encontraron registro del uso de hierbas medicinales en papiros Egipcios que datan ser de 1500 AC.!!

Cada planta tiene infinidad de aplicaciones, hay algunas propiedades que resaltan en cada una de ellas.

¿Qué plantas medicinales podemos cultivar?
Hay una variedad súper grande de plantas medicinales que podemos tener en nuestra huerta urbana, es decir en contenedores (macetas, baldes, etc).

Voy a nombrar alguna de mis preferidas

Salvia: Nombre científico: Salvia Officinalis
Usos: Se usa esta planta para contrarrestar problemas del aparato digestivo y del aparato respiratorio. También se puede usar como desinfectante bucal, digestivo, diurético, hemostático, para tratar úlceras y llagas, entre otras.
Tiene propiedades medicinales antisépticas, estomáticas, antiespasmódicas, estimulantes, carminativas, vulnerarias y antisudoríficas.
Origen: Mediterráneo
Cultivo: Podemos sembrar las semillas en almácigos o en siembra directa al voleo. Siempre cuidando que queden debidamente cubiertas por sustrato. El momento ideal de siembra es a fines del invierno o principios de primavera.  El sustrato debe estar húmedo por lo que se recomienda chequear la humedad entre 2 y 3 veces a la semana.
Cosecha: Utilizamos las hojas, se recomienda recolectarlas durante primavera y verano. También podemos recolectar las flores cuando están abiertas. Se pueden utilizar tanto secas como frescas.

Manzanilla: Nombre científico: Matricaria Chamomilla L.
Usos: Su principal uso es el digestivo, y seguramente ya te hayas tomado algún té de manzanilla, es también conocida como sedante y antiinflamatoria. Es también Antimicrobiana, Calmante, elimina la retención de líquidos, combate los síntomas de la gripe, resfriados y otras afecciones leves, anti-diarreica, antitusiva.
Origen: Es originaria de Europa, aunque hoy en día la encontramos en diferentes países. Incluso en Argentina es muy probable que aparezca sola en las macetas.
Cultivo: Siembra directa al voleo en otoño, invierno y a principios de la primavera
Cosecha: Vamos a usar las flores, que cosecharemos durante la primavera y hasta mediados del verano. Si las queremos secar lo recomendable es que sea a la sombra y no guardas durante más de un año ya que pierden sus propiedades.

Llantén: Nombre científico: Plantago Mayor L.
Usos: Se usa principalmente en afecciones de las vías respiratorias. Sus hojas tienen una gran cantidad de mucílago, que es una especie de gel vegetal. (Algunos quizás lo escucharon nombrar gracias a la popularidad de las semillas de chía).
Las hojas y las semillas del llantén se usan como antibacteriano, astringente, antiséptico, antiinflamatorio, antitusivo, emoliente, diurético, expectorante, laxante y refrigerante. Puede utilizarse en forma de té o cataplasma.
Origen: Si bien la planta es originaria de Europa hoy la podemos encontrar como maleza en las calles de Buenos Aires.
Cultivo: La podemos sembrar durante todo el año, pero si la sembramos a principio de la primavera la planta va a tener mejores posibilidades de crecer hasta sus 30 cm de altura.
Las semillas se pueden sembrar al voleo, de forma directa o en almácigos, es una planta que le gusta la media sombra y soporta la falta de riego, pero no tolera el exceso de agua, por eso es muy importante que el contenedor tenga un buen drenaje.
Cosecha: Para mediados del verano vamos a tener una planta madura de la cual podemos empezar a cosechar algunas hojas, que podemos usar frescas o secarlas y guardarlas para usar más adelante.
Para recolectar las semillas esperamos que la varilla del tallo floral esté seco, y lo cortamos.

Menta: Nombre científico: Mentha x Piperita L.
Usos: Su principal uso es digestivo, pero tiene también propiedades antisépticas, antiinflamatorias, bactericidas, anti bronquitis, expectorantes y antiespasmódicas
Origen: Es de origen europeo, también podemos encontrarla en diferentes partes del mundo.
Cultivo: La menta crece por todos y no es raro verla tratando de escapar de su maceta. Por el la primera recomendación es que tenga su propio contenedor. Podemos conseguir semillas para sembrar pero recomiendo que corten un pedacito, haciendo un esqueje durante el fin del invierno o principios de la primavera.
Cosecha: Podemos cosechar sus hojas durante todo el año. Se pueden usar tanto frescas como secadas a la sombra.

Diente de León: Nombre científico: Taraxacum officinale
Usos: Es reconocida por ser depurativo para el hígado y por ser diurética. También es hepatoprotectora, previene la cistitis y la uretritis, combate la inapetencia o anorexia, suave laxante, acné, urticaria, psoriasis, cicatrización, varices, hemorroides, anemia, mejora la apariencia de piel y cabello.
Origen: Se cree que es de origen europeo. Actualmente está distribuida en todos los continentes. Acá en la ciudad de Buenos Aires la encontramos en cualquier cantero.
Cultivo: Siembra en directa al voleo en primavera, podemos cultivarla a pleno sol o media sombra. Le gusta el suelo húmedo por lo que se debe cuidar el riego en verano,
Cosecha: Podemos usar las hojas, las flores o la raíz. Para las hojas y las flores se recomienda la cosecha en primavera, las raíces en otoño.

Por Joy Sapoznik – Fundadora y Dir. de El Brote Urbano.
www.elbroteurbano.com
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

export default MedioAmbienteArticulo6;