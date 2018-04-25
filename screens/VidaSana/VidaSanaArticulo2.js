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

class VidaSanaArticulo2 extends React.Component {

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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2017/08/vidas.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Señores de nuestras vidas</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
          Comienzo de un nuevo año, nuevas sueños y metas por cumplir y con ellos quedaron atrás los días de fiestas, reuniones y comidas ricas en grasa y llenas de calorías vacías. Así que, si en navidad tu alimentación fue pésima y quieres empezar este año nuevo con una alimentación saludable y poder eliminar todos los excesos consumidos en diciembre, aquí te explicamos cómo aprender a depurar tu organismo después de las fiestas y como potenciar al máximo tu salud y bienestar.

¿Cómo estás hoy? ¿Triste o contento? ¿Conforme con vos mismo, o no? ¿Estás a gusto en tu hogar? ¿Cómo te trata la vida?
Cada respuesta que vayas elaborando te irá mostrando donde estás parado.

Pero, sea cuales fueran las respuestas que diste, es importante que sepas que la vida es como una página en blanco, que está lista para que la escribamos cada día.

Si nos ponemos a pensar en ello nos damos cuenta que es tan increíble, tan maravillosa esa posibilidad que tenemos, que nos convierte en privilegiados. Porque, reflexionemos, ¿quién nos ata?, ¿quién nos impide realizar aquello que ansía nuestro ser?, ¿dónde están las cadenas?

Los tabúes, los impedimentos, están únicamente en lo que creemos. Si nos corremos un paso, si nos paramos de otra manera para contemplarnos, veremos que cambiando nuestra percepción de los hechos, cambia la realidad.
¿Estamos enfermos? ¿Somos pobres? ¿No tenemos quien nos ame?

Las vivencias que estamos pasando son el resultado de lo que consciente o inconscientemente planeamos antes.
Y lo mismo sucede a niveles más amplios. Ciudades, países, el planeta, se expresan conforme a como lo piensan quienes lo habitan.

Claro que es posible mejorar cualquier realidad. Para eso hace falta que se planifique cuidadosamente cada detalle de cómo queremos que esa realidad se manifieste.
Todo lo que vemos o vivimos es el resultado de un plan previo. Nada sucede por casualidad.

La forma como vamos tejiendo cada minuto del día desencadena lo que cosechamos al final de la jornada. Y esto es precisamente lo maravilloso. Lo que nos indica que siempre, en cualquier minuto de la vida en que nos encontremos, podremos cambiar lo que no nos satisface. Para ello hace falta empeño. Y que estemos atentos. Que nos convirtamos en los señores de nuestras vidas. Para que modifiquemos desde adentro, desde la misma concepción de los hechos, lo que no nos gusta, o nos hace mal. Sí, para que la vida sea tal como la queremos, tenemos que estar atentos. Ser nosotros mismos quienes la vivimos. Y no que los acontecimientos nos arrastren y nos dejemos llevar. Estar atentos para detectar lo que nos hace mal, lo que nos entorpece, lo que nos impide mostrarnos en todo nuestro esplendor. Porque cada uno de nosotros somos diamantes sin tallar. Y a la vez cada uno es el mejor de los talladores, que puede convertirse en el más extraordinario brillante. Por eso es que hay que estar atento. Vivir la vida de forma personal. Y cada minuto como si fuera el último. Aprovechándolo, “sacándole el jugo”. Nadie, ni el gobernante más poderoso, puede devolvernos 1 minuto de nuestra vida desaprovechado. Pensemos en ello. Y si no nos gustan como están las cosas, pongámonos a trabajar en este mismo instante, para mejorar todo lo mejorable. Sin miedos, porque no nos va a pasar nada malo si intentamos cambiar nuestra realidad. Somos los actores de la vida y estamos actuando constantemente. Representamos el papel que nosotros mismos elegimos. Y es tan maravillosa la vida que, no importa como estemos, con la sola voluntad puesta en ello, la podemos mejorar.

Marta Susana Fleischer

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

export default VidaSanaArticulo2;