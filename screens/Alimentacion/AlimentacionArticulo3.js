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

class AlimentacionArticulo3 extends React.Component {

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
            <Title style={styles.textoBotones}>Macrobiótica</Title>
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
            source={{uri: 'http://www.convivirpress.com/wp-content/uploads/2018/02/macrobio-696x461.jpg'}} />
          

          <Text style={{ fontSize: 20, paddingLeft: 20, paddingTop: 20 }}>Macrobiótica: comer según las leyes de la naturaleza</Text>

          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30, paddingLeft: 20, paddingRight: 20, color: 'grey'}}>
            Al hablar de Macrobiótica, nos referimos a una enseñanza de aspecto global que busca el desarrollo del entendimiento humano considerada una técnica de evolución personal.
            Quien comenzó con este método fue el Japonés George Ohsawa, basándose en el antiguo principio único oriental (o principio del Ying y el Yang), el cual consideraba que era la base de la ciencia y de las filosofías y religiones. El principio del Ying y el Yang, en pocas palabras, supone la complementariedad de dos fuerzas, dos polos antagonistas pero inseparables que representan el UNO/A y el TODO y que son, como lo veía Ohsawa, el “Orden del Universo”.
            Por un lado, este hombre, utilizaba la palabra macrobiótica para nombrar el comportamiento que para él correspondía una actitud en acuerdo con las leyes de la naturaleza; para personas que desde la religión o intuitivamente persiguen sus sueños o consiguen vivir libremente en busca de ellos. Éste era, quizá el objetivo más profundo. De esta manera, para Ohsawa, son macrobióticas también, las medicinas que toman en cuenta la totalidad de la persona, queriendo sanar su enfermedad y no solamente los síntomas.
            A través de la macrobiótica pretendía demostrar que al aplicar este principio, se permite comprender y resolver los problemas de la existencia. Parece un poco mágico, ¿no? No resulta tan extra-ordinario cuando sabemos que su lugar práctico –y aquí a donde queremos llegar –reside en la alimentación. Para Ohsawa, comiendo según las leyes de la naturaleza, el organismo armoniza, equilibra, encuentra la salud, (primero física y luego mentalmente) y de esta manera se aclara y es capaz de percibir la realidad (las leyes de la naturaleza), con más precisión. En Oriente siempre se ha relacionado a la alimentación con la espiritualidad y con la salud. Ohsawa, pretendía unificar el pensamiento materialista occidental con el metafísico oriental, ya que consideraba que de esta manera se podrían resolver los conflictos de la humanidad. Y si bien su propuesta apuntaba más profundamente, a la búsqueda y el desarrollo del entendimiento humano y así poder interrogar y comprender de manera global la realidad que nos rodea, luego de su fallecimiento, la macrobiótica se presenta mayormente como un método alimenticio para una buena salud.
            La alimentación macrobiótica es la aplicación del principio nombrado anteriormente del Ying y el Yang. En el caso de la comida, según Ohsawa, el equilibrio se encuentra en la proporción de cinco Yin (sodio) por un Yang (potasio) y, entonces, la buena alimentación encontraría su lugar respetando esta proporción para que sea bien asimilada.
            Esta asimilación, que sucede en la descomposición de la digestión, busca con la macrobiótica que cada elemento molecular que sea introducido en la sangre alimente de manera positiva las células. De esta manera, si nos alejamos mucho de esa composición (5 sodio – 1 potasio), nuestro organismo necesitará más esfuerzo para realizar la digestión y a largo plazo, esta mala asimilación puede causarnos enfermedades.
            En la macrobiótica los alimentos se clasifican según estas dos categorías del principio único oriental y asimismo, caracteriza a ciertos alimentos como tóxicos para nuestro cuerpo en tanto pueden provocarnos angustias, agresividad, debilitación de la capacidad de concentración. Esto no quiere decir que estén prohibidos, puesto que la macrobiótica no desecha alimentos sino que propone organizarlos y listarlos según cada persona.
            Algunas actitudes latentes en esta enseñanza son: comer solo cuando se tiene hambre y la cantidad necesaria; alimentarnos con comida que proviene de la zona en la que vivimos y de la temporada en la que estamos; evitar comer muchas cosas con mucho sodio para fortificar el sistema nervioso; intentar alimentarnos con alimentos poco – o nada – manipulados, sobre todo en comidas carnicas; masticar meticulosamente cada bocado.
            Por otro lado, al momento de elegir nuestra alimentación, es primordial tomar real cuidado de qué es lo que nuestro cuerpo necesita y cuáles son nuestros objetivos: no comeremos lo mismo si vamos a realizar una actividad de gran esfuerzo físico que si haremos una sedentaria, o en nuestros primeros años de vida o en la adultez.
            Así, la macrobiótica propone ciertos alimentos que tienen en cuenta las especificidades de las personas:
            Cereales integrados: su equilibrio yin-yang es el que se aproxima más a nuestro organismo.
            Vegetales y productos animales: en estos casos, si se sigue una dieta vegetariana o no, lo importante es decidir qué tipo se consumen, qué cantidad, etc. dependiendo las necesidades de cada persona.
            Alimentos específicos: algas, derivados de la soja, té verde, ciruelas, etc. Son considerados “específicos” por sus cualidades medicinales.
            Entendemos así que la macrobiótica busca que tomemos real consciencia de nuestras necesidades para una vez que estemos en armonía, poder entender con mayor claridad al mundo que nos rodea. Y así, hacernos de esa sabiduría para nuestro bienestar. Un perfecto y armonioso círculo.
            Gisela Medrano
            CONVIVIR
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

export default AlimentacionArticulo3;